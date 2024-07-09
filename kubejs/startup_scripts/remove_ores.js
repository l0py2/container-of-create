WorldgenEvents.remove(event => {
	event.removeOres(props => {
		props.blocks = global.removedOres;
	});
});
