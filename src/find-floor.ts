export function findFloor(directions: string): number {
    let currentFloor = 0;
    for (let char of directions) {
        if (char === '(') {
            currentFloor += 1;
        } else if (char === ')') {
            currentFloor -= 1;
        }
    }
    return currentFloor;
}
