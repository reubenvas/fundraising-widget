import { get } from './methods';

export default async (): Promise<number> => (
    parseInt(await get('fundingGoal'), 10)
);
