ServerEvents.recipes(event => {
	event.replaceInput(
		{ output: 'create:belt_connector' },
		'minecraft:dried_kelp',
		'thermal:cured_rubber'
	);

	event.replaceInput(
		{ output: 'create:rope_pulley' },
		'#minecraft:wool',
		'farmersdelight:safety_net'
	);

	event.replaceInput(
		[
			{ output: 'create:hose_pulley' },
			{ output: 'create:elevator_pulley' }
		],
		'minecraft:dried_kelp_block',
		'thermal:cured_rubber_block'
	);

	event.remove({ output: 'create:mechanical_saw' });
	event.shaped(
		'create:mechanical_saw',
		[
			' A ',
			' B ',
			' C '
		],
		{
			A: 'create:shaft',
			B: 'create:andesite_casing',
			C: 'thermal:saw_blade'
		}
	);

	event.remove({ output: 'create:mechanical_drill' });
	event.shaped(
		'create:mechanical_drill',
		[
			' A ',
			' B ',
			' C '
		],
		{
			A: 'create:shaft',
			B: 'create:andesite_casing',
			C: 'thermal:drill_head'
		}
	);

	event.replaceInput(
		[
			{ output: 'create:spout' },
			{ output: 'create_enchantment_industry:printer' },
			{ output: 'create:andesite_funnel' },
			{ output: 'create:brass_funnel' },
			{ output: 'create:andesite_tunnel' },
			{ output: 'create:brass_tunnel' }
		],
		'minecraft:dried_kelp',
		'thermal:cured_rubber'
	);
});
