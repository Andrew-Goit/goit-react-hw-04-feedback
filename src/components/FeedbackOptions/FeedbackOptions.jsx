import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtn name={options} type="button" onClick={onLeaveFeedback}>
      {options}
    </FeedbackBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

