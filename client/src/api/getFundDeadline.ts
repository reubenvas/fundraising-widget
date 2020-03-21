import { get } from './methods';

export default async (): Promise<number> => (
    parseInt(await get('fundingDeadline'), 10)
);
