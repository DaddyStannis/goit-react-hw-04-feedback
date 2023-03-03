import styles from './statistics.module.css';
import StatItem from './StatItem/StatItem';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Statistics = ({ goodScore, neutralScore, badScore }) => {
  const countTotalFeedback = useCallback(() => {
    return goodScore + neutralScore + badScore;
  }, [goodScore, neutralScore, badScore]);

  const countPositiveFeedbackPercentage = useCallback(() => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((100 / total) * goodScore);
  }, [goodScore, neutralScore, badScore]);

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <ul>
      <StatItem prefix={'Good'} score={goodScore} />
      <StatItem prefix={'Neutral'} score={neutralScore} />
      <StatItem prefix={'Bad'} score={badScore} />
      <StatItem prefix={'Total'} score={total} />
      <StatItem
        prefix={'Positive feedback'}
        score={positivePercentage}
        suffix="%"
      />
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  goodScore: PropTypes.number,
  neutralScore: PropTypes.number,
  badScore: PropTypes.number,
};
