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
const srcFolderName = require.main?.path;

if (srcFolderName) {
    const src = path.dirname(srcFolderName);
    /**
     * registering module aliases
     */
    md.addAliases({
        '@src' : src
    })
} else {
    throw new Error("Module alias initialization failed! require.main?.path returned undefined!")
}
