import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const planetSchema = new Schema({
    name: { type: String, required: true, },
    ObjectId: { type: ObjectId, ref: 'Galaxy', required: true },
    StarId: { type: ObjectId, ref: 'Star', required: true }

},
    { timestamps: true, toJSON: { virtuals: true } })