export class GraphNode {
  value: string | number;
  adjacencyList: GraphNode[];

  constructor(value: string | number, adjacencyList: GraphNode[] = []) {
    this.value = value;
    this.adjacencyList = adjacencyList;
  }
}
