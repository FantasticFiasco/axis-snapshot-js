import * as expect from '@fantasticfiasco/expect';
import { SnapshotOptions } from '../SnapshotOptions';

export function toQueryString(options?: SnapshotOptions): string | null {
    expect.toBeTrue(options?.resolution === undefined || options.resolution.length > 0);
    expect.toBeTrue(options?.palette === undefined || options.palette.length > 0);

    if (options === undefined) {
        return null;
    }

    const parameters = Object.entries(options);
    if (parameters.length === 0) {
        return null;
    }

    return parameters.map(([key, value]) => `${key}=${value}`).join('&');
}
