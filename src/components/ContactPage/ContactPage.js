import React, { Fragment } from 'react';
import PageHeader from 'components/PageHeader';
import PageContent from 'components/PageContent';
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

function ContactPage() {
  return (
    <Fragment>
      <PageHeader appearance="secondary" title="Get in touch" />
      <PageContent>
        <Form>
          <Form.Group>
            <Input
              type="text"
              id="name"
              name="name"
              label="Name"
              placeholder="Tell us your name (optional)"
            />
          </Form.Group>
          <Form.Group>
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="How can we reach you?"
              required
            />
          </Form.Group>
          <Form.Group>
            <Input
              type="textarea"
              id="message"
              name="message"
              label="Message"
              placeholder="Any additional info?"
              required
            />
          </Form.Group>
          <Form.Group>
            <Button
              theme={{
                appearance: 'primary',
                width: 'fill',
                size: 'md',
              }}
            >
              Send
            </Button>
          </Form.Group>
        </Form>
        {/*
        <form action="#">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>

          <div>
            <label htmlFor="question">What can we help you with?</label>
            <select name="question" id="question">
              <option>-- Choose one --</option>
              <option value="foo">Foo</option>
              <option value="bar">Bar</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" />
          </div>
        </form>
        */}
      </PageContent>
    </Fragment>
  );
}

export default ContactPage;
