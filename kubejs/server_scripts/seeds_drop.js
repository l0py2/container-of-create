ServerEvents.blockLootTables(event => {
	const seeds = [
		'thermal:amaranth_seeds',
		'thermal:barley_seeds',
		'thermal:corn_seeds',
		'thermal:radish_seeds',
		'thermal:sadiroot_seeds',
		'thermal:spinach_seeds',
		'thermal:bell_pepper_seeds',
		'thermal:eggplant_seeds',
		'thermal:green_bean_seeds',
		'thermal:peanut_seeds',
		'thermal:strawberry_seeds',
		'thermal:coffee_seeds',
		'thermal:hops_seeds',
		'thermal:tea_seeds',
		'thermal:frost_melon_seeds',
		'minecraft:wheat_seeds'
	];

	const grasses = [
		'minecraft:grass',
		'minecraft:tall_grass'
	];

	grasses.forEach(grass => {
		event.modifyBlock(grass, table => {
			table.addPool(pool => {
				pool.survivesExplosion();

				pool.rolls = { n: 1, p: 0.1 };

				seeds.forEach(seed => pool.addItem(seed));
			});
		});
	});
});
