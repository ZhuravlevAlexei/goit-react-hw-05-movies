import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ btnName, onClick }) => {
  return (
    <div className={css.buttonWrap}>
      <button className={css.button} onClick={onClick} type="button">
        {btnName}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
