import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateFareType() {
  return (
    <Link
      href="/home/faretypes/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Fare Type</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function CreateExpence() {
  return (
    <Link
      href="/home/expences/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Expence</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
