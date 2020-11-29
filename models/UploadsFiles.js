import mongoose from 'mongoose';

const {Schema} = mongoose;

const UploadsFilesSchema = new Schema({
    lenght: String,
    chunkSize: String,
    uploadDate: String,
    filename: String,
    md5: String, 
    contentType: String
});

export default mongoose.model('UploadsFiles', UploadsFilesSchema);