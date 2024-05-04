export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
/**
 * @param {string} str
 */
export const parseJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    throw new ParseError("Invalid JSON string");
  }
}
// END
