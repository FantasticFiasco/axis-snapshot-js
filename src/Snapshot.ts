import { Connection } from './Connection';
import { JpegRequest } from './requests/JpegRequest';

/**
 * Class responsible for getting snapshots from cameras.
 */
export class Snapshot {
    /**
     * Initializes a new instance of the class.
     * @param connection The connection to the device.
     */
    constructor(private readonly connection: Connection) {}

    /**
     * Takes a JPEG snapshot from the camera.
     * @throws {UnauthorizedError} User is not authorized to perform operation.
     * @throws {RequestError} Request failed.
     */
    public async jpeg(): Promise<Buffer> {
        const request = new JpegRequest(this.connection);
        const response = await request.send();

        return response;
    }
}
