import PropTypes from 'prop-types';
import {Notification} from 'components/Notification/Notification';
import { StatWraper, StatItem } from './Statistics.styled';
// 

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  if (good + neutral + bad === 0) {
    return <Notification message="There is no feedback" />;
  } else {
  return (
    <StatWraper>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback:{positivePercentage}</StatItem>
    </StatWraper>
  );
}
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }),
};
