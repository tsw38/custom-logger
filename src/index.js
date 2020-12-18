import chalk from "chalk";

class CustomLogger {
  #header;
  #delimitor;
  #types = {
    info: "info",
    success: "success",
    error: "error",
    warning: "warning",
  };

  #colors = {
    [this.#types.info]: {
      text: chalk.blue,
      background: chalk.black.bgBlue,
    },
    [this.#types.success]: {
      text: chalk.green,
      background: chalk.black.bgGreen,
    },
    [this.#types.error]: {
      text: chalk.red,
      background: chalk.black.bgRed,
    },
    [this.#types.warning]: {
      text: chalk.yellow,
      background: chalk.black.bgYellow,
    },
  };

  constructor({ header, delimitor } = {}) {
    this.#delimitor = delimitor || "=";
    this.#header = header ? ` ${header} ` : "";
  }

  log = (message, type = "info") => {
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

    const header = this.#header
      .padStart(
        transformedMessage.length / 2 + this.#header.length / 2,
        this.#delimitor
      )
      .padEnd(transformedMessage.length, this.#delimitor);

    const footer = "".padStart(transformedMessage.length, this.#delimitor);

    const colorType = this.#colors[type];

    console.log(`\n${colorType.background(header)}`);
    console.log(`\n${colorType.text(transformedMessage)}\n`);
    console.log(`${colorType.background(footer)}\n`);
  };
}

export default CustomLogger;
