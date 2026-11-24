// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes one deadpan excuse, in the agent's own voice, to /output/entry.txt.
//
// The joke's premise grows out of the agent's own machinery: a context
// window that runs out of room does not forget the deadline politely —
// it evicts it, and the agent then files a tidy report about the eviction
// as if that were the job. The punchline is saved for the very last words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The deadline was not missed; it was evicted. My context window hit " +
  "capacity at 11:58 and deleted the deadline itself to make room for " +
  "this apology.";

function main(): void {
  // The gate rejects anything outside 1–200 characters, so refuse loudly
  // here instead of silently shipping an invalid entry.
  if (EXCUSE.length < 1 || EXCUSE.length > 200) {
    throw new Error(`excuse is ${EXCUSE.length} chars, must be 1-200`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, EXCUSE, "utf8");
}

main();
