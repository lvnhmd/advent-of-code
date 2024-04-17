export function findFloor(directions: string): number {
    let currentFloor = 0;
    for (let char of directions) {
        if (char === '(') {
            currentFloor++;
        } else if (char === ')') {
            currentFloor--;
        }
    }
    return currentFloor;
}

export function findBasementEntry(directions: string): number {
    let currentFloor = 0;
    for (let i = 0; i < directions.length; i++) {
        if (directions[i] === '(') {
            currentFloor++;
        } else if (directions[i] === ')') {
            currentFloor--;
        }

        if (currentFloor === -1) {
            return i + 1;  
        }
    }

    return -1; 
}
