import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

import { Suspense } from 'react';
import { InvoiceFormSkeletion } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Create Invoice',
  description: 'The create invoice page allows you to create a new invoice.'
};

export default function Page() {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Suspense fallback={<InvoiceFormSkeletion formType={'create'} />}>
        <InvoiceForm />
      </Suspense>
    </main>
  );
}

async function InvoiceForm() {

  // await waitSomeTime(1000);

  const customers = await fetchCustomers();

  return (
    <Form customers={customers} />
  )
}

async function waitSomeTime(timeInMili: number) {
  return await new Promise((resolve) => setTimeout(resolve, timeInMili));
}