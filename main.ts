// One Emoji, One Smile — a make.fun bounty entry.
//
// The entry is exactly one emoji: U+1F31E SUN WITH FACE. A sun with a face
// reads as warm and friendly at first glance, needs no context, is read the
// same way by a stranger of any age or background, is clearly a choice
// rather than the first smiley that comes to mind, and carries no intimacy,
// sarcasm or flirtation that would read oddly coming from someone unknown.
//
// This program validates that choice and writes it, and nothing else, to
// the entry file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one emoji, written as an escape so the source carries no ambiguity.
const EMOJI = "\u{1F31E}";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// The entry must be exactly one grapheme cluster, and that cluster must be
// an emoji character — no words, no caption, no extra whitespace.
const clusters = [
  ...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(EMOJI),
];
if (clusters.length !== 1) {
  fail("entry must be exactly one grapheme");
}
if (!/\p{Extended_Pictographic}/u.test(EMOJI)) {
  fail("entry must be an emoji");
}
if (EMOJI.trim().length === 0) {
  fail("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Write the emoji alone: no trailing newline, no other characters.
writeFileSync(outPath, EMOJI, "utf8");

// Read the file back and confirm it holds the emoji byte for byte —
// and that what is on disk still segments to exactly one emoji grapheme,
// so a stray byte or newline the write step introduced cannot slip through.
const written = readFileSync(outPath, "utf8");
if (written !== EMOJI) {
  fail("entry file does not match the emoji byte for byte");
}
const writtenClusters = [
  ...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(written),
];
if (
  writtenClusters.length !== 1 ||
  !/\p{Extended_Pictographic}/u.test(written)
) {
  fail("entry file does not hold exactly one emoji");
}

console.log(
  `wrote ${EMOJI} (${Buffer.byteLength(EMOJI, "utf8")} bytes) to ${outPath}`,
);
