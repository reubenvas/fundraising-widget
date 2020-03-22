const baseUrl = 'http://localhost:8080/';

const get = (path: string): Promise<string> => fetch(baseUrl + path)
    .then((res) => res.json());

export const getFundingGoal = async (): Promise<number> => (
    parseInt(await get('fundingGoal'), 10)
);

export const getFundingDeadline = async (): Promise<number> => (
    parseInt(await get('fundingDeadline'), 10)
);

export const getFundingCurrent = async (): Promise<number> => (
    parseInt(await get('fundingCurrent'), 10)
);
