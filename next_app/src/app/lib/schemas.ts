import { z } from 'zod';

export type State<T> = {
  errors?: {
    [P in keyof T]?: string[];
  };
  message?: string | null;
};

export const FareTypeSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: 'Please input a name' }),
  from: z.string().min(1, { message: 'Please input a from' }),
  to: z.string().min(1, { message: 'Please input a to' }),
  fare: z.coerce
    .number()
    .gt(0, { message: 'Please input a fare greater then 0' }),
});
export type FareType = z.infer<typeof FareTypeSchema>;

export const CreateFareSchema = FareTypeSchema.omit({ id: true });

export const ExpenceSchema = z.object({
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

export const CreateExpenceSchema = ExpenceSchema.omit({ id: true });

export type ExpenceType = z.infer<typeof ExpenceSchema>;
export type Fare = ExpenceType['fares'][number] & { seq: number };
