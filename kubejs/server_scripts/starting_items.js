PlayerEvents.loggedIn(event => {
	const starting_stage = 'starting_items';

	if(!event.player.stages.has(starting_stage)) {
		event.player.stages.add(starting_stage);

		event.player.give('create_sa:copper_pickaxe');
		event.player.give('comforts:sleeping_bag_white');
		event.player.give('sophisticatedbackpacks:backpack');
		event.player.give('create_sa:copper_chestplate');
		event.player.give('create_sa:copper_leggings');
		event.player.give('minecraft:leather_boots');
		event.player.give('16x minecraft:apple');
		event.player.give('4x farmersdelight:egg_sandwich');
		event.player.give('4x farmersdelight:chicken_sandwich');
	}
});
