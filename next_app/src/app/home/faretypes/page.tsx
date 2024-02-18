import PageTitle from '@/app/ui/common/page-title';
import { CreateFareType } from '@/app/ui/home/buttons';
import Table from '@/app/ui/home/faretypes/faretype-table';
import { Suspense } from 'react';
export default async function Page() {
  return (
    <main>
      <PageTitle>Fare Types</PageTitle>
      <div className="my-2 flex items-center justify-between gap-2">
        <CreateFareType />
      </div>
      <Suspense fallback={<FareTypesTableSkeleton />}>
        <Table />
      </Suspense>
    </main>
  );
}

export function FareTypesTableSkeleton() {
  return (
    <div className="flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg md:pt-0">
          <div className="flex flex-col gap-2 md:hidden">
            <FareTypesMobileSkeleton />
            <FareTypesMobileSkeleton />
            <FareTypesMobileSkeleton />
            <FareTypesMobileSkeleton />
            <FareTypesMobileSkeleton />
            <FareTypesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg border-b text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-2 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-2 font-medium">
                  From
                </th>
                <th scope="col" className="px-3 py-2 font-medium">
                  To
                </th>
                <th scope="col" className="px-3 py-2 font-medium">
                  Fare
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function FareTypesMobileSkeleton() {
  return (
    <div className="rounded-md border p-2">
      <div className="mb-2 h-5 w-20 rounded-full bg-gray-200" />
      <div className="mb-2 grid grid-cols-2">
        <div className="flex flex-col">
          <div className="text-sm font-medium">From</div>
          <div className="h-5 w-14 rounded-full bg-gray-200" />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium">To</div>
          <div className="h-5 w-14 rounded-full bg-gray-200" />
        </div>
      </div>
      <div className="flex flex-row items-center border-t pt-2 font-bold">
        <div className="mr-2 h-5 w-16 rounded-full bg-gray-200 pt-2" />
        <div className="grow" />
        <div className="h-5 w-14 rounded-sm bg-gray-200 px-2 py-1" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Name */}
      <td className="whitespace-nowrap px-3 py-2">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* From */}
      <td className="whitespace-nowrap px-3 py-2">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* To */}
      <td className="whitespace-nowrap px-3 py-2">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Fare */}
      <td className="whitespace-nowrap px-3 py-2">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
