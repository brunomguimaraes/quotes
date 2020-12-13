const stripQuotes = (string, options = {
  keepApostropheWords: false,
}) => {
  // smartQuotes list ref: https://unicode-table.com/en/sets/quotation-marks/
  const defaultQuotes = ['«','‹','»','›','„','“','‟','”','’','"','❝','❞','❮','❯','〝','〞','〟','＂','‚','‘','‛','❛','❜','"', "'", '`'];
  const { keepApostropheWords } = options;

  // checks if keep apostrophe words(smart single quote or no) between ASCII letters 
  const {regex, replacement} = keepApostropheWords ?
  { regex: new RegExp(`([a-zA-Z][‘‛❛❜'’][a-zA-Z])|[` + defaultQuotes.join('') + `]`, 'g'), replacement: '$1' } :
  { regex: new RegExp(`[` + defaultQuotes.join('') + `]`, 'g'), replacement: ''};
  
  return string.replace(regex, replacement);
}

module.exports = stripQuotes;
