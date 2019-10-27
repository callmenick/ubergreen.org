import React from 'react';
import Grid from 'components/Grid/Grid.js';
import Content from 'components/Content/Content.js';
import Button from 'components/Button/Button.js';
import css from './ContentArea.css';

function ContentArea() {
  return (
    <Grid padded>
      <div className={css.content}>
        <Content>
          <h2>
            At Ubergreen, our mission is to continuously deliver the best cacao
            from the best farms.
          </h2>
          <p>
            We’re making a big effort to bridge the gap between small scale
            caribbean farms and the global chocolate industry. As a collective
            unit, we’re focused on flavour, quality, and best practices when it
            comes to farming and production.
          </p>
          <p>Ready for a taste?</p>
          <p>
            <Button
              theme={{
                appearance: 'secondary',
                display: 'inlineBlock',
                size: 'md',
              }}
              href="/contact"
            >
              Get in touch
            </Button>
          </p>
        </Content>
      </div>
    </Grid>
  );
}

export default ContentArea;
