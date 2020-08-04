function colorGraph(graph, degree) {
	graph.forEach((node) => {
		const neighborColors = [];
		for (let neighbor of node.neighbors.values()) {
			if (!(neighbor.color === null)) neighborColors.push(neighbor.color);
		}

		for (let i = 0; i < degree + 1; i++) {
			if (!neighborColors.includes(i)) {
				node.color = i;
				break;
			}
		}
	});

	return graph;
}

module.exports = { colorGraph };
