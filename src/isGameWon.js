const areOfSameTypeNotZero = (x, y, z) => {
    const firstType = typeof (x);
    if (x === 0 || y === 0 || z === 0) {
        return 0;
    }
    if (typeof (y) !== firstType || typeof (z) !== firstType) {
        return 0;
    }
    return 1;
}

const isGameWon = ([a, b, c, d, e, f, g, h, i]) => {
    return areOfSameTypeNotZero(a, b, c) || areOfSameTypeNotZero(d, e, f) || areOfSameTypeNotZero(g, h, i)
        || areOfSameTypeNotZero(a, d, g) || areOfSameTypeNotZero(b, e, h) || areOfSameTypeNotZero(c, f, i)
        || areOfSameTypeNotZero(a, e, i) || areOfSameTypeNotZero(c, e, g);
}

export default isGameWon;
