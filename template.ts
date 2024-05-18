export const defaultPromptTemplate = [
  "suggest 10 commit messages based on the following diff:",
  "{{diff}}",
  "",
  "commit messages should:",
  // " - follow conventional commits",
  // " - message format should be: <type>[scope]: <description>",
  " - follow gitmoji commit convention",
  " - format should be :emoji: (<scope>): <description>",
  "",
  "examples:",
  " - :recycle: Migrate from yarn to pnpm (#1503)",
  " - :wrench: Run turborepo build in dependencies (#1419)",
].join("\n");
