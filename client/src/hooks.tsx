import React from 'react';
import getCurrentFunding from './api/getCurrentFunding';
import getFundingGoal from './api/getFundingGoal';
import getFundDeadline from './api/getFundDeadline';
import formatTime from './helpers/formatTime';

export const useCurrentFunding = (socket: SocketIOClient.Socket): number => {
    const [current, setCurrent] = React.useState<number | null>(null);
    if (current === null) getCurrentFunding().then(setCurrent);

    socket.on('updateCurrent', ({ newCurrent }: { newCurrent: number }) => {
        setCurrent(newCurrent);
    });

    return current === null ? 0 : current;
};

export const useFundingDetails = () => {
    const [goal, setGoal] = React.useState<number>(0);
    const [timeAsNum, setTimeAsNum] = React.useState<number>(0);
    const [time, setTime] = React.useState<string | null>(null);

    React.useEffect(() => {
        const updateValues = (): NodeJS.Timeout => {
            const initialSetup = async (): Promise<void> => {
                setGoal(await getFundingGoal());
                const fetchedTime = await getFundDeadline();
                setTimeAsNum(fetchedTime);
                setTime(formatTime(fetchedTime));
            };
            initialSetup();
            const intervalId = setInterval(async () => {
                setTime(formatTime(timeAsNum));
            }, 1000);
            return intervalId;
        };
        const intervalId = updateValues();
        return (): void => {
            clearInterval(intervalId);
        };
    }, [timeAsNum]);

    return { goal, time };
};
