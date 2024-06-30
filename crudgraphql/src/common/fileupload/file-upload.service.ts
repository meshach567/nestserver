import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { FileUpload } from 'graphql-upload-ts';

@Injectable()
export class FileUploadService {
  async uploadFile(file: FileUpload): Promise<string> {
    const { createReadStream, filename } = file;
    const filePath = join(process.cwd(), 'uploads', filename);
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', () => resolve(filePath))
        .on('error', reject),
    );
  }
}
