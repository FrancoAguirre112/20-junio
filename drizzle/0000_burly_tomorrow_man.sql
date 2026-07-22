CREATE TABLE `cotizaciones` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`full_name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text,
	`institution` text,
	`requesting_professional` text,
	`observations` text,
	`prescription_file_path` text,
	`ip_address` text
);
--> statement-breakpoint
CREATE TABLE `incidencias_calidad` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`contact_info` text NOT NULL,
	`event_description` text NOT NULL,
	`patient_contact` text,
	`procedure` text,
	`event_timing` text,
	`surgery_completed` text,
	`device_info` text,
	`patient_initials` text NOT NULL,
	`age` text,
	`dob` text,
	`sex` text NOT NULL,
	`medical_history` text,
	`patient_impact` text NOT NULL,
	`medical_intervention_required` integer NOT NULL,
	`intervention_details` text,
	`diagnosis` text,
	`was_hospitalized` text,
	`treatment_prescribed` integer,
	`treatment_details` text,
	`patient_status` text NOT NULL,
	`ip_address` text
);
--> statement-breakpoint
CREATE TABLE `report_audit_log` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`data_hash` text NOT NULL,
	`report_id_integrity` text,
	`report_id_quality` text,
	FOREIGN KEY (`report_id_integrity`) REFERENCES `reportes_integridad`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`report_id_quality`) REFERENCES `incidencias_calidad`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `report_audit_log_report_id_integrity_unique` ON `report_audit_log` (`report_id_integrity`);--> statement-breakpoint
CREATE UNIQUE INDEX `report_audit_log_report_id_quality_unique` ON `report_audit_log` (`report_id_quality`);--> statement-breakpoint
CREATE TABLE `reportes_integridad` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`full_name` text,
	`contact_info` text,
	`report_description` text NOT NULL,
	`file_path` text,
	`ip_address` text
);
