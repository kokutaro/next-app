'use client';

import { createFareType } from '@/app/lib/actions';
import { FareType, State } from '@/app/lib/schemas';
import { Button } from '@/app/ui/common/button';
import Input from '@/app/ui/common/input';
import {
  CurrencyYenIcon,
  InformationCircleIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';

export default function Form() {
  const initialState: State<FareType> = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createFareType, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <Input
              autoComplete="disabled"
              id="name"
              name="name"
              type="text"
              placeholder="Input name"
              aria-describedby="name-error"
              icon={InformationCircleIcon}
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((err: string) => (
                <p key={err} className="mt-2 text-sm text-red-500">
                  {err}
                </p>
              ))}
          </div>
        </div>
        {/* From and To */}
        <div className="mb-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div>
              <label htmlFor="from" className="mb-2 block text-sm font-medium">
                From
              </label>
              <div className="relative">
                <Input
                  id="from"
                  name="from"
                  type="text"
                  placeholder="Input from"
                  aria-describedby="from-error"
                  icon={MapPinIcon}
                />
              </div>
              <div id="from-error" aria-live="polite" aria-atomic="true">
                {state.errors?.from &&
                  state.errors.from.map((err: string) => (
                    <p key={err} className="mt-2 text-sm text-red-500">
                      {err}
                    </p>
                  ))}
              </div>
            </div>
            <div>
              <label htmlFor="to" className="mb-2 block text-sm font-medium">
                To
              </label>
              <div className="relative">
                <Input
                  id="to"
                  name="to"
                  type="text"
                  placeholder="Input to"
                  aria-describedby="to-error"
                  icon={MapPinIcon}
                />
              </div>
              <div id="to-error" aria-live="polite" aria-atomic="true">
                {state.errors?.to &&
                  state.errors.to.map((err: string) => (
                    <p key={err} className="mt-2 text-sm text-red-500">
                      {err}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* Fare */}
        <div className="mb-4">
          <label htmlFor="fare" className="mb-2 block text-sm font-medium">
            Fare
          </label>
          <div className="relative">
            <Input
              id="fare"
              name="fare"
              type="number"
              placeholder="Input fare"
              aria-describedby="fare-error"
              icon={CurrencyYenIcon}
            />
          </div>
          <div id="fare-error" aria-live="polite" aria-atomic="true">
            {state.errors?.fare &&
              state.errors.fare.map((err: string) => (
                <p key={err} className="mt-2 text-sm text-red-500">
                  {err}
                </p>
              ))}
          </div>
        </div>
        <Button type="submit">Create Fare Type</Button>
      </div>
    </form>
  );
}
