import fs from 'fs'
import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});


const filepath = './memes/';


fs.readdir(filepath,(err, data) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
      data.map(item => {
          let dir = filepath+item;
          //console.log(item)
          upload(dir,item)

        });
  

  }});

async function upload(filePath, fileName) {
    const img = fs.readFileSync(filePath);
    const b64 = Buffer.from(img).toString('base64');

    console.log(filePath, fileName);

    await client.data.creator()
        .withClassName('Meme')
        .withProperties({
            image: b64,
            text: fileName
        })
        .do();

}