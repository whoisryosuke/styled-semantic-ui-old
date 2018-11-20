import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "../../theme/theme";

/** Mixin Variables */
const shadow = {
  shadowDistance: "0em",
  borderBoxShadowColor: "transparent",
  borderBoxShadowWidth: "1px"
};

const buttonTheme = {
  verticalMargin: "0em",
  horizontalMargin: "0.25em",
  backgroundColor: "#E0E1E2",
  backgroundImage: "none",
  background: `${theme.colors.primary} none`,
  lineHeight: "1em",

  /* Button defaults to using same height as input globally */
  verticalPadding: theme.input.verticalPadding,
  horizontalPadding: "1.5em",

  /* Text */
  textTransform: "none",
  tapColor: "transparent",
  fontFamily: theme.pageFont,
  fontWeight: theme.bold,
  textColor: "rgba(0, 0, 0, 0.6)",
  textShadow: "none",
  invertedTextShadow: theme.textShadow,
  borderRadius: theme.borderRadius,
  verticalAlign: "baseline",

  /* Internal Shadow */
  shadowOffset: `(${shadow.shadowDistance} / 2)`,
  shadowBoxShadow: `0px -${shadow.shadowDistance} 0px 0px ${
    theme.borderColor
  } inset`,

  /* Box Shadow */
  borderBoxShadow: `0px 0px 0px ${shadow.borderBoxShadowWidth} ${
    shadow.borderBoxShadowColor
  } inset`,

  /* Icon */
  iconHeight: theme.relativeTiny,
  iconOpacity: "0.8",
  iconDistance: theme.relative6px,
  iconColor: "",
  iconTransition: "opacity @defaultDuration @defaultEasing",
  iconVerticalAlign: "",

  iconMargin: "0em @iconDistance 0em -(@iconDistance / 2)",
  rightIconMargin: "0em -(@iconDistance / 2) 0em @iconDistance",

  /* Loader */
  invertedLoaderFillColor: "rgba(0, 0, 0, 0.15)",

  /*
    willChange: 'box-shadow, transform, opacity, color, background,
    */
  willChange: "",

  /*-------------------
            Group
    --------------------*/

  groupBoxShadow: "none",
  groupButtonBoxShadow: theme.boxShadow,
  verticalBoxShadow: "none",
  groupButtonOffset: "0px 0px 0px 0px",
  verticalGroupOffset: "0px 0px 0px 0px",

  /*-------------------
            States
    --------------------*/

  /* Hovered */
  hoverBackgroundColor: "#CACBCD",
  hoverBackgroundImage: theme.backgroundImage,
  hoverBoxShadow: theme.boxShadow,
  hoverColor: theme.hoveredTextColor,
  iconHoverOpacity: "0.85",

  /* Focused */
  focusBackgroundColor: theme.hoverBackgroundColor,
  focusBackgroundImage: "",
  focusBoxShadow: "",
  focusColor: theme.hoveredTextColor,
  iconFocusOpacity: "0.85",

  /* Disabled */
  disabledBackgroundImage: "none",
  disabledBoxShadow: "none",

  /* Pressed Down */
  downBackgroundColor: "#BABBBC",
  downBackgroundImage: "",
  downPressedShadow: "none",
  downColor: theme.pressedTextColor,

  /* Active */
  activeBackgroundColor: "#C0C1C2",
  activeBackgroundImage: "none",
  activeColor: theme.selectedTextColor,
  activeBoxShadow: theme.borderBoxShadow,

  /* Active + Hovered */
  activeHoverBackgroundColor: theme.activeBackgroundColor,
  activeHoverBackgroundImage: "none",
  activeHoverColor: theme.activeColor,
  activeHoverBoxShadow: theme.activeBoxShadow,

  /* Loading */
  loadingOpacity: "1",
  loadingPointerEvents: "auto",
  loadingTransition: `
      all 0s linear,
      opacity @defaultDuration @defaultEasing
    `,

  /*-------------------
            Types
    --------------------*/

  /* Or */
  orText: "'or'",

  orGap: "0.3em",
  orHeight: "(@verticalPadding * 2) + 1em",
  orZIndex: "3",

  orCircleDistanceToEdge: "(@verticalPadding)",
  orCircleSize: `${theme.orHeight} - @orCircleDistanceToEdge`,
  orLineHeight: "(@orCircleSize)",
  orBoxShadow: theme.borderBoxShadow,

  orVerticalOffset: "-(@orCircleSize / 2)",
  orHorizontalOffset: "-(@orCircleSize / 2)",

  orBackgroundColor: theme.white,
  orTextShadow: theme.invertedTextShadow,
  orTextStyle: theme.normal,
  orTextWeight: theme.bold,
  orTextColor: theme.lightTextColor,

  orSpacerHeight: theme.verticalPadding,
  orSpacerColor: "transparent",

  /* Icon */
  iconButtonOpacity: "0.9",

  /* Labeled */
  labeledLabelFontSize: theme.medium,
  labeledLabelAlign: "center",
  labeledLabelPadding: "",
  labeledLabelBorderColor: theme.borderColor,
  labeledLabelBorderOffset: "-@borderBoxShadowWidth",
  labeledTagLabelSize: "1.85em" /* hypotenuse of triangle */,
  labeledIconMargin: "0em",

  /* Labeled Icon */
  labeledIconWidth: "1em + (@verticalPadding * 2)",
  labeledIconBackgroundColor: "rgba(0, 0, 0, 0.05)",
  labeledIconPadding: "(@horizontalPadding + @labeledIconWidth)",
  labeledIconBorder: "transparent",
  labeledIconColor: "",

  labeledIconLeftShadow: "-1px 0px 0px 0px @labeledIconBorder inset",
  labeledIconRightShadow: "1px 0px 0px 0px @labeledIconBorder inset",

  /* Inverted */
  invertedBorderSize: "2px",
  invertedTextColor: theme.white,
  invertedTextHoverColor: theme.hoverColor,

  /* Basic */
  basicBorderRadius: theme.borderRadius,
  basicBorderSize: "1px",
  basicTextColor: theme.textColor,
  basicColoredBorderSize: "1px",

  basicBackground: "transparent none",
  basicFontWeight: theme.normal,
  basicBorder: "1px solid @borderColor",
  basicBoxShadow: "0px 0px 0px @basicBorderSize @borderColor inset",
  basicLoadingColor: theme.offWhite,
  basicTextTransform: "none",

  /* Basic Hover */
  basicHoverBackground: "#FFFFFF",
  basicHoverTextColor: theme.hoveredTextColor,
  basicHoverBoxShadow: `
      0px 0px 0px @basicBorderSize @selectedBorderColor inset,
      0px 0px 0px 0px @borderColor inset
    `,
  /* Basic Focus */
  basicFocusBackground: theme.basicHoverBackground,
  basicFocusTextColor: theme.basicHoverTextColor,
  basicFocusBoxShadow: theme.basicHoverBoxShadow,

  /* Basic Down */
  basicDownBackground: "#F8F8F8",
  basicDownTextColor: theme.pressedTextColor,
  basicDownBoxShadow: `
      0px 0px 0px @basicBorderSize rgba(0, 0, 0, 0.15) inset,
      0px 1px 4px 0px @borderColor inset
    `,
  /* Basic Active */
  basicActiveBackground: theme.transparentBlack,
  basicActiveBoxShadow: "",
  basicActiveTextColor: theme.selectedTextColor,

  /* Basic Inverted */
  basicInvertedBackground: "transparent",
  basicInvertedFocusBackground: "transparent",
  basicInvertedDownBackground: theme.transparentWhite,
  basicInvertedActiveBackground: theme.transparentWhite,

  basicInvertedBoxShadow:
    "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 0.5) inset",
  basicInvertedHoverBoxShadow:
    "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 1) inset",
  basicInvertedFocusBoxShadow:
    "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 1) inset",
  basicInvertedDownBoxShadow:
    "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 0.9) inset",
  basicInvertedActiveBoxShadow:
    "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 0.7) inset",

  basicInvertedColor: theme.darkWhite,
  basicInvertedHoverColor: theme.darkWhiteHover,
  basicInvertedDownColor: theme.darkWhiteActive,
  basicInvertedActiveColor: theme.invertedTextColor,

  /* Basic Group */
  basicGroupBorder: `${theme.basicBorderSize} solid @borderColor`,
  basicGroupBoxShadow: "none",

  /*-------------------
          Variations
    --------------------*/

  /* Colors */
  coloredBackgroundImage: "none",
  coloredBoxShadow: theme.shadowBoxShadow,

  /* Colored */
  brownTextColor: theme.invertedTextColor,
  brownTextShadow: theme.invertedTextShadow,
  redTextColor: theme.invertedTextColor,
  redTextShadow: theme.invertedTextShadow,
  orangeTextColor: theme.invertedTextColor,
  orangeTextShadow: theme.invertedTextShadow,
  greenTextColor: theme.invertedTextColor,
  greenTextShadow: theme.invertedTextShadow,
  blueTextColor: theme.invertedTextColor,
  blueTextShadow: theme.invertedTextShadow,
  violetTextColor: theme.invertedTextColor,
  violetTextShadow: theme.invertedTextShadow,
  purpleTextColor: theme.invertedTextColor,
  purpleTextShadow: theme.invertedTextShadow,
  pinkTextColor: theme.invertedTextColor,
  pinkTextShadow: theme.invertedTextShadow,
  blackTextColor: theme.invertedTextColor,
  blackTextShadow: theme.invertedTextShadow,
  oliveTextColor: theme.invertedTextColor,
  oliveTextShadow: theme.invertedTextShadow,
  yellowTextColor: theme.invertedTextColor,
  yellowTextShadow: theme.invertedTextShadow,
  tealTextColor: theme.invertedTextColor,
  tealTextShadow: theme.invertedTextShadow,
  greyTextColor: theme.invertedTextColor,
  greyTextShadow: theme.invertedTextShadow,

  /* Inverted */
  lightBrownTextColor: theme.invertedTextColor,
  lightBrownTextShadow: theme.invertedTextShadow,
  lightRedTextColor: theme.invertedTextColor,
  lightRedTextShadow: theme.invertedTextShadow,
  lightOrangeTextColor: theme.invertedTextColor,
  lightOrangeTextShadow: theme.invertedTextShadow,
  lightGreenTextColor: theme.invertedTextColor,
  lightGreenTextShadow: theme.invertedTextShadow,
  lightBlueTextColor: theme.invertedTextColor,
  lightBlueTextShadow: theme.invertedTextShadow,
  lightVioletTextColor: theme.invertedTextColor,
  lightVioletTextShadow: theme.invertedTextShadow,
  lightPurpleTextColor: theme.invertedTextColor,
  lightPurpleTextShadow: theme.invertedTextShadow,
  lightPinkTextColor: theme.invertedTextColor,
  lightPinkTextShadow: theme.invertedTextShadow,
  lightBlackTextColor: theme.invertedTextColor,
  lightBlackTextShadow: theme.invertedTextShadow,
  lightOliveTextColor: theme.textColor,
  lightOliveTextShadow: theme.textShadow,
  lightYellowTextColor: theme.textColor,
  lightYellowTextShadow: theme.textShadow,
  lightTealTextColor: theme.textColor,
  lightTealTextShadow: theme.textShadow,
  lightGreyTextColor: theme.textColor,
  lightGreyTextShadow: theme.textShadow,

  /* Ordinality */
  primaryBackgroundImage: theme.coloredBackgroundImage,
  primaryTextColor: theme.invertedTextColor,
  lightPrimaryTextColor: theme.invertedTextColor,
  primaryTextShadow: theme.invertedTextShadow,
  primaryBoxShadow: theme.coloredBoxShadow,

  secondaryBackgroundImage: theme.coloredBackgroundImage,
  secondaryTextColor: theme.invertedTextColor,
  secondaryTextShadow: theme.invertedTextShadow,
  lightSecondaryTextColor: theme.invertedTextColor,
  secondaryBoxShadow: theme.coloredBoxShadow,

  positiveBackgroundImage: theme.coloredBackgroundImage,
  positiveTextColor: theme.invertedTextColor,
  positiveTextShadow: theme.invertedTextShadow,
  positiveBoxShadow: theme.coloredBoxShadow,

  negativeBackgroundImage: theme.coloredBackgroundImage,
  negativeTextColor: theme.invertedTextColor,
  negativeTextShadow: theme.invertedTextShadow,
  negativeBoxShadow: theme.coloredBoxShadow,

  /* Compact */
  compactVerticalPadding: "(@verticalPadding * 0.75)",
  compactHorizontalPadding: "(@horizontalPadding * 0.75)",

  /* Attached */
  attachedOffset: "-1px",
  attachedBoxShadow: "0px 0px 0px 1px @borderColor",
  attachedHorizontalPadding: "0.75em",
  attachedZIndex: "2",

  /* Floated */
  floatedMargin: "0.25em",

  /* Animated */
  animatedVerticalAlign: "middle",
  animatedZIndex: "1",
  animationDuration: "0.3s",
  animationEasing: "ease",
  fadeScaleHigh: "1.5",
  fadeScaleLow: "0.75"
};

/**
 * Combine any theme variables here
 * since you can't reference object params within itself
 */
const boxShadow = `${buttonTheme.borderBoxShadow} ${
  buttonTheme.shadowBoxShadow
}`;

const downBoxShadow = `${buttonTheme.borderBoxShadow} ${
  buttonTheme.downPressedShadow
}`;

const invertedGroupButtonOffset = `0px 0px 0px -(${
  buttonTheme.invertedBorderSize
})`;
const invertedVerticalGroupButtonOffset = `0px 0px -(${
  buttonTheme.invertedBorderSize
}) 0px`;

/**
 * Button
 *
 */
const Button = ({ className, children }) => (
  <button className={className} type="button">
    {children}
  </button>
);

Button.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const StyledButton = styled(Button)`
  cursor: pointer;
  display: inline-block;

  min-height: 1em;

  outline: none;
  border: none;
  vertical-align: ${buttonTheme.verticalAlign};
  background: ${buttonTheme.background};
  color: ${props => props.theme.typography.color};

  font-family: ${props => props.theme.typography.fonts.page};

  margin: 0em ${buttonTheme.horizontalMargin} ${buttonTheme.verticalMargin} 0em;
  padding: ${buttonTheme.verticalPadding} ${buttonTheme.horizontalPadding}
    ${buttonTheme.verticalPadding};

  text-transform: ${buttonTheme.textTransform};
  text-shadow: ${buttonTheme.textShadow};
  font-weight: ${buttonTheme.fontWeight};
  line-height: ${buttonTheme.lineHeight};
  font-style: normal;
  text-align: center;
  text-decoration: none;

  border-radius: ${buttonTheme.borderRadius};
  box-shadow: ${boxShadow};

  user-select: none;

  transition: opacity
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`},
    background-color
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`},
    color
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`},
    box-shadow
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`},
    background
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  will-change: willChange;

  -webkit-tap-highlight-color: tapColor;

  :hover {
    background-color: ${buttonTheme.hoverBackgroundColor};
    background-image: ${buttonTheme.hoverBackgroundImage};
    box-shadow: ${buttonTheme.hoverBoxShadow};
    color: ${buttonTheme.hoverColor};
  }

  :focus {
    background-color: ${buttonTheme.focusBackgroundColor};
    color: ${buttonTheme.focusColor};
    background-image: ${buttonTheme.focusBackgroundImage} !important;
    box-shadow: ${buttonTheme.focusBoxShadow} !important;
  }

  // Pressed "down"
  :active {
    background-color: ${buttonTheme.downBackgroundColor};
    background-image: ${buttonTheme.downBackgroundImage};
    color: ${buttonTheme.downColor};
    box-shadow: ${buttonTheme.downBoxShadow};
  }

  // Active
  &.active {
    background-color: ${buttonTheme.activeBackgroundColor};
    background-image: ${buttonTheme.activeBackgroundImage};
    box-shadow: ${buttonTheme.activeBoxShadow};
    color: ${buttonTheme.activeColor};
  }
  &.active:hover {
    background-color: ${buttonTheme.activeHoverBackgroundColor};
    background-image: ${buttonTheme.activeHoverBackgroundImage};
    color: ${buttonTheme.activeHoverColor};
  }
  &.active:active {
    background-color: ${buttonTheme.activeBackgroundColor};
    background-image: ${buttonTheme.activeBackgroundImage};
  }

  &.disabled &.disabled:hover,
  &.disabled.active {
    cursor: default;
    opacity: ${props => props.theme.opacity.disabled} !important;
    background-image: none !important;
    box-shadow: none !important;
    pointer-events: none !important;
  }

  // Inverted
  &.inverted {
    box-shadow: 0px 0px 0px ${buttonTheme.invertedBorderSize}
      ${props => props.theme.colors.white} inset !important;
    background: transparent none;
    color: ${props => props.theme.colors.white};
    text-shadow: none !important;
  }
  &.inverted:hover {
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 0px ${buttonTheme.invertedBorderSize}
      ${props => props.theme.colors.white} inset !important;
    color: ${buttonTheme.hoverColor};
  }

  // Inverted Active / Focus
  &inverted:focus,
  &.inverted.active {
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 0px ${buttonTheme.invertedBorderSize}
      ${props => props.theme.colors.white} inset !important;
    color: ${buttonTheme.focusColor};
  }

  // Inverted Active Focus
  &.inverted.active:focus {
    background: ${props => props.theme.colors.midWhite};
    box-shadow: 0px 0px 0px ${buttonTheme.invertedBorderSize}
      ${props => props.theme.colors.midWhite} inset !important;
    color: ${buttonTheme.focusColor};
  }

  // Colors

  // Red
  &.red {
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.textColors.red};
    text-shadow: @redTextShadow;
    background-image: ${buttonTheme.coloredBackgroundImage};
  }
  &.red {
    box-shadow: ${buttonTheme.coloredBoxShadow};
  }
  &.red:hover {
    background-color: @redHover;
    color: @redTextColor;
    text-shadow: @redTextShadow;
  }
  &.red:focus {
    background-color: @redFocus;
    color: @redTextColor;
    text-shadow: @redTextShadow;
  }
  &.red:active {
    background-color: @redDown;
    color: @redTextColor;
    text-shadow: @redTextShadow;
  }
  &.red.active,
  &.red .active:active {
    background-color: @redActive;
    color: @redTextColor;
    text-shadow: @redTextShadow;
  }
`;

export default StyledButton;
