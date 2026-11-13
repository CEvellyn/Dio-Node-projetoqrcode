import chalk from "chalk";

const promptSchemaQRCode = [
{
    name: "link",
    description: chalk.yellow("Digite o link que deseja gerar o QR CODE:"),
},
{
    name: "type",
    description: chalk.yellow(
        "Escolha entre o tipo de QRcode ( 1- NORMAL ou 2- TERMINAL)"
    ),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha entre 1 ou 2"),
    requided: true,

},
];


export default promptSchemaQRCode;