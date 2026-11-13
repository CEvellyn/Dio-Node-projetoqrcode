import prompt from "prompt";
import mainPrompt from "./prompts-schema/prompt-schema-main.js";
import createPassword from "./services/password/create.js";
// import createQRCode from "./services/qr-code/create.js"; (quando criar o arquivo)

async function main() {
    prompt.start();

    prompt.get(mainPrompt, async (err, choice) => {
        if (err) {
            console.log(err);
            return;
        }

        if (choice.select == 1) {
            console.log("Você escolheu a ferramenta QRCODE");
            // await createQRCode();
        }

        if (choice.select == 2) {
            await createPassword();
        }
    });
}

main();     