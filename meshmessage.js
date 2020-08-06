function findShortestPath(network, start, finish) {
	if(start === finish) return [start];
	const nodesVisited = new Set([start]);
	function scan(boundary) {
		if(boundary.length === 0) return;
		const newBoundary = [];
		for (let node of boundary) {
			for (let neighbor of network[node]) {
				if (!nodesVisited.has(neighbor) && network[neighbor]) {
					network[neighbor][start] = node;
					if(neighbor === finish) return;
					nodesVisited.add(neighbor);
					newBoundary.push(neighbor);
				}
			}
		}
		scan(newBoundary);
	}
	scan([start]);
	if(!network[finish][start]) throw "No path exists";
	const path = [];
	let traversingNode = finish;
	while(network[traversingNode][start]){
		path.unshift(traversingNode);
		traversingNode = network[traversingNode][start];
	}
	path.unshift(start);
	return path;
}

module.exports = findShortestPath;
