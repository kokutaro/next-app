import clsx from 'clsx';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from 'react';

type IconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;
export type InputProps = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
  icon?: IconType;
  inputRef?: React.Ref<HTMLInputElement>;
};
export default function Input({
  className,
  icon,
  inputRef,
  ...rest
}: InputProps) {
  const Icon = icon;
  return (
    <>
      <input
        {...rest}
        ref={inputRef}
        className={clsx(
          'peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500',
          className,
        )}
      />
      {Icon ? (
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      ) : null}
    </>
  );
}
