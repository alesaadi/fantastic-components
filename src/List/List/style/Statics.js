import defaultTheme from '../../../defaultTheme';

function getColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.textColor : defaultTheme.primary.textColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.textColor : defaultTheme.secondary.textColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.textColor : defaultTheme.info.textColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.textColor : defaultTheme.warning.textColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.textColor : defaultTheme.danger.textColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.textColor : defaultTheme.success.textColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.default.textColor : theme.default.textColor;
  }

  return ForeC;
}

function getIconColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.textColor : defaultTheme.primary.textColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.textColor : defaultTheme.secondary.textColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.textColor : defaultTheme.info.textColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.textColor : defaultTheme.warning.textColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.textColor : defaultTheme.danger.textColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.textColor : defaultTheme.success.textColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.default.textColor : theme.default.textColor;
  }

  return ForeC;
}

function getLightBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    bgColor,
    theme
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  } else if (primary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.lightColor : defaultTheme.primary.lightColor;
  } else if (secondary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.lightColor : defaultTheme.secondary.lightColor;
  } else if (info) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.info.lightColor : defaultTheme.info.lightColor;
  } else if (warning) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.warning.lightColor : defaultTheme.warning.lightColor;
  } else if (danger) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.danger.lightColor : defaultTheme.danger.lightColor;
  } else if (success) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.success.lightColor : defaultTheme.success.lightColor;
  } else if (inverse) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.lightColor : defaultTheme.inverse.lightColor;
  } else {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.lightColor : defaultTheme.primary.lightColor;
  }
  return bgC;
}

function getBorderColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    borderColor,
    theme
  } = props;

  let BorderC;
  if (borderColor) {
    BorderC = borderColor;
  } else if (primary) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.primary.darkColor : defaultTheme.primary.darkColor;
  } else if (secondary) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.darkColor : defaultTheme.secondary.darkColor;
  } else if (info) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.info.darkColor : defaultTheme.info.darkColor;
  } else if (warning) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.warning.darkColor : defaultTheme.warning.darkColor;
  } else if (danger) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.danger.darkColor : defaultTheme.danger.darkColor;
  } else if (success) {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.success.darkColor : defaultTheme.success.darkColor;
  } else {
    BorderC = (Object.keys(theme).length > 0 && theme) ? theme.default.darkColor : defaultTheme.default.darkColor;
  }
  return BorderC;
}


function getBgColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    bgColor,
    theme
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  } else if (primary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.primary.color : defaultTheme.primary.color;
  } else if (secondary) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.color : defaultTheme.secondary.color;
  } else if (info) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.info.color : defaultTheme.info.color;
  } else if (warning) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.warning.color : defaultTheme.warning.color;
  } else if (danger) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.danger.color : defaultTheme.danger.color;
  } else if (success) {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.success.color : defaultTheme.success.color;
  } else {
    bgC = (Object.keys(theme).length > 0 && theme) ? theme.default.color : defaultTheme.default.color;
  }
  return bgC;
}

function getDarkColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.darkColor : defaultTheme.primary.darkColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.darkColor : defaultTheme.secondary.darkColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.darkColor : defaultTheme.info.darkColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.darkColor : defaultTheme.warning.darkColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.darkColor : defaultTheme.danger.darkColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.darkColor : defaultTheme.success.darkColor;
  } else if (inverse) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.darkColor : defaultTheme.inverse.darkColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
  }

  return ForeC;
}

function getItemColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (primary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.primary.bgColor : defaultTheme.primary.bgColor;
  } else if (secondary) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.secondary.bgColor : defaultTheme.secondary.bgColor;
  } else if (info) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.info.bgColor : defaultTheme.info.bgColor;
  } else if (warning) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.warning.bgColor : defaultTheme.warning.bgColor;
  } else if (danger) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.danger.bgColor : defaultTheme.danger.foreColor;
  } else if (success) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.success.bgColor : defaultTheme.success.bgColor;
  } else if (inverse) {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.inverse.bgColor : defaultTheme.inverse.bgColor;
  } else {
    ForeC = (Object.keys(theme).length > 0 && theme) ? theme.darkForeColor : defaultTheme.darkForeColor;
  }

  return ForeC;
}

export { getColor, getBgColor, getBorderColor, getIconColor, getLightBgColor, getDarkColor, getItemColor };
