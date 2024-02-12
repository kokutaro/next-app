import PageTitle from '@/app/ui/common/page-title';
import React from 'react';

export default function Page() {
  return (
    <main>
      <PageTitle>Home</PageTitle>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-full rounded-md border p-2 shadow-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          numquam distinctio obcaecati accusamus vero dolor iure consequuntur
          laboriosam quae ipsam! Ea debitis ipsum porro modi! Provident
          laudantium amet neque porro?
        </div>
        <div className="h-full rounded-md border p-2 shadow-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          numquam distinctio obcaecati accusamus vero dolor iure consequuntur
          laboriosam quae ipsam! Ea debitis ipsum porro modi! Provident
          laudantium amet neque porro? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolore numquam distinctio obcaecati accusamus vero
          dolor iure consequuntur laboriosam quae ipsam! Ea debitis ipsum porro
          modi! Provident laudantium amet neque porro?
        </div>
        <div className="h-full rounded-md border p-2 shadow-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          numquam distinctio obcaecati accusamus vero dolor iure consequuntur
          laboriosam quae ipsam! Ea debitis ipsum porro modi! Provident
          laudantium amet neque porro?
        </div>
        <div className="h-full rounded-md border p-2 shadow-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          numquam distinctio obcaecati accusamus vero dolor iure consequuntur
          laboriosam quae ipsam! Ea debitis ipsum porro modi! Provident
          laudantium amet neque porro?
        </div>
        <div className="h-full rounded-md border p-2 shadow-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          numquam distinctio obcaecati accusamus vero dolor iure consequuntur
          laboriosam quae ipsam! Ea debitis ipsum porro modi! Provident
          laudantium amet neque porro?
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50">
            <div className="md:hidden">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="mb-2 w-full rounded-md border bg-white p-2"
                >
                  <p>{`Item ${i}-1`}</p>
                  <p>{`Item ${i}-1`}</p>
                  <p>{`Item ${i}-1`}</p>
                  <p>{`Item ${i}-1`}</p>
                  <p>{`Item ${i}-1`}</p>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">
                    TEST
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    TEST
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    TEST
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    TEST
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    TEST
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <TableRow key={i}>
                    <TableCell>{`Item ${i}-1`}</TableCell>
                    <TableCell>{`Item ${i}-1`}</TableCell>
                    <TableCell>{`Item ${i}-1`}</TableCell>
                    <TableCell>{`Item ${i}-1`}</TableCell>
                    <TableCell>{`Item ${i}-1`}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
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
