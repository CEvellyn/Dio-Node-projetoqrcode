import chalk from "chalk";

const PromptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    mensage: chalk.red.italic("Escolha uma opção válida (1 ou 2)"),
    required: true,

    },

];

export default PromptSchemaMain;
