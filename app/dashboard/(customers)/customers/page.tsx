import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: 'Customers', template: '%s | Customer' },
};

export default function Page() {
  return <p>Customers Page</p>;
}