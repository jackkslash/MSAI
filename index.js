import fs from 'fs'
import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaConfig = {
    'class': 'Meme',
    'vectorizer': 'img2vec-neural',
    'vectorIndexType': 'hnsw',
    'moduleConfig': {
        'img2vec-neural': {
            'imageFields': [
                'image'
            ]
        }
    },
    'properties': [
        {
            'name': 'image',
            'dataType': ['blob']
        },
        {
            'name': 'text',
            'dataType': ['string']
        }
    ]
}


//Delete Schema
// const schemaRes = client.schema
//     .classDeleter()
//     .withClassName('Meme')
//     .do();

const schemaRes = await client.schema.getter().do();

//Create schema
// await client.schema
//     .classCreator()
//     .withClass(schemaConfig)
//     .do();


console.log(schemaRes)

const dir = "./search/test.jpg"

// const test = Buffer.from(readFileSync(dir)).toString('base64');
const img = fs.readFileSync(dir);
const b64 = Buffer.from(img).toString('base64');

const resImage = await client.graphql.get()
    .withClassName('Meme')
    .withFields(['image'])
    .withNearImage({ image: b64})
    .withLimit(1)
    .do();

// Write result to filesystem
const result = resImage.data.Get.Meme[0].image;
fs.writeFileSync('./search/result.jpg', result, 'base64');