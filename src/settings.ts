import path from 'path';
import "reflect-metadata";
const md = require('module-alias');

/**
 * initializing dotEnv
 */
require('dotenv').config();



/**
 * applications sourcePath
 * @var src
 */
const src = path.dirname(process.mainModule!.filename);
const srcFolderName = require.main?.path;
console.log("YOYOY" ,srcFolderName)
console.log(srcFolderName)

/**
 * registering module aliases
 */
md.addAliases({
    '@src' : src
})

