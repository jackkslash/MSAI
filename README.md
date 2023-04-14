# MSAI

[Weaviate](https://weaviate.io/) is a [vector database](https://learn.microsoft.com/en-us/semantic-kernel/concepts-ai/vectordb) that allows you to create and query embeddings with pre—trained deep learning models. It integrates with ResNet—50 to vectorize images, making it possible to build an image similarity search engine with relative ease.


Set up for use:
```
npm install
docker-compose up -d
```
Create a JSON file from the provide JSON URL:
```
node util/jsonScrape.js https://api.imgflip.com/get_memes
```

Scrape JSON file for all images into a new directory:
```
node util/imageScrape.js
```
Upload the images in the new directory into the [Weaviate](https://weaviate.io/) vector database ready to be searched:

```
node util/imageUpload.js
```

Only after storing the image in the search folder can you run this command to search for similar images.
```
node index.js
```