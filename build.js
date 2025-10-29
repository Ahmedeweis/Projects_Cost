const fs = require('fs');
const path = require('path');
const buildTime = new Date().toLocaleString('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace('BUILD_TIME_PLACEHOLDER', buildTime);
fs.writeFileSync(htmlPath, html);
console.log('تم تحديث وقت البناء:', buildTime);