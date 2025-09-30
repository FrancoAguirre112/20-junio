import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

// Define the props the email component will accept
interface QuoteConfirmationEmailProps {
  fullName: string;
  phone: string;
  email?: string;
  institution?: string;
  observations?: string;
}

// Define some basic inline styles for email client compatibility
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
};
const text = {
  margin: "0 0 24px",
  fontSize: "16px",
  lineHeight: "24px",
};
const section = {
  padding: "0 48px",
};
const label = {
  fontWeight: "bold",
  marginBottom: "4px",
  display: "block",
};

// This is our main email component
export const QuoteConfirmationEmail = ({
  fullName,
  phone,
  email,
  institution,
  observations,
}: QuoteConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirmación de Solicitud de Cotización</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Heading style={heading}>Nueva Solicitud de Cotización</Heading>
          <Text style={text}>
            Se ha recibido una nueva solicitud de cotización a través del
            formulario web.
          </Text>

          <Text style={label}>Nombre Completo:</Text>
          <Text style={text}>{fullName}</Text>

          <Text style={label}>Teléfono:</Text>
          <Text style={text}>{phone}</Text>

          {email && (
            <>
              <Text style={label}>Email:</Text>
              <Text style={text}>{email}</Text>
            </>
          )}

          {institution && (
            <>
              <Text style={label}>Institución:</Text>
              <Text style={text}>{institution}</Text>
            </>
          )}

          {observations && (
            <>
              <Text style={label}>Observaciones:</Text>
              <Text style={text}>{observations}</Text>
            </>
          )}
        </Section>
      </Container>
    </Body>
  </Html>
);
