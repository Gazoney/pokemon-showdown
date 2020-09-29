// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js
import {Utils} from './../lib/utils';

export const Formats: (FormatsData | {section: string, column?: number})[] = [

	// Gen 8 VGC Formats
	///////////////////////////////////////////////////////////////////

	{
		section: "Gen 8 VGC",
	},
	{
		name: "[Gen 8] VGC 2020 [Series 6]",

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer'],
		banlist: [
			'Cinderace', 'Dragapult', 'Excadrill', 'Gyarados', 'Hippowdon', 'Incineroar', 'Indeedee', 'Magnezone',
			'Mimikyu', 'Porygon2', 'Rillaboom', 'Togekiss', 'Torkoal', 'Tyranitar', 'Venusaur', 'Whimsicott',
		],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020 [Series 5]",

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020 [Series 4]",

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer', 'Galar Pokedex'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020 [Series 3]",

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer', 'Galar Pokedex'],
		unbanlist: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Squirtle', 'Wartortle', 'Blastoise', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Pyroar', 'Incineroar', 'Popplio', 'Brionne', 'Primarina'],
		banlist: ['Copperajah-Gmax', 'Duraludon-Gmax', 'Garbodor-Gmax', 'Gengar-Gmax', 'Machamp-Gmax'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020 [Series 2]",

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer', 'Galar Pokedex'],
		banlist: ['Coalossal-Gmax', 'Copperajah-Gmax', 'Duraludon-Gmax', 'Garbodor-Gmax', 'Gengar-Gmax', 'Hatterene-Gmax', 'Lapras-Gmax', 'Machamp-Gmax'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] VGC 2020 [Series 1]",

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer', 'Galar Pokedex'],
		banlist: ['Butterfree-Gmax', 'Coalossal-Gmax', 'Copperajah-Gmax', 'Corviknight-Gmax', 'Duraludon-Gmax', 'Eevee-Gmax', 'Garbodor-Gmax', 'Gengar-Gmax', 'Hatterene-Gmax', 'Lapras-Gmax', 'Machamp-Gmax', 'Meowth-Gmax', 'Pikachu-Gmax', 'Snorlax-Gmax'],
		minSourceGen: 8,
	},
	{
		section: "Gen 7 VGC",
	},
	{
		name: "[Gen 7] VGC Ultra Series",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: true,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Minimal GBU', 'VGC Timer'],
		minSourceGen: 7,
		onValidateTeam(team) {
			const legends = [
				'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma',
			];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return [`You can only use up to two legendary Pok\u00E9mon.`];
			}
		},
	},
	{
		name: "[Gen 7] VGC Moon Series",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: true,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Minimal GBU', 'VGC Timer', 'Mega Clause'],
		banlist: ['Red Orb', 'Blue Orb', 'Ultranecrozium Z', 'Dragon Ascent'],
		minSourceGen: 7,
		onValidateTeam(team) {
			const legends = [
				'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma',
			];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return [`You can only use up to two legendary Pok\u00E9mon.`];
			}
		},
	},
	{
		name: "[Gen 7] VGC Sun Series",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: true,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Minimal GBU', 'VGC Timer', 'Mega Clause', 'Z-Move Clause'],
		banlist: ['Red Orb', 'Blue Orb', 'Dragon Ascent'],
		minSourceGen: 7,
		onValidateTeam(team) {
			const legends = [
				'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma',
			];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return [`You can only use up to two legendary Pok\u00E9mon.`];
			}
		},
	},
	{
		name: "[Gen 7] VGC 2018",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: true,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {
			starting: 5 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Oranguru + Symbiosis', 'Passimian + Defiant', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry'],
		minSourceGen: 7,
	},
	{
		name: "[Gen 7] VGC 2017",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
		],

		mod: 'vgc17',
		gameType: 'doubles',
		searchShow: true,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {
			starting: 15 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Obtainable', 'Alola Pokedex', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega',
			'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry',
		],
		minSourceGen: 7,
	},
	{
		section: "Gen 6 VGC",
	},
	{
		name: "[Gen 6] VGC 2016",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Volcanion', 'Soul Dew',
		],
		minSourceGen: 6,
		onValidateTeam(team) {
			const legends = [
				'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde',
			];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "[Gen 6] VGC 2015",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {
			starting: 5 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Standard GBU'],
		banlist: [],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] VGC 2014",

		mod: 'vgc16',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {
			starting: 15 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Obtainable', 'Kalos Pokedex', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega',
			'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry',
		],
		unbanlist: [
			'Abomasnow-Mega', 'Absol-Mega', 'Aerodactyl-Mega', 'Aggron-Mega', 'Alakazam-Mega', 'Ampharos-Mega', 'Banette-Mega', 'Blastoise-Mega', 'Blaziken-Mega', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Garchomp-Mega', 'Gardevoir-Mega', 'Gengar-Mega', 'Gyarados-Mega', 'Heracross-Mega', 'Houndoom-Mega', 'Kangaskhan-Mega', 'Latias-Mega', 'Latios-Mega', 'Lucario-Mega', 'Manectric-Mega', 'Mawile-Mega', 'Medicham-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Pinsir-Mega', 'Scizor-Mega', 'Tyranitar-Mega', 'Venusaur-Mega',
		],
		minSourceGen: 6,
	},
	{
		section: "Gen 5 VGC",
	},
	{
		name: "[Gen 5] VGC 2013",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] VGC 2012",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop', 'Tornadus-Therian', 'Thundurus-Therian', 'Landorus-Therian'],
	},
	{
		name: "[Gen 5] VGC 2011",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop', 'Tornadus-Therian', 'Thundurus-Therian', 'Landorus-Therian'],
	},
	{
		section: "Gen 4 VGC",
	},
		{
		name: "[Gen 4] VGC 2010",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},

		ruleset: ['Empty Team Preview'],
		banlist: ['Soul Dew'],
		onValidateTeam(team) {
			const legends = [
				'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina',
			];
			let n = 0;
			let count = 1;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 4) return ["You can only use up to four legendary Pok\u00E9mon."];
				if (count == 4 && n > 2) return ["You can only bring up to two legendary Pok\u00E9mon."];
				count++;
			}
		}
	},
	{
		name: "[Gen 4] VGC 2009",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},

		ruleset: ['No Preview VGC'],
		banlist: ['Mewtwo', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Groudon', 'Kyogre', 'Rayquaza', 'Rotom', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Soul Dew'],
	},
	{
		name: "[Gen 4] VGC 2008",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: true,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},

		ruleset: ['No Preview VGC'],
		banlist: ['Dragonite', 'Mewtwo', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Groudon', 'Kyogre', 'Rayquaza', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Soul Dew'],
	},
];
