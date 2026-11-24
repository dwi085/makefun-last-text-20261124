// Last Text at One Percent — make.fun entry (u-azazex-last-text-at-one-percent-ba9fc876).
// Writes exactly one line: the last text message a phone sends at 1% battery,
// in the voice of the dying phone itself. Deterministic, no network, exit 0.
// Output goes to MAKEFUN_OUTPUT_DIR when set, otherwise /output.
// Never reads process.cwd() and never writes outside the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Plot twist: I've been on 1% since Tuesday. I just wanted to see how long you'd ignore me. Three days. Worth it. Goodbye.";

// The gate only accepts 1–200 characters; refuse to emit anything longer.
if (LINE.length === 0 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
