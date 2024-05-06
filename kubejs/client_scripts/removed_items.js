ItemEvents.tooltip(event => {
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
		'thermal:beetroot_block'
	];

	event.add(removedItems, '\u00A7cItem removed');
});
