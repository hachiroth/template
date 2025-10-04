/** @type {import('cspell').CSpellUserSettings} */
export default {
  import: ["@cspell/dict-lorem-ipsum/cspell-ext.json"],
  ignorePaths: [
    "**/node_modules/**",
    "**/dist/**",
    "**/cache/**",
    "**/out/**",
    "**/output/**",
    "**/*-lock.*"
  ],
  dictionaries: ["custom-dict"],
  dictionaryDefinitions: [
    {
      name: "custom-dict",
      path: ".cspell/custom-dict.txt",
      addWords: true
    }
  ]
};
