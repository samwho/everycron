# everycron

Find crons hard to read? Always opening https://crontab.guru to figure out
what's going on? All your problems are about to be solved.

`everycron` exposes constants with human-readable names to make it much easier
to find the cron expression you need!

## Stats

`src/crons.ts` contains:

1. 23,804,927 unique cron expressions.
2. 1.9GB of data.

It is highly unlikely your cron use-case can not be served by this file.

## Usage

```typescript
import cron from "./src/crons";

console.log(cron.EVERY_MINUTE);
```

## Sample contents

In case you don't want to download all 1.9GB of this repo, here is a sample of the first
10 lines ofr `src/crons.ts`:

```typescript
export default {
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_SUNDAY_ONLY_IN_JANUARY:"0 0 1 1 0",
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_MONDAY_ONLY_IN_JANUARY:"0 0 1 1 1",
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_TUESDAY_ONLY_IN_JANUARY:"0 0 1 1 2",
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_WEDNESDAY_ONLY_IN_JANUARY:"0 0 1 1 3",
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_THURSDAY_ONLY_IN_JANUARY:"0 0 1 1 4",
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_FRIDAY_ONLY_IN_JANUARY:"0 0 1 1 5",
AT_00_00_ON_DAY_1_OF_MONTH_AND_ON_SATURDAY_ONLY_IN_JANUARY:"0 0 1 1 6",
AT_00_00_ON_DAY_1_OF_MONTH_ONLY_IN_JANUARY:"0 0 1 1 *",
AT_00_00_ON_DAY_1_OF_MONTH_EVERY_2_DAYS_OF_WEEK_ONLY_IN_JANUARY:"0 0 1 1 */2",
```
