const findShortestPath = require("./meshmessage.js");

test("example problem", () => {
	const network = {
		Min: ["William", "Jayden", "Omar"],
		William: ["Min", "Noam"],
		Jayden: ["Min", "Amelia", "Ren", "Noam"],
		Ren: ["Jayden", "Omar"],
		Amelia: ["Jayden", "Adam", "Miguel"],
		Adam: ["Amelia", "Miguel", "Sofia", "Lucas"],
		Miguel: ["Amelia", "Adam", "Liam", "Nathan"],
		Noam: ["Nathan", "Jayden", "William"],
		Omar: ["Ren", "Min", "Scott"],
		Scott: ["Omar"],
		Emanuel: [],
	};
	expect(findShortestPath(network, "Jayden", "Adam")).toEqual([
		"Jayden",
		"Amelia",
		"Adam",
	]);
	console.log(findShortestPath(network, "Jayden", "Jayden"))

});
