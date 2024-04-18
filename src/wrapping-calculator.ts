export function calculateWrappingPaper(dimensions: string[]): number {
    let totalPaper = 0;

    dimensions.forEach(dimension => {
        const [l, w, h] = dimension.split('x').map(Number);
        const side1 = l * w;
        const side2 = w * h;
        const side3 = h * l;
        
        const surfaceArea = 2 * (side1 + side2 + side3);
        const slack = Math.min(side1, side2, side3);

        totalPaper += surfaceArea + slack;
    });

    return totalPaper;
}

