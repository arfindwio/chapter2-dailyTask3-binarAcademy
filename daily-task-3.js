const arrOfObj = [
  {
    _id: "64104767a5c11778dc2709d3",
    age: 34,
    eyeColor: "blue",
    name: "Allie Cooper",
    address: "Bandung",
    registered: "2020-07-06T05:13:14 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
  {
    _id: "64104767b3044e673585d691",
    age: 40,
    eyeColor: "brown",
    name: "Williamson Ford",
    address: "Bandung",
    registered: "2020-09-10T02:03:14 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "641047675c4da21093836e42",
    age: 25,
    eyeColor: "brown",
    name: "Santana Robles",
    address: "Bali",
    registered: "2022-04-17T12:48:16 -07:00",
    friends: [
      {
        id: 0,
        name: "Shifly",
        isActive: false,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
    ],
  },
  {
    _id: "64104767c51acdd4b33210c5",
    age: 25,
    eyeColor: "green",
    name: "Rogers Wilkerson",
    address: "Bandung",
    registered: "2021-10-20T11:31:38 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "64104767a1e5a4fa85a9001a",
    age: 38,
    eyeColor: "brown",
    name: "Gabrielle Obrien",
    address: "Bandung",
    registered: "2020-07-05T10:02:01 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
];

function checkCondition(key, value) {
  return key === value;
}

// 1) display/print person yang registered dibawah tahun 2022
console.log("1) display/print person yang registered dibawah tahun 2022");

function loopingData1(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].registered.slice(0, 4) < 2022) {
      arr.push(data[i]);
    }
  }
  return arr;
}
// console.log(loopingData1(arrOfObj));

// 2) display person yang address nya Bali
console.log("2) display person yang address nya Bali");
function loopingData2(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].address === "Bali") {
      arr.push(data[i]);
    }
  }
  return arr;
}
// console.log(loopingData2(arrOfObj));

// 3) display friends yang hobby nya football
console.log("3) display friends yang hobby nya football");
function loopingData3(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].hobby[k].hobby, "football")) {
          arr.push(data[i].friends[j]);
        }
      }
    }
  }
  return arr;
}
// console.log(loopingData3(arrOfObj));

// 4) display hobby dari friends id
console.log("4) display hobby dari friends id 2");
function loopingData4(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].id, 2)) {
          arr.push(data[i].friends[j].hobby[k]);
        }
      }
    }
  }
  return arr;
}
// console.log(loopingData4(arrOfObj));

// 5) display friends yang gender nya male dan mempunyai hobby basketball
console.log("5) display friends yang gender nya male dan mempunyai hobby basketball");
function loopingData5(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].gender, "male") && checkCondition(data[i].friends[j].hobby[k].hobby, "basketball")) {
          arr.push(data[i].friends[j]);
        }
      }
    }
  }
  return arr;
}
// console.log(loopingData5(arrOfObj));

// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
console.log("6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry");
function loopingData6(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].isActive, true) && checkCondition(data[i].friends[j].gender, "female") && checkCondition(data[i].friends[j].favoriteFruit, "strawberry")) {
          arr.push(data[i].friends[j]);
        }
      }
    }
  }
  return arr;
}
console.log(loopingData6(arrOfObj));

// 7) display siapa saja yang mempunyai teman name Theresia
console.log("7) display siapa saja yang mempunyai teman name Theresia");
function loopingData7(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].name, "Theresia")) {
          arr.push(data[i]);
        }
      }
    }
  }
  return arr;
}
// console.log(loopingData7(arrOfObj));

// 8) display hobby id 1 dari friends yang isActive nya true
console.log("8) display hobby id 1 dari friends yang isActive nya true");
function loopingData8(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].hobby[k].id, 1) && checkCondition(data[i].friends[j].isActive, true)) {
          arr.push(data[i].friends[j].hobby[k]);
        }
      }
    }
  }
  return arr;
}
// console.log(loopingData8(arrOfObj));

// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log("9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball");
function loopingData9(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].eyeColor, "brown") && checkCondition(data[i].friends[j].favoriteFruit, "banana") && checkCondition(data[i].friends[j].hobby[k].hobby, "basketball")) {
          arr.push(data[i]);
        }
      }
    }
  }
  return arr;
}
// console.log(loopingData9(arrOfObj));

// 10) display person yang mempunyai friends gender male atau favorite fruit nya banana dan registered di tahun 2023
console.log("10) display person yang mempunyai friends gender male atau favorite fruit nya banana dan registered di tahun 2023");
function loopingData10(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
      for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
        if (checkCondition(data[i].friends[j].gender, "male") || (checkCondition(data[i].friends[j].favoriteFruit, "banana") && checkCondition(data[i].registered.slice(0, 4), "2023"))) {
          arr.push(data[i]);
        }
      }
    }
  }
  return arr;
}
console.log(loopingData10(arrOfObj));
