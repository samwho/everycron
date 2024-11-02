import cronstrue from "cronstrue";
import ProgressBar from "progress";
import fs from "fs";

const minutes = [
  ...Array(60).keys(),
  "*",
  ...Array.from({ length: 12 }, (_, i) => `*/${i + 1}`),
];
const hours = [
  ...Array(24).keys(),
  "*",
  ...Array.from({ length: 12 }, (_, i) => `*/${i + 1}`),
];
const daysOfMonth = [...Array(31).keys()]
  .map((i) => i + 1)
  .concat("*", ...Array.from({ length: 10 }, (_, i) => `*/${i + 1}`));
const months = [...Array(12).keys()]
  .map((i) => i + 1)
  .concat("*", ...Array.from({ length: 4 }, (_, i) => `*/${i + 1}`));
const daysOfWeek = [
  ...Array(7).keys(),
  "*",
  ...Array.from({ length: 7 }, (_, i) => `*/${i + 1}`),
];

function* allCrons(): Generator<string> {
  for (const minute of minutes) {
    for (const hour of hours) {
      for (const dayOfMonth of daysOfMonth) {
        for (const month of months) {
          for (const dayOfWeek of daysOfWeek) {
            yield `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
          }
        }
      }
    }
  }
}

function toConstantName(input: string): string {
  return input
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .replace(/_{2,}/g, "_")
    .replaceAll("_THE_", "_");
}

const progress = new ProgressBar("Generating crons [:bar] :percent :etas", {
  total:
    minutes.length *
    hours.length *
    daysOfMonth.length *
    months.length *
    daysOfWeek.length,
});

const file = fs.createWriteStream("src/crons.ts");
const seen = new Set<string>();

file.write("export default {\n");

for (const cron of allCrons()) {
  const human = cronstrue.toString(cron, {
    use24HourTimeFormat: true,
  });
  const name = toConstantName(human);
  if (!seen.has(name)) {
    file.write(`${name}:"${cron}",\n`);
    seen.add(name);
  }
  progress.tick();
}

file.write("};\n");

export default {
  foo: "bar",
};
