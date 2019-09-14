import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './Input.css';

function Input({ type, id, name, label, placeholder, required }) {
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={id}>
        {label}
        {required && <span className={css.required}>*</span>}
      </label>
      {(type === 'text' || type === 'email') && (
        <input
          className={cx(css.input, css.text)}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
      {type === 'textarea' && (
        <textarea
          className={cx(css.input, css.textarea)}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows="6"
        />
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'textarea', 'select']).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  required: false,
};

export default Input;
