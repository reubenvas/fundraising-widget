import { promises as fs } from 'fs';
import fundRaiseConfig from '../fundraiseConfig.json';

export default (io: SocketIO.Server): void => {
    io.on('connection', (socket) => {
        socket.on('addCurrentFunding', async (addedAmount: number) => {
            try {
                fundRaiseConfig.current += addedAmount;
                await fs.writeFile('fundraiseConfig.json', JSON.stringify(fundRaiseConfig));
                io.emit('updateCurrent', { newCurrent: fundRaiseConfig.current });
            } catch (err) {
                console.error(err); // eslint-disable-line no-console
            }
        });
    });
};
