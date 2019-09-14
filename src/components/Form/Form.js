import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import css from './Form.css';

function Form({ children }) {
  return (
    <form className={css.form} action="#" autoComplete="off">
      {children}
    </form>
  );
}

Form.Group = FormGroup;

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
