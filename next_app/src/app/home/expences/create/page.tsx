import { getFareTypes } from '@/app/lib/get-fares';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import Form from '@/app/ui/home/expences/create-form';

export default async function Page() {
  const fareTypes = await getFareTypes();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Expences', href: '/home/expences' },
          {
            label: 'Create Expence',
            href: '/home/expences/create',
            active: true,
          },
        ]}
      />
      <Form fareTypes={fareTypes} />
    </main>
  );
}
