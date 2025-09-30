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
} from "@react-email/components";
import * as React from "react";

// Define the props the email component will accept
interface IntegrityReportEmailProps {
  reportId: string;
  hash: string;
  fullName?: string;
  contactInfo?: string;
  reportDescription: string;
  hasAttachment: boolean;
}

// Reusable styles (you can move these to a shared file later)
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
const text = {
  margin: "0 0 24px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#484848",
};
const section = {
  padding: "0 48px",
};
const label = {
  fontWeight: "bold",
  marginBottom: "4px",
  display: "block",
  color: "#484848",
};
const codeBox = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  borderRadius: "4px",
  fontFamily: "monospace",
  fontSize: "12px",
  wordBreak: "break-all" as const,
};

export const IntegrityReportEmail = ({
  reportId,
  hash,
  fullName,
  contactInfo,
  reportDescription,
  hasAttachment,
}: IntegrityReportEmailProps) => {
  const reporter = fullName || "Anónimo";

  return (
    <Html>
      <Head />
      <Preview>Nuevo Reporte en el Canal de Integridad</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={heading}>Nuevo Reporte de Integridad</Heading>
            <Text style={text}>
              Se ha recibido un nuevo reporte a través del Canal de Integridad y
              Gestión de No Conformidades.
            </Text>

            <Hr />

            <Text style={label}>Reportado Por:</Text>
            <Text style={text}>{reporter}</Text>

            {contactInfo && (
              <>
                <Text style={label}>Información de Contacto:</Text>
                <Text style={text}>{contactInfo}</Text>
              </>
            )}

            <Text style={label}>Descripción del Reporte:</Text>
            <Text style={text}>{reportDescription}</Text>

            <Text style={label}>¿Archivo Adjunto?</Text>
            <Text style={text}>
              {hasAttachment ? "Sí (ver en el sistema)" : "No"}
            </Text>

            <Hr />

            <Text style={label}>
              Datos de Verificación (Prueba de Integridad):
            </Text>
            <Text style={text}>ID de Referencia:</Text>
            <div style={codeBox}>{reportId}</div>

            <Text style={text}>Hash (Huella Digital):</Text>
            <div style={codeBox}>{hash}</div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
