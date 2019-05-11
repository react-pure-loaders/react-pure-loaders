module.exports = {
  "*.ts": [
    "npm run eslint:fix",
    "git add"
  ],
  "*.tsx": [
    "npm run eslint:fix",
    "git add"
  ]
};
