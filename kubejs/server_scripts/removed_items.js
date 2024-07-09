// priority: 0

ServerEvents.tags('item', event => {
	global.removedItems.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add('kubejs:removed', item);
	});
});

ServerEvents.recipes(event => {
	function replaceItem(item1, item2) {
		event.replaceOutput(
			{ output: item1 },
			item1,
			item2
		);

		event.replaceInput(
			{ input: item1 },
			item1,
			item2
		);
	}

	replaceItem('thermal:flax', 'supplementaries:flax');
	replaceItem('thermal:onion', 'farmersdelight:onion');
	replaceItem('thermal:tomato', 'farmersdelight:tomato');
	replaceItem('thermal:rice', 'farmersdelight:rice');
	replaceItem('create_new_age:copper_wire', 'createaddition:copper_wire');

	global.removedItems.forEach(item => {
		event.remove([{ output: item }, { input: item }]);
	});
});
