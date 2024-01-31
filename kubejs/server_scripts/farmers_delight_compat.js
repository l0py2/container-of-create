ServerEvents.tags('item', event => {
	const knives = event.get('forge:tools/knives').getObjectIds();
	const tags = [
		'sliceanddice:allowed_tools',
		'farmersdelight:straw_harvesters',
		'forge:tools',
		'nethersdelight:tools/hunting_tools',
		'farmersdelight:tools/knives'
	];

	knives.forEach(knife => {
		tags.forEach(tag => event.add(tag, knife));
	});
});

ServerEvents.recipes(event => {
	const aquacultureKnifes = [
		'aquaculture:wooden_fillet_knife',
		'aquaculture:stone_fillet_knife',
		'aquaculture:iron_fillet_knife',
		'aquaculture:gold_fillet_knife',
		'aquaculture:diamond_fillet_knife'
	];

	aquacultureKnifes.forEach(knife => event.remove({ output: knife }));

	event.remove({ output: 'aquaculture:sushi' });

	event.shaped(
		'aquaculture:sushi',
		[
			' A ',
			' B ',
			'CCC'
		],
		{
			A: 'farmersdelight:cooked_rice',
			B: 'aquaculture:fish_fillet_raw',
			C: 'minecraft:dried_kelp'
		}
	);

	event.replaceOutput(
		{ output: 'farmersdelight:rope' },
		'farmersdelight:rope',
		'supplementaries:rope'
	);

	event.replaceInput(
		{ input: 'farmersdelight:rope' },
		'farmersdelight:rope',
		'supplementaries:rope'
	);

	event.replaceInput(
		{ input: '#forge/rope' },
		'#forge:rope',
		'supplementaries:rope'
	);

	event.replaceOutput(
		{ output: Item.of('supplementaries:rope', 3) },
		Item.of('supplementaries:rope', 3),
		Item.of('supplementaries:rope', 4)
	);

	event.remove({
		input: 'supplementaries:flax',
		output: 'supplementaries:rope'
	});

	event.shaped(
		Item.of('supplementaries:rope', 4),
		[
			' A ',
			' A ',
			'   '
		],
		{
			A: 'supplementaries:flax'
		}
	);
});
