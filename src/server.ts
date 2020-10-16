import { writeFileSync } from 'fs';
import { Connection, Protocol } from './';
import { Snapshot } from './Snapshot';

const connection = new Connection(Protocol.Http, '192.168.1.130', 80, 'root', '8l1QyDhbZGprv');
const snapshot = new Snapshot(connection);

snapshot.jpeg().then((image: Buffer) => writeFileSync('image.jpeg', image));
