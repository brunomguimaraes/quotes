const stripQuotes = (
  string,
  options = {
    keepApostropheWords: false,
    quotesToKeep: [],
    apostrophesToRemove: [],
  }
) => {
  // smartQuotes list ref: https://unicode-table.com/en/sets/quotation-marks/
  const defaultQuotes = [
    '«',
    '‹',
    '»',
    '›',
    '„',
    '“',
    '‟',
    '”',
    '’',
    '"',
    '❝',
    '❞',
    '❮',
    '❯',
    '〝',
    '〞',
    '〟',
    '＂',
    '‚',
    '‘',
    '‛',
    '❛',
    '❜',
    '"',
    "'",
    '`',
  ];
  const defaultApostrophes = [`‘`, `‛`, `❛`, `❜`, `'`, `’`];
  const { keepApostropheWords, quotesToKeep, apostrophesToRemove } = options;

  // checks if there are any quotes user want to keep
  let quotes = quotesToKeep
    ? defaultQuotes.filter((quote) => !quotesToKeep.includes(quote))
    : defaultQuotes;
  let apostrophes = apostrophesToRemove
    ? defaultApostrophes.filter((apostrophe) => !apostrophesToRemove.includes(apostrophe))
    : defaultApostrophes;

  // checks if keep apostrophe words(smart single quote or no) between ASCII letters
  const { regex, replacement } = keepApostropheWords
    ? {
        regex: new RegExp(`([a-zA-Z][` + apostrophes + `][a-zA-Z])|[` + quotes.join('') + `]`, 'g'),
        replacement: '$1',
      }
    : { regex: new RegExp(`[` + quotes.join('') + `]`, 'g'), replacement: '' };

  return string.replace(regex, replacement);
};

module.exports = stripQuotes;
