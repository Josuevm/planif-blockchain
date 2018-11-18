import { Injectable } from '@angular/core';
import { Block } from '../models/block.model';
import { Node } from '../models/node.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private nodes : BehaviorSubject<Node[]>;
  private nodesData : { nodes: Node[] };

  constructor() { 
    this.nodesData = { nodes: [] };
    this.nodesData.nodes[0] = new Node();
    this.nodesData.nodes[1] = new Node();
    this.nodesData.nodes[2] = new Node();
    this.nodes = <BehaviorSubject<Node[]>>new BehaviorSubject([]);
    this.nodes.next(Object.assign({}, this.nodesData).nodes);
  }

  getNodes(){
    return this.nodes.asObservable();
  }

  getNode(index){
    return this.nodesData.nodes[index];
  }

  addNode(){
    this.nodesData.nodes.push(new Node());
    this.nodes.next(Object.assign({}, this.nodesData).nodes);
  }

  addBlocktoNode(index, block: Block){
    this.nodesData[index].blockchain.addBlock(block);
    this.nodes.next(Object.assign({}, this.nodesData).nodes);
  }
}
