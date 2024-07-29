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

	event.recipes.create.haunting('architects_palette:withered_bone', 'minecraft:bone');

	const pulverizerEnergyCost = 4000;

	event.recipes.thermal.pulverizer(['3x minecraft:diamond', '2x minecraft:netherite_scrap'], '#forge:armor/netherite').energy(pulverizerEnergyCost);
	event.recipes.thermal.pulverizer(['minecraft:diamond', '2x minecraft:netherite_scrap', 'thermal:sawdust'], '#forge:tools/netherite').energy(pulverizerEnergyCost);
});
