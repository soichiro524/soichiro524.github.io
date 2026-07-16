import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("navigation places Papers between About and Presentations", () => {
  const navigation = readFileSync("src/app/lang-switch.tsx", "utf8");
  const aboutIndex = navigation.indexOf("/${lang}/about");
  const papersIndex = navigation.indexOf("/${lang}/papers");
  const presentationsIndex = navigation.indexOf("/${lang}/presentations");

  assert.ok(aboutIndex >= 0, "About link should exist");
  assert.ok(papersIndex > aboutIndex, "Papers should follow About");
  assert.ok(
    presentationsIndex > papersIndex,
    "Presentations should follow Papers",
  );
});
