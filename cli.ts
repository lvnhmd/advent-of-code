import { findFloor, findBasementEntry } from './src/pathfinder';
import { calculateWrappingPaper } from './src/wrapping-calculator';
import * as fs from 'fs';
import * as path from 'path';

function main() {
    const args = process.argv.slice(2);

    if (args.length !== 2) {
        console.log("Usage: npm start <mode> <filepath>");
        console.log("Modes:");
        console.log("  path - Calculate Santa's path using directions");
        console.log("  wrap - Calculate wrapping paper needed using dimensions");
        process.exit(1);
    }

    const mode = args[0];
    const filePath = args[1];
    try {
        const input = fs.readFileSync(path.resolve(filePath), 'utf8');

        switch (mode) {
            case 'path':
                console.log(`Santa ends up on floor: ${findFloor(input)}`);
                console.log(`Santa enters basement at: ${findBasementEntry(input)}`);
                break;
            case 'wrap':
                const dimensions = input.split("\n").filter(line => line.trim().length > 0);
                console.log(`Total wrapping paper needed: ${calculateWrappingPaper(dimensions)} square feet`);
                break;
            default:
                console.log("Invalid mode. Use 'path' or 'wrap'.");
                break;
        }
    } catch (error) {
        console.error("Error reading or processing file:", error);
    }
}

main();
