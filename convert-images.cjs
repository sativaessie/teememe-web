const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const shopFolder = path.join(__dirname, "public", "shop");

const extensions = [".jpg", ".jpeg", ".png"];

async function convertFolder(folder) {
  const items = fs.readdirSync(folder, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(folder, item.name);

    if (item.isDirectory()) {
      await convertFolder(fullPath);
      continue;
    }

    const ext = path.extname(item.name).toLowerCase();

    if (!extensions.includes(ext)) continue;

    const outputPath = path.join(
      folder,
      `${path.basename(item.name, ext)}.webp`
    );

    try {
      await sharp(fullPath)
        .webp({ quality: 82 })
        .toFile(outputPath);

      console.log(`✓ Converted: ${path.relative(shopFolder, fullPath)}`);
    } catch (error) {
      console.error(`✗ Failed: ${fullPath}`);
      console.error(error.message);
    }
  }
}

convertFolder(shopFolder)
  .then(() => {
    console.log("\n🔥 ALL SHOP IMAGES CONVERTED TO WEBP!");
  })
  .catch((error) => {
    console.error(error);
  });