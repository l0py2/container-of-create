ServerEvents.recipes(event => {
	event.recipes.create.mixing('thermal:steel_ingot', ['thermal:coal_coke', 'minecraft:iron_ingot']).heated();
	event.recipes.create.mixing('thermal:rose_gold_ingot', ['minecraft:copper_ingot', 'minecraft:gold_ingot']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:bronze_ingot' });
	event.recipes.create.mixing('4x thermal:bronze_ingot', ['thermal:tin_ingot', '3x minecraft:copper_ingot']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:electrum_ingot' });
	event.recipes.create.mixing('2x thermal:electrum_ingot', ['thermal:silver_ingot', 'minecraft:gold_ingot']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:invar_ingot' });
	event.recipes.create.mixing('3x thermal:invar_ingot', ['thermal:nickel_ingot', '2x minecraft:iron_ingot']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:constantan_ingot' });
	event.recipes.create.mixing('2x thermal:constantan_ingot', ['minecraft:copper_ingot', 'thermal:nickel_ingot']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:signalum_ingot' });
	event.recipes.create.mixing('4x thermal:signalum_ingot', ['3x minecraft:copper_ingot', 'thermal:silver_ingot', '4x minecraft:redstone']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:lumium_ingot' });
	event.recipes.create.mixing('4x thermal:lumium_ingot', ['3x thermal:tin_ingot', 'thermal:silver_ingot', '2x minecraft:glowstone_dust']).heated();
	event.remove({ input: 'minecraft:fire_charge', output: 'thermal:enderium_ingot' });
	event.recipes.create.mixing('2x thermal:enderium_ingot', ['3x thermal:lead_ingot', 'thermal:diamond_dust', '2x #forge:ender_pearls']).heated();
});
