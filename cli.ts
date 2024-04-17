import { findFloor } from './src/find-floor';

function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log("Usage: npm start <directions>");
        process.exit(1);
    }

    const directions = args[0];
    const result = findFloor(directions);
    console.log(`Santa ends up on floor: ${result}`);
}

main();
