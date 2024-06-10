import { conectarDB } from "./config/db.js";
import { serverStart } from "./server/server.js";
import { styleText } from "node:util"


const main = () => {
    console.log(styleText('red', '--Inicio--'));
    conectarDB()
    serverStart()
}

(async () => {
    main()
})()