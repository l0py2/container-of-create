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
});
