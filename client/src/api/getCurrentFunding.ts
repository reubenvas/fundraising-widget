import { get } from './methods';

export default async (): Promise<number> => (
    parseInt(await get('fundingCurrent'), 10) // ÄNDRA TILL SOCKET ISTÄLLET FÖR ATT GÖRA EN REQ VARJE SEK
);
