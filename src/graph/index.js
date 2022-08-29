// Graph data structure has multiple nodes and contains some link between them. 
// 
//    2 -- 3 -- 6
//    |     \ /
//    5      4
// 
const Graph = function() {
  this.adjcentNodes = {};
  this.numberOfNodes = 0;
}

// Will add a Vertex/Node to the Graph
// 
Graph.prototype.addVertex = function(node) {
  this.adjcentNodes[node] ||= [];
  this.numberOfNodes++; 
};

// Specifies a connection between two nodes
// 
Graph.prototype.addEdge = function(node1, node2) {
  if (this.adjcentNodes[node1]) this.adjcentNodes[node1].push(node2);

  if (this.adjcentNodes[node2]) this.adjcentNodes[node2].push(node1);
}

module.exports = Graph;