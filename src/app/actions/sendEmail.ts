"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Using Server");
  const message = formData.get("message");
  const senderEmail = formData.get("email");
  const senderName = formData.get("name");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid Message",
    };
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid Email",
    };
  }

  try {
    await resend.emails.send({
      from: `Portfolio <onboarding@resend.dev>`,
      to: "zachary.davies.dev@gmail.com",
      subject: `Message from ${senderName}`,
      reply_to: senderEmail,
      text: message,
    });
  } catch (error) {
    return {
      error: error,
    };
  }
};
