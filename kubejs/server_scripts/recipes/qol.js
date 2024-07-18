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

	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
			{
				item: 'minecraft:dripstone_block'
			}
		],
		result: [
			{
				count: 4,
				item: 'minecraft:pointed_dripstone'
			}
		],
		tool: {
			type: 'farmersdelight:tool_action',
			action: 'pickaxe_dig'
		}
	});

	event.custom({
		type: 'thermal:rock_gen',
		adjacent: 'minecraft:water',
		below: 'minecraft:dripstone_block',
		result: {
			item: 'minecraft:dripstone_block'
		}
	});
});
