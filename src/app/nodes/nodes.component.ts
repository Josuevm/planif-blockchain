import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Node } from '../models/node.model';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  @Output() nodeSelectedChanged = new EventEmitter<any>();
  nodes : Node[];

  constructor(private service: BlockchainService) { 
    this.service.getNodes().subscribe(updatedNodes => {
      this.nodes = updatedNodes;
    })
  }

  ngOnInit() {
  }

  showNodeInfo(index){
    this.nodeSelectedChanged.emit(index);
  }

  

}
