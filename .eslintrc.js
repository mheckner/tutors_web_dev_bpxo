module.exports = {
    extends: ['plugin:md/recommended'],
    overrides: [
        {
            files: ['*.md'],
            parser: 'markdown-eslint-parser',
            rules: {
                "maximum-line-length": "off",
            }
        },
    ],
}