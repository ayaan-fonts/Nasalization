import { FONTFAMILY, getFontList, subsets } from "./subset-utils";

const fontList = getFontList(FONTFAMILY.Nasalization);

subsets(
  // woff
  ["static",    "woff",  fontList],
  ["glyph",     "woff",  fontList],
  ["dynamic",   "woff",  fontList],

  // woff2
  ["static",    "woff2", fontList],
  ["glyph",     "woff2", fontList],
  ["dynamic",   "woff2", fontList]
);