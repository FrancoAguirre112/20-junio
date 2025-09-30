"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { QualityIncidentFormData, QualityIncidentSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function QualityIncidentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QualityIncidentFormData>({
    resolver: zodResolver(QualityIncidentSchema),
    defaultValues: {
      contactInfo: "",
      eventDescription: "",
      patientContact: "SI",
      procedure: "",
      eventTiming: "DURANTE",
      surgeryCompleted: "SI",
      deviceInfo: "",
      patientInitials: "",
      age: "",
      dob: "",
      sex: "",
      medicalHistory: "",
      patientImpact: "",
      medicalInterventionRequired: "NO",
      interventionDetails: "",
      diagnosis: "",
      wasHospitalized: "",
      treatmentPrescribed: "NO",
      treatmentDetails: "",
      patientStatus: "Mejorando",
    },
  });

  const medicalInterventionRequired = form.watch("medicalInterventionRequired");
  const treatmentPrescribed = form.watch("treatmentPrescribed");

  async function onSubmit(data: QualityIncidentFormData) {
    setIsSubmitting(true);
    toast.info("Enviando incidencia...");

    try {
      const response = await fetch("/api/quality-incident", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Algo salió mal");
      }

      toast.success("Incidencia de calidad enviada con éxito.", {
        description: (
          <div className="text-xs">
            <p>ID de Referencia: {result.data.reportId}</p>
            <p>Hash de Verificación: {result.data.hash.substring(0, 20)}...</p>
          </div>
        ),
      });
      form.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocurrió un error desconocido.";
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        {/* Section 1: Contact Info */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b font-semibold text-xl">
            Información de Contacto
          </h3>
          <FormField
            control={form.control}
            name="contactInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Forma de contacto (Email o teléfono, obligatorio)
                </FormLabel>
                <FormControl>
                  <Input placeholder="Su email o teléfono" {...field} />
                </FormControl>
                <FormDescription>
                  Necesario para un posible seguimiento.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section 2: Event Description */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b font-semibold text-xl">
            Descripción del Evento
          </h3>
          <p className="text-muted-foreground text-sm">
            {'Si no conoce una respuesta, por favor escriba "SIN INFORMACIÓN".'}
          </p>

          <FormField
            control={form.control}
            name="eventDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción detallada del evento</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ej: Al desplegar la lente se enganchó una háptica..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Hubo contacto del producto reclamado con el paciente?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="SI" />
                      </FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="NO" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="procedure"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál fue el procedimiento programado?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventTiming"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuándo ocurrió el evento?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="ANTES" />
                      </FormControl>
                      <FormLabel className="font-normal">Antes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="DURANTE" />
                      </FormControl>
                      <FormLabel className="font-normal">Durante</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="DESPUÉS" />
                      </FormControl>
                      <FormLabel className="font-normal">Después</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surgeryCompleted"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Se concluyó la cirugía el mismo día?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="SI" />
                      </FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="NO" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deviceInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Tipo de dispositivos involucrado (indicar modelo, código,
                  numero de serie)
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section 3: Patient Information */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b font-semibold text-xl">
            Información del Paciente
          </h3>
          <FormField
            control={form.control}
            name="patientInitials"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identificador del paciente (iniciales)</FormLabel>
                <FormControl>
                  <Input placeholder="J.D." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Edad</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de Nacimiento</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicalHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Cualquier historial médico relevante (ej: pruebas, condiciones
                  preexistentes)
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientImpact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Hubo daño o impacto en el paciente? ¿Cuál?
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Section 4: Medical Intervention */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b font-semibold text-xl">
            Intervención Médica
          </h3>
          <FormField
            control={form.control}
            name="medicalInterventionRequired"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Se requirió intervención médica?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="SI" />
                      </FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="NO" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {medicalInterventionRequired === "SI" && (
            <div className="space-y-4 pl-4 border-l-2">
              <FormField
                control={form.control}
                name="interventionDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Qué intervención médica se realizó?</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="diagnosis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Cuál fue el diagnóstico?</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wasHospitalized"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Fue hospitalizado el paciente?</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        {/* Section 5: Treatment */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b font-semibold text-xl">Tratamiento</h3>
          <FormField
            control={form.control}
            name="treatmentPrescribed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Se prescribió el tratamiento?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="SI" />
                      </FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="NO" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {treatmentPrescribed === "SI" && (
            <div className="space-y-4 pl-4 border-l-2">
              <FormField
                control={form.control}
                name="treatmentDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de tratamiento y dosificación</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        {/* Section 6: Current Status */}
        <div className="space-y-4">
          <h3 className="pb-2 border-b font-semibold text-xl">
            Estado Actual del Paciente
          </h3>
          <FormField
            control={form.control}
            name="patientStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Cómo se encuentra el paciente en este momento?
                </FormLabel>
                {/* CORRECTED STRUCTURE IS HERE */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un estado" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Recuperado">Recuperado</SelectItem>
                    <SelectItem value="Recuperado con secuela">
                      Recuperado con secuela
                    </SelectItem>
                    <SelectItem value="Mejorando">Mejorando</SelectItem>
                    <SelectItem value="Inalterado">Inalterado</SelectItem>
                    <SelectItem value="Empeorando">Empeorando</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="p-6 w-full text-lg"
        >
          {isSubmitting ? "Enviando..." : "Enviar Reporte de Incidencia"}
        </Button>
      </form>
    </Form>
  );
}
