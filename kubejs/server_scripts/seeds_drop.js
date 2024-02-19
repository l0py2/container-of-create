ServerEvents.blockLootTables(event => {
	const removedSeeds = [
		'thermal:flax_seeds',
		'thermal:onion_seeds',
		'thermal:tomato_seeds',
		'thermal:rice_seeds',
		'thermal:frost_melon_seeds'
	];

	const seeds = Ingredient.of(/thermal:.*_seeds/).getItemIds()
		.filter(seed => removedSeeds.indexOf(seed) == -1);

	const grasses = [
		'minecraft:grass',
		'minecraft:tall_grass',
	];

	grasses.forEach(grass => {
		event.modifyBlock(grass, table => {
			table.addPool(pool => {
				pool.survivesExplosion();

				pool.rolls = { n: 1, p: 0.125 };

				seeds.forEach(seed => pool.addItem(seed));
			});
		});
	});
});
