export class Block {

    index: number;
    previousHash: string;
    hash: string;
    nonce: number;

    constructor() {
        this.index = 0
        this.previousHash = ""
        this.hash = ""
        this.nonce = 0
    }



    getKey() {
        return this.index + this.previousHash + this.nonce
    }

}