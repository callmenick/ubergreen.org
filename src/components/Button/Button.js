import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
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
            [css.themed]: !!theme,
          },
          css[get(theme, 'appearance', undefined)],
          css[get(theme, 'display', undefined)],
          css[get(theme, 'size', undefined)],
          css[get(theme, 'width', undefined)],
          {
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
    appearance: PropTypes.oneOf([
      'appearanceDefault',
      'appearancePrimary',
      'appearanceSecondary',
    ]),
    display: PropTypes.oneOf(['displayBlock', 'displayInlineBlock']),
    size: PropTypes.oneOf(['sizeSm', 'sizeMd', 'sizeLg']),
    width: PropTypes.oneOf(['widthDefault', 'widthShrink', 'widthFill']),
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
  theme: undefined,
  type: 'button',
};

export default Button;
