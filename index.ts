import Server from './classes/server';
import {SERVER_PORT} from './global/enviroment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors'

const server = new Server();



//Configuración de body-parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//Configuración de cors
server.app.use(cors({origin: true,credentials: true}));


//Configuración de rutas
server.app.use('/',router);


server.start(()=>{
    console.log(`El servidor está corriendo el puerto ${SERVER_PORT}`);
})

