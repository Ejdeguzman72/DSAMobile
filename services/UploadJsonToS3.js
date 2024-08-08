import s3 from '../config/aws-config';

const uploadJsonToS3 = async (jsonObject, bucketName, fileName) => {
    try {
      // Convert JSON object to string
      const jsonString = JSON.stringify(jsonObject);
  
      // Set up S3 upload parameters
      const params = {
        Bucket: bucketName,
        Key: fileName, // File name you want to save as in S3
        Body: jsonString,
        ContentType: 'application/json',
      };
  
      // Upload the file to S3
      const data = await s3.upload(params).promise();
      console.log(`File uploaded successfully at ${data.Location}`);
      return data.Location;
    } catch (error) {
      console.error(`Error uploading file: ${error.message}`);
      throw error;
    }
  };

  export default uploadJsonToS3;
  