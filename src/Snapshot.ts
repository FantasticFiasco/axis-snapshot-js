import { Connection } from './Connection';
import { JpegRequest } from './requests/JpegRequest';

export class Snapshot {
    /**
     * Initializes a new instance of the class.
     * @param connection The connection to the device.
     */
    constructor(private readonly connection: Connection) {}

    public async get(): Promise<Buffer> {
        const request = new JpegRequest(this.connection);
        const response = await request.send();

        return response;
    }
}
