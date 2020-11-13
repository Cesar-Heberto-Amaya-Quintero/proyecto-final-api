import mongoose from 'mongoose';

const {Schema} = mongoose;

const GameSchema = new Schema({
    name: String,
    author:String,
    imageUrl: String,
    themeColor: String,
    description: String, 
    gameGeneroId: String
});

export default mongoose.model('Game', GameSchema);