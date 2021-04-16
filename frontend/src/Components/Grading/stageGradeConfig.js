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

function configureData(maneuvers, grades) {
  const columns = [
    {
      Header: "#",
      accessor: "maneuver_id",
    },
    {
      Header: "Maneuver",
      accessor: "maneuver",
    },
    {
      Header: "MIF",
      accessor: "MIF",
    },
  ];
  let data = {};
  // const maneuverTypes = new Set()

  //Format columns
  for (let key in grades) {
    columns.push({
      Header: key,
      accessor: key,
    });
  }

  //Format data
  maneuvers.forEach((maneuver) => {
    // debugger;
    let id_from_maneuvers = maneuver.maneuver.maneuver_id;
    //Create new row obj if maneuver doesn't already have entry in data
    if (!data[maneuver.maneuver.maneuver_id]) {
      data[maneuver.maneuver.maneuver_id] = {
        maneuver_id: maneuver.maneuver.maneuver_id,
        maneuver: maneuver.maneuver.maneuver,
        MIF: `${maneuver.grade}${maneuver.is_required ? "+" : ""}`,
      };
    }
    //Use information from maneuvers to get grades
    let EIB = maneuver.event.event_in_block; //first event in block = 1
    let event_code = maneuver.event.event_code;
    let id_from_grades = grades[event_code]
      ? grades[event_code].grade_sheet_maneuvers[id_from_maneuvers - 1]
          .maneuver_item_file.maneuver.maneuver_id
      : "";

    //If the maneuver ids match then add that event's grade to the data row
    if (grades[event_code] && id_from_maneuvers === id_from_grades) {
      //Keep all the data already in the object + add the new event grade
      data[maneuver.maneuver.maneuver_id] = {
        ...data[maneuver.maneuver.maneuver_id],
        [event_code]: grades[event_code].grade_sheet_maneuvers[EIB - 1].grade,
      };
    }
  });
  data = Object.values(data);
  return { columns, data };
}

export default configureData;
