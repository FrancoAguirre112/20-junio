"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"; // Importado correctamente

import { QuoteFormData, QuoteFormSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

export function QuoteForm() {
  const { executeRecaptcha } = useGoogleReCaptcha(); // LLAMADA CORRECTA: Al nivel superior
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      institution: "",
      requestingProfessional: "",
      observations: "",
      consent: false,
    },
  });

  async function onSubmit(data: QuoteFormData) {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA no está listo. Intente de nuevo.");
      return;
    }

    setIsSubmitting(true);
    toast.info("Enviando solicitud...");

    try {
      // 1. Obtener Token
      const gReCaptchaToken = await executeRecaptcha("quote_submit");

      // 2. Preparar FormData para enviar Archivo + JSON
      const formData = new FormData();
      const fileInput = document.getElementById(
        "prescriptionFile",
      ) as HTMLInputElement;

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        formData.append("file", fileInput.files[0]);
      }

      // 3. Incluir el Token DENTRO del JSON para que el API lo encuentre
      formData.append("jsonData", JSON.stringify({ ...data, gReCaptchaToken }));

      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData, // SE ENVÍA EL FORMDATA COMPLETO
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Algo salió mal");
      }

      toast.success("¡Consulta enviada con éxito!");
      form.reset();
    } catch (error) {
      toast.error(
        `Error: ${error instanceof Error ? error.message : "Error desconocido"}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Info */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre y apellido completo (Obligatorio)</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (Obligatorio)</FormLabel>
              <FormControl>
                <Input placeholder="+54 9 11 1234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Institution Info */}
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institución (Opcional)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Prescription Upload */}
        <FormItem>
          <FormLabel>Receta médica (Opcional, PDF o JPG)</FormLabel>
          <FormControl>
            <Input id="prescriptionFile" type="file" accept=".pdf,.jpg,.jpeg" />
          </FormControl>
          <FormMessage />
        </FormItem>

        {/* Observations */}
        <FormField
          control={form.control}
          name="observations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observaciones (Opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cualquier información adicional..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Consent */}
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  <p>
                    {" "}
                    {/* Wrap the sentence in a <p> tag */}
                    Declaro haber leído y comprendido el{" "}
                    <Link
                      href="/aviso-de-privacidad"
                      className="text-sky-600 hover:text-sky-700 underline"
                    >
                      Aviso de Privacidad
                    </Link>{" "}
                    y acepto el tratamiento de mis datos.
                  </p>
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-main-500 hover:bg-main-500/90 w-full text-white hover:cursor-pointer"
        >
          {isSubmitting ? "Enviando..." : "Obtener Cotización"}
        </Button>
      </form>
    </Form>
  );
}
