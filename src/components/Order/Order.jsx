import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import css from 'components/Order/Order.module.scss';

const SENDGRID_API_KEY =
  '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';

const items = [
  {
    id: 1,
    title: 'Cacao nibs (50/200 gr)',
  },
  {
    id: 2,
    title: 'Chocolate banana bread with nibs',
  },
  {
    id: 3,
    title: 'Chocolate banana bread without nibs',
  },
  {
    id: 4,
    title: 'Chocolate banana bread (with eggs/without eggs)',
  },
  {
    id: 5,
    title: 'Chocolate cupcakes (with and without eggs and nibs)',
  },
  {
    id: 6,
    title: 'Chocolate cereal clusters (with and without nibs)',
  },
  {
    id: 7,
    title: 'Chocolate with sorrel filling ',
  },
  {
    id: 8,
    title: 'Chocolate with nibs',
  },
];

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="order" className={css.container}>
        <header className={css.header}>
          <h2 className={css.heading}>
            <span>Place an order!</span>
          </h2>
          <p className={css.subHeading}>
            Fill out the form below to make an inquiry, and we’ll be in touch
            shortly.
          </p>
        </header>
        <form
          className={css.form}
          action="https://formspree.io/tobias@ubergreen.org"
          method="post"
        >
          {items.map((item) => (
            <div key={item.id} className={css.item}>
              <span className={css.title}>{item.title}</span>
              <div className={css.quantity}>
                <input
                  className={css.input}
                  name={item.title}
                  type="number"
                  placeholder="Qty"
                />
              </div>
            </div>
          ))}
          <input
            className={css.email}
            type="email"
            placeholder="Your email address"
            required
          />
          <div className={css.cta}>
            <button type="submit" className={css.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Order.propTypes = {};

Order.defaultProps = {};

export default Order;
