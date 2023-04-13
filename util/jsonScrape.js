import fs from 'fs'

let url = process.argv[2];

if (!url) {
    console.log('Link missing please enter the api to scrape the data from.')
} else {
    fetch(url)
        .then(res => res.json())
        .then(out =>
            fs.writeFile('memes.json', JSON.stringify(out), (error) => {
                if (error) throw error;
            }),
            console.log('Scrape complete')
        );
}

