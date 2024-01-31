ItemEvents.modification(event => {
	event.modify('aquaculture:sushi', item => {
		item.foodProperties = food => {
			food.hunger(10);
			food.saturation(0.5);
		}
	});
});
