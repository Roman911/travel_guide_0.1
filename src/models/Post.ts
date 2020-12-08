import mongoose, { Schema, Document } from 'mongoose'

export interface IPost extends Document {
  idAuthor: string,
  type_material: string,
  title: string,
  cover: string,
  link: string,
  tags: object,
  tickets: object,
  small_text: string,
  coordinates: object,
  location: string,
  work_time: string,
  isType: string,
  photo: string,
  text: string,
  editor: string,
  views: number,
  likes: object,
  locationId: string,
  isPrice: string,
  how_to_get_there: string,
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
}

const PostSchema = new Schema({
  idAuthor: String,
  type_material: String,
  title: String,
  cover: String,
  link: String,
  tags: Array,
  tickets: Array,
  small_text: String,
  coordinates: Array,
  location: String,
  work_time: String,
  isType: String,
  photo: String,
  post: String,
  editor: String,
  views: Number,
  likes: Array,
  text: String,
  locationId: String,
  isPrice: String,
  how_to_get_there: String,
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: {
    type: Date,
    default: new Date
  },
}, {
  timestamps: true
})

module.exports = mongoose.model<IPost>('Post', PostSchema)