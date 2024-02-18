import { getFareTypes } from '@/app/lib/get-fares';
import Link from 'next/link';

export default async function Table() {
  const fareTypes = await getFareTypes();
  return (
    <>
      {/* For larger device */}
      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="border-b px-4 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="border-b px-4 py-3 font-medium">
              From
            </th>
            <th scope="col" className="border-b px-4 py-3 font-medium">
              To
            </th>
            <th scope="col" className="border-b px-4 py-3 font-medium">
              Fare
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {fareTypes.map((f) => (
            <TableRow key={f.id}>
              <TableCell>
                <Link href={`/home/faretypes/${f.id}/edit`}>{f.name}</Link>
              </TableCell>
              <TableCell>{f.from}</TableCell>
              <TableCell>{f.to}</TableCell>
              <TableCell>
                {f.fare.toLocaleString('ja-JP', {
                  style: 'currency',
                  currency: 'JPY',
                })}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
      {/* For smart phone */}
      <div className="flex flex-col gap-1 md:hidden">
        {fareTypes.map((fare) => (
          <div key={fare.id} className="rounded-md border p-2">
            <div className="mb-2">{fare.name}</div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <div className="text-sm font-medium">From</div>
                <div>{fare.from}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-medium">To</div>
                <div>{fare.to}</div>
              </div>
            </div>
            <div className="flex flex-row items-center border-t pt-2 font-bold">
              <div className="grow">
                {fare.fare.toLocaleString('ja-JP', {
                  style: 'currency',
                  currency: 'JPY',
                })}
              </div>
              <Link
                className="rounded-sm bg-blue-500 px-2 py-1 font-bold text-white"
                href={`/home/faretypes/${fare.id}/edit`}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="w-full border-b py-2 text-sm last-of-type:border-none">
      {children}
    </tr>
  );
}

function TableCell({ children }: { children?: React.ReactNode }) {
  return <td className="whitespace-nowrap px-3 py-2">{children}</td>;
}
