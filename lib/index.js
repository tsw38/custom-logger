const chalk = require("chalk");

const TYPES = {
  info: "info",
  error: "error",
  success: "success",
  warning: "warning",
};

const COLORS = {
  [TYPES.info]: {
    text: chalk.blue,
    background: chalk.black.bgBlue,
  },
  [TYPES.success]: {
    text: chalk.green,
    background: chalk.black.bgGreen,
  },
  [TYPES.error]: {
    text: chalk.red,
    background: chalk.black.bgRed,
  },
  [TYPES.warning]: {
    text: chalk.yellow,
    background: chalk.black.bgYellow,
  },
};

const log = (
  message = "",
  { header: initialHeader = "", delimitor = "=", type = TYPES.info } = {
    header: "",
    delimitor: "=",
    type: TYPES.info,
  }
) => {
  let transformedMessage = message;
  const messageLength =
    transformedMessage.length % 2 === 0
      ? transformedMessage.length
      : transformedMessage.length + 1;

  const minStringLength = 80;

  if (messageLength < minStringLength) {
    transformedMessage = transformedMessage
      .padStart(minStringLength / 2 + message.length / 2, " ")
      .padEnd(minStringLength, " ");
  }
  const paddedHeader = initialHeader ? ` ${initialHeader} ` : "";
  const header = paddedHeader
    .padStart(
      Math.floor((minStringLength - paddedHeader.length) / 2) +
        paddedHeader.length,
      delimitor
    )
    .padEnd(minStringLength, delimitor);

  const footer = "".padStart(header.length, delimitor);

  const colorType = COLORS[type];

  console.log(`\n${colorType.background(header)}`);
  console.log(`\n${colorType.text(transformedMessage)}\n`);
  console.log(`${colorType.background(footer)}\n`);
};

module.exports = {
  log,
  TYPES,
};
