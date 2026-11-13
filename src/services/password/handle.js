import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log(err);
        return;
    }

    let characters = "error on aplication";
    return

    const isIsmall =result.type == 2;

    qr.generate(result.link, { small: isIsmall }, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:/n"));
        console.log(qrcode);

    });

    
    }



    export defaut handle;