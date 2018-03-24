const { writeFileSync, existsSync } = require('fs');
const { resolve } = require('path');
const axios = require('axios').default;


axios({
    url: 'https://leetcode.com/api/problems/all/'
}).then(res => {
    let data = res.data;
    let pairs = data.stat_status_pairs;

    let flatten = []
    pairs.forEach(arr => {
        flatten = flatten.concat(arr);
    });

    console.log('total:', flatten.length);

    flatten.map(item => {
        let stat = item.stat;

        let filename = `${stat.frontend_question_id}.${stat.question__title_slug}.js`;
        // let testfilename = `${stat.frontend_question_id}.${stat.question__title_slug}.test.js`;
        
        if (!existsSync(resolve(__dirname, '../src', filename))) {
            console.log('write file front id:', stat.frontend_question_id);
            writeFileSync(resolve(__dirname, '../src', filename), '');
        }
    });

    console.log('generate all new file success!');

})