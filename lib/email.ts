import { Resend } from "resend";
import * as React from "react";

// This file is for SERVER-SIDE use only.

// Instantiate the Resend client with the API key from our environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// The `from` address must be from a domain you have verified in your Resend account.
const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev"; // Replace with a default or get from .env

interface SendEmailParams {
  to: string;
  subject: string;
  react: React.ReactElement; // The email template as a React component
}

/**
 * A reusable function to send emails using Resend.
 * @param {SendEmailParams} params - The email parameters.
 */
export const sendEmail = async ({ to, subject, react }: SendEmailParams) => {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Email not sent.");
    // In development, you might not want to throw an error, just log it.
    // In production, you should probably throw.
    return { error: { message: "Email server is not configured." } };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `20 de Junio <${fromEmail}>`, // Example: "Your App <noreply@yourdomain.com>"
      to: [to],
      subject,
      react, // This is where the magic happens - Resend renders our React component
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
