import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// Define the props your component accepts
interface QuoteConfirmationEmailProps {
  fullName: string;
  phone: string;
  email?: string;
  institution?: string;
  observations?: string;
  fileUrl?: string; // <-- NEW PROP (make it optional)
}

// Your company's base URL (for the logo)
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const QuoteConfirmationEmail = ({
  fullName,
  phone,
  email,
  institution,
  observations,
  fileUrl, // <-- Destructure the new prop
}: QuoteConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nueva Solicitud de Cotización: {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* You can add your logo here */}
          {/* <Img src={`${baseUrl}/logo.png`} width="150" alt="Logo" /> */}

          <Heading style={heading}>Nueva Solicitud de Cotización</Heading>

          <Text style={paragraph}>
            Se ha recibido una nueva solicitud de cotización a través del
            formulario web.
          </Text>

          <Section style={infoSection}>
            <Text style={label}>Nombre Completo:</Text>
            <Text style={value}>{fullName}</Text>

            <Text style={label}>Teléfono:</Text>
            <Text style={value}>{phone}</Text>

            <Text style={label}>Email:</Text>
            <Link href={`mailto:${email}`} style={value}>
              {email}
            </Link>

            <Text style={label}>Institución:</Text>
            <Text style={value}>{institution || "No especificada"}</Text>

            <Text style={label}>Observaciones:</Text>
            <Text style={value}>{observations || "Sin observaciones"}</Text>

            {/* --- NEW SECTION TO ADD --- */}
            {/* This will only appear if a file was uploaded */}
            {fileUrl && (
              <>
                <Text style={label}>Receta Adjunta:</Text>
                <Link href={fileUrl} style={link}>
                  Ver Archivo Adjunto
                </Link>
              </>
            )}
            {/* --- END OF NEW SECTION --- */}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default QuoteConfirmationEmail;

// --- STYLES --- (You can customize these)
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "20px",
  color: "#333",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555",
};

const infoSection = {
  backgroundColor: "#f9f9f9",
  border: "1px solid #eee",
  borderRadius: "5px",
  padding: "20px",
  marginTop: "20px",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
  margin: "0",
};

const value = {
  fontSize: "16px",
  color: "#555",
  marginTop: "4px",
  marginBottom: "16px",
  lineHeight: "24px",
};

const link = {
  fontSize: "16px",
  color: "#007bff", // Standard link color
  textDecoration: "underline",
};
