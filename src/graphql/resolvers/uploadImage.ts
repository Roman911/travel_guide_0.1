const Upload = require('../../models/UploadImage')

module.exports = {
  uploadImage: async (args: any) => {

    const image = new Upload({
      imgSrc: args.file.path
    })
    console.log(image)
    return await image.save()
  }
}