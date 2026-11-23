// One Letter: Coffee or Tea — make.fun bounty entry.
// Writes exactly one letter, A for coffee, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
//
// Choice of letter: A (coffee), not B (tea). The judge weighs vivid first,
// then funny, then truer. Coffee's cultural image is bolder, louder and
// more joke-dense ("don't talk to me before coffee") than tea's calm,
// gentle one, so A lands as the more vivid and funnier single-letter
// answer; tea's quiet steadiness works against it under a vivid-first
// brief. The entry is one byte, no newline, no punctuation, no comment.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A = coffee. One ASCII letter, exactly one byte, no trailing newline.
const LETTER = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
