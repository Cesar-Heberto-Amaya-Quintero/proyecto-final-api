import mongoose from 'mongoose';

const {Schema} = mongoose;

const GameSchema = new Schema({
    name: String,
    author:String,
    genero: String,
    imageUrl: String,
    description: String,
    productGroupId: String
});

export default mongoose.model('Game', GameSchema);