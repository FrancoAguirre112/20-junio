"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { IntegrityReportFormData, IntegrityReportSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function IntegrityReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<IntegrityReportFormData>({
    resolver: zodResolver(IntegrityReportSchema),
    defaultValues: {
      fullName: "",
      contactInfo: "",
      reportDescription: "",
    },
  });

  async function onSubmit(data: IntegrityReportFormData) {
    setIsSubmitting(true);
    const formData = new FormData();
    const fileInput = document.getElementById("reportFile") as HTMLInputElement;

    if (fileInput?.files?.[0]) {
      formData.append("file", fileInput.files[0]);
    }
    formData.append("jsonData", JSON.stringify(data));

    try {
      const response = await fetch("/api/integrity-report", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      toast.success("Reporte enviado con éxito.");
      form.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nombre y apellido (Opcional, puede ser anónimo)
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email o teléfono (Opcional)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reportDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción del problema (Obligatorio)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Adjuntar archivo o foto (Opcional)</FormLabel>
          <FormControl>
            <Input id="reportFile" type="file" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-main-500 hover:bg-main-500/90 w-full text-white hover:cursor-pointer"
        >
          {isSubmitting ? "Enviando..." : "Enviar Reporte"}
        </Button>
      </form>
    </Form>
  );
}
