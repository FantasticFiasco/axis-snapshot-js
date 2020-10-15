import { writeFileSync } from 'fs';
import { Connection, Protocol } from './';
import { Images } from './Images';

const connection = new Connection(Protocol.Http, '192.168.1.102', 80, 'admin', '32naJzkJdZ!7*HK&Dz');
const images = new Images(connection);

images.get().then((image: Buffer) => writeFileSync('image.jpeg', image));
