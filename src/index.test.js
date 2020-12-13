const stripQuotes = require("./index");

describe("Strip Quotes function", () => {
  test("it should remove all quotes", () => {

    const string = "I'm Your father";

    const output = `Im Your father`;

    expect(stripQuotes(string)).toEqual(output);
  });

  test("it should remove all smart quotes", () => {

    const string = `««I'm Your father»»`;

    const output = `Im Your father`;

    expect(stripQuotes(string)).toEqual(output);
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
});