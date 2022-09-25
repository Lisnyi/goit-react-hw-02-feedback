import { nanoid } from "nanoid"
import PropTypes from 'prop-types'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return  <ul>
                <li key={nanoid()}>Good: {good}</li>
                <li key={nanoid()}>Neutral: {neutral}</li>
                <li key={nanoid()}>Bad: {bad}</li>
                <li key={nanoid()}>Total: {total}</li>
                <li key={nanoid()}>Positive feedback: {positivePercentage}%</li>
            </ul>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}