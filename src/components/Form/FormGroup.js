import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.css';

function FormGroup({ children }) {
  return <div className={css.group}>{children}</div>;
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormGroup;
