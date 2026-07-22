// lib/db/schema.ts

import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const uuid = () => crypto.randomUUID();

export const cotizaciones = sqliteTable("cotizaciones", {
  id: text("id").primaryKey().$defaultFn(uuid),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  institution: text("institution"),
  requestingProfessional: text("requesting_professional"),
  observations: text("observations"),
  prescriptionFilePath: text("prescription_file_path"),
  ipAddress: text("ip_address"),
});

export const reportesIntegridad = sqliteTable("reportes_integridad", {
  id: text("id").primaryKey().$defaultFn(uuid),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  fullName: text("full_name"),
  contactInfo: text("contact_info"),
  reportDescription: text("report_description").notNull(),
  filePath: text("file_path"),
  ipAddress: text("ip_address"),
});

export const incidenciasCalidad = sqliteTable("incidencias_calidad", {
  id: text("id").primaryKey().$defaultFn(uuid),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  contactInfo: text("contact_info").notNull(),
  eventDescription: text("event_description").notNull(),
  patientContact: text("patient_contact"),
  procedure: text("procedure"),
  eventTiming: text("event_timing"),
  surgeryCompleted: text("surgery_completed"),
  deviceInfo: text("device_info"),
  patientInitials: text("patient_initials").notNull(),
  age: text("age"),
  dob: text("dob"),
  sex: text("sex").notNull(),
  medicalHistory: text("medical_history"),
  patientImpact: text("patient_impact").notNull(),
  medicalInterventionRequired: integer("medical_intervention_required", {
    mode: "boolean",
  }).notNull(),
  interventionDetails: text("intervention_details"),
  diagnosis: text("diagnosis"),
  wasHospitalized: text("was_hospitalized"),
  treatmentPrescribed: integer("treatment_prescribed", { mode: "boolean" }),
  treatmentDetails: text("treatment_details"),
  patientStatus: text("patient_status").notNull(),
  ipAddress: text("ip_address"),
});

export const reportAuditLog = sqliteTable("report_audit_log", {
  id: text("id").primaryKey().$defaultFn(uuid),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
  dataHash: text("data_hash").notNull(),
  reportIdIntegrity: text("report_id_integrity")
    .unique()
    .references(() => reportesIntegridad.id),
  reportIdQuality: text("report_id_quality")
    .unique()
    .references(() => incidenciasCalidad.id),
});
