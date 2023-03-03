import styles from './feedback-options.module.css';
import PropTypes from 'prop-types';
import Button from '../../shared/components/Button/Button';
import { useCallback } from 'react';

const FeedbackOptions = ({ keys, onLeaveFeedback }) => {
  const handleLeaveFeedback = useCallback(e => {
    onLeaveFeedback(e.target.textContent);
  });

  const buttons = keys.map(key => (
    <Button
      key={key}
      className={styles.button}
      callback={handleLeaveFeedback}
      text={key}
    />
  ));

  return <div className={styles.wrapper}>{buttons}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
