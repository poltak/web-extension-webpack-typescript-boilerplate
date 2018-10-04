/**
 * Everything in here gets injected into the generated HTML as link/script tags.
 * See: https://github.com/jharris4/html-webpack-include-assets-plugin#example
 */
exports.htmlAssets = [
    'lib/browser-polyfill.js'
]

/**
 * Set the manifest version to be equal to `package.json` version.
 */
function transformManifestVersion(content) {
    const manifest = JSON.parse(content.toString())
    manifest.version = process.env.npm_package_version
    return Buffer.from(JSON.stringify(manifest))
}

/**
 * Everything in here gets copied as-is to the output dir.
 * See: https://github.com/webpack-contrib/copy-webpack-plugin#usage
 */
exports.copyPatterns = [
    {
        from: 'src/manifest.json',
        to: '.',
        transform: transformManifestVersion,
    },
    { from: 'src/img', to: 'img' },
    {
        from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js',
        to: 'lib/',
    },
    {
        from: 'src/fonts/*/*',
        to: 'fonts/[name].[ext]',
    },
]
