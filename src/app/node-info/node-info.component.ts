import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Node } from '../models/node.model';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-node-info',
  templateUrl: './node-info.component.html',
  styleUrls: ['./node-info.component.css']
})
export class NodeInfoComponent implements OnInit {

  @Input() nodeIndex: any;
  node: any;

  constructor(private service: BlockchainService) {}

  ngOnChanges() {
    this.node = this.service.getNode(this.nodeIndex);
  }
  
  ngOnInit() {}

  getChain(){
    return this.node.getBlockchain().getBlocks();
  }

}
