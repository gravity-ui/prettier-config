/** @type {import('prettier').Config} */
const config = {
    bracketSpacing: false,
    tabWidth: 4,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
        {
            files: ['*.md', '*.json', '*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
