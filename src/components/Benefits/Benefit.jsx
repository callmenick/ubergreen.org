import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Benefits/Benefits.module.scss';

class Benefit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { title, description } = this.props;
    const { expanded } = this.state;

    return (
      <div className={css.benefit} onClick={this.toggle}>
        <h3 className={css.benefitTitle}>
          <span>{title}</span>
          <span>{expanded ? '▾' : '▸'}</span>
        </h3>
        {expanded && <p className={css.benefitDescription}>{description}</p>}
      </div>
    );
  }
}

Benefit.propTypes = {};

Benefit.defaultProps = {};

export default Benefit;
