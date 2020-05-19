let describe, bizType;
describe = ["Zephyr", "Dauntless", "Electric", "Overland", "Nerds of", "Oddity", "Eupheme", "Epic", "Quad", "Cool Cats of", "Vortex", "Tribbles", "Candor", "Focus", "Spotlight", "Bruhaha", "Spark", "Plutus", "Orpheus", "Olympia", "Napoleon", "The Brain", "The Department of", "Springboard", "Trials", "Easy", "Perfect", "Odysey", "Fortuna", "Brand", "Troublesome", "Xinitrack", "Century", "Legacy", "Snap", "I am no brand", "No One", "Acclaim"];
bizType = ["Agency", "Farpoint", "Inc", "Media", "Corp", "Digital", "Tech", "Point", "Influence", "Enterprises", "Concepts", "Hub", "Quest", "Technology", "Skyline", "Strategic", "Results", "Resource", "Company", "Solutions", "Consultancy", "Advocacy", "Innovations", "Fantastics", "Answers", "Inbound", "Marketing", "Leaverage", "Moonscape", "Performance", "Wizards"];

// function randGen() {
//   return Math.floor(Math.random() * 5);
// }
document.getElementById("button").addEventListener("click", function(event){
  let element = document.getElementById("bizName");
  element.classList.remove("hidden");
  bizName();
});

function bizName() {
  let rand1 = Math.floor(Math.random() * 38);
  let rand2 = Math.floor(Math.random() * 30);

  let name = describe[rand1] + " " + bizType[rand2];

  document.getElementById('bizName').innerHTML = name;
};
bizName();
