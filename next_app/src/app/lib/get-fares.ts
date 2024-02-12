import { PrismaClient } from '@prisma/client';

const groupBy = <K, V>(
  array: readonly V[],
  getKey: (cur: V, idx: number, src: readonly V[]) => K,
): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur, idx, src) => {
      const key = getKey(cur, idx, src);
      const list = map.get(key);
      if (list) list.push(cur);
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>()),
  );

export async function getFares() {
  const client = new PrismaClient();

  const fares = await client.fare_template_detail.findMany({
    include: { fare: true, fare_template: true },
  });

  const result = groupBy(fares, (f) => f.fare_template?.name).map(
    ([fare, items]) => ({
      templateName: fare,
      fares: items,
    }),
  );

  return result;
}

export async function getFareTypeById(id: string) {
  const client = new PrismaClient();
  const fare = await client.fare_type.findFirst({ where: { id: id } });

  return fare;
}

export async function getFareTypes() {
  const client = new PrismaClient();

  const fareTypes = await client.fare_type.findMany();

  return fareTypes;
}
