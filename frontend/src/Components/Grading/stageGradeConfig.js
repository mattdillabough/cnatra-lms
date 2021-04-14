//Configuring event maneuvers to use in GradeComparison table
/*EIS current structure:
EIS = maneuvers: [
  {maneuver1},
  {maneuver2},
  {maneuver3},
  ...
]

Needed configuration:

columns = [
  {
    Header: "#",
    accessor: "maneuver_id"
  },
  {
    Header: "Maneuver",
    accessor: "maneuver"
  },
  {
    Header: "MIF",
    accessor: "MIF"
  },
  {
    Header: "Event1_code",
    accessor: event1,
  }
  {
    Header: "Event2_code",
    accessor: event2,
  }
  {
    Header: "Event3_code",
    accessor: event3,
  }
  ...
]

data = [
  {
    maneuver_id: 1,
    maneuver: "Some maneuver",
    MIF: "required grade",
    event1: grade,
    event2: grade,
    event3: grade,
  },
  {
    maneuver_id: 2,
    maneuver: "Some maneuver",
    MIF: "required grade",
    event1: grade,
    event2: grade,
    event3: grade,
  },
  {
    maneuver_id: 3,
    maneuver: "Some maneuver",
    MIF: "required grade",
    event1: grade,
    event2: grade,
    event3: grade,
  },
  ...
]

*/

function configureData(EIS) {
  const columns = [];
  const data = [];
}
