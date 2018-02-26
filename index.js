/*
 * This file is part of omarkhayyam
 * Copyright: (c) 2018 Mehdi Sadeghi
 * License: MIT
 */

const yaml = require('yamljs')
const path = require('path')
 
const data = yaml.load(path.join(path.dirname(__filename), 'khayyam.yaml'))

let quatrains = []

for (let key in data['RUBAIYAT']) {
    let item = []
    for (let q in data['RUBAIYAT'][key]) {
        item.push(data['RUBAIYAT'][key][q])
    }
    quatrains.push(item)
}

module.exports = quatrains