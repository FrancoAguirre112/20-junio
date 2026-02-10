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
  Button,
  Link,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

// Define the props
interface IntegrityReportEmailProps {
  reportId: string;
  hash: string;
  fullName?: string;
  contactInfo?: string;
  reportDescription: string;
  hasAttachment: boolean;
}

// Styles
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
const text = {
  margin: "0 0 16px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#1a1a1a",
};
const label = {
  fontWeight: "bold",
  fontSize: "14px",
  marginBottom: "2px",
  display: "block",
  color: "#666",
  textTransform: "uppercase" as const,
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
const btnContainer = {
  textAlign: "center" as const,
  marginTop: "24px",
  marginBottom: "32px",
};
const button = {
  backgroundColor: "#0f172a", // Darker color for "Integrity/Serious" feel
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

export const IntegrityReportEmail = ({
  reportId,
  hash,
  fullName,
  contactInfo,
  hasAttachment,
}: IntegrityReportEmailProps) => {
  const reporter = fullName || "Anónimo";
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.20dejunio.com.ar";
  const verificationLink = `${baseUrl}/verificar?id=${reportId}`;

  return (
    <Html>
      <Head />
      <Preview>Confidencial: Nuevo Reporte de Integridad</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={heading}>Reporte en Canal de Integridad</Heading>
            <Text style={{ ...text, textAlign: "center", color: "#666" }}>
              Se ha registrado una nueva entrada en el sistema de gestión de
              ética.
            </Text>

            {/* PRIMARY ACTION */}
            <Section style={btnContainer}>
              <Button style={button} href={verificationLink}>
                Leer Reporte Confidencial
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
              Enlace directo: <br />
              <Link href={verificationLink} style={{ color: "#0f172a" }}>
                {verificationLink}
              </Link>
            </Text>

            <Hr />

            {/* SAFE METADATA ONLY */}
            <Text style={{ ...label, marginTop: "16px" }}>Reportado Por:</Text>
            <Text style={text}>{reporter}</Text>

            {contactInfo ? (
              <>
                <Text style={label}>Contacto Proporcionado:</Text>
                <Text style={text}>{contactInfo}</Text>
              </>
            ) : (
              <Text style={{ ...text, fontStyle: "italic", color: "#888" }}>
                El reportante no dejó datos de contacto.
              </Text>
            )}

            <Row>
              <Column>
                <Text style={label}>Adjuntos:</Text>
                <Text style={text}>
                  {hasAttachment ? "📎 Sí (Disponible en Dashboard)" : "No"}
                </Text>
              </Column>
            </Row>

            <Hr />

            {/* SECURITY NOTICE */}
            <Text
              style={{
                fontSize: "13px",
                color: "#666",
                fontStyle: "italic",
                marginBottom: "20px",
              }}
            >
              NOTA DE SEGURIDAD: El contenido detallado de la denuncia
              (descripción de los hechos) se ha omitido de este correo para
              preservar la confidencialidad y el anonimato durante el tránsito
              de la información. Por favor acceda al panel seguro para
              visualizar el contenido.
            </Text>

            <Text style={label}>ID de Referencia:</Text>
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

export default IntegrityReportEmail;
