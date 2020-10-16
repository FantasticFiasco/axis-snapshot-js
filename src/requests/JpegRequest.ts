import { Connection } from '../Connection';
import { Request } from './Request';

export class JpegRequest extends Request {
    constructor(connection: Connection) {
        super(connection);
    }

    public async send(): Promise<string> {
        const response = await this.get(this.url);

        return response;
    }

    public get url(): string {
        return `${this.connection.url}/axis-cgi/jpg/image.cgi`;
    }
}
