import nodemailer from 'nodemailer';

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const emailFrom = process.env.EMAIL_FROM || "";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendTwoFactorTokenEmail = async (email: string, token: string): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: emailFrom,
      to: email,
      subject: "2FA Code",
      html: `<p>Your 2FA code: ${token}</p>`,
    });
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email to ${email}: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email: string, token: string): Promise<void> => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  try {
    const info = await transporter.sendMail({
      from: emailFrom,
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
    });
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email to ${email}: ${error}`);
  }
};

export const sendVerificationEmail = async (email: string, token: string): Promise<void> => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  try {
    const info = await transporter.sendMail({
      from: emailFrom,
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email to ${email}: ${error}`);
  }
};
