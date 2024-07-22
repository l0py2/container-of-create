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
