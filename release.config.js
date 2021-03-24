module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/nekomamoushi/react-app-cicd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
