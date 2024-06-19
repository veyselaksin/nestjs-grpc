import * as fs from 'node:fs';

export class JsonDB {
    constructor(path:string) {
    }

    read(): any {
      const data:string = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    }

    write(data: any): void {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
    }

}