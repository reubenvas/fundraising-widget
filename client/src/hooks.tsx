import React from 'react';
import { getFundingGoal, getFundingDeadline, getFundingCurrent } from './api';
import formatTime from './helpers/formatTime';

export const useCurrentFunding = (socket: SocketIOClient.Socket): number => {
    const [current, setCurrent] = React.useState<number | null>(null);

    React.useEffect(() => {
        if (current === null) getFundingCurrent().then(setCurrent);
    }, [current]);

    socket.on('updateCurrent', ({ newCurrent }: { newCurrent: number }) => {
        setCurrent(newCurrent);
    });

    return current === null ? 0 : current;
};

export const useFundingDetails = (): { goal: number; time: string | null } => {
    const [goal, setGoal] = React.useState<number>(0);
    const [timeAsNum, setTimeAsNum] = React.useState<number>(0);
    const [time, setTime] = React.useState<string | null>(null);

    React.useEffect(() => {
        const initialSetup = async (): Promise<void> => {
            const [fundingGoal, fetchedTime] = (
                await Promise.all([getFundingGoal(), getFundingDeadline()])
            );
            setGoal(fundingGoal);
            setTimeAsNum(fetchedTime);
            setTime(formatTime(fetchedTime));
        };
        initialSetup();
    }, []);

    React.useEffect(() => {
        const updateValues = (): NodeJS.Timeout => {
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
