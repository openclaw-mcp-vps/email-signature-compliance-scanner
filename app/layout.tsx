import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignatureGuard – Email Signature Compliance Scanner",
  description: "Audit company email signatures for legal disclaimers, brand consistency, and regulatory compliance. Built for compliance officers and IT managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e63d5de8-8b33-4c94-8b2c-39f9e8707cc8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
