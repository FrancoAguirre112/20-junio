import { Resend } from "resend";
import * as React from "react";

// This file is for SERVER-SIDE use only.

// Instantiate the Resend client with the API key from our environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// The `from` address must be from a domain you have verified in your Resend account.
// Configured to default to info@20dejunio.com.ar if the env var is missing
const fromEmail = process.env.FROM_EMAIL || "info@20dejunio.com.ar";

interface SendEmailParams {
  to: string | string[]; // UPDATED: Accepts a single string or an array of strings
  subject: string;
  react: React.ReactElement;
}

/**
 * A reusable function to send emails using Resend.
 * @param {SendEmailParams} params - The email parameters.
 */
export const sendEmail = async ({ to, subject, react }: SendEmailParams) => {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Email not sent.");
    return { error: { message: "Email server is not configured." } };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `20 de Junio <${fromEmail}>`,
      to: to, // UPDATED: Resend accepts string or string[], so we pass it directly
      subject,
      react,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { error };
    }

    console.log("Email sent successfully:", data);
    return { data };
  } catch (error) {
    console.error("An unexpected error occurred while sending email:", error);
    return { error: { message: "An unexpected error occurred." } };
  }
};
