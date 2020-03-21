import React from 'react';

const Instructions = (): React.ReactElement => (
    <>
        <h1>Fundraising widget (frontend exercise)</h1>

        <h2>Problem description</h2>

        <p>
            Shady Fundraising Inc. wants a new fundraising widget for their website.
            The widget should have clear communication about the fundraising progress
            and allow the users to enter the amount they wish to pledge.
        </p>

        <p>
            Their web designer has created most of the HTML and CSS that is needed for
            the fundraising widget, but you need to write the JavaScript so it
            actually is dynamic and modify the HTML and CSS to make it work as expected.
        </p>

        <h2>Problem requirements</h2>

        <ul>
            <li>
                <p>
                    The progress bar must update to reflect to the progress of the fundraising,
                    the progress is currently static at 75%. If the fundraising has reached
                    it's goal the progressbar must become green (#1CBC2C),
                    otherwise it should be orange (#EF5F3C).
                </p>
                <p>
                    The web designer forgot to implement the styles for the progress bar colors,
                    so you need to do this in addition to make the progress bar update based
                    on the progress.
                </p>
            </li>
            <li>
                <p>
                    The thank you notice must be hidden from the start and only shown if a
                    successful pledge has been submitted.
                </p>
                <p>Initial state of the "Thank you notice" is hidden.</p>
                <p>
                    When a successful pledge has been made the "Thank you notice" must be
                    shown and the "Pledge input controls" must be hidden.
                </p>
                <p>
                    When the "Thank you notice" is dismissed the "Pledge input controls" must
                    be shown.
                </p>
            </li>
            <li>
                <p>
                    The pledge amount must only accept integer values and the value must be cleared
                    on successful pledge.
                </p>
                <p>
                    If an invalid value is entered in the pledge input an error message to the user
                    must be shown, the web designer forgot to think of error handling so you need
                    to implement the design for the it.
                </p>
            </li>
            <li>
                <p>
                    A successful pledge must update the progress bar, how many percent of the goal
                    that has been funded and how many dollars that has been raised in total.
                </p>
            </li>
        </ul>

        <h2>Evaluation criteria</h2>

        The following will be evaluated in this task
        <ul>
            <li>The readability of the code</li>
            <li>
                That the code is straightforward and does not contain any unneccessary complexitites
            </li>
        </ul>

        <h2>How to do this task</h2>

        <p>
            You can do this task either directly on CodePen or locally on your computer,
            both approaches are described below.
        </p>

        On CodePen:
        <ol>
            <li>Fork the pen for this task</li>
            <li>
                Implement the changes needed to the JavaScript, CSS and HTML
                in the pen to make it meet the requirements
            </li>
            <li>Save the pen and send the link to me</li>
        </ol>

        Locally on your PC:
        <ol>
            <li>Save the CSS and JavaScript to files on your harddrive</li>
            <li>
                Save the HTML to a file on your harddrive. Add the missing html, head and body tags
                and link to the CSS and JS files.
            </li>
            <li>
                Implement the changes needed to the JavaScript, CSS and HTML
                to make it meet the requirements
            </li>
            <li>Zip the modified files and send to me</li>
        </ol>

        <p>
            You are allowed to use any tools or frameworks that you wish to solve this exercise,
            some examples would be jQuery, AngularJS, React. Check the pen settings in the top
            right corner if you need to include external JavaScript libraries.
        </p>

        <p>Feel free to do any modifications to the code that you wish.</p>

        <h2>The fundraising widget</h2>
    </>
);

export default Instructions;
