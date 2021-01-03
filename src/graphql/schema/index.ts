const { buildSchema } = require('graphql')

module.exports = buildSchema(`
scalar FileUpload
type Post {
    _id: ID!
    author: Author!
    title: String
    type_material: String
    cover: String
    link: String
    tags: [String]
    tickets: [String]
    small_text: String
    coordinates: [String]
    location: String
    work_time: String
    isType: String
    editor: String
    views: Int
    likes: [String]
    createdAt: String
    text: String
    locationId: String
    isPrice: String
    how_to_get_there: String
}
input PostInput {
  title: String
  idAuthor: ID
  type_material: String
  link: String
  tags: [String]
  tickets: [String]
  small_text: String
  coordinates: [String]
  location: String
  work_time: String
  isType: String
  photo: String
  editor: String
  isPrice: String
  how_to_get_there: String
}
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}
type User {
  _id: ID!
  email: String!
  password: String
}
type Comment {
  idAuthor: ID
  text: String
  createdAt: String
}
type Comments {
  _id: ID!
  postId: ID!
  idAuthor: ID!
  text: String!
  comments: [Comment]
  createdAt: String
}
type Author {
  _id: ID!
  avatar: String
  name: String
}
type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
  avatar: String
  name: String
  email: String
}
type Locations {
  _id: ID!
  idAuthor: String
  cover: String
  linkToPost: String
  title: String
  tags: [String]
  small_text: String
  coordinates: [String]
  isType: String
  createdAt: String
  location: [String]
}
input LocationsInput {
  idAuthor: String
  cover: String
  linkToPost: String
  title: String
  tags: [String]
  small_text: String
  coordinates: [String]
  isType: String
  location: [String]
}
type LocationsUserList {
  _id: ID
  userId: String
  locationId: String
  action: String
  createdAt: String
}
input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}
input UserInput {
  name: String!
  email: String!
  password: String!
}
type File {
  id: ID!
  filename: String!
  mimetype: String!
  path: String!
}
type RootQuery {
    events: [Event!]!
    posts: [Post!]!
    post(_id: ID!): Post!
    login(email: String!, password: String!): AuthData!
    locations: [Locations]
    locationsSort(types: [String]): [Locations]
    location(_id: ID!): Locations
    locationUser(userId: ID!, locationId: ID!): LocationsUserList
    comments(postId: ID!): [Comments]
    author(_id: ID!): Author
    locationsUserList(userId: ID!, action: String): [LocationsUserList]
}
type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    createPost(postInput: PostInput): Post
    postEvent(eventId: ID!): Post!
    cancelPost(postId: ID!): Event!
    addLike(postId: ID!, userId: ID!): Post
    removeLike(postId: ID!, userId: ID!): Post
    createLocations(locationsInput: LocationsInput): Locations
    addLocationsUserList(_id: ID, userId: ID, locationId: ID, action: String): LocationsUserList
    createComment(postId: ID!, idAuthor: ID!, text: String!): Comments
    addComment(_id: ID!, idAuthor: ID!, text: String!): Comments
    removeLocationWithUserList(_id: ID!): LocationsUserList
    uploadFile(file: FileUpload!): File
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`)