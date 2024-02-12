import { getFareTypeById } from '@/app/lib/get-fares';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const fare = await getFareTypeById(id);
  if (!fare) {
    return <div>Not found</div>;
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Fare Types', href: '/home/faretypes' },
          {
            label: 'Edit Fare Types',
            href: `/home/faretypes/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <div>{id}</div>
        <div>{fare.name}</div>
        <div>{fare.from}</div>
        <div>{fare.to}</div>
      </Suspense>
    </main>
  );
}
