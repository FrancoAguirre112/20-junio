import { z } from "zod";

// Schema for the "Get a Quote" form
export const QuoteFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "El nombre completo es obligatorio." }),
  phone: z.string().min(7, { message: "El teléfono es obligatorio." }),
  email: z
    .string()
    .email({ message: "Por favor, ingrese un correo válido." })
    .optional()
    .or(z.literal("")),
  institution: z.string().optional(),
  requestingProfessional: z.string().optional(),
  observations: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar el Aviso de Privacidad.",
  }),
});

// Schema for the "Integrity Report" form
export const IntegrityReportSchema = z.object({
  fullName: z.string().optional(),
  contactInfo: z.string().optional(),
  reportDescription: z
    .string()
    .min(10, { message: "La descripción del reporte es obligatoria." }),
});

// Schema for the "Quality Incident" form
export const QualityIncidentSchema = z.object({
  // Contact Info (Part 1)
  contactInfo: z
    .string()
    .min(1, { message: "Se requiere una forma de contacto." }),

  // Event Description (Part 2)
  eventDescription: z
    .string()
    .min(1, { message: "La descripción del evento es obligatoria." }),
  patientContact: z.enum(["SI", "NO"]),
  procedure: z.string().min(1, { message: "El procedimiento es obligatorio." }),
  eventTiming: z.enum(["ANTES", "DURANTE", "DESPUÉS"]),
  surgeryCompleted: z.enum(["SI", "NO"]),
  deviceInfo: z
    .string()
    .min(1, { message: "La información del dispositivo es obligatoria." }),

  // Patient Info (Part 3)
  patientInitials: z
    .string()
    .min(1, { message: "Las iniciales del paciente son obligatorias." }),
  age: z.string().min(1, { message: "La edad es obligatoria." }),
  dob: z.string().min(1, { message: "La fecha de nacimiento es obligatoria." }),
  sex: z.string().min(1, { message: "El sexo es obligatorio." }),
  medicalHistory: z
    .string()
    .min(1, { message: "El historial médico es obligatorio." }),
  patientImpact: z
    .string()
    .min(1, { message: "El impacto en el paciente es obligatorio." }),

  // Medical Intervention
  medicalInterventionRequired: z.enum(["SI", "NO"]),
  interventionDetails: z.string().optional(),
  diagnosis: z.string().optional(),
  wasHospitalized: z.string().optional(),

  // Treatment
  treatmentPrescribed: z.enum(["SI", "NO"]),
  treatmentDetails: z.string().optional(),

  // Patient Status
  patientStatus: z.enum([
    "Recuperado",
    "Recuperado con secuela",
    "Mejorando",
    "Inalterado",
    "Empeorando",
  ]),
});

// We'll also export the TypeScript types inferred from the schemas
export type QuoteFormData = z.infer<typeof QuoteFormSchema>;
export type IntegrityReportFormData = z.infer<typeof IntegrityReportSchema>;
export type QualityIncidentFormData = z.infer<typeof QualityIncidentSchema>;
