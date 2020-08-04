const { colorGraph } = require("./graph-coloring.js");

class GraphNode {
	constructor(label) {
		this.label = label;
		this.neighbors = new Set();
		this.color = null;
	}
}

function testColoring(graph, degree) {
	colorGraph(graph, degree);
	const colors = new Set();
	for (let node of graph) {
		node.neighbors.forEach((neighbor) => {
			if(neighbor !== node) expect(neighbor.color).not.toEqual(node.color);
		});
		colors.add(node.color);
	}
	expect(colors.size <= degree + 1).toBe(true);
	/*let colorString = '';
	graph.forEach(node => colorString += `${node.label}: ${node.color}\n`);
	console.log(colorString);*/
}

test("example graph", () => {
	const a = new GraphNode("a");
	const b = new GraphNode("b");
	const c = new GraphNode("c");

	a.neighbors.add(b);
	b.neighbors.add(a);
	c.neighbors.add(b);
	b.neighbors.add(c);

	const graph = [a, b, c];
	const degree = 2;

	testColoring(graph, degree);
});

test("three node, completely connected graph", () => {
	const a = new GraphNode("a");
	const b = new GraphNode("b");
	const c = new GraphNode("c");

	a.neighbors.add(b).add(c);
	b.neighbors.add(a).add(c);
	c.neighbors.add(b).add(a);

	const graph = [a, b, c];
	const degree = 2;

	testColoring(graph, degree);
});

test("pictured example", () => {
	const a = new GraphNode("a");
	const b = new GraphNode("b");
	const c = new GraphNode("c");
	const d = new GraphNode("d");
	const e = new GraphNode("e");
	const f = new GraphNode("f");
	const g = new GraphNode("g");
	const h = new GraphNode("h");
	const i = new GraphNode("i");
	const j = new GraphNode("j");
	const k = new GraphNode("k");
	const l = new GraphNode("l");

	a.neighbors.add(b).add(c).add(d);
	b.neighbors.add(a).add(f).add(g);
	c.neighbors.add(a).add(d).add(h);
	d.neighbors.add(a).add(c).add(e);
	e.neighbors.add(d).add(f).add(j);
	f.neighbors.add(b).add(e).add(g);
	g.neighbors.add(b).add(f).add(k);
	h.neighbors.add(c).add(i).add(l);
	i.neighbors.add(h).add(j).add(l);
	j.neighbors.add(i).add(e).add(k);
	k.neighbors.add(g).add(l).add(j);
	l.neighbors.add(h).add(i).add(k);

	const graph = [a, b, c, d, e, f, g, h, i, j, k, l];
	const degree = 3;

	testColoring(graph, degree);
});

test("loop", () => {
	const a = new GraphNode("a");
	const b = new GraphNode("b");

	a.neighbors.add(b);
	b.neighbors.add(a).add(b);

	const graph = [a, b];
	const degree = 2;

	testColoring(graph, degree);
});

test("large completely connected graph", () => {
	const graph = [];
	const degree = 99;

	for(let i = 0; i < 100; i++) graph.push(new GraphNode(i));
	graph.forEach(node => graph.forEach(neighbor => {
		if(neighbor !== node) node.neighbors.add(neighbor);
	}))

	testColoring(graph, degree);
})