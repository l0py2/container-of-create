ServerEvents.recipes(event => {
	const removedPlates = [
		'thermal:iron_plate',
		'thermal:gold_plate',
		'thermal:copper_plate',
		'thermal:electrum_plate',
	];

	const thermalPlates = Ingredient.of(/thermal:.*_plate/).getItemIds()
		.filter(id => removedPlates.indexOf(id) == -1);

	thermalPlates.forEach(plate => {
		event.remove({ type: 'thermal:press', output: plate });
	});

	thermalPlates.forEach(plate => {
		const materialName = plate.slice(plate.indexOf(':') + 1, plate.indexOf('_plate'));

		const ingot = Ingredient.of(new RegExp(`${materialName}_ingot`)).getFirst().id;

		event.recipes.create.pressing(plate, ingot);
	});
});
