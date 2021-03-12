import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button type="button" onClick={() => onLeaveFeedback(options)}>
      {options}
    </button>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
