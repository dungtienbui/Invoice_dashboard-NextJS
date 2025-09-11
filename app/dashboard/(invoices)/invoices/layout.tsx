// app/dashboard/invoices/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Invoices",
    template: "%s | Invoices",
  },
  description:
    "Manage your invoices: browse, create, edit, and delete invoices in one place.",
};

export default function InvoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
