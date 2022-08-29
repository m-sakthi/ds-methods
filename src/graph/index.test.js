const Graph = require('./index');

describe('Graph', () => {
  describe('constructor', () => {
    it('should initialise a Graph', () => {
      const graph = new Graph();
      expect(graph).toBeInstanceOf(Graph);
      expect(graph.adjcentNodes).toEqual({});
      expect(graph.numberOfNodes).toBe(0);
    });
  });

  describe('addVertex', () => {
    it('should add a vertex to the Graph', () => {
      const graph = new Graph();
      expect(graph).toBeInstanceOf(Graph);

      const newNode = 2;
      graph.addVertex(newNode);

      expect(graph.adjcentNodes[newNode]).toEqual([]);
      expect(graph.numberOfNodes).toBe(1);
    });
  });

  describe('addEdge', () => {
    it('should add an edge to a Graph node', () => {
      const graph = new Graph();
      expect(graph).toBeInstanceOf(Graph);

      const node1 = 2;
      const node2 = 3;
      graph.addVertex(node1);
      graph.addEdge(node1, node2);

      expect(graph.adjcentNodes[node1]).toEqual([node2]);
      expect(graph.numberOfNodes).toBe(1);
    });

    it('should add edges to eachother', () => {
      const graph = new Graph();
      expect(graph).toBeInstanceOf(Graph);

      const node1 = 2;
      const node2 = 3;
      graph.addVertex(node1);
      graph.addVertex(node2);
      graph.addEdge(node1, node2);

      expect(graph.adjcentNodes[node1]).toEqual([node2]);
      expect(graph.adjcentNodes[node2]).toEqual([node1]);
      expect(graph.numberOfNodes).toBe(2);
    });

    it('should not add add an edge when no nodes are passed', () => {
      const graph = new Graph();
      expect(graph).toBeInstanceOf(Graph);

      graph.addEdge(null, null);

      expect(graph.numberOfNodes).toBe(0);
    });
  });
});