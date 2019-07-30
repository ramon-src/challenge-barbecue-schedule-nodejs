module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleFileExtensions: [
    "js",
    "json"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec).[tj]s?(x)"
  ],
  transformIgnorePatterns: [
    "/node_modules/"
  ]
  // A map from regular expressions to module names that allow to stub out resources with a single module
  // moduleNameMapper: {},
  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,
  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],
  // A map from regular expressions to paths to transformers
  // transform: null,
};
