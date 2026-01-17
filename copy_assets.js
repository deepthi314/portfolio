const fs = require('fs');
const path = require('path');

console.log('Starting asset copy script...');

const files = [
    {
        src: 'C:/Users/poorv/.gemini/antigravity/brain/697a9e5b-68bf-48e4-b875-24c5c19abf1b/uploaded_image_0_1768568073607.png',
        dest: 'c:/Users/poorv/OneDrive/Desktop/Portfolio/public/resume/resume-1.png'
    },
    {
        src: 'C:/Users/poorv/.gemini/antigravity/brain/697a9e5b-68bf-48e4-b875-24c5c19abf1b/uploaded_image_1_1768568073607.png',
        dest: 'c:/Users/poorv/OneDrive/Desktop/Portfolio/public/resume/resume-2.png'
    }
];

files.forEach(file => {
    console.log(`Checking source: ${file.src}`);
    if (fs.existsSync(file.src)) {
        console.log(`Source exists. Copying to ${file.dest}...`);
        try {
            fs.copyFileSync(file.src, file.dest);
            console.log(`SUCCESS: Copied to ${file.dest}`);
        } catch (err) {
            console.error(`ERROR copying file:`, err);
        }
    } else {
        console.error(`SOURCE NOT FOUND: ${file.src}`);
    }
});
console.log('Script finished.');
