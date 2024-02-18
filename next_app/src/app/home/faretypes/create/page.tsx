import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import Form from '@/app/ui/home/faretypes/create-form';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Fare Types', href: '/home/faretypes' },
          {
            label: 'Create Fare Type',
            href: '/home/faretypes/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
