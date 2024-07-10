ServerEvents.recipes(event => {
	event.smelting('minecraft:green_dye', 'minecraft:seagrass');

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
});
