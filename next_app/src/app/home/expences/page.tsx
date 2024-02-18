import { getFares } from '@/app/lib/get-fares';
import PageTitle from '@/app/ui/common/page-title';
import { CreateExpence } from '@/app/ui/home/buttons';

export default async function Page() {
  const fares = await getFares();

  return (
    <main>
      <PageTitle>Expences</PageTitle>
      <div className="my-2 flex items-center justify-between gap-2">
        <CreateExpence />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {fares.map((fare) => (
          <div
            key={fare.templateName}
            className="flex h-full flex-col justify-stretch rounded-md border p-2 shadow-sm"
          >
            <h1 className="py-2 text-lg font-medium">{fare.templateName}</h1>
            {fare.fares.map((f) => (
              <div className="flex flex-row justify-between" key={f.id}>
                <div className="grow">
                  {f.fare.name}
                  {f.is_round_trip ? (
                    <span className="ml-1 rounded-full bg-indigo-600 px-2 align-text-top text-xs text-white">
                      往復
                    </span>
                  ) : null}
                </div>
                <div className="grow text-right">
                  {(
                    f.fare.fare.toNumber() * (f.is_round_trip ? 2 : 1)
                  ).toLocaleString('ja-JP', {
                    currency: 'JPY',
                    style: 'currency',
                  })}
                </div>
              </div>
            ))}
            <div className="flex grow items-end">
              <div className="w-full border-t text-right font-medium">
                {fare.fares
                  .map(
                    (f) => f.fare.fare.toNumber() * (f.is_round_trip ? 2 : 1),
                  )
                  .reduce((a, c) => a + c)
                  .toLocaleString('ja-JP', {
                    style: 'currency',
                    currency: 'JPY',
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
