import express from 'express';
import SocketIO from 'socket.io';
import initWebSocket from './app/initWebSocket';
import initWebAPI from './app/initWebAPI';

const PORT = process.env.PORT || 8080;

const app = express();
const server = app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`); // eslint-disable-line no-console
});
const io = SocketIO(server);

initWebAPI(app);
initWebSocket(io);
