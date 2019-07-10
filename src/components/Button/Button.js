import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';
import Link from 'next/link';
import css from './Button.css';

function Button({
  as,
  children,
  className,
  disabled,
  href,
  id,
  isBusy,
  onClick,
  target,
  theme,
  to,
  type,
}) {
  let ButtonComponent = 'button';

  if (to || href || as) {
    ButtonComponent = Link;
  } else if (target) {
    ButtonComponent = 'a';
  }

  const isLink = ButtonComponent === Link;
  const isButton = !isLink;

  const ButtonWrapper = isLink ? Link : Fragment;
  const ButtonElement = isLink ? 'a' : 'button';
  const wrapperProps = isLink
    ? {
        as,
        href,
      }
    : {};

  const isDisabled = disabled || isBusy;

  return (
    <ButtonWrapper {...wrapperProps}>
      <ButtonElement
        className={cx(
          css.button,
          {
            [css.themed]: !isEmpty(theme),
            [css[`appearance-${theme.appearance}`]]: theme.appearance,
            [css[`display-${theme.display}`]]: theme.display,
            [css[`size-${theme.size}`]]: theme.size,
            [css[`width-${theme.width}`]]: theme.width,
            [css.disabled]: isDisabled,
            [css.isBusy]: isBusy,
          },
          className,
        )}
        disabled={isButton ? isDisabled : undefined}
        id={id}
        onClick={isDisabled ? undefined : onClick}
        target={target}
        to={to}
        type={isButton ? type : undefined}
      >
        {children}
      </ButtonElement>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentClass: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  isBusy: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.string,
  theme: PropTypes.shape({
    appearance: PropTypes.oneOf(['default', 'primary', 'secondary']),
    display: PropTypes.oneOf(['block', 'inlineBlock']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    width: PropTypes.oneOf(['default', 'shrink', 'fill']),
  }),
  to: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  as: undefined,
  className: undefined,
  contentClass: undefined,
  disabled: false,
  href: undefined,
  id: undefined,
  isBusy: false,
  onClick: () => {},
  target: undefined,
  to: undefined,
  theme: {},
  type: 'button',
};

export default Button;
