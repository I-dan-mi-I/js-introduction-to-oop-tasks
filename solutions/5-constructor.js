// BEGIN
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    getX() {
        return this.x;
    }

    /**
     * @param {number} coord
     */
    setX(coord) {
        if (typeof coord !== 'number')
            return;
        
        this.x = coord;
    }

    getY() {
        return this.y;
    }

    /**
     * @param {number} coord
     */
    setY(coord) {
        if (typeof coord !== 'number')
            return;

        this.y = coord;
    }
    
    copy() {
        return new Point(this.getX(), this.getY());
    }
}

export class Segment {
    
    constructor(beginPoint, endPoint) {
        if (!(beginPoint instanceof Point))
            beginPoint = new Point(0, 0);
        
        if (!(endPoint instanceof Point))
            endPoint = new Point(0, 0);
        
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
    }
    
    getBeginPoint() {
        return this.beginPoint;
    }

    /**
     * @param {Point} point
     */
    setBeginPoint(point) {
        if (!(point instanceof Point))
            return;
        
        this.beginPoint = point;
    }

    getEndPoint() {
        return this.endPoint;
    }

    /**
     * @param {Point} point
     */
    setEndPoint(point) {
        if (!(point instanceof Point))
            return;

        this.endPoint = point;
    }

    reverse() {
        return new Segment(this.getEndPoint().copy(), this.getBeginPoint().copy());
    }
}

/**
 * @param {Segment} segment
 */
export const reverse = (segment) => {
  if (!(segment instanceof Segment))
      return new Segment();

  return segment.reverse();
}
// END
