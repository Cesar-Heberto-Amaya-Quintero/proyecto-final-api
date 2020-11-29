import mongoose from 'mongoose';

const {Schema} = mongoose;

const picsdemoSchema = new Schema({
    picpath: String
});

export default mongoose.model('picsdemo', GameSchema);