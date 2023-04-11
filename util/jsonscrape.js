import fs from 'fs/promises'
import fetch from 'node-fetch'

const filepath = './memes.json';

const dir = './memes/';

// if (!fs.existsSync(dir)){
//   fs.mkdirSync(dir);
//   console.log('Folder Created Successfully.');
// }


fs.readFile(filepath, 'utf-8')
  .then(data => {

    const jsonData = JSON.parse(data);


    jsonData.data.memes.map(item => {
      const name = item.name.replace(/\s/g, '')
      const ext = name+".jpg"
      console.log(item.url + " " + ext)
      download(item.url,ext)
    });
  });

  async function download(url, fileName) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(dir+fileName, buffer);
  }