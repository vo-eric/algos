/*
You help run JFK airport. Each gate at the airport has limited seating of capacity passengers each. 
One of your jobs is to make sure there's never more than capacity people assigned to a gate at a 
given time. Given a snapshot of a list of gates, the assigned flights, and the passengers on those 
flights, return any gates that are overloaded. For example, if flight AA101 (51 passengers) and 
flight BA206 (51 passengers) are both assigned to gate B3, return ["B3"].
*/

/**
 * Time Complexity: O(n), where n is the number of entries of flightPassengers
 * Space Complexity: O(m), where m is the unique number of gates
 */
const getLimits = (
  flightAssignments: Record<string, string>,
  flightPassengers: Record<string, number>,
  capacity: number,
): string[] => {
  // create a results set
  const results: Set<string> = new Set<string>();
  // create a passengersAtGate object where the key is the gate and the value is the current number
  const passengersAtGate: Record<string, number> = {};
  // iterate through flightPassengers
  for (const [flight, passengerCount] of Object.entries(flightPassengers)) {
    //   get the gate from the flightAssignments object by querying flightPassengers key
    const gate: string = flightAssignments[flight];

    if (!gate) {
      continue;
    }

    //   add the value from flightAssignments to the passengersAtGate key
    if (!passengersAtGate[gate]) {
      passengersAtGate[gate] = 0;
    }

    passengersAtGate[gate] += passengerCount;

    //   check to see if the updated value is greater than the capacity
    if (passengersAtGate[gate] > capacity) {
      //     if so, add it to the results set
      results.add(gate);
    }
  }

  // return the results set as an array
  return [...results];
};

const flightAssignments = {
  AA101: "G1",
  AA102: "G1",
  BA602: "D4",
  BA201: "G2",
  DL303: "G3",
  AA406: "D4",
  AA930: "D4",
  UA777: "H1",
  UA778: "H1",
  LH400: "J2",
};

const flightPassengers = {
  AA101: 85,
  AA102: 50,
  BA201: 105,
  DL303: 6,
  BA602: 10,
  AA406: 65,
  AA930: 25,
  UA777: 61,
  UA778: 62,
  LH400: 120,
};

const capacity = 120;
// const expectedResult = ["G1", "H1"];

const flightAssignments2 = {
  F1: "A1",
  F2: "A1",
  F3: "B2",
  F4: "B2",
  F5: "C2",
};

const flightPassengers2 = {
  F1: 30,
  F2: 50,
  F3: 40,
  F4: 36,
  F5: 75,
};

const capacity2 = 75;
// const expectedResult2 = ["A1", "B2"];

const flightAssignments3 = {
  A1: "G1",
  A2: "G1",
  B1: "G2",
  C1: "G3",
};

const flightPassengers3 = {
  A1: 60,
  A2: 60,
  B1: 0,
  C1: 120,
  X999: 999,
};

const capacity3 = 120;
// const expectedResult3 = [];

console.log(getLimits(flightAssignments3, flightPassengers3, capacity3));
