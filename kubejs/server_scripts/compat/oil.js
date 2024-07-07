ServerEvents.tags('item', event => {
	event.add('ad_astra:oil', 'tfmg:crude_oil');
	event.add('ad_astra:oil', 'thermal:crude_oil');
	event.add('forge:crude_oil', 'thermal:crude_oil');
});
