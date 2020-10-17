import { Connection } from '../Connection';
import { SnapshotOptions } from '../SnapshotOptions';
import { Request } from './Request';

export class JpegRequest extends Request {
    constructor(connection: Connection, private readonly options?: SnapshotOptions) {
        super(connection);
    }

    public async send(): Promise<Buffer> {
        const response = await this.get(this.url);

        return response;
    }

    public get url(): string {
        let url = `${this.connection.url}/axis-cgi/jpg/image.cgi`;

        const query = this.buildQuery();
        if (query !== null) {
            url += `?${query}`;
        }

        return url;
    }

    private buildQuery(): string | null {
        if (!this.options) {
            return null;
        }

        const queryParameters: string[] = [];
        for (const [key, value] of Object.entries(this.options)) {
            queryParameters.push(`${key}=${value}`);
        }

        if (queryParameters.length === 0) {
            return null;
        }

        return queryParameters.join('&');
    }
}
