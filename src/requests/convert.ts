import { SnapshotOptions } from '../SnapshotOptions';

export function toQueryString(options?: SnapshotOptions): string | null {
    if (options === undefined) {
        return null;
    }

    const parameters = Object.entries(options);
    if (parameters.length === 0) {
        return null;
    }

    return parameters.map(([key, value]) => `${key}=${value}`).join('&');
}
