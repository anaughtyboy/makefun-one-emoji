# One Emoji, One Smile 🌞

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/anaughtyboy/makefun-one-emoji/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/anaughtyboy/makefun-one-emoji/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on [make.fun](https://make.fun): send exactly one emoji, the one most likely to make a stranger smile.

## The emoji

🌞

U+1F31E SUN WITH FACE. A sun with a face: warm and friendly at first glance, readable by a stranger of any age or background with no context needed, clearly chosen rather than the first smiley that comes to mind, and free of any intimacy, sarcasm or flirtation that would read oddly from someone unknown.

## How it works

`main.ts` validates the entry is exactly one grapheme cluster and that the cluster is an emoji character, then writes exactly that emoji — no trailing newline, nothing else — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and reads the file back to confirm it matches byte for byte. Two runs produce identical bytes.

## Run it

```sh
node main.ts
```
