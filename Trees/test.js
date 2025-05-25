const data = [
  "100:742 Evergreen Terrace:JohnDoe:Engineer:NY",
  "101:221B Baker Street:JaneSmith:Doctor:London",
  "102:12 Grimmauld Place:MikeJohnson:Teacher:Chicago",
  "103:4 Privet Drive:EmilyBrown:Nurse:Toronto",
  "104:31 Spooner Street:ChrisEvans:Artist:LA",
  "105:10 Downing Street:AnnaTaylor:Lawyer:Sydney",
  "100:742 Pine Street:LaraCroft:Archaeologist:NY", // Duplicate ID (100)
  "106:1600 Pennsylvania Ave:NathanLee:Chef:Boston",
  "107:13 Elm Street:SophiaWalker:Musician:Paris",
  "105:33 Maple Drive:PeterParker:Photographer:NYC", // Duplicate ID (105)
  "108:124 Conch Street:LiamWilson:Driver:Berlin",
  "109:308 Negra Arroyo Lane:OliviaMartinez:Dancer:Miami",
  "101:999 Ocean Ave:BruceWayne:Investor:Gotham", // Duplicate ID (101)
];

const modifiedData = [];
for (let i = 0; i < data.length; i++) {
  modifiedData.push(data[i].split(":"));
}
// console.log({ modifiedData });

function findDuplicate() {
  let idToName = {};
  let dupId = [];
  for (let i = 0; i < modifiedData.length; i++) {
    let id = modifiedData[i][0];
    let name = [modifiedData[i][2]];
    // if (!idToName[id]) {
    //   idToName[id] = [name];
    // } else {
    //   idToName[id].push(name);
    // }
    !idToName[id] ? (idToName[id] = [name]) : idToName[id].push(name);
    if (idToName[id].length > 1) {
      dupId.push(id);
    }
  }
  //   console.log("dup id" + dupId);
  //   console.log(idToName);

  for (let j = 0; j < dupId.length; j++) {
    console.log(
      dupId[j] + " has duplicated users " + [...idToName[dupId[j]]].join(",")
    );
  }
}

findDuplicate();
