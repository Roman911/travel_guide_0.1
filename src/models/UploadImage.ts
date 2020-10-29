import mongoose, { Schema, Document } from 'mongoose'

export interface IUploadImage extends Document {
  imgSrc: {
    type: string,
    default: string
  }
}

const UploadImageSchema = new Schema({
  imgSrc: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model<IUploadImage>('Upload', UploadImageSchema)