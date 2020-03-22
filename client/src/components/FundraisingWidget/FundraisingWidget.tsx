import React from 'react';
import io from 'socket.io-client';
import './FundraisingWidget.css';
import { useCurrentFunding, useFundingDetails } from '../../hooks';

const { hostname } = window.location;
const socket = io(`${hostname}:8080`);

const FundraisingWidget = (): React.ReactElement => {
    const inputEl = React.useRef<HTMLInputElement | null>(null);
    const { goal, time } = useFundingDetails();
    const current = useCurrentFunding(socket);
    const [isInputControls, setIsInputControls] = React.useState<boolean>(true);
    const [isError, setIsError] = React.useState<boolean>(false);

    const calcPercentage = (): number => {
        if (!current || !goal) {
            return 0;
        }
        return Math.round((current / goal) * 100);
    };

    const pledgeSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const inputNumber = Number(inputEl.current?.value);
        if (!(inputNumber > 0 && inputNumber % 1 === 0)) {
            setIsError(true);
            return;
        }
        if (inputEl.current?.value) {
            setIsError(false);
            socket.emit('addCurrentFunding', parseInt(inputEl.current?.value, 10));
            inputEl.current.value = '';
            setIsInputControls(false);
        }
    };

    const showInputControls = (e: React.FormEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        setIsInputControls(true);
    };

    return (
        <>
            <div className="tooltip">
                <strong id="fundraise_remainingText">
                    {calcPercentage()}
                    %
                </strong>
                {' '}
                of the goal funded
            </div>

            <div className="boxFrame">
                <div className="progressBar_container">
                    <div
                        className="progressBar_bar"
                        id="fundraise_progressBar"
                        style={{ width: `${calcPercentage() <= 100 ? calcPercentage() : 100}%`, backgroundColor: calcPercentage() > 99 ? '#1CBC2C' : '#EF5F3C' }}
                    />
                </div>

                <div className="boxFrame_content">
                    <p>
                        Only
                        {' '}
                        {time}
                        {' '}
                        left to fund this project,
                        {' '}
                        <strong id="fundraise_currentFundingText">
                            $
                            {current}
                        </strong>
                        {' '}
                        has been raised towards the goal to raise
                        {' '}
                        <strong id="fundraise_goalText">
                            $
                            {goal}
                        </strong>
                        .
                    </p>
                    <p>
                        Pledge money by entering the sum in the field below and press pledge,
                        we already know your credit card details.
                    </p>
                    {isInputControls
                        ? (
                            <form id="fundraise_form" onSubmit={pledgeSubmit}>
                                <input id="fundraise_amount" type="text" ref={inputEl} />
                                <input type="submit" id="fundraise_pledgeButton" value="Pledge" />
                            </form>
                        ) : (
                            <div className="notification notification-success">
                                Thank you for your pledge!
                                {' '}
                                <a href="#" onClick={showInputControls}>Close</a>
                            </div>
                        )}
                    <div className="error-message" style={{ opacity: isError ? 1 : 0 }}>
                        <span className="error-text">Input must be a positive integer</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FundraisingWidget;
