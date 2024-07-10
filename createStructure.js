const fs = require('fs');
const path = require('path');

// Define directories and files to be created
const directories = [
  'public/css',
  'public/images',
  'src/assets',
  'src/components',
  'src/pages',
  'src/styles',
  'src/utils',
  'src/services',
  'src/config',
];

const files = [
  'public/css/styles.css',
  'public/images/demo-image.jpg',
  'public/index.html',
  'src/assets/demo-asset.txt',
  'src/components/Header.js',
  'src/components/Footer.js',
  'src/components/Header.css',
  'src/components/Footer.css',
  'src/pages/HomePage.js',
  'src/pages/ServicesPage.js',
  'src/pages/RealEstatePage.js',
  'src/pages/MedicalVacationPage.js',
  'src/pages/BusinessSolutionsPage.js',
  'src/pages/AboutPage.js',
  'src/pages/ContactPage.js',
  'src/pages/HomePage.css',
  'src/pages/ServicesPage.css',
  'src/pages/RealEstatePage.css',
  'src/pages/MedicalVacationPage.css',
  'src/pages/BusinessSolutionsPage.css',
  'src/pages/AboutPage.css',
  'src/pages/ContactPage.css',
  'src/styles/global.css',
  'src/utils/helper.js',
  'src/services/api.js',
  'src/config/config.js',
  'src/App.js',
  'src/index.js',
  'README.md',
];

// Create directories
directories.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

// Create empty files
files.forEach(file => {
  fs.writeFileSync(path.join(__dirname, file), '');
});

console.log('Directory structure created successfully.');
