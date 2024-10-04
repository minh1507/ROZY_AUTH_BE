import { join } from 'path';
import { randomBytes } from 'crypto';

export default class SysHelper {
  static pathConfig = (path: string, type: 'entity' | 'schemas'): string => {
    return join(__dirname, '..', '..', path, `/**/*.${type}{.ts,.js}`);
  };

  static prefix = (path: string): any => {
    const root = path.split('\\');
    return root[root.length - 1];
  };

  static typeof = (value) => Object.prototype.toString.call(value).slice(8, -1);

  static getSecureRandomIndex(max: number): number {
    const randomBytesBuffer = randomBytes(4);
    const randomNumber = randomBytesBuffer.readUInt32BE(0);
    return randomNumber % max;
  }
}
