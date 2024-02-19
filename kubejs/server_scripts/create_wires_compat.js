ServerEvents.recipes(event => {
	function rolling(input, output, count) {
		event.custom({
			type: 'createaddition:rolling',
			input: {
				item: input
			},
			result: {
				item: output,
				count: count
			}
		});
	}

	function createSpool(material, output) {
		event.shaped(
			output,
			[
				' A ',
				'ABA',
				' A '
			],
			{
				A: material,
				B: 'createaddition:spool'
			}
		);
	}

	rolling('create_new_age:overcharged_iron_sheet', 'kubejs:overcharged_iron_wire', 2);
	rolling('create_new_age:overcharged_golden_sheet', 'kubejs:overcharged_golden_wire', 2);
	rolling('create_new_age:overcharged_diamond', 'kubejs:overcharged_diamond_wire', 1);

	event.remove({ output: 'create_new_age:copper_wire' });
	event.shapeless('create_new_age:copper_wire', [ 'createaddition:copper_spool' ]);
	event.shapeless('createaddition:copper_spool', [ 'create_new_age:copper_wire' ]);

	event.remove({ output: 'create_new_age:overcharged_iron_wire' });
	createSpool('kubejs:overcharged_iron_wire', 'create_new_age:overcharged_iron_wire');

	event.remove({ output: 'create_new_age:overcharged_golden_wire' });
	createSpool('kubejs:overcharged_golden_wire', 'create_new_age:overcharged_golden_wire');

	event.remove({ output: 'create_new_age:overcharged_diamond_wire' });
	createSpool('kubejs:overcharged_diamond_wire', 'create_new_age:overcharged_diamond_wire');
});
