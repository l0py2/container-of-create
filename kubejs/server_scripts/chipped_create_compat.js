ServerEvents.recipes(event => {
	const chipped_tables = [
		'chipped:botanist_workbench',
		'chipped:glassblower',
		'chipped:carpenters_table',
		'chipped:loom_table',
		'chipped:mason_table',
		'chipped:alchemy_bench',
		'chipped:tinkering_table'
	];

	chipped_tables.forEach(table => {
		event.forEachRecipe({ type: table}, recipe => {
			JSON.parse(recipe.json).tags.forEach(tag => {
				Ingredient.of(`#${tag}`).getStacks().forEach(item => {
					event.recipes.create.cutting(item.id, `#${tag}`);
				});
			});
		});
	});
});
