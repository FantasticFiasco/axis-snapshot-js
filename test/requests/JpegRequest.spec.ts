import { Connection, Protocol, SnapshotOptions } from './../../src';
import { JpegRequest } from './../../src/requests/JpegRequest';

describe('get parameters request', () => {
    const connection = new Connection(Protocol.Http, '1.2.3.4', 80, 'root', 'pass');

    describe('#url', () => {
        test('should return URL without options', () => {
            // Act
            const request = new JpegRequest(connection);

            // Assert
            expect(request.url).toBe(`${connection.url}/axis-cgi/jpg/image.cgi`);
        });

        test('should return URL with empty options', () => {
            // Act
            const options: SnapshotOptions = {};
            const request = new JpegRequest(connection, options);

            // Assert
            expect(request.url).toBe(`${connection.url}/axis-cgi/jpg/image.cgi`);
        });

        test('should return URL with single option', () => {
            // Arrange
            const permutations: { options: SnapshotOptions; expectedQueryString: string }[] = [
                { options: { resolution: '320x240' }, expectedQueryString: 'resolution=320x240' },
                { options: { camera: 1 }, expectedQueryString: 'camera=1' },
                { options: { camera: 'quad' }, expectedQueryString: 'camera=quad' },
                { options: { compression: 50 }, expectedQueryString: 'compression=50' },
                { options: { rotation: 180 }, expectedQueryString: 'rotation=180' },
                { options: { palette: 'Axis' }, expectedQueryString: 'palette=Axis' },
                { options: { squarepixel: 1 }, expectedQueryString: 'squarepixel=1' },
            ];

            for (const permutation of permutations) {
                // Act
                const request = new JpegRequest(connection, permutation.options);

                // Assert
                expect(request.url).toBe(`${connection.url}/axis-cgi/jpg/image.cgi?${permutation.expectedQueryString}`);
            }
        });

        test('should return URL with multiple options', () => {
            // Arrange
            const permutations: { options: SnapshotOptions; expectedQueryString: string }[] = [
                { options: { resolution: '320x240', camera: 1 }, expectedQueryString: 'resolution=320x240&camera=1' },
                { options: { camera: 1, compression: 50 }, expectedQueryString: 'camera=1&compression=50' },
                { options: { compression: 50, rotation: 180 }, expectedQueryString: 'compression=50&rotation=180' },
                { options: { rotation: 180, palette: 'Axis' }, expectedQueryString: 'rotation=180&palette=Axis' },
                { options: { palette: 'Axis', squarepixel: 1 }, expectedQueryString: 'palette=Axis&squarepixel=1' },
            ];

            for (const permutation of permutations) {
                // Act
                const request = new JpegRequest(connection, permutation.options);

                // Assert
                expect(request.url).toBe(`${connection.url}/axis-cgi/jpg/image.cgi?${permutation.expectedQueryString}`);
            }
        });
    });
});
