import styles from './stat-item.module.css';
import PropTypes from 'prop-types';

const StatItem = ({ prefix = '', score = 0, suffix = '' }) => {
  return (
    <li className={styles.field}>
      <span>{prefix}:</span>
      <div>
        <span>{score}</span>
        <span>{suffix}</span>
      </div>
    </li>
  );
};

export default StatItem;

StatItem.propTypes = {
  prefix: PropTypes.string,
  score: PropTypes.number,
  suffix: PropTypes.string,
};
