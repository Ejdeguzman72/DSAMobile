import { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION } from '@env';

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: AWS_REGION
});

const s3 = new AWS.S3();

export default s3;