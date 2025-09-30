import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
  Column,
  Row,
} from "@react-email/components";
import * as React from "react";
import { QualityIncidentFormData } from "@/lib/schemas"; // Import the type for props

// Reusable styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
};
const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
  textAlign: "center" as const,
  color: "#484848",
};
const section = {
  padding: "0 48px",
};
const sectionTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#484848",
  borderBottom: "1px solid #f0f0f0",
  paddingBottom: "8px",
  marginBottom: "16px",
};
const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#484848",
  marginBottom: "2px",
};
const text = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#484848",
  margin: "0 0 16px",
};
const codeBox = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  borderRadius: "4px",
  fontFamily: "monospace",
  fontSize: "12px",
  wordBreak: "break-all" as const,
  marginTop: "8px",
};

interface QualityIncidentEmailProps {
  formData: QualityIncidentFormData;
  reportId: string;
  hash: string;
}

export const QualityIncidentEmail = ({
  formData,
  reportId,
  hash,
}: QualityIncidentEmailProps) => (
  <Html>
    <Head />
    <Preview>Nuevo Reporte de Incidencia de Calidad</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Heading style={heading}>Reporte de Incidencia de Calidad</Heading>

          {/* Section: Event Description */}
          <Text style={sectionTitle}>Descripción del Evento</Text>
          <Text style={label}>Información de Contacto:</Text>
          <Text style={text}>{formData.contactInfo}</Text>
          <Text style={label}>Descripción Detallada:</Text>
          <Text style={text}>{formData.eventDescription}</Text>
          <Row>
            <Column>
              <Text style={label}>Contacto con Paciente:</Text>
              <Text style={text}>{formData.patientContact}</Text>
            </Column>
            <Column>
              <Text style={label}>Cirugía Concluida:</Text>
              <Text style={text}>{formData.surgeryCompleted}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={label}>Procedimiento:</Text>
              <Text style={text}>{formData.procedure}</Text>
            </Column>
            <Column>
              <Text style={label}>Momento del Evento:</Text>
              <Text style={text}>{formData.eventTiming}</Text>
            </Column>
          </Row>
          <Text style={label}>Dispositivo Involucrado:</Text>
          <Text style={text}>{formData.deviceInfo}</Text>

          <Hr />

          {/* Section: Patient Information */}
          <Text style={sectionTitle}>Información del Paciente</Text>
          <Row>
            <Column>
              <Text style={label}>Iniciales:</Text>
              <Text style={text}>{formData.patientInitials}</Text>
            </Column>
            <Column>
              <Text style={label}>Edad:</Text>
              <Text style={text}>{formData.age}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={label}>Fecha de Nacimiento:</Text>
              <Text style={text}>{formData.dob}</Text>
            </Column>
            <Column>
              <Text style={label}>Sexo:</Text>
              <Text style={text}>{formData.sex}</Text>
            </Column>
          </Row>
          <Text style={label}>Historial Médico Relevante:</Text>
          <Text style={text}>{formData.medicalHistory}</Text>
          <Text style={label}>Impacto en el Paciente:</Text>
          <Text style={text}>{formData.patientImpact}</Text>

          <Hr />

          {/* Section: Intervention & Treatment */}
          <Text style={sectionTitle}>Intervención y Tratamiento</Text>
          <Text style={label}>¿Se Requirió Intervención Médica?:</Text>
          <Text style={text}>{formData.medicalInterventionRequired}</Text>
          {formData.medicalInterventionRequired === "SI" && (
            <>
              <Text style={label}>Detalles de la Intervención:</Text>
              <Text style={text}>{formData.interventionDetails}</Text>
              <Text style={label}>Diagnóstico:</Text>
              <Text style={text}>{formData.diagnosis}</Text>
              <Text style={label}>¿Fue Hospitalizado?:</Text>
              <Text style={text}>{formData.wasHospitalized}</Text>
            </>
          )}
          <Text style={label}>¿Se Prescribió Tratamiento?:</Text>
          <Text style={text}>{formData.treatmentPrescribed}</Text>
          {formData.treatmentPrescribed === "SI" && (
            <>
              <Text style={label}>Detalles del Tratamiento:</Text>
              <Text style={text}>{formData.treatmentDetails}</Text>
            </>
          )}

          <Hr />

          {/* Section: Status and Verification */}
          <Text style={sectionTitle}>Estado Final y Verificación</Text>
          <Text style={label}>Estado Actual del Paciente:</Text>
          <Text style={text}>{formData.patientStatus}</Text>
          <Text style={label}>ID de Referencia del Reporte:</Text>
          <div style={codeBox}>{reportId}</div>
          <Text style={label}>Hash de Verificación (Huella Digital):</Text>
          <div style={codeBox}>{hash}</div>
        </Section>
      </Container>
    </Body>
  </Html>
);
