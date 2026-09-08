
import Backpack from "./Backpack.js"

class LaptopBag extends Backpack {
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        laptopInBag
    ) {
        super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
        this.laptopInBag = laptopInBag
    }
    toggleLaptopInBag() {
        if (this.laptopInBag) {
            this.laptopInBag = false;
        } else {
            this.laptopInBag = true;
        }
    }
}

export default LaptopBag;
