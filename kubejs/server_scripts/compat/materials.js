ServerEvents.recipes(event => {
	const gems = [
		'apatite',
		'cinnabar',
		'diamond',
		'emerald',
		'lapis',
		'niter',
		'quartz',
		'ruby',
		'sapphire',
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
		event.recipes.create.pressing(`thermal:${ore}_plate`, `#forge:ingots/${ore}`);
		event.recipes.create.crushing(`thermal:${ore}_dust`, `#forge:ingots/${ore}`);
		event.recipes.create.crushing(`thermal:${ore}_dust`, `#forge:plates/${ore}`);
		event.recipes.create.crushing(`thermal:${ore}_dust`, `#forge:gears/${ore}`);
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
