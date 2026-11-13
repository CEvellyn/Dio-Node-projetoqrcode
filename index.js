import "dotenv/config";
import prompt from "prompt";
import figlet from "figlet";

import mainPrompt from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.start();


    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.log("Erro ao exibir o menu:", err);
            return;
        }

        if (choose.select == 1) {
             await createQRcode();
        }
        if (choose.select == 2) {
            await createPassword();
        }
    });
}
function showBanner() {
    figlet("QRCode", (err, data) => {
        if (err) {
            console.log("Gerador de QRCode");
        } else {
            console.log(data);
        }
        console.log("Gerador de QRCode e Senhas\n");

        main();
    
        });

}

showBanner();


