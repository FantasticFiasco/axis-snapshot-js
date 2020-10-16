import { Connection, Protocol } from './../../src';
import { JpegRequest } from './../../src/requests/JpegRequest';

describe('get parameters request', () => {
    const connection = new Connection(Protocol.Http, '1.2.3.4', 80, 'root', 'pass');

    describe('#url', () => {
        test('should return URL', () => {
            // Act
            const request = new JpegRequest(connection);

            // Assert
            expect(request.url).toBe(`${connection.url}/axis-cgi/jpg/image.cgi`);
        });
    });
});
