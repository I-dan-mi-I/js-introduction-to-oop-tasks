// BEGIN
class Fraction {

    /**
     * @param {number} numer
     * @param {number} denom
     */
    constructor(numer=NaN, denom=NaN) {
        this.numer = numer;
        this.denom = denom;
    }

    /**
     * @param {number} numer
     */
    setNumer(numer) {
        if (typeof numer !== 'number')
            return;
        this.numer = numer;
    }
    
    getNumer() {
        return this.numer;
    }

    /**
     * @param {number} denom
     */
    setDenom(denom) {
        if (typeof denom !== 'number')
            return;
        this.denom = denom;
    }

    getDenom() {
        return this.denom;
    }

    toString() {
        return `${this.numer}/${this.denom}`;
    }

    /**
     * @param {Fraction} anotherFraction
     */
    add(anotherFraction) {
        if (!(anotherFraction instanceof Fraction))
            return new Fraction(this.numer, this.denom);

        return new Fraction(this.numer * anotherFraction.getDenom() + this.denom * anotherFraction.getNumer(), this.denom * anotherFraction.getDenom());
    }
}

/**
 * @param {number} numer
 * @param {number} denom
 */
const make = (numer=NaN, denom=NaN) => {
    return new Fraction(numer, denom);
}

export default make;
// END