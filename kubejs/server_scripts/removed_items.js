// priority: 0

ServerEvents.tags('item', event => {
	global.removedItems.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add('kubejs:removed', item);
	});
});

ServerEvents.recipes(event => {
	function replaceInput(item1, item2) {
		event.replaceInput(
			{ input: item1 },
			item1,
			item2
		);
	}

	replaceInput('create:copper_nugget', 'thermal:copper_nugget');
	replaceInput('create:copper_sheet', 'thermal:copper_plate');
	replaceInput('create:iron_sheet', 'thermal:iron_plate');
	replaceInput('create_new_age:copper_wire', 'createaddition:copper_wire');
	replaceInput('thermal:tomato_sauce', 'farmersdelight:tomato');

	global.removedItems.forEach(item => {
		event.remove({ output: item });
	});

	global.removedRecipeTypes.forEach(recipeType => {
		event.remove({ type: recipeType });
	});
});
