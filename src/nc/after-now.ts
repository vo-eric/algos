/*
given events as minutes-from-midnight and now (same units), return the 
title of the soonest event with start ≥ now; if none, return null.

const events = [
  { title: "standup", start: 540 },   // 9:00
  { title: "1:1",     start: 600 },   // 10:00
  { title: "retro",   start: 900 }    // 15:00
];

const now = 601;

// expected: "retro"  // 600 has passed; next is 900

*/

interface Event {
  title: string;
  start: number;
}
/**
 * Time Complexity: O(n) where is the number of events
 * Space complexity: O(1)
 */
const afterNow = (events: Event[], now: number): string => {
  let result: [string, number] = [] as unknown as [string, number];

  for (const event of events) {
    const { title, start } = event;

    if (start > now) {
      if (!result.length || start < result[1]) {
        result = [title, start];
      }
    }
  }

  return result[0];
};

const events = [
  { title: "standup", start: 540 }, // 9:00
  { title: "1:1", start: 600 }, // 10:00
  { title: "retro", start: 900 }, // 15:00
];

const now = 601;

console.log(afterNow(events, now));
