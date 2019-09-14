import React from 'react';
import Grid from 'components/Grid';
import Content from 'components/Content';
import Button from 'components/Button';
import css from './ContentArea.css';

function ContentArea() {
  return (
    <Grid padded>
      <div className={css.content}>
        <Content>
          <h2>At Ubergreen, we’re making it our mission to…</h2>
          <p>
            Here, we can talk just a little bit more in depth about our core
            value props outlined above. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <Button
              theme={{
                appearance: 'primary',
                display: 'inlineBlock',
                size: 'md',
              }}
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
