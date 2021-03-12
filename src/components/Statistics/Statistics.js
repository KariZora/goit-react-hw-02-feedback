import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return total === 0 ? (
    <Notification message="No feedback given" />
  ) : (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePersentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
