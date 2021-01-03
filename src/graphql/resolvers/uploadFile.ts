import shortid from "shortid"
import { createWriteStream, mkdir } from "fs"
import File = require('../../models/UploadFile')
import * as path from "path";

const files = []

module.exports = {

  uploadFile: async (_: any, { file }: any) => {
    console.log(file)
    const { createReadStream, filename } = await file;

    await new Promise(res =>
      createReadStream()
        .pipe(createWriteStream(path.join(__dirname, "../images", filename)))
        .on("close", res)
    );

    files.push(filename);

    return true;
  }
}