ServerEvents.recipes(event => {
	event.remove({ input: 'minecraft:rotten_flesh', output: 'minecraft:leather' });
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh');

	event.shaped(
		'minecraft:saddle',
		[
			'  A',
			'AAA',
			'ABA'
		],
		{
			A: 'minecraft:leather',
			B: 'minecraft:iron_nugget'
		}
	);

	event.shapeless(
		'minecraft:name_tag',
		['minecraft:string', 'minecraft:slime_ball', 'minecraft:paper']
	);
});
