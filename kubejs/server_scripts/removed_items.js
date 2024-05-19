// priority: 0

const removedItems = [
	'aquaculture:wooden_fillet_knife',
	'aquaculture:stone_fillet_knife',
	'aquaculture:iron_fillet_knife',
	'aquaculture:gold_fillet_knife',
	'aquaculture:diamond_fillet_knife',
	'thermal:sushi_maki',
	/thermal:flax.*/,
	/thermal:onion.*/,
	/thermal:tomato.*/,
	/thermal:rice.*/,
	'thermal:bamboo_block',
	'thermal:apple_block',
	'thermal:carrot_block',
	'thermal:potato_block',
	'thermal:beetroot_block',
];

ServerEvents.tags('item', event => {
	removedItems.forEach(item => {
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

	removedItems.forEach(item => {
		event.remove([{ output: item }, { input: item }]);
	});
});
