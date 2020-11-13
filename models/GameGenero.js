import mongoose from 'mongoose';

const {Schema} = mongoose;

const GameGeneroSchema = new Schema({
    name: String
});

export default mongoose.model('GameGenero', GameGeneroSchema);
