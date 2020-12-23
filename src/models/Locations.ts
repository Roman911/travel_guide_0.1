import mongoose, { Schema, Document } from 'mongoose'

export interface ILocations extends Document {
  idAuthor: string,
  linkToPost: string,
  cover: string,
  title: string,
  tags: string[],
  small_text: string,
  coordinates: object,
  isType: string,
  location: string[],
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
}

const LocationsSchema = new Schema({
  idAuthor: String,
  linkToPost: String,
  cover: String,
  title: String,
  tags: Array,
  small_text: String,
  coordinates: Array,
  isType: String,
  location: Array,
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: {
    type: Date,
    default: new Date
  },
}, {
  timestamps: true
})

module.exports = mongoose.model<ILocations>('Locations', LocationsSchema)