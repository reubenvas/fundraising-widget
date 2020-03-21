export default (timeAsNum: number): string | null => {
    const timeDiff = timeAsNum - Date.now();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (timeDiff / day >= 1) {
        return `${Math.round(timeDiff / day)} days`;
    }
    if (timeDiff / hour >= 1) {
        return `${Math.round(timeDiff / hour)} hours`;
    }
    if (timeDiff / minute >= 1) {
        return `${Math.round(timeDiff / minute)} minutes`;
    }
    if (timeDiff / second >= 1) {
        return `${Math.round(timeDiff / second)} seconds`;
    }
    return null;
};
