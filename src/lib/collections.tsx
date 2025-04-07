import fs from "fs";
import path from "path";
import matter from "gray-matter";


export function getAllCollections(collection: string) {
  const contentDirectory = path.join(process.cwd(), `src/content/${collection}`);
  const fileNames = fs.readdirSync(contentDirectory);

  const allContentData = fileNames.map(fileName => {

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });

  return allContentData;
}