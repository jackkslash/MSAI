
async function upload(filepath) {
    const img = readFileSync(filePath);
    const fileName = "test"
    const b64 = Buffer.from(img).toString('base64');

    await client.data.creator()
        .withClassName('Meme')
        .withProperties({
            image: b64,
            text: fileName
        })
        .do();

}