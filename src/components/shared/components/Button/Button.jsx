import styles from './button.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useMemo } from 'react';

const Button = memo(({ callback, text = '', className = null }) => {
  const fullClassName = useMemo(() => {
    return !className ? styles.button : `${styles.button} ${className}`;
  }, []);

  return (
    <button onClick={callback} className={fullClassName}>
      {text}
    </button>
  );
});

export default Button;

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};
