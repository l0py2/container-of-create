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
		event.recipes.create.crushing(`thermal:${gem}_dust`, Item.of(`#forge:gems/${gem}`));
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
		event.recipes.create.crushing(`thermal:${ore}_dust`, Item.of(`#forge:ingots/${ore}`));
		event.recipes.create.crushing(`thermal:${ore}_dust`, Item.of(`#forge:plates/${ore}`));
		event.recipes.create.crushing(`thermal:${ore}_dust`, Item.of(`#forge:gears/${ore}`));
	});
});
