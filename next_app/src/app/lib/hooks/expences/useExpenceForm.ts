import { zodResolver } from '@hookform/resolvers/zod';
import {
  SubmitErrorHandler as SubmitErrorHandlerOriginal,
  SubmitHandler as SubmitHandlerOriginal,
  UseFormRegisterReturn,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

const expenceSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: 'Please input a name' }),
  fares: z
    .array(
      z.object({
        isRoundTrip: z.boolean(),
        fareTypeId: z.string().min(1, {
          message: 'Please select a fare type.',
        }),
      }),
    )
    .min(1),
});

const defaultValues: CreateExpenceFormValues = { name: '', fares: [] } as const;

const createExpenceSchema = expenceSchema.omit({ id: true });

type CreateExpenceFormValues = z.infer<typeof createExpenceSchema>;
type SubmitHandler = SubmitHandlerOriginal<CreateExpenceFormValues>;
type SubmitErrorHandler = SubmitErrorHandlerOriginal<CreateExpenceFormValues>;

export type CreateExpenceForm = ReturnType<typeof useExpenceForm>;

export const useExpenceForm = () => {
  const {
    register,
    handleSubmit: handleSubmitOriginal,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(createExpenceSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'fares',
    control,
  });

  const handleSubmit = (
    onValid: SubmitHandler,
    onInvalid: SubmitErrorHandler,
  ) => handleSubmitOriginal(onValid, onInvalid);

  return {
    handleSubmit,
    fields,
    append,
    remove,
    register,
    errors: {
      name: resolve(errors.name),
      fares: errors.fares,
    },
    fieldValues: {
      name: convert(register('name')),
      fares: convert(register('fares')),
    },
  };
};

function resolve(field?: { message?: string }) {
  return field?.message ? [field?.message] : undefined;
}

function convert({ ref, ...others }: UseFormRegisterReturn) {
  return { inputRef: ref, ...others };
}
