// The Houseplant Out-of-Office — entry writer.
// Writes the one-line out-of-office auto-reply to entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Out of office: I am a fern, ignored since March. I will reply when watered — probably never.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the entry must be 1–120 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside the 1–120 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
