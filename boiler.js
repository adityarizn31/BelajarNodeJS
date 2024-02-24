const fs = require('fs')

const folderName = process.argv[2] || 'Project';

// mkdir('project', { recursive: true }, (err) => {
//   console.log('di dalam callback');
//   if (err) throw err;
// });

try {

  fs.mkdirSync(folderName);

  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/app.css`, '');

  console.log('Berhasil');
  
} catch (error) {

  console.log(error);

}



