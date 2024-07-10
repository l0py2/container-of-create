ServerEvents.recipes(event => {
	function gearCompacting(input, output) {
		event.recipes.create.compacting(
			[
				'thermal:press_gear_die',
				output
			],
			[
				'thermal:press_gear_die',
				`4x ${input}`
			]
		);
	}

	const gemsWithGears = [
		'diamond',
		'emerald',
		'lapis',
		'quartz',
		'ruby',
		'sapphire'
	];

	gemsWithGears.forEach(gem => {
		gearCompacting(`#forge:gems/${gem}`, `thermal:${gem}_gear`);

		event.recipes.create.crushing(`thermal:${gem}_dust`, `#forge:gems/${gem}`);
		event.recipes.create.crushing(`4x thermal:${gem}_dust`, `#forge:gears/${gem}`);
	});

	const gems = [
		'apatite',
		'cinnabar',
		'lapis',
		'niter',
		'sulfur'
	];

	gems.forEach(gem => {
		event.recipes.create.crushing(`thermal:${gem}_dust`, `#forge:gems/${gem}`);
	});

	const ores = [
		'bronze',
		'constantan',
		'copper',
		'electrum',
		'enderium',
		'gold',
		'invar',
		'iron',
		'lead',
		'lumium',
		'netherite',
		'nickel',
		'rose_gold',
		'signalum',
		'silver',
		'steel',
		'tin'
	];

	ores.forEach(ore => {
		gearCompacting(`#forge:ingots/${ore}`, `thermal:${ore}_gear`);

		event.recipes.create.pressing(`thermal:${ore}_plate`, `#forge:ingots/${ore}`);
		event.recipes.create.crushing(`thermal:${ore}_dust`, `#forge:ingots/${ore}`);
		event.recipes.create.crushing(`thermal:${ore}_dust`, `#forge:plates/${ore}`);
		event.recipes.create.crushing(`4x thermal:${ore}_dust`, `#forge:gears/${ore}`);
	});

	event.remove({ output: 'ad_astra:steel_rod' });
	event.custom({
		type: 'createaddition:rolling',
		input: {
			tag: 'forge:plates/steel'
		},
		result: {
			item: 'ad_astra:steel_rod',
			count: 2
		}
	});
});
