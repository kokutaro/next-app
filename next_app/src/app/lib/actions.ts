'use server';

import {
  CreateFareSchema,
  ExpenceType,
  FareType,
  State,
} from '@/app/lib/schemas';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createFareType(
  prevState: State<FareType>,
  formData: FormData,
): Promise<State<FareType>> {
  const validatedFields = CreateFareSchema.safeParse({
    name: formData.get('name'),
    from: formData.get('from'),
    to: formData.get('to'),
    fare: formData.get('fare'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Faired to create fare type.',
    };
  }

  const { fare, from, name, to } = validatedFields.data;

  const client = new PrismaClient();
  try {
    await client.fare_type.create({ data: { name, from, to, fare } });
  } catch (error) {
    return { message: `Database error: Failed to create Fare type. ${error}` };
  }

  revalidatePath('/home/faretypes');
  redirect('/home/faretypes');
}

export async function createExpence(formData: {
  name: string;
  fares: {
    isRoundTrip: boolean;
    fareTypeId: string;
  }[];
}): Promise<State<ExpenceType>> {
  // const validatedFields = CreateExpenceSchema.safeParse({
  //   name: formData.get('name'),
  //   fares: faresInput,
  // });

  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: 'Missing fields. Faired to create expence.',
  //   };
  // }

  const { name, fares } = formData;

  const client = new PrismaClient();
  try {
    const fareTemplate = await client.fare_template.create({ data: { name } });
    await client.fare_template_detail.createMany({
      data: fares.map((f) => ({
        fare_id: f.fareTypeId,
        fare_templateId: fareTemplate.id,
        is_round_trip: f.isRoundTrip,
      })),
    });
  } catch (error) {
    return { message: `Database error: Failed to create Expence. ${error}` };
  }

  revalidatePath('/home/expences');
  redirect('/home/expences');
}
