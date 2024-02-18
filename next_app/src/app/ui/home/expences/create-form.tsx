'use client';

import { createExpence } from '@/app/lib/actions';
import { useExpenceForm } from '@/app/lib/hooks/expences/useExpenceForm';
import { Button } from '@/app/ui/common/button';
import Input from '@/app/ui/common/input';
import {
  ArrowPathRoundedSquareIcon,
  CalculatorIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { UseFormRegisterReturn } from 'react-hook-form';

export default function Form({
  fareTypes,
}: {
  fareTypes: {
    id: string;
    name: string;
    from: string;
    to: string;
    fare: number;
  }[];
}) {
  const {
    handleSubmit,
    register,
    errors,
    fieldValues,
    fields,
    append,
    remove,
  } = useExpenceForm();

  return (
    <form
      onSubmit={handleSubmit(
        async (data) => {
          await createExpence(data);
        },
        (d) => {
          console.log(d);
        },
      )}
    >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <Input
              {...fieldValues.name}
              autoComplete="disabled"
              id="name"
              type="text"
              placeholder="Input name"
              aria-describedby="name-error"
              icon={InformationCircleIcon}
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {errors?.name &&
              errors?.name.map((err) => (
                <p className="mt-2 text-sm text-red-500" key={err}>
                  {err}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          {fields.map((f, index) => {
            const fareTypeIdError = errors?.fares?.[index]?.fareTypeId?.message;
            return (
              <div
                className="mb-2 flex items-center gap-2 border-b py-2"
                key={f.id}
              >
                <div className=" grid grow grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor={`fares.${index}.fareTypeId`}
                      className="mb-2 block text-sm font-medium"
                    >
                      Fare Type
                    </label>
                    <div className="relative">
                      <select
                        {...register(`fares.${index}.fareTypeId` as const)}
                        id={`fares.${index}.fareTypeId`}
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby={`isRoundTrip-error.${f.id}`}
                        defaultValue={f.fareTypeId}
                      >
                        <option value="" disabled>
                          Select a Fare type
                        </option>
                        {fareTypes.map((fare) => (
                          <option key={fare.id} value={fare.id}>
                            {fare.name}{' '}
                            {fare.fare.toLocaleString('ja-JP', {
                              style: 'currency',
                              currency: 'JPY',
                            })}
                          </option>
                        ))}
                      </select>
                      <CalculatorIcon className="pointer-events-none absolute left-3 top-1/2 hidden h-[18px] w-[18px] -translate-y-1/2 text-gray-500 md:block" />
                    </div>
                    <div
                      id={`isRoundTrip-error.${f.id}`}
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {fareTypeIdError && (
                        <p className="mt-2 text-sm text-red-500">
                          {fareTypeIdError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <fieldset>
                      <legend className="mb-2 block text-sm font-medium">
                        Set weather it is round trip
                      </legend>
                      <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                          <div className="flex items-center">
                            <input
                              {...register(
                                `fares.${index}.isRoundTrip` as const,
                              )}
                              id={`fares.${index}.isRoundTrip`}
                              type="checkbox"
                              className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                              aria-describedby={`isRoundTrip-error.${f.id}`}
                            />
                            <label
                              htmlFor={`fares.${index}.isRoundTrip`}
                              className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                            >
                              Round trip
                              <ArrowPathRoundedSquareIcon className="h-4 w-4" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    remove(index);
                  }}
                >
                  Remove
                </Button>
              </div>
            );
          })}
          <div>
            {(fields.length > 0
              ? fields
                  .map(
                    (f) =>
                      (fareTypes.find((ft) => ft.id === f.fareTypeId)?.fare ??
                        0) * (f.isRoundTrip ? 2 : 1),
                  )
                  .reduce((a, c) => a + c)
              : 0
            ).toLocaleString('ja-JP', {
              style: 'currency',
              currency: 'JPY',
            })}
          </div>
          <Button
            type="button"
            onClick={() => {
              append({ fareTypeId: '', isRoundTrip: false });
            }}
          >
            Add
          </Button>
        </div>
        <Button type="submit">Create Expence</Button>
      </div>
    </form>
  );
}

function convert({ ref, ...others }: UseFormRegisterReturn) {
  return { inputRef: ref, ...others };
}
