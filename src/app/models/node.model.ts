import { Blockchain } from './blockchain.model';
import { Block } from './block.model';

export class Node {
    blockchain : Blockchain;

    constructor() {
        this.blockchain = new Blockchain(new Block());
    }

    getBlockchain(){
        return this.blockchain;
    }
}