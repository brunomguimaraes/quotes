const stripQuotes = require("./index");

describe("Strip Quotes function", () => {
  test("it should remove all quotes", () => {

    const string = `I'm 'Your father'`;

    const output = `Im Your father`;

    expect(stripQuotes(string)).toEqual(output);
  });

  test("it should remove all quotes", () => {

    const string = `I'm ""'''""'''""'''""'''""'''Your father""'''`;

    const output = `Im Your father`;

    expect(stripQuotes(string)).toEqual(output);
  });

  test("it should remove all smart quotes", () => {

    const string = `««I'm Your father»»`;

    const output = `Im Your father`;

    expect(stripQuotes(string)).toEqual(output);
  });

  test("it should remove all smart quotes except »", () => {

    const string = `««I'm Your father»»`;

    const output = `Im Your father»»`;

    expect(stripQuotes(string, { quotesToKeep: [`»`] })).toEqual(output);
  });

  test("it should remove all smart quotes except » and « ", () => {

    const string = `"'〟〟«I'm Your father»"'`;

    const output = `«Im Your father»`;

    expect(stripQuotes(string, { quotesToKeep: [`»`, `«`] })).toEqual(output);
  });

  test("it should remove all quotes but keep apostrophe words", () => {

    const string = `\`I'm Your father\``;

    const output = `I'm Your father`;

    expect(stripQuotes(string, { keepApostropheWords: true })).toEqual(output);
  });

  test("it should remove all quotes but keep smart quote apostrophe words", () => {

    const string = `\`I❜m Your father\``;

    const output = `I❜m Your father`;

    expect(stripQuotes(string, { keepApostropheWords: true })).toEqual(output);
  });

  test("it should remove all quotes but keep smart quote apostrophe words even if al quotes are the same", () => {

    const string = `’I’m you’re ’father’’`;

    const output = `I’m you’re father`;

    expect(stripQuotes(string, { keepApostropheWords: true })).toEqual(output);
  });

  test("it should remove all smart quotes except » and « and should keep apostrophe words", () => {

    const string = `"'〟〟«I'm Your father»"'`;

    const output = `«I'm Your father»`;

    expect(stripQuotes(string, { keepApostropheWords: true, quotesToKeep: [`»`, `«`] })).toEqual(output);
  });

  test("it should remove all smart quotes except » and « and should keep apostrophe on words that doesn't have ‛ smart quote apostrophe", () => {

    const string = `"'〟〟«I'm Your father. I said I‛MM»"'`;

    const output = `«I'm Your father. I said IMM»`;

    expect(stripQuotes(string, { keepApostropheWords: true, quotesToKeep: [`»`, `«`], apostrophesToRemove: [`‛`] })).toEqual(output);
  });
});