import { Injectable } from "@nestjs/common";
import { Client } from 'minio';

@Injectable()
export class MinioService {

    private readonly minioClient: Client;

    constructor() {
        this.minioClient = new Client({
            endPoint: process.env.MINIO_ENDPOINT,
            port: parseInt(process.env.MINIO_PORT, 10),
            useSSL: process.env.MINIO_USE_SSL === 'true',
            accessKey: process.env.MINIO_ACCESS_KEY as string,
            secretKey: process.env.MINIO_SECRET_KEY as string,
        });
    }

    async uploadFile(bucketName: string, file: Express.Multer.File): Promise<string> {
        const fileName = `${Date.now()}-${file.originalname}`;
        
        const validBuffer = Buffer.from(file.buffer);        

        const exists = await this.minioClient.bucketExists(bucketName);
        if (!exists) {
          await this.minioClient.makeBucket(bucketName, 'eu-west-1');
          console.log(`Bucket ${bucketName} created`);
        }
      
        await this.minioClient.putObject(
          bucketName,
          fileName,
          validBuffer,
          validBuffer.length,
          { 'Content-Type': file.mimetype },
        );
      
        return `http://localhost:9000/${bucketName}/${fileName}`;
      }
      
      

}