PlayerEvents.loggedIn(event => {
	const starting_stage = 'starting_items';

	if(!event.player.stages.has(starting_stage)) {
		event.player.stages.add(starting_stage);

		const items = [
			'create_sa:copper_pickaxe',
			'comforts:sleeping_bag_white',
			'sophisticatedbackpacks:backpack',
			'create_sa:copper_chestplate',
			'create_sa:copper_leggings',
			'minecraft:leather_boots'
		];

		items.forEach(item => event.player.give(item));
	}
});
