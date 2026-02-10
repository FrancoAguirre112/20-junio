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
  Button, // 1. Import Button
  Link, // 2. Import Link
} from "@react-email/components";
import * as React from "react";
import { QualityIncidentFormData } from "@/lib/schemas";

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
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "32px",
  textAlign: "center" as const,
  color: "#1a1a1a",
};
const section = {
  padding: "0 48px",
};
const sectionTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#484848",
  borderBottom: "1px solid #f0f0f0",
  paddingBottom: "8px",
  marginBottom: "16px",
  marginTop: "24px",
};
const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#666",
  marginBottom: "2px",
  textTransform: "uppercase" as const,
};
const text = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#1a1a1a",
  margin: "0 0 16px",
};
const codeBox = {
  backgroundColor: "#f0f0f0",
  padding: "12px",
  borderRadius: "6px",
  fontFamily: "monospace",
  fontSize: "14px",
  fontWeight: "bold" as const,
  wordBreak: "break-all" as const,
  marginTop: "8px",
  textAlign: "center" as const,
  letterSpacing: "1px",
};

// New Button Styles
const btnContainer = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
};
const button = {
  backgroundColor: "#2563eb", // Main-500 equivalent
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
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
}: QualityIncidentEmailProps) => {
  // 3. Define the secure link
  // Use environment variable or fallback to your domain
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.20dejunio.com.ar";
  const verificationLink = `${baseUrl}/verificar?id=${reportId}`;

  return (
    <Html>
      <Head />
      <Preview>Acción Requerida: Reporte {reportId.substring(0, 8)}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={heading}>Incidencia de Calidad Registrada</Heading>

            <Text style={{ ...text, textAlign: "center", color: "#666" }}>
              Se ha recibido un nuevo reporte en el sistema seguro.
            </Text>

            {/* PRIMARY CALL TO ACTION */}
            <Section style={btnContainer}>
              <Button style={button} href={verificationLink}>
                Ver Detalles Completos y Validar
              </Button>
            </Section>
            <Text
              style={{
                ...text,
                fontSize: "12px",
                color: "#888",
                textAlign: "center",
              }}
            >
              Si el botón no funciona, copie este enlace: <br />
              <Link href={verificationLink} style={{ color: "#2563eb" }}>
                {verificationLink}
              </Link>
            </Text>

            <Hr />

            {/* SAFE SUMMARY (No Patient Data) */}
            <Text style={sectionTitle}>Resumen Operativo</Text>

            <Row>
              <Column>
                <Text style={label}>Reportado Por:</Text>
                <Text style={text}>{formData.contactInfo}</Text>
              </Column>
            </Row>

            <Text style={label}>Dispositivo Involucrado:</Text>
            <Text style={text}>{formData.deviceInfo}</Text>

            <Text style={label}>Evento (Breve):</Text>
            <Text style={text}>
              {/* Truncate description for email security if it's very long */}
              {formData.eventDescription.length > 100
                ? formData.eventDescription.substring(0, 100) + "..."
                : formData.eventDescription}
            </Text>

            <Text style={label}>Momento:</Text>
            <Text style={text}>{formData.eventTiming}</Text>

            <Hr />

            {/* SECURITY FOOTER */}
            <Text style={sectionTitle}>Seguridad y Auditoría</Text>
            <Text
              style={{ fontSize: "13px", color: "#666", fontStyle: "italic" }}
            >
              Por razones de seguridad y cumplimiento de la Ley 25.326, los
              datos sensibles del paciente (historial, diagnóstico, iniciales)
              no se incluyen en este correo. Utilice el botón superior para
              acceder a la información completa en el panel seguro.
            </Text>

            <Text style={label}>ID del Reporte:</Text>
            <div style={codeBox}>{reportId}</div>

            <Text style={label}>Hash de Integridad:</Text>
            <div style={{ ...codeBox, fontSize: "10px", color: "#666" }}>
              {hash}
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default QualityIncidentEmail;
