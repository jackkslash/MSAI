import fs from 'fs'

const filepath = './memes/';


fs.readdir(filepath, 'utf-8')
  .then(data => {

    data.map(item => {
        // console.log(filepath+item)
        let dir = filepath+item;
        upload(dir, item)
      });

    // console.log(filepath+data);
  });

async function upload(filePath, fileName) {
     const img = fs.readFileSync(filePath, );
    // const fileName = filename
    // const b64 = Buffer.from(img).toString('base64');

    console.log(filePath, fileName);

    // await client.data.creator()
    //     .withClassName('Meme')
    //     .withProperties({
    //         image: b64,
    //         text: fileName
    //     })
    //     .do();

}