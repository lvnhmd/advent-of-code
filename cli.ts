import { findFloor, findBasementEntry } from "./src/pathfinder";

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: npm start <directions>");
    process.exit(1);
  }

  const directions = args[0];
  try {
    console.log(`Santa ends up on floor: ${findFloor(directions)}`);
    console.log(`Santa enters basement at: ${findBasementEntry(directions)}`);
  } catch (error) {
    console.log("Invalid character in directions");
  }
}

main();
