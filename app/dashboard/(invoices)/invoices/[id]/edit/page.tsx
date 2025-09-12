import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { InvoiceFormSkeletion } from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Edit Invoice',
    description: 'The edit invoice page allows you to edit a selected invoice.'
};

export default async function Page(props: { params: Promise<{ id: string }> }) {

    const id = (await props.params).id;

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Suspense key={id} fallback={<InvoiceFormSkeletion formType={'edit'} />}>
                <EditInvoiceFormById id={id} />
            </Suspense>
        </main>
    );
}


async function EditInvoiceFormById({ id }: { id: string }) {

    // await waitSomeTime(1000);

    const [
        invoice,
        customers
    ] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ]);

    if (!invoice) {
        notFound();
    }


    return (
        <Form invoice={invoice} customers={customers} />
    )
}

async function waitSomeTime(timeInMili: number) {
  return await new Promise((resolve) => setTimeout(resolve, timeInMili));
}