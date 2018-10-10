import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import css from 'components/Order/Order.module.scss';

const SENDGRID_API_KEY =
  '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';

const items = [
  {
    id: uniqueId('order'),
    title: 'Cacao nibs (50g)',
    price: '$25'
  },
  {
    id: uniqueId('order'),
    title: 'Cacao nibs (100g)',
    price: '$50'
  },
  {
    id: uniqueId('order'),
    title: 'Cacao nibs (200g)',
    price: '$90'
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate banana bread with nibs (pack of 3)',
    price: '$35',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate banana bread without nibs (pack of 3)',
    price: '$35',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate banana bread without eggs (pack of 3)',
    price: '$35',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate cupcakes without eggs and nibs (pack of 3)',
    price: '$35',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate cereal clusters with nibs (100g)',
    price: '$60',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate cereal clusters without nibs (100g)',
    price: '$60',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate with sorrel filling (box of 4)',
    price: '$40',
  },
  {
    id: uniqueId('order'),
    title: 'Chocolate with nibs (3 x 30g)',
    price: '$100',
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
            shortly. All prices are in <strong>TTD</strong>.
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
              <span className={css.price}>{item.price}</span>
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
            name="email"
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
