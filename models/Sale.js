import mongoose from 'mongoose';

const {Schema} = mongoose;

const SalesSchema = new Schema({
    productId: String,
    orderId: String,
    timeStamp: Date
});

export default mongoose.model('Sale', SalesSchema);