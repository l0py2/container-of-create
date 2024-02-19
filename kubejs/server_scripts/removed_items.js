const removedItems = [
	'farmersdelight:rope',
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
	/.*coin.*/,
	/thermal:dynamo.*/,
	'thermal:press_unpacking_die',
	'thermal:press_packing_2x2_die',
	'thermal:press_packing_3x3_die',
	'thermal:iron_plate',
	'thermal:gold_plate',
	'thermal:copper_plate',
	'thermal:electrum_plate',
	'createaddition:electrum_ingot',
	'createaddition:electrum_nugget',
	'createaddition:diamond_grit'
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

	replaceItem('farmersdelight:rope', 'supplementaries:rope');
	replaceItem('thermal:flax', 'supplementaries:flax');
	replaceItem('thermal:onion', 'farmersdelight:onion');
	replaceItem('thermal:tomato', 'farmersdelight:tomato');
	replaceItem('thermal:rice', 'farmersdelight:rice');
	replaceItem('createaddition:diamond_grit', 'thermal:diamond_dust');

	removedItems.forEach(item => {
		event.remove([{ output: item }, { input: item }]);
	});
});
