PlayerEvents.loggedIn(event => {
	const startingStage = 'starting_items';

	if(!event.player.stages.has(startingStage)) {
		event.player.stages.add(startingStage);
	}

	event.player.give('comforts:sleeping_bag_white');
	event.player.give('sophisticatedbackpacks:backpack');
	event.player.give('minecraft:leather_boots');
	event.player.give('16x minecraft:apple');
	event.player.give('4x farmersdelight:egg_sandwitch');
	event.player.give('4x farmersdelight:chicken_sandwich');
});
