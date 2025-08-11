/*
You are given the schedule of a therapist's meetings with clients. The format 
is a list of tuples: [[start1,end1],[start2,end2],...] where start and end are 
the start and end of the meetings, respectively, measured in minutes past noon. 
Check the schedule to make sure there are no conflicts (e.g. no meeting overlaps 
with another).
*/

function assert(expected: boolean, actual: boolean) {
  if (expected != actual) {
    throw new Error(expected + " expected, got " + actual);
  }
}
/*

Time Complexity: O(nlog(n)), where n is the length of schedule
Space Complextiy: O(1), since we are not creating a new array when sorting

*/
function detectOverlap(schedule: number[][]): boolean {
  // sort the schedule by the first value in the tuple
  schedule.sort((a, b) => a[0] - b[0]);
  // iterate through the schedule from i to length - 1
  for (let i = 0; i < schedule.length - 1; i++) {
    // if schedule[i][1] is greater than schedule[i + 1][0]
    if (schedule[i][1] > schedule[i + 1][0]) {
      //   return true
      return true;
    }
  }
  // return false
  return false;
}
// example 1
const meetings1 = [
  [60, 120], // 1:00–2:00
  [130, 180], // 2:10–3:00
  [115, 150], // 1:55–2:30
];
assert(true, detectOverlap(meetings1));

// example 2
const meetings2 = [
  [60, 120], // 1:00–2:00
  [121, 180], // 2:01–3:00
  [200, 250], // 3:20–4:10
];
assert(false, detectOverlap(meetings2));

// example 3
const meetings3 = [
  [60, 120],
  [120, 150],
];
assert(false, detectOverlap(meetings3));

const meetings4 = [
  [200, 240],
  [60, 120],
  [110, 130],
];
assert(true, detectOverlap(meetings4));

const meetings5 = [
  [90, 150],
  [90, 150],
];
assert(true, detectOverlap(meetings5));

const meetings6 = [
  [0, 30],
  [30, 60],
  [90, 150],
  [149, 200],
];
assert(true, detectOverlap(meetings6));
