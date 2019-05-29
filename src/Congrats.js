import React from 'react'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
export default (props) => (
    <div data-test="component-congrats">
        {
            props.success && (<span data-test="congrats-message">
                Congratulations! You guess the word!
            </span>)
        }
    </div>
)
