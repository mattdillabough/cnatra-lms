export const mockGradesheetData = {
  eventId: "N4301",
  title: "Low-Level Navigation Flight 1",
  date: "02-Mar-21",
  hours: 5,
  score: "",
  lessonGrade: "Pass",
  status: "Complete",
  media: "Flight",
  deviceType: "TH-57C",
  student: {
    name: "Avatar, Aang",
    rank: "1st Lt",
    classNo: 20114851,
    totalMarks: {
      MIF: 70,
      N: 1,
      U: 0,
      F: 0,
      G: 16,
      E: 2,
    },
    score: 1.057143,
    totalCarried: {
      MIF: 351,
      N: 0,
      U: 0,
      F: 1,
      G: 84,
      E: 3,
    },
    NSSCumulative: {
      MIF: 421,
      N: 0,
      U: 0,
      F: 1,
      G: 100,
      E: 5,
    },
    NSSCumulativeScore: 1.016627,
  },
  instructor: {
    name: "Monk, Gyatso",
    rank: "Lt",
    signature: "",
  },
  flightTimelog: {
    fltDur: 1.7,
    fpt: 0.7,
    cpt: 1.0,
    sct: "",
    night: "",
    instrument: {
      act: "",
      sim: "",
    },
    landings: {
      typeNo: "6/6",
    },
    approaches: {
      typeNo: "",
    },
  },
  comments:
    "One of the best N4301's I've seen for the navigation portion! SMA followed process at every CP and communicated well with IP his plan of attack before arriving at each CP including fuel and instrument checks.Understood a/s g/s corrections to arrive within 3 seconds overall timing. Nice!",
  maneuvers: [
    {
      id: 1,
      description: "General Knowledge / Procedures",
      MIF: 4,
      grade: 4, //corresponds to G,
      comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      description: "Emer Procedures / Sys Failure",
      MIF: 4,
      grade: "2", //corresponds to U
      comments: "",
    },
    {
      id: 3,
      description: "Headwork / Situational Awareness",
      MIF: 4,
      grade: "3", //corresponds to F
      comments:
        "Praesent tempus ligula suscipit mauris pretium, id sodales ligula placerat. Nulla malesuada laoreet bibendum. Nam a dapibus lacus, sed pellentesque diam. Proin ligula lorem, hendrerit in facilisis id, sagittis non magna. Aliquam pellentesque ut tellus non ornare. Integer suscipit dui ut quam aliquet ultricies. Pellentesque auctor odio ut tellus maximus suscipit. Donec finibus risus euismod tellus ullamcorper aliquam. Integer dolor tellus, rutrum et risus id, lobortis consequat sem.",
    },
    {
      id: 4,
      description: "Basic Air Work",
      MIF: 4,
      grade: "5", //corresponds to E
      comments:
        "Nam quis sollicitudin lectus. Sed mi elit, sollicitudin at mi eu, dapibus pharetra orci. Etiam eu neque vitae mauris mollis interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 5,
      description: "Flight Planning",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 6,
      description: "Ground Operations",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 7,
      description: "CRM",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 8,
      description: "Cockpit Management",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 9,
      description: "Radio Procedures",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 10,
      description: "Vertical Takeoff",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 11,
      description: "No-hover Takeoff",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 12,
      description: "Transition to Forward Flight",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 13,
      description: "Groundspeed / Fuel Checks",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 14,
      description: "Normal Approach",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 15,
      description: "360-, 180-, 90-Degreee Approach",
      MIF: 3,
      grade: 4,
      comments:
        "Was very smooth on the controls but just be sure to work that airspeed a little more in the turn to arrive on 60 knots at the 90 for a solid final on parameters 45-55 knots. Had a tendency to roll on final a little slow (35 kias) but then carry too much speed at the bottom. Set the attitude once on final and then control descent with collective. Will need to keep positive pressure on the collective through ground effect to avoid getting into a hover taxi.",
    },
    {
      id: 16,
      description: "Low-level Navigation",
      MIF: 3,
      grade: 5,
      comments:
        "Maintained exceptional situation awareness through entire route of flight. Never allowed course to deviate from intended path and backed IP on flight instruments. Fed the plan of attack before each CP with clear instructions. Gave distant steer then also gave intermediate CP's along the way.",
    },
    {
      id: 17,
      description: "Timing",
      MIF: 4,
      grade: 5,
      comments: "Within 3 sec overall timing!",
    },
    {
      id: 18,
      description: "Vertical Landing",
      MIF: 4,
      grade: 4,
      comments:
        "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
    },
    {
      id: 19,
      description: "Special Syllabus Requirements",
      MIF: 1,
      grade: 1, //corresponds to 1 (not graded)
      comments: "IP demo'd brief and first 4 CP's",
    },
  ],
};
