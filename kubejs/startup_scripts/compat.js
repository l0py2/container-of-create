StartupEvents.registry('item', event => {
	event.create('overcharged_iron_wire');
	event.create('overcharged_golden_wire');
	event.create('overcharged_diamond_wire');
});

ItemEvents.modification(event => {
	event.modify('aquaculture:sushi', item => {
		item.foodProperties = food => {
			food.hunger(10);
			food.saturation(0.5);
		}
	});
});
