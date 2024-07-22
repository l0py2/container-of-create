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
		['minecraft:string', 'minecraft:paper']
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

	function igneousExtruder(rock) {
		event.custom({
			type: 'thermal:rock_gen',
			adjacent: 'minecraft:water',
			below: rock,
			result: {
				item: rock
			}
		});
	}

	igneousExtruder('minecraft:dripstone_block');
	igneousExtruder('minecraft:tuff');

	event.recipes.create.haunting('architects_pallete:withered_bone', 'minecraft:bone');
});
