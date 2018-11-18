import { Block } from './block.model';
import { sha256, sha224 } from 'js-sha256';

export class Blockchain {

    blocks: Block[];

    constructor(genesisBlock: Block) {
        this.blocks = []
        this.addBlock(genesisBlock)
    }

    addBlock(block: Block) {
        if (this.blocks.length == 0) {
            block.previousHash = "0000000000000000"
            block.hash = this.generateHash(block)
        }
        this.blocks.push(block)
    }

    getNextBlock(transactions) {

        let block = new Block();


        let previousBlock = this.getPreviousBlock()
        block.index = this.blocks.length
        block.previousHash = previousBlock.hash
        block.hash = this.generateHash(block)
        return block
    }

    generateHash(block: Block) {
        let hash = sha256(block.getKey())
        while (!hash.startsWith("0000")) {
            block.nonce += 1
            hash = sha256(block.getKey())
        }
        return hash
    }

    getPreviousBlock() {
        return this.blocks[this.blocks.length - 1]
    }

    getBlocks(){
        return this.blocks;
    }

}