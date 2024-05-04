// BEGIN

const magic = (...args) => {
    const sum = args.reduce((acc, arg) => acc + arg, 0);

    const innerMagic = (...innerArgs) => {
        if (innerArgs.length === 0) {
            return sum;
        }
        const innerSum = innerArgs.reduce((acc, arg) => acc + arg, sum);
        return magic(innerSum);
    };

    innerMagic.valueOf = () => sum;

    return innerMagic;
};

export default magic;
// END
