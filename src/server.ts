import { writeFileSync } from 'fs';
import { Connection, Protocol } from './';
import { Snapshot } from './Snapshot';

const connection = new Connection(Protocol.Http, '192.168.1.102', 80, 'admin', '32naJzkJdZ!7*HK&Dz');
const snapshot = new Snapshot(connection);

snapshot.get().then((image: string) => writeFileSync('image.jpeg', image));
