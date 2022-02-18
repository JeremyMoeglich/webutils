export const units = {
	systems: {
		metric: {
			name: 'Metric System',
			notes: 'Should become a category!'
		},
		si: {
			name: 'International System of Units',
			inherits: 'metric'
		},
		astronomical: {
			name: 'Astronomical Units',
			inherits: 'si'
		},
		siCommon: {
			name: 'Common Non-Scientific Metric (SI)',
			inherits: 'si'
		},
		australia: {
			name: 'Common Australian Metric (SI)',
			inherits: 'siCommon'
		},
		canada: {
			name: 'Common Canadian Metric (SI)',
			inherits: 'siCommon'
		},
		legacyMetric: {
			name: 'Legacy Metric Systems',
			historical: true,
			inherits: 'metric'
		},
		cgs: {
			name: 'Centimetre-Gram-Second Unit System',
			historical: true,
			inherits: 'legacyMetric'
		},
		mts: {
			name: 'Metre-Tonne-Second Unit System',
			historical: true,
			inherits: 'legacyMetric'
		},
		mks: {
			name: 'Metre-Kilogramme-Second Unit System',
			historical: true,
			inherits: 'legacyMetric'
		},
		gravitational: {
			name: 'Gravitational Metric System',
			historical: true,
			inherits: 'legacyMetric'
		},
		naturalUnitSystems: {
			name: 'Natural Unit Systems',
			category: true,
			notes: 'A set of systems that hold certain universal constants to 1'
		},
		planck: {
			name: 'Planck Units',
			inherits: 'naturalUnitSystems',
			notes: 'Sets c = G = ħ = kB = 1'
		},
		natural: {
			name: 'Natural Units',
			inherits: 'naturalUnitSystems',
			notes: 'Sets c = ħ = kB = 1'
		},
		stoney: {
			name: 'Stoney Units',
			inherits: 'naturalUnitSystems',
			notes: 'Sets c = G = e = kB = 1; c = 1/α'
		},
		hartree: {
			name: 'Hartree Atomic Units',
			inherits: 'naturalUnitSystems',
			notes: 'Sets e = mₑ = ħ = kB = 1; c = 1/α'
		},
		rydberg: {
			name: 'Rydberg Atomic Units',
			inherits: 'naturalUnitSystems',
			notes: 'Sets e/√2 = 2mₑ = ħ = kB = 1; c = 2/α'
		},
		qcd: {
			name: 'Quantum Chromodynamics Units (QCD)',
			inherits: 'naturalUnitSystems',
			notes: 'Sets c = mp = ħ = kB = 1'
		},
		internationalNautical: {
			name: 'International Nautical Measure'
		},
		imperial: {
			name: 'UK Imperial Units'
		},
		imperialNautical: {
			name: 'Imperial Nautical Units',
			historical: true,
			inherits: 'imperial'
		},
		englishEngineering: {
			name: 'English Engineering System',
			historical: true,
			inherits: 'imperial'
		},
		britishGravitational: {
			name: 'British Gravitational System',
			historical: true,
			inherits: 'imperial'
		},
		absoluteEnglish: {
			name: 'Absolute English System',
			historical: true,
			inherits: 'imperial'
		},
		usCustomary: {
			name: 'US Customary Units',
			notes: 'The American System of Measures'
		},
		avoirdupois: {
			name: 'Avoirdupois Units',
			inherits: 'usCustomary'
		},
		usSurvey: {
			name: 'US Survey Units',
			inherits: 'usCustomary'
		},
		usNautical: {
			name: 'International Nautical Units',
			inherits: 'usCustomary'
		},
		usFoodNutrition: {
			name: 'US Food Nutrition Labeling Units',
			inherits: 'usCustomary'
		},
		englishUnits: {
			name: 'Traditional English Units',
			historical: true,
			notes: '...'
		},
		apothecaries: {
			name: "Apothecaries' Units",
			historical: true,
			inherits: 'englishUnits'
		},
		troy: {
			name: 'Troy Weight',
			historical: true,
			inherits: 'englishUnits'
		},
		nonStandard: {
			name: 'Non-Standard Units',
			notes: "Units that don't fit into a specific system"
		},
		traditionalChinese: {
			name: 'Traditional Chinese Units',
			historical: true,
			notes: '...'
		},
		oldEuropean: {
			name: 'Old European Units',
			historical: true,
			notes: '...'
		},
		ancient: {
			name: 'Ancient Units',
			historical: true,
			notes: '...'
		},
		biblical: {
			name: 'Biblical Units',
			historical: true,
			inherits: 'ancient'
		},
		ancientRoman: {
			name: 'Ancient Roman Units',
			historical: true,
			inherits: 'ancient'
		}
	},
	dimensions: {
		time: {
			name: 'time',
			otherNames: ['duration'],
			symbol: 'T',
			baseUnit: 'second',
			vector: false,
			units: {
				second: {
					name: 'second',
					plural: 'seconds',
					symbol: 's',
					otherSymbols: ['sec'],
					type: 'si',
					systems: ['metric', 'imperial', 'usCustomary', 'englishUnits'],
					tags: ['cooking'],
					notes: '1/60 of minute'
				},
				minute: {
					name: 'minute',
					plural: 'minutes',
					symbol: 'min',
					type: 'customary',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					tags: ['cooking'],
					multiplier: 60,
					notes: '1/60 of hour'
				},
				hour: {
					name: 'hour',
					plural: 'hours',
					otherNames: ['horae'],
					symbol: 'h',
					otherSymbols: ['hr'],
					type: 'customary',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits', 'ancient'],
					tags: ['cooking'],
					multiplier: 3600,
					notes: '1/24 of day. The hour was developed by astrologers in Classical antiquity.'
				},
				day: {
					name: 'day',
					plural: 'days',
					symbol: 'd',
					type: 'customary',
					multiplier: 86400,
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits', 'ancient'],
					notes: 'Possible Base'
				},
				week: {
					name: 'week',
					plural: 'weeks',
					symbol: 'wk',
					otherSymbols: ['w'],
					type: 'customary',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					multiplier: 604800,
					notes: '7 days'
				},
				month: {
					name: 'month',
					plural: 'months',
					type: 'customary',
					estimation: true,
					multiplier: 2629800,
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					notes: '1/12 of Julian year.'
				},
				year: {
					name: 'year',
					plural: 'years',
					otherNames: ['annus', 'Julian year'],
					symbol: 'yr',
					otherSymbols: ['y', 'a', 'aj'],
					type: 'si',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					multiplier: 31557600,
					notes: '365.25 days of 86400 seconds'
				},
				commonYear: {
					name: 'common year',
					plural: 'common years',
					symbol: 'common yr',
					otherSymbols: ['y'],
					type: 'customary',
					multiplier: 31536000,
					systems: ['nonStandard'],
					notes: 'Common Year - 365 days of 86400 seconds. Maybe si.'
				},
				leapYear: {
					name: 'leap year',
					plural: 'leap years',
					symbol: 'leap yr',
					type: 'customary',
					multiplier: 31622400,
					systems: ['nonStandard'],
					notes: 'Leap Year - 366 days of 86400 seconds'
				},
				gregorianYear: {
					name: 'Gregorian year',
					plural: 'Gregorian years',
					otherNames: ['year'],
					symbol: 'yr',
					otherSymbols: ['y'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 31556952,
					notes: '365.2425 days of 86400 seconds. Maybe si.'
				},
				tropicalYear: {
					name: 'tropical year',
					plural: 'tropical years',
					otherNames: ['year'],
					symbol: 'yr',
					otherSymbols: ['y'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 31556925.216,
					notes: '365.24219 days of 86400 seconds. Maybe si.'
				},
				ke: {
					name: 'ke',
					type: 'customary',
					systems: ['traditionalChinese'],
					multiplier: 864
				},
				decade: {
					name: 'decade',
					plural: 'decades',
					type: 'customary',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					multiplier: 315576000,
					notes: '10 Julian years'
				},
				century: {
					name: 'century',
					plural: 'centuries',
					symbol: 'C',
					type: 'customary',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					multiplier: 3155760000,
					notes: '100 Julian years'
				},
				millennium: {
					name: 'millennium',
					plural: 'millennia',
					symbol: 'M',
					type: 'customary',
					systems: ['siCommon', 'imperial', 'usCustomary', 'englishUnits'],
					multiplier: 31557600000,
					notes: '1000 Julian years'
				},
				minuta: {
					name: 'minuta',
					type: 'customary',
					systems: ['ancient'],
					multiplier: 1440,
					notes: '1/60 of day. Used by ancient astrologers.'
				},
				secunda: {
					name: 'secunda',
					type: 'customary',
					systems: ['ancient'],
					multiplier: 24,
					notes: '1/3600 of day. Used by ancient astrologers.'
				},
				planckTime: {
					name: 'Planck time',
					symbol: 't\u209A',
					type: 'customary',
					systems: ['planck'],
					multiplier: 5.39106e-44,
					uncertainty: 0.00032e-44
				},
				naturalTime: {
					name: 'inverse electron volt of time',
					plural: 'inverse electron volts of time',
					symbol: '1/E',
					otherSymbols: ['E⁻¹', 'eV⁻¹', 'eV⁻¹ of time'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 6.58e-16,
					uncertainty: 0.01e-16
				}
			}
		},
		length: {
			name: 'length',
			otherNames: ['distance', 'radius', 'wavelength'],
			symbol: 'L',
			baseUnit: 'metre',
			vector: false,
			units: {
				metre: {
					name: 'metre',
					plural: 'metres',
					otherNames: ['meter', 'meters'],
					symbol: 'm',
					type: 'si',
					systems: ['si', 'mts', 'mks', 'gravitational'],
					tags: ['cooking']
				},
				angstrom: {
					name: 'ångström',
					plural: 'ångströms',
					otherNames: ['angstrom', 'angstroms'],
					symbol: 'Å',
					otherSymbols: ['A'],
					systems: ['legacyMetric'],
					type: 'customary',
					multiplier: 1e-10
				},
				centimetre: {
					name: 'centimetre',
					plural: 'centimetres',
					otherNames: ['centimeter', 'centimeters'],
					symbol: 'cm',
					systems: ['cgs'],
					type: 'customary',
					multiplier: 0.01
				},
				mile: {
					name: 'mile',
					plural: 'miles',
					symbol: 'mi',
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'englishUnits'],
					multiplier: 1609.344
				},
				usSurveyMile: {
					name: 'US Survey mile',
					plural: 'US Survey miles',
					otherNames: ['statute mile', 'mile', 'miles'],
					symbol: 'mi',
					type: 'customary',
					systems: ['usSurvey'],
					rare: true,
					multiplier: 1609.3472,
					notes: 'Used exclusively for land survey. Used to be statute mile'
				},
				yard: {
					name: 'yard',
					plural: 'yards',
					symbol: 'yd',
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'englishUnits'],
					multiplier: 0.9144
				},
				foot: {
					name: 'foot',
					plural: 'feet',
					symbol: 'ft',
					otherSymbols: ["'"],
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'englishUnits'],
					multiplier: 0.3048
				},
				usSurveyFoot: {
					name: 'US Survey foot',
					plural: 'US Survey feet',
					otherNames: ['foot', 'feet'],
					symbol: 'ft',
					otherSymbols: ["'"],
					type: 'customary',
					systems: ['usSurvey'],
					rare: true,
					multiplier: 0.3048006096,
					notes: 'Used exclusively for land survey. Used to be statute foot'
				},
				inch: {
					name: 'inch',
					plural: 'inches',
					symbol: 'in',
					otherSymbols: ['"'],
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'englishUnits'],
					multiplier: 0.0254
				},
				nauticalMile: {
					name: 'nautical mile',
					plural: 'nautical miles',
					symbol: 'M',
					otherSymbols: ['NM', 'nmi', 'naut.mi'],
					type: 'customary',
					systems: [
						'legacyMetric',
						'siCommon',
						'internationalNautical',
						'usNautical',
						'imperialNautical'
					],
					multiplier: 1852
				},
				fathom: {
					name: 'fathom',
					plural: 'fathoms',
					symbol: 'ftm',
					otherSymbols: ['f', 'fath', 'fm', 'fth', 'fthm'],
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'englishUnits'],
					multiplier: 1.8288,
					notes: 'The nautical use and definition of fathom varied widely'
				},
				cableLengthInternational: {
					name: 'cable',
					plural: 'cables',
					otherNames: ['cable length', 'cable lengths', "cable's length", "cable's lengths"],
					type: 'customary',
					systems: ['internationalNautical'],
					multiplier: 185.2
				},
				cableLengthImperial: {
					name: 'cable',
					plural: 'cables',
					otherNames: ['cable length', 'cable lengths', "cable's length", "cable's lengths"],
					type: 'customary',
					systems: ['imperialNautical'],
					multiplier: 185.32
				},
				cableLengthUS: {
					name: 'cable',
					plural: 'cables',
					otherNames: ['cable length', 'cable lengths', "cable's length", "cable's lengths"],
					type: 'customary',
					systems: ['usNautical'],
					multiplier: 219.456
				},
				furlong: {
					name: 'furlong',
					plural: 'furlongs',
					symbol: 'fur',
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'englishUnits'],
					multiplier: 201.168
				},
				cubitBiblical: {
					name: 'cubit',
					plural: 'cubits',
					type: 'customary',
					estimation: true,
					systems: ['biblical'],
					multiplier: 0.45,
					notes: 'Distance from fingers to elbow'
				},
				digitus: {
					name: 'digitus',
					otherNames: ['digitus transversus'],
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.0185,
					notes: 'finger - 1/16 pes. Based on 1 pes = 0.296m'
				},
				uncia: {
					name: 'uncia',
					otherNames: ['pollex'],
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.0246,
					notes: 'inch/thumb - 1/12 pes. Based on 1 pes = 0.296m'
				},
				palmus: {
					name: 'palmus',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.074,
					notes: 'palm width - 1/4 pes. Based on 1 pes = 0.296m'
				},
				palmusMajor: {
					name: 'palmus major',
					type: 'customary',
					estimation: true,
					rare: true,
					systems: ['ancientRoman'],
					multiplier: 0.222,
					notes: 'palm length - 3/4 pes - in late period only. Based on 1 pes = 0.296m'
				},
				pes: {
					name: 'pes',
					plural: 'pedes',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.296,
					notes: 'foot. Based on 1 pes = 0.296m'
				},
				palmipes: {
					name: 'palmipes',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.37,
					notes: '1 1/4 pedes. Based on 1 pes = 0.296m'
				},
				cubitus: {
					name: 'cubitus',
					otherNames: ['cubit'],
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.444,
					notes: 'cubit - 1 1⁄2 pedes. Based on 1 pes = 0.296m'
				},
				gradus: {
					name: 'gradus',
					otherNames: ['pes sestertius'],
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 0.74,
					notes: 'step - 2 1/2 pedes. Based on 1 pes = 0.296m'
				},
				passus: {
					name: 'passus',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 1.48,
					notes: '(double) pace - 5 pedes. Based on 1 pes = 0.296m'
				},
				pertica: {
					name: 'pertica',
					otherNames: ['decempeda'],
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 2.96,
					notes: 'perch - 10 pedes. Based on 1 pes = 0.296m'
				},
				actus: {
					name: 'actus',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 35.5,
					notes: '120 pedes. Based on 1 pes = 0.296m'
				},
				stadium: {
					name: 'stadium',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 185,
					notes: 'furlong - 625 pedes. Based on 1 pes = 0.296m'
				},
				millePassuum: {
					name: 'mille passum',
					otherNames: ['milliarium'],
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 1480,
					notes: 'mile - 5000 pedes. Based on 1 pes = 0.296m'
				},
				gallicLeuga: {
					name: 'Gallic leuga',
					type: 'customary',
					estimation: true,
					systems: ['ancientRoman'],
					multiplier: 2220,
					notes: 'league - 7500 pedes. Based on 1 pes = 0.296m'
				},
				ell: {
					name: 'ell',
					plural: 'ells',
					type: 'customary',
					rare: true,
					systems: ['oldEuropean'],
					multiplier: 1.143,
					notes: 'This is the English ell, lengths vary from 0.5m (cubit) to 1.372m'
				},
				ellScotish: {
					name: 'ell',
					plural: 'ells',
					type: 'customary',
					rare: true,
					systems: ['oldEuropean'],
					multiplier: 0.941318,
					notes: 'This is the Scotish ell, lengths vary from 0.5m (cubit) to 1.372m'
				},
				chain: {
					name: 'chain',
					plural: 'chains',
					symbol: 'ch',
					type: 'customary',
					systems: ['oldEuropean', 'englishUnits', 'usCustomary'],
					multiplier: 20.1168
				},
				finger: {
					name: 'finger',
					plural: 'fingers',
					otherNames: ['fingerbreadth', "finger's breadth"],
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 0.022225
				},
				fingerCloth: {
					name: 'finger',
					plural: 'fingers',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 0.1143
				},
				hand: {
					name: 'hand',
					plural: 'hands',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 0.1016
				},
				rod: {
					name: 'rod',
					plural: 'rods',
					symbol: 'rd',
					otherNames: ['pole', 'poles', 'perch'],
					type: 'customary',
					systems: ['oldEuropean', 'englishUnits', 'usCustomary'],
					multiplier: 5.0292
				},
				rope: {
					name: 'rope',
					plural: 'ropes',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 6.096
				},
				span: {
					name: 'span',
					plural: 'spans',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 0.2286
				},
				league: {
					name: 'league',
					plural: 'leagues',
					symbol: 'lea',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 4828.02,
					notes: 'Originally meant the distance a person could walk in an hour'
				},
				leagueNautical: {
					name: 'league',
					plural: 'leagues',
					otherNames: ['nautical league', 'nautical leagues'],
					symbol: 'lea',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 5556
				},
				astronomicalUnit: {
					name: 'astronomical unit',
					plural: 'astronomical units',
					symbol: 'au',
					otherSymbols: ['AU', 'a.u.', 'ua'],
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 1.496e11,
					notes:
						'Non-SI unit accepted for use with the SI, and whose value in SI units must be obtained experimentally'
				},
				lightSecond: {
					name: 'light-second',
					plural: 'light-seconds',
					otherNames: ['light second', 'light seconds'],
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 299792458,
					notes: 'Distance light travels in vacuum in 1 second'
				},
				lightMinute: {
					name: 'light-minute',
					plural: 'light-minutes',
					otherNames: ['light minute', 'light minutes'],
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 1.798754748e10,
					notes: 'Distance light travels in vacuum in 60 seconds'
				},
				lightHour: {
					name: 'light-hour',
					plural: 'light-hours',
					otherNames: ['light hour', 'light hours'],
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 1.079252849e12,
					notes: 'Distance light travels in vacuum in 3600 seconds'
				},
				lightDay: {
					name: 'light-day',
					plural: 'light-days',
					otherNames: ['light day', 'light days'],
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 2.590206837e13,
					notes: 'Distance light travels in vacuum in 24 light-hours, 86,400 light-seconds'
				},
				lightWeek: {
					name: 'light-week',
					plural: 'light-weeks',
					otherNames: ['light week', 'light weeks'],
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 1.813144786e14,
					notes: 'Distance light travels in vacuum in 7 light-days, 604,800 light-seconds'
				},
				lightYear: {
					name: 'light-year',
					plural: 'light-years',
					otherNames: ['light year', 'light years'],
					symbol: 'ly',
					type: 'customary',
					systems: ['astronomical'],
					multiplier: 9.4607304725808e15,
					notes: 'Distance light travels in vacuum in 365.25 days'
				},
				planckLength: {
					name: 'Planck length',
					symbol: 'l\u209A',
					type: 'customary',
					systems: ['planck'],
					multiplier: 1.616199e-35,
					uncertainty: 0.000097e-35
				},
				naturalLength: {
					name: 'inverse electron volt of length',
					plural: 'inverse electron volts of length',
					symbol: '1/E',
					otherSymbols: ['E⁻¹', 'eV⁻¹', 'eV⁻¹ of length'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 1.97e-7,
					uncertainty: 0.01e-7
				}
			}
		},
		mass: {
			name: 'mass',
			symbol: 'M',
			baseUnit: 'kilogram',
			vector: false,
			units: {
				kilogram: {
					name: 'kilogram',
					plural: 'kilograms',
					symbol: 'kg',
					otherNames: ['kilogramme'],
					type: 'si',
					systems: ['si'],
					tags: ['cooking'],
					prefixName: 'kilo',
					prefixFreeName: 'gram'
				},
				grave: {
					name: 'grave',
					plural: 'graves',
					symbol: 'G',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 1,
					notes: 'Replaced by the kilogram'
				},
				ounce: {
					name: 'ounce',
					plural: 'ounces',
					symbol: 'oz',
					otherSymbols: ['oz av'],
					type: 'customary',
					systems: ['imperial', 'avoirdupois'],
					tags: ['cooking'],
					multiplier: 0.028349523125
				},
				pound: {
					name: 'pound',
					plural: 'pounds',
					symbol: 'lb',
					otherSymbols: ['lb av'],
					type: 'customary',
					systems: ['imperial', 'avoirdupois'],
					tags: ['cooking'],
					multiplier: 0.45359237
				},
				stone: {
					name: 'stone',
					symbol: 'st',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 6.35029318,
					notes: "The plural 'stones' is not used in representing quantities."
				},
				tonLong: {
					name: 'ton',
					plural: 'tons',
					otherNames: ['long ton', 'long tons', 'imperial ton', 'weight ton'],
					symbol: 'ton',
					otherSymbols: ['long tn', 'tn'],
					type: 'customary',
					systems: ['imperial', 'avoirdupois'],
					multiplier: 1016.0469088
				},
				tonShort: {
					name: 'ton',
					plural: 'tons',
					otherNames: ['short ton', 'short tons'],
					symbol: 'ton',
					otherSymbols: ['sh tn', 'tn'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 907.18474
				},
				tonne: {
					name: 'tonne',
					plural: 'tonnes',
					otherNames: ['metric ton', 'metric tons'],
					symbol: 't',
					otherSymbols: ['T', 'mT', 'MT', 'mt', 'Te'],
					type: 'si',
					systems: ['siCommon', 'legacyMetric'],
					multiplier: 1000
				},
				grain: {
					name: 'grain',
					plural: 'grains',
					symbol: 'gr',
					otherNames: ['troy grain'],
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 64.79891e-6
				},
				mite: {
					name: 'mite',
					plural: 'mites',
					type: 'customary',
					systems: ['oldEuropean', 'troy'],
					multiplier: 3.2399455e-6,
					notes: '1/20 grain'
				},
				carat: {
					name: 'carat',
					plural: 'carats',
					otherNames: ['metric carat'],
					symbol: 'ct',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 200e-6
				},
				pennyweight: {
					name: 'pennyweight',
					plural: 'pennyweights',
					symbol: 'dwt',
					otherSymbols: ['pwt', 'PW'],
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 1.55517384e-3
				},
				hundredweightLong: {
					name: 'hundredweight',
					plural: 'hundredweights',
					otherNames: ['long hundredweight', 'centum weight'],
					symbol: 'cwt',
					otherSymbols: ['long cwt'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 50.802345
				},
				hundredweightShort: {
					name: 'hundredweight',
					plural: 'hundredweights',
					otherNames: ['short hundredweight', 'cental', 'centum weight'],
					symbol: 'sh cwt',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 45.359237
				},
				kip: {
					name: 'kip',
					plural: 'kips',
					symbol: 'kip',
					rare: true,
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 453.59237,
					notes: 'Half a short ton'
				},
				atomicMassUnit: {
					name: 'atomic mass unit',
					plural: 'atomic mass units',
					otherNames: ['dalton', 'unified atomic mass unit'],
					symbol: 'amu',
					otherSymbols: ['Da'],
					type: 'si',
					systems: ['si'],
					multiplier: 1.66053892173e-27,
					notes:
						'Non-SI unit accepted for use with the SI, and whose value in SI units must be obtained experimentally'
				},
				electronMass: {
					name: 'electron mass',
					plural: 'electron masses',
					otherNames: ['electron rest mass'],
					symbol: 'mₑ',
					type: 'si',
					systems: ['si'],
					multiplier: 9.1093821545e-31
				},
				siliqua: {
					name: 'siliqua',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 0.19e-3,
					notes: '1/144 uncia. Based on 1 libra = 328.9 g'
				},
				obolus: {
					name: 'obolus',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 0.57e-3,
					notes: '1/48 uncia. Based on 1 libra = 328.9 g'
				},
				scrupulum: {
					name: 'scrupulum',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 1.14e-3,
					notes: '1/24 uncia. Based on 1 libra = 328.9 g'
				},
				semisextula: {
					name: 'semisextula',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 2.28e-3,
					notes: '1/12 uncia. Based on 1 libra = 328.9 g'
				},
				sextula: {
					name: 'sextula',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 4.57e-3,
					notes: '1/6 uncia. Based on 1 libra = 328.9 g'
				},
				sicilicius: {
					name: 'sicilicius',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 6.85e-3,
					notes: '1/4 uncia. Based on 1 libra = 328.9 g'
				},
				duella: {
					name: 'duella',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 9.14e-3,
					notes: '1/3 uncia. Based on 1 libra = 328.9 g'
				},
				semuncia: {
					name: 'semuncia',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 13.7e-3,
					notes: '1/2 uncia. Based on 1 libra = 328.9 g'
				},
				uncia: {
					name: 'uncia',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 27.4e-3,
					notes: 'Roman ounce. 1/12 libra. Based on 1 libra = 328.9 g'
				},
				sescuncia: {
					name: 'secuncia',
					otherNames: ['sescunx'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 41.1e-3,
					notes: '1/8 libra. Based on 1 libra = 328.9 g'
				},
				sextans: {
					name: 'sextans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 54.8e-3,
					notes: '1/6 libra. Based on 1 libra = 328.9 g'
				},
				quadrans: {
					name: 'quadrans',
					otherNames: ['teruncius'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 82.2e-3,
					notes: '1/4 libra. Based on 1 libra = 328.9 g'
				},
				triens: {
					name: 'triens',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 109.6e-3,
					notes: '1/3 libra. Based on 1 libra = 328.9 g'
				},
				quincunx: {
					name: 'quincunx',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 137e-3,
					notes: '5/12 libra. Based on 1 libra = 328.9 g'
				},
				semis: {
					name: 'semis',
					otherNames: ['semissis'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 164.5e-3,
					notes: '1/2 libra. Based on 1 libra = 328.9 g'
				},
				septunx: {
					name: 'septunx',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 191.9e-3,
					notes: '7/12 libra. Based on 1 libra = 328.9 g'
				},
				bes: {
					name: 'bes',
					otherNames: ['bessis'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 219.3e-3,
					notes: '2/3 libra. Based on 1 libra = 328.9 g'
				},
				dodrans: {
					name: 'dodrans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 246.7e-3,
					notes: '3/4 libra. Based on 1 libra = 328.9 g'
				},
				dextans: {
					name: 'dextans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 274.1e-3,
					notes: '5/6 libra. Based on 1 libra = 328.9 g'
				},
				deunx: {
					name: 'deunx',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 301.5e-3,
					notes: '11/12 libra. Based on 1 libra = 328.9 g'
				},
				libra: {
					name: 'libra',
					otherNames: ['as'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 328.9e-3,
					notes: 'Roman pound. Based on 1 libra = 328.9 g'
				},
				planckMass: {
					name: 'Planck mass',
					symbol: 'm\u209A',
					type: 'customary',
					systems: ['planck'],
					multiplier: 2.17651e-8,
					uncertainty: 0.00013e-8
				},
				naturalMass: {
					name: 'electron volt of mass',
					plural: 'electron volts of mass',
					symbol: 'E',
					otherSymbols: ['E', 'eV', 'eV of mass'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 1.78e-36,
					uncertainty: 0.01e-36
				}
			}
		},
		electricCurrent: {
			name: 'electric current',
			symbol: 'I',
			baseUnit: 'ampere',
			vector: false,
			units: {
				ampere: {
					name: 'ampere',
					plural: 'amperes',
					otherNames: ['amp', 'amps'],
					symbol: 'A',
					type: 'si',
					systems: ['metric']
				},
				abampere: {
					name: 'abampere',
					plural: 'abamperes',
					otherNames: ['electromagnetic unit'],
					symbol: 'abamp',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 10
				},
				statampere: {
					name: 'statampere',
					plural: 'statamperes',
					otherNames: ['ESU per second'],
					symbol: 'statamp',
					otherSymbols: ['esu/s'],
					type: 'customary',
					systems: ['cgs'],
					estimation: true,
					multiplier: 3.335641e-10
				},
				planckCurrent: {
					name: 'Planck current',
					symbol: 'I\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 3.4789e25,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		temperature: {
			name: 'temperature',
			symbol: 'Θ',
			baseUnit: 'kelvin',
			vector: false,
			units: {
				kelvin: {
					name: 'kelvin',
					otherNames: ['degree kelvin', 'degrees kelvin'],
					symbol: '°K',
					type: 'si',
					systems: ['si'],
					notes: 'As a postpositional adjective, the plural kelvin is used instead of kelvins'
				},
				celsius: {
					name: 'celsius',
					otherNames: ['degree celsius', 'degrees celsius'],
					symbol: '°C',
					type: 'si',
					systems: ['siCommon'],
					tags: ['cooking'],
					offset: -273.15
				},
				fahrenheit: {
					name: 'fahrenheit',
					otherNames: ['degree fahrenheit', 'degrees fahrenheit'],
					symbol: '°F',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					tags: ['cooking'],
					multiplier: 1.8,
					offset: -459.67
				},
				rankine: {
					name: 'rankine',
					otherNames: ['degree rankine', 'degrees rankine'],
					symbol: '°R',
					otherSymbols: ['Ra'],
					type: 'customary',
					systems: ['nonStandard'],
					rare: true,
					multiplier: 1.8
				},
				romer: {
					name: 'romer',
					otherNames: ['degree romer', 'degrees romer'],
					symbol: '°Rø',
					otherSymbols: ['°R'],
					type: 'customary',
					systems: ['nonStandard'],
					rare: true,
					multiplier: 0.525,
					offset: -135.90375,
					notes: 'Technically Rømer'
				},
				newton: {
					name: 'newton',
					otherNames: ['degree newton', 'degrees newton'],
					symbol: '°N',
					type: 'customary',
					systems: ['nonStandard'],
					rare: true,
					multiplier: 0.33,
					offset: -90.1395
				},
				delisle: {
					name: 'delisle',
					otherNames: ['degree delisle', 'degrees delisle'],
					symbol: '°D',
					otherSymbols: ['°De'],
					type: 'customary',
					systems: ['nonStandard'],
					rare: true,
					multiplier: -1.5,
					offset: 559.725
				},
				reaumur: {
					name: 'reaumur',
					otherNames: ['degree reaumur', 'degrees reaumur'],
					symbol: '°Ré',
					otherSymbols: ['°Re', '°r'],
					type: 'customary',
					systems: ['nonStandard'],
					rare: true,
					multiplier: 0.8,
					offset: -218.52,
					notes: 'Technically Réaumur'
				},
				planckTemperature: {
					name: 'Planck temperature',
					symbol: 'T\u209A',
					type: 'customary',
					systems: ['planck'],
					multiplier: 1.416833e32,
					uncertainty: 0.000085e32
				},
				naturalTemperature: {
					name: 'electron volt of temperature',
					plural: 'electron volts of temperature',
					symbol: 'E',
					otherSymbols: ['E', 'eV', 'eV of temperature'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 1.16e4,
					uncertainty: 0.01e4
				}
			}
		},
		amountOfSubstance: {
			name: 'amount of substance',
			symbol: 'N',
			baseUnit: 'mole',
			vector: false,
			units: {
				mole: {
					name: 'mole',
					symbol: 'mol',
					type: 'si',
					systems: ['metric']
				}
			}
		},
		luminousIntensity: {
			name: 'luminous intensity',
			symbol: 'J',
			baseUnit: 'candela',
			vector: false,
			units: {
				candela: {
					name: 'candela',
					plural: 'candelas',
					symbol: 'cd',
					type: 'si',
					systems: ['si']
				},
				candlepowerNew: {
					name: 'candlepower',
					symbol: 'cp',
					type: 'customary',
					systems: ['legacyMetric', 'englishUnits'],
					rare: true,
					multiplier: 1
				},
				candlepowerOld: {
					name: 'candlepower',
					symbol: 'cp',
					type: 'customary',
					systems: ['oldEuropean'],
					estimation: true,
					multiplier: 0.981
				}
			}
		},
		solidAngle: {
			name: 'solid angle',
			symbol: 'Ω',
			dimensionless: true,
			baseUnit: 'steradian',
			vector: false,
			units: {
				steradian: {
					name: 'steradian',
					plural: 'steradians',
					symbol: 'sr',
					type: 'si',
					systems: ['si']
				},
				squareDegree: {
					name: 'square degree',
					plural: 'square degrees',
					symbol: 'deg²',
					type: 'customary',
					otherSymbols: ['sq.deg.', '(°)²'],
					systems: ['legacyMetric'],
					estimation: true,
					multiplier: 0.30462e-3,
					notes: 'More information needed on systems'
				}
			}
		},
		planeAngle: {
			name: 'plane angle',
			otherNames: ['angle'],
			symbol: 'θ',
			otherSymbols: ['α', 'β', 'γ', 'φ', 'a', 'b', 'c', 'd', 'e'],
			dimensionless: true,
			baseUnit: 'radian',
			vector: false,
			units: {
				radian: {
					name: 'radian',
					plural: 'radians',
					symbol: 'rad',
					otherSymbols: ['㎭', 'ᶜ'],
					type: 'si',
					systems: ['si'],
					acceptedPrefixes: ['milli', 'micro', 'nano'],
					notes: 'Accepted prefixes still not accepted in pure math'
				},
				mil: {
					name: 'mil',
					plural: 'mils',
					otherNames: ['angular mil', 'angular mils'],
					symbol: 'µ',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 0.981748e-3,
					notes: 'More information needed on systems'
				},
				minute: {
					name: 'minute',
					plural: 'minutes',
					otherNames: ['minute of arc', 'arcminute', 'arcminutes', 'arc minute', 'arc minutes'],
					symbol: "'",
					otherSymbols: ['arcmin', 'amin', 'am', 'MOA'],
					type: 'si',
					systems: ['metric'],
					multiplier: 0.290888e-3
				},
				second: {
					name: 'second',
					plural: 'seconds',
					otherNames: ['second of arc', 'arc second', 'arcsecond', 'arc seconds', 'arcseconds'],
					symbol: '"',
					otherSymbols: ['arcsec', 'asec', 'as'],
					type: 'si',
					systems: ['metric'],
					multiplier: 4.848137e-6
				},
				centesimalMinuteOfArc: {
					name: 'centesimal minute of arc',
					plural: 'centesimal minutes of arc',
					symbol: "'",
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 0.15708e-3,
					notes: 'More details on systems needed'
				},
				centesimalSecondOfArc: {
					name: 'centesimal second of arc',
					plural: 'centesimal seconds of arc',
					symbol: '"',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1.570796e-6,
					notes: 'More details on systems needed'
				},
				degree: {
					name: 'degree',
					plural: 'degrees',
					otherNames: [
						'degrees of arc',
						'degree of arc',
						'arc degree',
						'arc degrees',
						'arcdegree',
						'arcdegrees'
					],
					symbol: '°',
					otherSymbols: ['deg'],
					type: 'customary',
					systems: ['ancient', 'metric', 'imperial', 'usCustomary', 'englishUnits'],
					multiplier: 17.453293e-3
				},
				grad: {
					name: 'grad',
					plural: 'grads',
					otherNames: ['gradian', 'gon'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 15.707963e-3,
					notes: 'More details on systems needed'
				},
				octant: {
					name: 'octant',
					plural: 'octants',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.785398,
					notes: '45° More details on systems needed'
				},
				quadrant: {
					name: 'quadrant',
					plural: 'quadrants',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 1.570796,
					notes: '90° More details on systems needed'
				},
				sextant: {
					name: 'sextant',
					plural: 'sextants',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 1.047198,
					notes: '60° More details on systems needed'
				},
				sign: {
					name: 'sign',
					plural: 'signs',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.523599,
					notes: '30° More details on systems needed'
				}
			}
		},
		volume: {
			name: 'volume',
			symbol: 'V',
			baseUnit: 'cubicMetre',
			derived: 'length*length*length',
			vector: false,
			units: {
				cubicMetre: {
					name: 'cubic metre',
					plural: 'cubic metres',
					otherNames: [
						'cubic meter',
						'cubic meters',
						'metre cubed',
						'metres cubed',
						'meter cubed',
						'meters cubed'
					],
					symbol: 'm³',
					type: 'customary',
					systems: ['si']
				},
				acreFoot: {
					name: 'acre-foot',
					plural: 'acre-feet',
					otherNames: ['acre foot', 'acre feet'],
					symbol: 'ac ft',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 1233.48183754752
				},
				acreInch: {
					name: 'acre-inch',
					plural: 'acre-inches',
					otherNames: ['acre inch', 'acre inches'],
					symbol: 'ac in',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 102.79015312896
				},
				barrelImperial: {
					name: 'barrel',
					plural: 'barrels',
					symbol: 'bl',
					otherSymbols: ['bl (imp)'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.16365924
				},
				barrelPetroleum: {
					name: 'barrel',
					plural: 'barrels',
					otherNames: ['barrel of petroleum', 'barrels of petroleum'],
					symbol: 'bl',
					otherSymbols: ['bbl'],
					type: 'customary',
					systems: ['nonStandard'],
					tags: ['fluid-only'],
					multiplier: 0.158987294928
				},
				barrelUSDry: {
					name: 'barrel',
					plural: 'barrels',
					symbol: 'bl',
					otherSymbols: ['bl (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['dry-only'],
					multiplier: 0.115628198985075
				},
				barrelUSFluid: {
					name: 'barrel',
					plural: 'barrels',
					otherNames: ['fluid barrel', 'fluid barrels'],
					symbol: 'fl bl',
					otherSymbols: ['bl', 'fl bl (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['fluid-only'],
					multiplier: 0.119240471196
				},
				boardFoot: {
					name: 'board-foot',
					plural: 'board-feet',
					otherNames: ['foot, board measure'],
					symbol: 'FBM',
					otherSymbols: ['fbm', 'BDFT', 'BF'],
					type: 'customary',
					systems: ['usCustomary', 'canada'],
					multiplier: 2.359737216e-3
				},
				thousandBoardFoot: {
					name: 'thousand board-foot',
					plural: 'thousand board-feet',
					symbol: 'MFBM',
					otherSymbols: ['Mfbm', 'MBFT', 'MBF'],
					type: 'customary',
					systems: ['usCustomary', 'canada'],
					multiplier: 2.359737216
				},
				millionBoardFoot: {
					name: 'million board-foot',
					plural: 'million board-feet',
					symbol: 'MMFBM',
					otherSymbols: ['MMfbm', 'MMBFT', 'MMBF'],
					type: 'customary',
					systems: ['usCustomary', 'canada'],
					multiplier: 2.359737216e3
				},
				bucket: {
					name: 'bucket',
					plural: 'buckets',
					symbol: 'bkt',
					otherSymbols: ['bk', 'UK bk'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.01818436
				},
				bushelImperial: {
					name: 'bushel',
					plural: 'bushels',
					otherNames: ['bushel imperial'],
					symbol: 'bu',
					otherSymbols: ['bu (imp)'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.03636872
				},
				bushelUSDryHeaped: {
					name: 'bushel',
					plural: 'bushels',
					symbol: 'bu',
					otherSymbols: ['bu (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['dry-only'],
					multiplier: 0.0440488377086
				},
				bushelUSDryLevel: {
					name: 'bushel',
					plural: 'bushels',
					symbol: 'bu',
					otherSymbols: ['bu (US lvl)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['dry-only'],
					multiplier: 0.03523907016688
				},
				butt: {
					name: 'butt',
					plural: 'butts',
					otherNames: ['pipe', 'pipes'],
					type: 'customary',
					systems: ['englishUnits', 'imperial'],
					multiplier: 0.476961884784
				},
				coomb: {
					name: 'coomb',
					plural: 'coombs',
					type: 'customary',
					systems: ['oldEuropean', 'nonStandard'],
					multiplier: 0.14547488
				},
				cordFirewood: {
					name: 'cord',
					plural: 'cords',
					otherNames: ['cord of firewood', 'cords of firewood', 'cord (timber)', 'cords (timber)'],
					type: 'customary',
					systems: ['usCustomary', 'canada', 'nonStandard'],
					multiplier: 3.624556363776
				},
				cordFoot: {
					name: 'cord foot',
					plural: 'cord feet',
					otherNames: ['cord foot (timber)', 'cord feet (timber)'],
					type: 'customary',
					systems: ['usCustomary', 'nonStandard'],
					multiplier: 0.453069545472
				},
				cubicFathom: {
					name: 'cubic fathom',
					plural: 'cubic fathoms',
					otherNames: ['fathom cubed', 'fathoms cubed'],
					symbol: 'cu fm',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					tags: ['fluid-only'],
					multiplier: 6.116438863872
				},
				cubicFoot: {
					name: 'cubic foot',
					plural: 'cubic feet',
					otherNames: ['foot cubed', 'feet cubed', 'timber foot', 'timber feet'],
					symbol: 'cu ft',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 0.028316846592
				},
				cubicInch: {
					name: 'cubic inch',
					plural: 'cubic inches',
					otherNames: ['inch cubed', 'inches cubed'],
					symbol: 'cu in',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 16.387064e-6
				},
				cubicMile: {
					name: 'cubic mile',
					plural: 'cubic miles',
					otherNames: ['mile cubed', 'miles cubed'],
					symbol: 'cu mi',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 4168181825.440579
				},
				cubicYard: {
					name: 'cubic yard',
					plural: 'cubic yards',
					otherNames: ['yard cubed', 'yards cubed'],
					symbol: 'cu yd',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 0.764554857984
				},
				cupBreakfast: {
					name: 'cup',
					plural: 'cups',
					otherNames: ['breakfast cup', 'breakfast cups'],
					symbol: 'c',
					otherSymbols: ['c (breakfast)'],
					type: 'customary',
					systems: ['nonStandard'],
					tags: ['cooking'],
					multiplier: 284.130625e-6
				},
				cupCanadian: {
					name: 'cup',
					plural: 'cups',
					symbol: 'c',
					otherSymbols: ['c (CA)'],
					type: 'customary',
					systems: ['canada'],
					tags: ['cooking'],
					multiplier: 227.3045e-6
				},
				cup: {
					name: 'cup',
					plural: 'cups',
					otherNames: ['metric cup', 'metric cups'],
					symbol: 'c',
					type: 'customary',
					systems: ['metric'],
					excludedSystems: ['canada'],
					tags: ['cooking'],
					multiplier: 250.0e-6
				},
				cupUSCustomary: {
					name: 'cup',
					plural: 'cups',
					symbol: 'c',
					otherSymbols: ['c (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					excludedSystems: ['usFoodNutrition'],
					tags: ['cooking'],
					multiplier: 236.5882365e-6
				},
				cupUSFoodNutritionLabeling: {
					name: 'cup',
					plural: 'cups',
					symbol: 'c',
					otherSymbols: ['c (US)'],
					type: 'customary',
					systems: ['usFoodNutrition'],
					tags: ['cooking'],
					multiplier: 240.0e-6
				},
				dashImperial: {
					name: 'dash',
					plural: 'dashes',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 369.9617513020833e-9
				},
				dashUS: {
					name: 'dash',
					plural: 'dashes',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 308.057599609375e-9
				},
				dessertspoon: {
					name: 'dessertspoon',
					plural: 'dessertspoons',
					otherNames: ['dessert spoon', 'dessert spoons'],
					symbol: 'dstspn.',
					type: 'customary',
					rare: true,
					systems: ['metric', 'imperial', 'usCustomary'],
					tags: ['cooking'],
					multiplier: 10.0e-6
				},
				dropImperial: {
					name: 'drop',
					plural: 'drops',
					symbol: 'drop',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 98.6564670138888e-9
				},
				dropMedical: {
					name: 'drop',
					plural: 'drops',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 83.03333333e-9
				},
				drop: {
					name: 'drop',
					plural: 'drops',
					otherNames: ['metric drop', 'metric drops'],
					type: 'customary',
					systems: ['metric'],
					tags: ['cooking'],
					multiplier: 50.0e-9
				},
				dropUS: {
					name: 'drop',
					plural: 'drops',
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking'],
					multiplier: 82.14869322916666e-9
				},
				fifth: {
					name: 'fifth',
					plural: 'fifths',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 757.0823568e-6
				},
				firkin: {
					name: 'firkin',
					plural: 'firkins',
					otherNames: ['rundlet', 'rundlets'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.04091481
				},
				fluidDrachm: {
					name: 'fluid drachm',
					plural: 'fluid drachms',
					otherNames: ['fluidrachm', 'fluidrachms'],
					symbol: 'fl dr',
					otherSymbols: ['ƒ 3', 'fʒ'],
					type: 'customary',
					systems: ['imperial', 'apothecaries'],
					multiplier: 3.5516328125e-6
				},
				fluidDram: {
					name: 'fluid dram',
					plural: 'fluid drams',
					otherNames: ['fluidram', 'fluidrams'],
					symbol: 'fl dr',
					otherSymbols: ['ƒ 3', 'fʒ'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 3.6966911953125e-6
				},
				fluidScruple: {
					name: 'fluid scruple',
					plural: 'fluid scruples',
					symbol: 'fl s',
					otherSymbols: ['fl. scruple'],
					type: 'customary',
					systems: ['imperial', 'apothecaries'],
					multiplier: 1.1838776041666667e-6
				},
				gallonBeer: {
					name: 'beer gallon',
					plural: 'beer gallons',
					otherNames: ['ale gallon', 'ale gallons'],
					symbol: 'beer gal',
					type: 'customary',
					systems: ['englishUnits'],
					multiplier: 4.621152048e-3
				},
				gallonImperial: {
					name: 'gallon',
					plural: 'gallons',
					symbol: 'gal',
					otherSymbols: ['gal (imp)'],
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking'],
					multiplier: 4.54609e-3
				},
				gallonUSDry: {
					name: 'gallon',
					plural: 'gallons',
					symbol: 'gal',
					otherSymbols: ['gal (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking', 'dry-only'],
					multiplier: 4.40488377086e-3
				},
				gallonUSFluid: {
					name: 'gallon',
					plural: 'gallons',
					symbol: 'gal',
					otherSymbols: ['gal (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking', 'fluid-only'],
					multiplier: 3.785411784e-3
				},
				gillImperial: {
					name: 'gill',
					plural: 'gills',
					otherNames: ['noggin'],
					symbol: 'gi',
					otherSymbols: ['gi (imp)', 'nog'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 142.0653125e-6
				},
				gillUS: {
					name: 'gill',
					plural: 'gills',
					symbol: 'gi',
					otherSymbols: ['gi (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 118.29411825e-6
				},
				hogsheadImperial: {
					name: 'hogshead',
					plural: 'hogsheads',
					symbol: 'hhd',
					otherSymbols: ['hhd (imp)'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.32731848
				},
				hogsheadUS: {
					name: 'hogshead',
					plural: 'hogsheads',
					symbol: 'hhd',
					otherSymbols: ['hhd (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 0.238480942392
				},
				kilderkin: {
					name: 'kilderkin',
					plural: 'kilderkins',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.08182962,
					notes: "Name from Dutch for 'small cask'"
				},
				lambda: {
					name: 'lambda',
					plural: 'lambdas',
					symbol: 'λ',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 1e-9
				},
				last: {
					name: 'last',
					otherNames: ['łaszt'],
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 2.9094976
				},
				litre: {
					name: 'litre',
					plural: 'litres',
					otherNames: ['liter', 'liters', 'Cadil'],
					symbol: 'L',
					otherSymbols: ['l'],
					type: 'si',
					systems: ['siCommon', 'legacyMetric'],
					tags: ['cooking'],
					multiplier: 0.001,
					notes: 'A litre was originally the metric base unit for volume. Now non-SI metric.'
				},
				load: {
					name: 'load',
					plural: 'loads',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 1.4158423296
				},
				minimImperial: {
					name: 'minim',
					plural: 'minims',
					symbol: 'min',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 59.19388020833333e-9
				},
				minimUS: {
					name: 'minim',
					plural: 'minims',
					symbol: 'min',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 61.611519921875e-9
				},
				fluidOunceImperial: {
					name: 'fluid ounce',
					plural: 'fluid ounces',
					symbol: 'fl oz',
					otherSymbols: ['fl oz (imp)'],
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking', 'fluid-only'],
					multiplier: 28.4130625e-6
				},
				fluidOunceUSCustomary: {
					name: 'fluid ounce',
					plural: 'fluid ounces',
					symbol: 'fl oz',
					otherSymbols: ['fl oz (US)'],
					type: 'customary',
					systems: ['usCustomary'],
					excludedSystems: ['usFoodNutrition'],
					tags: ['cooking', 'fluid-only'],
					multiplier: 29.5735295625e-6
				},
				fluidOunceUSFoodNutritionLabeling: {
					name: 'fluid ounce',
					plural: 'fluid ounces',
					symbol: 'fl oz',
					otherSymbols: ['fl oz (US)'],
					type: 'customary',
					systems: ['usFoodNutrition'],
					tags: ['cooking', 'fluid-only'],
					multiplier: 3.0e-5
				},
				peckImperial: {
					name: 'peck',
					plural: 'pecks',
					symbol: 'pk',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 9.09218e-3
				},
				peckUSDry: {
					name: 'peck',
					plural: 'pecks',
					symbol: 'pk',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 8.80976754172e-3
				},
				perch: {
					name: 'perch',
					plural: 'perches',
					symbol: 'per',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 0.700841953152
				},
				pinchImperial: {
					name: 'pinch',
					plural: 'pinches',
					symbol: 'pn',
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking'],
					multiplier: 739.9235026041666e-9
				},
				pinchUS: {
					name: 'pinch',
					plural: 'pinches',
					symbol: 'pn',
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking'],
					multiplier: 616.11519921875e-9
				},
				pintImperial: {
					name: 'pint',
					plural: 'pints',
					symbol: 'pt',
					otherSymbols: ['pt (imp)'],
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking'],
					multiplier: 568.26125e-6
				},
				pintUSDry: {
					name: 'pint',
					plural: 'pints',
					symbol: 'pt',
					otherSymbols: ['pt (US dry)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking', 'dry-only'],
					multiplier: 550.6104713575e-6
				},
				pintUSFluid: {
					name: 'pint',
					plural: 'pints',
					symbol: 'pt',
					otherSymbols: ['pt (US fl)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking', 'fluid-only'],
					multiplier: 473.176473e-6
				},
				pony: {
					name: 'pony',
					plural: 'ponies',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 22.180147171875e-6
				},
				pottle: {
					name: 'pottle',
					plural: 'pottles',
					otherNames: ['quartern', 'quarterns'],
					type: 'customary',
					systems: ['englishUnits'],
					multiplier: 2.273045e-3
				},
				quartImperial: {
					name: 'quart',
					plural: 'quart',
					symbol: 'qt',
					otherSymbols: ['qt (imp)'],
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking'],
					multiplier: 1.1365225e-3
				},
				quartUSDry: {
					name: 'quart',
					plural: 'quart',
					symbol: 'qt',
					otherSymbols: ['qt (US dry)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking', 'dry-only'],
					multiplier: 1.101220942715e-3
				},
				quartUSFluid: {
					name: 'quart',
					plural: 'quart',
					symbol: 'qt',
					otherSymbols: ['qt (US fl)'],
					type: 'customary',
					systems: ['usCustomary'],
					tags: ['cooking', 'fluid-only'],
					multiplier: 946.352946e-6
				},
				pail: {
					name: 'pail',
					plural: 'pails',
					otherNames: ['quarter', 'quarters', 'kenning', 'kennings'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.29094976
				},
				registerTon: {
					name: 'register ton',
					plural: 'register tons',
					otherNames: ['gross register tonnage'],
					symbol: 'GRT',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 2.8316846592
				},
				sackImperial: {
					name: 'sack',
					plural: 'sacks',
					otherNames: ['bag', 'bags'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.10910616
				},
				sackUS: {
					name: 'sack',
					plural: 'sacks',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 0.10571721050064
				},
				seam: {
					name: 'seam',
					plural: 'seams',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.28191256133504
				},
				shot: {
					name: 'shot',
					plural: 'shots',
					otherNames: ['jigger', 'jiggers', 'measure', 'measures'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 44e-6,
					notes:
						'Shot sizes vary worldwide. In the US shot sizes are between 1.25-1.5 fl. oz. Utah legislates 1.5 fl. oz.'
				},
				strikeImperial: {
					name: 'strike',
					plural: 'strikes',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.07273744
				},
				strikeUS: {
					name: 'strike',
					plural: 'strikes',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 0.07047814033376
				},
				tablespoonAustralian: {
					name: 'tablespoon',
					plural: 'tablespoons',
					symbol: 'tbsp',
					type: 'customary',
					systems: ['australia'],
					tags: ['cooking'],
					multiplier: 20e-6
				},
				tablespoonCanadian: {
					name: 'tablespoon',
					plural: 'tablespoons',
					symbol: 'tbsp',
					type: 'customary',
					systems: ['canada'],
					tags: ['cooking'],
					multiplier: 14.20653125e-6
				},
				tablespoonImperial: {
					name: 'tablespoon',
					plural: 'tablespoons',
					symbol: 'tbsp',
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking'],
					multiplier: 17.7581640625e-6
				},
				tablespoon: {
					name: 'tablespoon',
					plural: 'tablespoons',
					symbol: 'tbsp',
					type: 'customary',
					systems: ['metric'],
					excludedSystems: ['australia', 'canada'],
					tags: ['cooking'],
					multiplier: 15e-6
				},
				tablespoonUSCustomary: {
					name: 'tablespoon',
					plural: 'tablespoons',
					symbol: 'tbsp',
					type: 'customary',
					systems: ['usCustomary'],
					excludedSystems: ['usFoodNutrition'],
					tags: ['cooking'],
					multiplier: 14.7867647825e-6
				},
				tablespoonUSFoodNutritionLabeling: {
					name: 'tablespoon',
					plural: 'tablespoons',
					symbol: 'tbsp',
					type: 'customary',
					systems: ['usFoodNutrition'],
					tags: ['cooking'],
					multiplier: 1.5e-5
				},
				teaspoonCanadian: {
					name: 'teaspoon',
					plural: 'teaspoons',
					symbol: 'tsp',
					type: 'customary',
					systems: ['canada'],
					tags: ['cooking'],
					multiplier: 4.73551041666667e-6
				},
				teaspoonImperial: {
					name: 'teaspoon',
					plural: 'teaspoons',
					symbol: 'tsp',
					type: 'customary',
					systems: ['imperial'],
					tags: ['cooking'],
					multiplier: 5.919388020833333e-6
				},
				teaspoon: {
					name: 'teaspoon',
					plural: 'teaspoons',
					symbol: 'tsp',
					type: 'customary',
					systems: ['metric'],
					excludedSystems: ['canada'],
					tags: ['cooking'],
					multiplier: 5.0e-6
				},
				teaspoonUSCustomary: {
					name: 'teaspoon',
					plural: 'teaspoons',
					symbol: 'tsp',
					type: 'customary',
					systems: ['usCustomary'],
					excludedSystems: ['usFoodNutrition'],
					tags: ['cooking'],
					multiplier: 4.928921595e-6
				},
				teaspoonUSFoodNutritionLabeling: {
					name: 'teaspoon',
					plural: 'teaspoons',
					symbol: 'tsp',
					type: 'customary',
					systems: ['usFoodNutrition'],
					tags: ['cooking'],
					multiplier: 5.0e-6
				},
				tonDisplacement: {
					name: 'ton displacement',
					symbol: 'ton (disp)',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 0.99108963072,
					notes: 'More details needed on systems'
				},
				tonFreight: {
					name: 'ton of freight',
					otherNames: ['ton'],
					symbol: 'ton',
					otherSymbols: ['ton (freight)'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1.13267386368,
					notes: 'More details needed on systems'
				},
				tonWater: {
					name: 'ton of water',
					otherNames: ['ton'],
					symbol: 'ton',
					otherSymbols: ['ton (water)'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1.01832416,
					notes: 'More details needed on systems'
				},
				tun: {
					name: 'tun',
					plural: 'tuns',
					symbol: 'tu',
					otherSymbols: ['US tu'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 0.953923769568,
					notes: 'Fluid only'
				},
				wey: {
					name: 'wey',
					plural: 'weys',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 1.4095628066752
				},
				ligula: {
					name: 'ligula',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 11.4e-6,
					notes: 'Liquid, Dry. 1/48 sextarius. Based on 1 pes = 0.296m'
				},
				cyathus: {
					name: 'cyathus',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 45e-6,
					notes: 'Liquid, Dry. 1/12 sextarius. Based on 1 pes = 0.296m'
				},
				acetabulum: {
					name: 'acetabulum',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 68e-6,
					notes: 'Liquid, Dry. 1/8 sextarius. Based on 1 pes = 0.296m'
				},
				quartarius: {
					name: 'quartarius',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 136e-6,
					notes: 'Liquid, Dry. 1/4 sextarius. Based on 1 pes = 0.296m'
				},
				hemina: {
					name: 'hemina',
					otherNames: ['cotyla'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 273e-6,
					notes: 'Liquid, Dry. 1/2 sextarius. Based on 1 pes = 0.296m'
				},
				sextarius: {
					name: 'sextarius',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 546e-6,
					notes: 'Liquid, Dry. 1/6 congius. Based on 1 pes = 0.296m'
				},
				congius: {
					name: 'congius',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 3.27e-3,
					tags: ['fluid-only'],
					notes: 'Liquid. 6 sextarii. Based on 1 pes = 0.296m'
				},
				urna: {
					name: 'urna',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 13.1e-3,
					tags: ['fluid-only'],
					notes: 'Liquid. 4 congii. Based on 1 pes = 0.296m'
				},
				amphoraQuadrantal: {
					name: 'amphora quadrantal',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 26.2e-3,
					tags: ['fluid-only'],
					notes: 'Liquid. 8 congii. One cubic pes. Standard amphora size. Based on 1 pes = 0.296m'
				},
				culeus: {
					name: 'culeus',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 524e-3,
					tags: ['fluid-only'],
					notes: 'Liquid. 160 congii. Based on 1 pes = 0.296m'
				},
				semimodius: {
					name: 'semimodius',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 4.36e-3,
					tags: ['dry-only'],
					notes: 'Dry. 8 sextarii. Based on 1 pes = 0.296m'
				},
				modius: {
					name: 'modius',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 8.73e-3,
					tags: ['dry-only'],
					notes: 'Dry. 16 sextarii. Alt: 8.62e-3. Based on 1 pes = 0.296m'
				},
				modiusCastrensis: {
					name: 'modius castrensis',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 13.08e-3,
					tags: ['dry-only'],
					notes: 'Dry. 24 sextarii. Alt: 12.93e-3. Based on 1 pes = 0.296m'
				},
				planckVolume: {
					name: 'Planck volume',
					symbol: 'l³\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 4.2217e-105,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		area: {
			name: 'area',
			symbol: 'A',
			baseUnit: 'squareMetre',
			derived: 'length*length',
			vector: false,
			units: {
				squareMetre: {
					name: 'square metre',
					plural: 'square metres',
					otherNames: [
						'centiare',
						'square meter',
						'square meters',
						'metre squared',
						'metres squared',
						'meter squared',
						'meters squared'
					],
					symbol: 'm²',
					otherSymbols: ['ca'],
					type: 'si',
					systems: ['metric']
				},
				squareInch: {
					name: 'square inch',
					plural: 'square inches',
					symbol: 'in²',
					otherSymbols: ['square in', 'sq inches', 'sq inch', 'sq in', 'sq.in'],
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 0.00064516
				},
				squareFoot: {
					name: 'square foot',
					plural: 'square feet',
					symbol: 'ft²',
					otherSymbols: ['sq ft', 'sq.ft'],
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 0.09290304
				},
				squareYard: {
					name: 'square yard',
					plural: 'square yards',
					symbol: 'yd²',
					otherSymbols: ['yds²', 'sq yd', 'sq.yd'],
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 0.83612736
				},
				squareMile: {
					name: 'square mile',
					plural: 'square miles',
					symbol: 'mi²',
					otherSymbols: ['sq mi', 'sq.mi'],
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 2589988.110336
				},
				are: {
					name: 'are',
					plural: 'ares',
					symbol: 'a',
					type: 'si',
					systems: ['legacyMetric'],
					acceptedPrefixes: ['centi', 'deci'],
					multiplier: 100,
					notes: "Not an si unit in it's own right."
				},
				decare: {
					name: 'decare',
					plural: 'decares',
					symbol: 'daa',
					type: 'si',
					systems: ['legacyMetric'],
					multiplier: 1000
				},
				hectare: {
					name: 'hectare',
					plural: 'hectares',
					symbol: 'ha',
					type: 'si',
					systems: ['siCommon', 'legacyMetric'],
					multiplier: 10000,
					notes:
						'Technically and are with hect prefix but is only version of are accepted within broader si context.'
				},
				acre: {
					name: 'acre',
					plural: 'acres',
					symbol: 'ac',
					type: 'customary',
					systems: ['englishUnits', 'imperial', 'usCustomary'],
					multiplier: 4046.8564224
				},
				squareRod: {
					name: 'square rod',
					plural: 'square rods',
					symbol: 'sq rd',
					otherNames: ['square perch', 'square perches', 'square pole', 'square poles'],
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 25.29285264
				},
				squarePerche: {
					name: 'square perche',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 42.21,
					notes: 'The french version of a square perch'
				},
				rood: {
					name: 'rood',
					plural: 'roods',
					otherNames: ['rod', 'rods'],
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 1011.7141056
				},
				stremma: {
					name: 'stremma',
					type: 'customary',
					systems: ['ancient'],
					multiplier: 1000,
					notes: 'Ancient Greek'
				},
				barn: {
					name: 'barn',
					symbol: 'b',
					type: 'si',
					systems: ['metric'],
					multiplier: 1e-28
				},
				pesQuadratus: {
					name: 'pes quadratus',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 0.0876,
					notes: 'square foot - 1 pes^2. Based on 1 pes = 0.296m'
				},
				scrupulum: {
					name: 'scrupulum',
					otherNames: ['decempeda quadrata'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 8.76,
					notes:
						'the square of the standard 10-foot measuring rod. Jugerum division. 100 pedes^2 - 1/288 jugerum. Based on 1 pes = 0.296m'
				},
				actusSimplex: {
					name: 'actus simplex',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 42.1,
					notes: '4 x 120 pedes = 480 pedes^2. Based on 1 pes = 0.296m'
				},
				uncia: {
					name: 'uncia',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 210,
					notes: 'Jugerum division. 2400 pedes^2 - 1/12 jugerum. Based on 1 pes = 0.296m'
				},
				clima: {
					name: 'clima',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 315,
					notes: '60 x 60 pedes = 3600 pedes^2. Based on 1 pes = 0.296m'
				},
				actusQuadratus: {
					name: 'actus quadratus',
					otherNames: ['acnua', 'arpennis', 'semis'],
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 1262,
					notes: 'Jugerum division. 14400 pedes^2 - 1/2 jugerum. Based on 1 pes = 0.296m'
				},
				jugerum: {
					name: 'jugerum',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 2523,
					notes: '28800 pedes^2 - 1 jugerum. Based on 1 pes = 0.296m'
				},
				heredium: {
					name: 'heredium',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 5047,
					notes: '2 jugerum. Based on 1 pes = 0.296m'
				},
				centuria: {
					name: 'centuria',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 504700,
					notes: '200 jugerum. Was 100 jugera. Based on 1 pes = 0.296m'
				},
				saltus: {
					name: 'saltus',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 2019000,
					notes: '800 jugerum. Based on 1 pes = 0.296m'
				},
				dimidiumScrupulum: {
					name: 'dimidium scrupulum',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 4.38,
					notes: 'Jugerum division. 50 pedes^2 - 1/576 jugerum. Based on 1 pes = 0.296m'
				},
				duoScrupula: {
					name: 'duo scrupula',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 17.5,
					notes: 'Jugerum division. 200 pedes^2 - 1/144 jugerum. Based on 1 pes = 0.296m'
				},
				sextula: {
					name: 'sextula',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 35,
					notes: 'Jugerum division. 400 pedes^2 - 1/72 jugerum. Based on 1 pes = 0.296m'
				},
				sicilicus: {
					name: 'sicilicus',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 52.6,
					notes: 'Jugerum division. 600 pedes^2 - 1/48 jugerum. Based on 1 pes = 0.296m'
				},
				semiuncia: {
					name: 'semiuncia',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 105,
					notes: 'Jugerum division. 1200 pedes^2 - 1/24 jugerum. Based on 1 pes = 0.296m'
				},
				sextans: {
					name: 'sextans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 421,
					notes: 'Jugerum division. 4800 pedes^2 - 1/6 jugerum. Based on 1 pes = 0.296m'
				},
				quadrans: {
					name: 'quadrans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 631,
					notes: 'Jugerum division. 7200 pedes^2 - 1/4 jugerum. Based on 1 pes = 0.296m'
				},
				triens: {
					name: 'triens',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 841,
					notes: 'Jugerum division. 9600 pedes^2 - 1/3 jugerum. Based on 1 pes = 0.296m'
				},
				quincunx: {
					name: 'quincunx',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 1051,
					notes: 'Jugerum division. 12000 pedes^2 - 5/12 jugerum. Based on 1 pes = 0.296m'
				},
				septunx: {
					name: 'septunx',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 1472,
					notes: 'Jugerum division. 16800 pedes^2 - 7/12 jugerum. Based on 1 pes = 0.296m'
				},
				bes: {
					name: 'bes',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 1682,
					notes: 'Jugerum division. 19200 pedes^2 - 2/3 jugerum. Based on 1 pes = 0.296m'
				},
				dodrans: {
					name: 'dodrans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 1893,
					notes: 'Jugerum division. 21600 pedes^2 - 3/4 jugerum. Based on 1 pes = 0.296m'
				},
				dextans: {
					name: 'dextans',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 2103,
					notes: 'Jugerum division. 24000 pedes^2 - 5/6 jugerum. Based on 1 pes = 0.296m'
				},
				deunx: {
					name: 'deunx',
					type: 'customary',
					systems: ['ancientRoman'],
					estimation: true,
					multiplier: 2313,
					notes: 'Jugerum division. 26400 pedes^2 - 11/12 jugerum. Based on 1 pes = 0.296m'
				},
				planckArea: {
					name: 'Planck area',
					symbol: 'l²\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 2.6121e-70,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		pressure: {
			name: 'pressure',
			otherNames: ['energy density'],
			symbol: 'P',
			baseUnit: 'pascal',
			derived: 'mass/length/time/time',
			vector: false,
			units: {
				pascal: {
					name: 'pascal',
					plural: 'pascals',
					symbol: 'Pa',
					type: 'si',
					systems: ['si'],
					notes: 'Common prefixes: hecto-, kilo-, mega-, giga-'
				},
				standardAtmosphere: {
					name: 'standard atmosphere',
					plural: 'standard atmospheres',
					symbol: 'atm',
					type: 'customary',
					systems: ['metric'],
					multiplier: 101325
				},
				technicalAtmosphere: {
					name: 'technical atmosphere',
					plural: 'technical atmospheres',
					symbol: 'at',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 9.80665e4
				},
				bar: {
					name: 'bar',
					plural: 'bars',
					symbol: 'bar',
					type: 'si',
					systems: ['legacyMetric', 'siCommon'],
					multiplier: 1e5,
					notes: 'Accepted prefixes: mega-, kilo-, deci-, centi-, milli-'
				},
				barye: {
					name: 'barye',
					plural: 'baryes',
					otherNames: ['barad', 'barrie', 'bary', 'baryd', 'baryed', 'barie'],
					symbol: 'Ba',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 0.1
				},
				centimetreOfMercury: {
					name: 'centimetre of mercury',
					plural: 'centimetres of mercury',
					symbol: 'cmHg',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 1.33322e3
				},
				centimetreOfWater: {
					name: 'centimetre of water',
					plural: 'centimetres of water',
					symbol: 'cmH₂O',
					otherSymbols: ['cmH2O'],
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 98.0638,
					notes: 'At 4 °C'
				},
				inchOfMercury: {
					name: 'inch of mercury',
					plural: 'inches of mercury',
					symbol: 'inHg',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 3.386389e3
				},
				inchOfWater: {
					name: 'inch of water',
					plural: 'inches of water',
					symbol: 'inH₂O',
					otherSymbols: ['inH2O'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 249.082,
					notes: 'At 39.2 °F'
				},
				footOfMercury: {
					name: 'foot of mercury',
					plural: 'feet of mercury',
					symbol: 'ftHg',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 40.63666e3
				},
				footOfWater: {
					name: 'foot of water',
					plural: 'feet of water',
					symbol: 'ftH₂O',
					otherSymbols: ['ftH2O'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 2.98898e3,
					notes: 'At 39.2 °F'
				},
				kilogramForcePerSquareMillimetre: {
					name: 'kilogram force per square millimetre',
					symbol: 'kgf/mm²',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 9.80665e6
				},
				kipPerSquareInch: {
					name: 'kip per square inch',
					plural: 'kips per square inch',
					symbol: 'ksi',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 6.894757e6
				},
				micronOfMercury: {
					name: 'micron of mercury',
					plural: 'microns of mercury',
					symbol: 'µmHg',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 0.1333224
				},
				millimetreOfMercury: {
					name: 'millimetre of mercury',
					plural: 'millimetres of mercury',
					symbol: 'mmHg',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 133.3224
				},
				millimetreOfWater: {
					name: 'millimetre of water',
					plural: 'millimetres of water',
					symbol: 'mmH₂O',
					otherSymbols: ['mmH2O'],
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 9.80638,
					notes: 'At 3.98 °C'
				},
				pieze: {
					name: 'pièze',
					plural: 'pièzes',
					otherNames: ['pieze', 'piezes'],
					symbol: 'pz',
					type: 'customary',
					systems: ['mts'],
					multiplier: 1e3
				},
				poundPerSquareFoot: {
					name: 'pound per square foot',
					plural: 'pounds per square foot',
					symbol: 'psf',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 47.88026
				},
				poundPerSquareInch: {
					name: 'pound per square inch',
					plural: 'pounds per square inch',
					otherNames: ['pound-force per square inch'],
					symbol: 'psi',
					otherSymbols: ['lbf/in²', 'lbf/sq in'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 6.894757e3
				},
				kilopoundPerSquareInch: {
					name: 'kilopound per square inch',
					plural: 'kilopounds per square inch',
					symbol: 'ksi',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 6.894757e6
				},
				poundalPerSquareFoot: {
					name: 'poundal per square foot',
					plural: 'poundals per square foot',
					symbol: 'pdl/sq ft',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 1.488164
				},
				shortTonPerSquareFoot: {
					name: 'short ton per square foot',
					plural: 'short tons per square foot',
					symbol: 'sh tn/sq ft',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 95.760518e3
				},
				torr: {
					name: 'torr',
					symbol: 'Torr',
					otherSymbols: ['Tor'],
					type: 'si',
					systems: ['legacyMetric'],
					acceptedPrefixes: ['milli'],
					multiplier: 133.3224,
					notes: 'Tor symbol common but incorrect'
				},
				planckPressure: {
					name: 'Planck pressure',
					otherNames: ['Planck energy density'],
					symbol: 'ρ\u209A',
					otherSymbols: ['ρE\u209A', 'P\u209A'],
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 4.63309e113,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		frequency: {
			name: 'frequency',
			symbol: 'f',
			baseUnit: 'hertz',
			derived: '1/time',
			vector: false,
			units: {
				hertz: {
					name: 'hertz',
					otherNames: [
						'cycle per second',
						'cycles per second',
						'revolution per second',
						'revolutions per second'
					],
					symbol: 'Hz',
					type: 'si',
					systems: ['metric', 'imperial', 'usCustomary']
				},
				revolutionPerMinute: {
					name: 'revolution per minute',
					plural: 'revolutions per minute',
					otherNames: ['cycle per minute', 'cycles per minute'],
					symbol: 'rpm',
					otherSymbols: ['RPM', 'rev/min', 'r/min', 'r·min⁻¹'],
					type: 'customary',
					systems: ['legacyMetric', 'imperial', 'usCustomary'],
					multiplier: 0.01666666666666667
				},
				planckAngularFrequency: {
					name: 'Planck angular frequency',
					symbol: 'ω\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 1.85487e43,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		force: {
			name: 'force',
			otherNames: ['weight'],
			symbol: 'F',
			baseUnit: 'newton',
			derived: 'mass*length/time/time',
			vector: true,
			units: {
				newton: {
					name: 'newton',
					plural: 'newtons',
					symbol: 'N',
					type: 'si',
					systems: ['si']
				},
				atomicUnitOfForce: {
					name: 'atomic unit of force',
					symbol: 'Eh/a0',
					type: 'customary',
					systems: ['si'],
					estimation: true,
					multiplier: 8.23872206e-8
				},
				dyne: {
					name: 'dyne',
					symbol: 'dyn',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e-5
				},
				kilogramForce: {
					name: 'kilogram force',
					otherNames: ['kilopond', 'grave-force'],
					symbol: 'kgf',
					otherSymbols: ['kp', 'Gf'],
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 9.80665
				},
				kip: {
					name: 'kip',
					otherNames: ['kip-force'],
					symbol: 'kip',
					otherSymbols: ['kipf', 'klbf'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 4.4482216152605e3
				},
				milligraveForce: {
					name: 'milligrave force',
					symbol: 'mGf',
					otherSymbols: ['gf'],
					otherNames: ['gravet-force'],
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 9.80665e-3
				},
				ounceForce: {
					name: 'ounce force',
					symbol: 'ozf',
					type: 'customary',
					systems: ['englishEngineering', 'britishGravitational'],
					multiplier: 0.2780138509537812
				},
				poundForce: {
					name: 'pound force',
					otherNames: ['pound'],
					symbol: 'lbf',
					otherSymbols: ['lb'],
					type: 'customary',
					systems: ['englishEngineering', 'britishGravitational'],
					multiplier: 4.4482216152605
				},
				poundal: {
					name: 'poundal',
					symbol: 'pdl',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 0.138254954376
				},
				sthene: {
					name: 'sthène',
					otherNames: ['sthene'],
					symbol: 'sn',
					type: 'customary',
					systems: ['mts'],
					multiplier: 1e3
				},
				shortTonForce: {
					name: 'short ton-force',
					plural: 'short tons-force',
					symbol: 'tf',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 8.896443230521e3
				},
				planckForce: {
					name: 'Planck force',
					symbol: 'F\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 1.21027e44,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		speed: {
			name: 'speed',
			symbol: 'v',
			baseUnit: 'metrePerSecond',
			derived: 'length/time',
			vector: false,
			units: {
				metrePerSecond: {
					name: 'metre per second',
					plural: 'metres per second',
					otherNames: ['meter per second', 'meters per second'],
					symbol: 'm/s',
					type: 'customary',
					systems: ['metric'],
					notes: "This is of type customary NOT si because you can't actually apply prefixes to it"
				},
				footPerHour: {
					name: 'foot per hour',
					plural: 'feet per hour',
					symbol: 'fph',
					otherSymbols: ['ft/h'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 8.466667e-5
				},
				footPerMinute: {
					name: 'foot per minute',
					plural: 'feet per minute',
					symbol: 'fpm',
					otherSymbols: ['ft/min'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 5.08e-3
				},
				footPerSecond: {
					name: 'foot per second',
					plural: 'feet per second',
					symbol: 'fps',
					otherSymbols: ['ft/s'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 3.048e-1
				},
				furlongPerFortnight: {
					name: 'furlong per fortnight',
					symbol: 'furlong/fortnight',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 1.663095e-4
				},
				inchPerHour: {
					name: 'inch per hour',
					plural: 'inches per hour',
					symbol: 'iph',
					otherSymbols: ['in/hr'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 7.05556e-6
				},
				inchPerMinute: {
					name: 'inch per minute',
					plural: 'inches per minute',
					symbol: 'ipm',
					otherSymbols: ['in/min'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 4.23333e-4
				},
				inchPerSecond: {
					name: 'inch per second',
					plural: 'inches per second',
					symbol: 'ips',
					otherSymbols: ['in/s'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 2.54e-2
				},
				kilometrePerHour: {
					name: 'kilometre per hour',
					plural: 'kilometres per hour',
					otherNames: ['kilometer per hour', 'kilometers per hour'],
					symbol: 'km/h',
					otherSymbols: ['kph'],
					type: 'customary',
					systems: ['siCommon'],
					multiplier: 2.777778e-1
				},
				knot: {
					name: 'knot',
					plural: 'knots',
					symbol: 'kn',
					otherSymbols: ['nmi/h', 'kt', 'NMPH'],
					type: 'customary',
					systems: ['metric', 'internationalNautical', 'imperial', 'usCustomary'],
					multiplier: 0.514444
				},
				knotAdmiralty: {
					name: 'knot',
					plural: 'knots',
					symbol: 'kn',
					otherSymbols: ['NM (Adm)/h'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 0.514773333333,
					notes: 'More research needed on systems and origins'
				},
				machNumber: {
					name: 'mach number',
					otherNames: ['Sarrau number'],
					symbol: 'M',
					otherSymbols: ['Ma', 'Mach'],
					symbolFirst: true,
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 340.3,
					notes:
						'Based on standard sea level conditions and at 15 °C. Additionally should be written Mach 2.3 (unit name first)'
				},
				milePerHour: {
					name: 'mile per hour',
					plural: 'miles per hour',
					symbol: 'mph',
					otherSymbols: ['mi/h'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 0.44704
				},
				milePerMinute: {
					name: 'mile per minute',
					plural: 'miles per minute',
					symbol: 'mpm',
					otherSymbols: ['mi/min'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 26.8224
				},
				milePerSecond: {
					name: 'mile per second',
					plural: 'miles per second',
					symbol: 'mps',
					otherSymbols: ['mi/s'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 1609.344
				},
				speedOfLight: {
					name: 'speed of light',
					symbol: 'c',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 299792458,
					notes: 'Constant. In a vacuum'
				},
				speedOfSound: {
					name: 'speed of sound',
					symbol: 's',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 340.3,
					notes: 'Constant. Based on standard sea level conditions and at 15 °C.'
				},
				naturalVelocity: {
					name: 'unit of velocity',
					plural: 'units of velocity',
					otherNames: ['unit of speed', 'units of speed'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 299792458,
					notes: 'Unit does not have a symbol'
				}
			}
		},
		velocity: {
			name: 'velocity',
			symbol: 'v',
			baseUnit: 'metrePerSecond',
			derived: 'length/time',
			vector: true,
			inheritedUnits: 'speed',
			units: {}
		},
		acceleration: {
			name: 'acceleration',
			symbol: 'a',
			baseUnit: 'metrePerSquareSecond',
			derived: 'length/time/time',
			vector: true,
			units: {
				metrePerSquareSecond: {
					name: 'metre per square second',
					plural: 'metres per square second',
					otherNames: [
						'meter per square second',
						'meters per square second',
						'metre per second squared',
						'metres per second squared',
						'meter per second squared',
						'meters per second squared'
					],
					symbol: 'm/s²',
					type: 'customary',
					systems: ['metric']
				},
				footPerHourPerSecond: {
					name: 'foot per hour per second',
					plural: 'feet per hour per second',
					symbol: 'fph/s',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 8.466667e-5
				},
				footPerMinutePerSecond: {
					name: 'foot per minute per second',
					plural: 'feet per minute per second',
					symbol: 'fpm/s',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 5.08e-5
				},
				footPerSquareSecond: {
					name: 'foot per square second',
					plural: 'feet per square second',
					otherNames: ['foot per second squared', 'feet per second squared'],
					symbol: 'fps²',
					otherSymbols: ['ft/s²'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 0.3048
				},
				gal: {
					name: 'gal',
					otherNames: ['galileo'],
					symbol: 'Gal',
					type: 'si',
					systems: ['legacyMetric'],
					multiplier: 0.01
				},
				inchPerMinutePerSecond: {
					name: 'inch per minute per second',
					plural: 'inches per minute per second',
					symbol: 'ipm/s',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 4.233333e-4
				},
				inchPerSquareSecond: {
					name: 'inch per square second',
					plural: 'inches per square second',
					otherNames: ['inch per second squared', 'inches per second squared'],
					symbol: 'ips²',
					otherSymbols: ['in/s²'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 2.54e-2
				},
				knotPerSecond: {
					name: 'knot per second',
					plural: 'knots per second',
					symbol: 'kn/s',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 5.144444e-1
				},
				milePerHourPerSecond: {
					name: 'mile per hour per second',
					plural: 'miles per hour per second',
					symbol: 'mph/s',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 4.4704e-1
				},
				milePerMinutePerSecond: {
					name: 'mile per minute per second',
					plural: 'miles per minute per second',
					symbol: 'mpm/s',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 26.8224
				},
				milePerSquareSecond: {
					name: 'mile per square second',
					plural: 'miles per square second',
					otherNames: ['mile per second squared', 'miles per second squared'],
					symbol: 'mps²',
					otherSymbols: ['mi/s²'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 1.609344e3
				},
				gravity: {
					name: 'gravity',
					otherNames: ['standard gravity', 'standard acceleration due to gravity'],
					symbol: 'g',
					otherSymbols: ['g₀', 'gn'],
					type: 'customary',
					systems: ['metric'],
					multiplier: 9.80665
				}
			}
		},
		energy: {
			name: 'energy',
			otherNames: ['work', 'heat'],
			symbol: 'E',
			baseUnit: 'joule',
			derived: 'mass*length*length/time/time',
			vector: false,
			units: {
				joule: {
					name: 'joule',
					plural: 'joules',
					symbol: 'J',
					type: 'si',
					systems: ['si', 'mks']
				},
				barrelOfOilEquivalent: {
					name: 'barrel of oil equivalent',
					symbol: 'BOE',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 6.12e9
				},
				britishThermalUnit: {
					name: 'British thermal unit',
					plural: 'British thermal units',
					symbol: 'BTU',
					otherSymbols: ['Btu'],
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'canada'],
					multiplier: 1.05505585262e3,
					notes:
						'Using International Steam Table (IT) calorie. Many other definitions of BTU exist.'
				},
				calorie: {
					name: 'calorie',
					plural: 'calories',
					symbol: 'cal',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					excludedSystems: ['usFoodNutrition'],
					multiplier: 4.1868
				},
				calorieUsFda: {
					name: 'calorie',
					plural: 'calories',
					symbol: 'Cal',
					type: 'customary',
					systems: ['usFoodNutrition'],
					multiplier: 4.184
				},
				celsiusHeatUnit: {
					name: 'Celsius heat unit',
					plural: 'Celsius heat units',
					symbol: 'CHU',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1.899100534716e3,
					notes: 'International Table'
				},
				cubicFootOfNaturalGas: {
					name: 'cubic foot of natural gas',
					plural: 'cubic feet of natural gas',
					symbol: 'cc ft natural gas',
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 1.05505585262e6
				},
				electronvolt: {
					name: 'electronvolt',
					plural: 'electronvolts',
					otherNames: ['electron volt', 'electron volts'],
					symbol: 'eV',
					type: 'si',
					systems: ['si'],
					multiplier: 1.60217733e-19,
					notes: 'Uncertainty: ± 4.9×10^−26 J'
				},
				erg: {
					name: 'erg',
					symbol: 'erg',
					type: 'si',
					systems: ['cgs'],
					multiplier: 1e-7
				},
				footPoundForce: {
					name: 'foot-pound force',
					otherNames: ['foot-pound'],
					symbol: 'ft lbf',
					otherSymbols: ['ft lb', 'ft·lb', 'ft·lbf'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 1.3558179483314
				},
				footPoundal: {
					name: 'Foot-poundal',
					symbol: 'ft pdl',
					otherSymbols: ['ft-pdl'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 4.21401100938048e-2
				},
				gallonAtmosphereImperial: {
					name: 'gallon atmosphere',
					symbol: 'imp gal atm',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 460.63256925
				},
				gallonAtmosphereUS: {
					name: 'gallon atmosphere',
					symbol: 'US gal atm',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 383.5568490138
				},
				hartree: {
					name: 'hartree',
					otherNames: ['atomic unit of energy'],
					symbol: 'Eh',
					type: 'customary',
					systems: ['si'],
					multiplier: 4.359744e-18
				},
				horsepowerHour: {
					name: 'horsepower hour',
					symbol: 'hp h',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 2.684519537696172e6
				},
				inchPoundForce: {
					name: 'inch-pound force',
					otherNames: ['inch-pound'],
					symbol: 'in lbf',
					otherSymbols: ['in lb', 'in·lb', 'in·lbf'],
					type: 'customary',
					systems: ['usCustomary', 'imperial'],
					multiplier: 0.1129848290276167
				},
				kilocalorie: {
					name: 'kilocalorie',
					plural: 'kilocalories',
					otherNames: ['large calorie'],
					symbol: 'kcal',
					otherSymbols: ['kCal', 'Cal'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					excludedSystems: ['usFoodNutrition'],
					multiplier: 4.1868e3
				},
				kilowattHour: {
					name: 'kilowatt hour',
					otherNames: ['kilowatt-hour', 'Board of Trade Unit'],
					symbol: 'kWh',
					otherSymbols: ['kw·h', 'B.O.T.U.', 'KWH', 'kW h', 'kW·h'],
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'legacyMetric'],
					multiplier: 3.6e6,
					notes: 'This is a non-SI unit'
				},
				quad: {
					name: 'quad',
					plural: 'quads',
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'canada'],
					multiplier: 1.05505585262e18,
					notes: '10^15 BTU'
				},
				rydberg: {
					name: 'Rydberg unit of energy',
					symbol: 'Ry',
					type: 'customary',
					systems: ['imperial', 'usCustomary', 'metric'],
					multiplier: 2.179872e-18
				},
				thermEC: {
					name: 'therm',
					symbol: 'thm',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 105.506e6
				},
				thermUS: {
					name: 'therm',
					symbol: 'thm',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 105.4804e6
				},
				thermUK: {
					name: 'therm',
					symbol: 'thm',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 105.505585257348e6
				},
				thermie: {
					name: 'thermie',
					symbol: 'th',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 4.1868e6
				},
				tonOfCoalEquivalent: {
					name: 'ton of coal equivalent',
					otherNames: ['tonne of coal equivalent'],
					symbol: 'TCE',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 29.288e9
				},
				tonOfOilEquivalent: {
					name: 'ton of oil equivalent',
					otherNames: ['tonne of oil equivalent'],
					symbol: 'TOE',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 41.84e9
				},
				tonOfTNT: {
					name: 'ton of TNT',
					otherNames: ['tonne of TNT'],
					symbol: 'tTNT',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 4.184e9
				},
				planckEnergy: {
					name: 'Planck energy',
					symbol: 'E\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 1.9561e9,
					notes: 'Derived from fundamental planck units. Not exact.'
				},
				naturalEnergy: {
					name: 'electron volt of energy',
					plural: 'electron volts of energy',
					symbol: 'E',
					otherSymbols: ['E', 'eV', 'eV of energy'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 1.6e-10,
					uncertainty: 0.1e-10
				}
			}
		},
		momentum: {
			name: 'momentum',
			symbol: 'p',
			baseUnit: 'kilogramMetrePerSecond',
			derived: 'mass*length/time',
			vector: true,
			units: {
				kilogramMetrePerSecond: {
					name: 'kilogram metre per second',
					plural: 'kilogram metres per second',
					otherNames: ['kilogram meter per second', 'kilogram meters per second'],
					symbol: 'kg·m/s',
					otherSymbols: ['kg m/s'],
					type: 'customary',
					systems: ['si']
				},
				planckMomentum: {
					name: 'Planck momentum',
					symbol: 'm\u209Ac',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 6.52485,
					notes: 'Derived from fundamental planck units. Not exact.'
				},
				naturalMomentum: {
					name: 'electron volt of momentum',
					plural: 'electron volts of momentum',
					symbol: 'E',
					otherSymbols: ['E', 'eV', 'eV of momentum'],
					type: 'customary',
					systems: ['natural'],
					multiplier: 5.39e-19,
					uncertainty: 0.01e-19
				}
			}
		},
		power: {
			name: 'power',
			symbol: 'P',
			baseUnit: 'watt',
			derived: 'mass*length*length/time/time/time',
			vector: false,
			units: {
				watt: {
					name: 'watt',
					plural: 'watts',
					symbol: 'W',
					type: 'si',
					systems: ['si', 'mks']
				},
				atmosphereCubicCentimetrePerMinute: {
					name: 'atmosphere cubic centimetre per minute',
					plural: 'atmosphere cubic centimetres per minute',
					symbol: 'atm ccm',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 1.68875e-3
				},
				atmosphereCubicCentimetrePerSecond: {
					name: 'atmosphere cubic centimetre per second',
					plural: 'atmosphere cubic centimetres per second',
					symbol: 'atm ccs',
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 0.101325
				},
				atmosphereCubicFootPerHour: {
					name: 'atmosphere cubic foot per hour',
					plural: 'atmosphere cubic feet per hour',
					symbol: 'atm cfh',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 0.797001244704
				},
				atmosphereCubicFootPerMinute: {
					name: 'atmosphere cubic foot per minute',
					plural: 'atmosphere cubic feet per minute',
					symbol: 'atm cfm',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 47.82007468224
				},
				atmosphereCubicFootPerSecond: {
					name: 'atmosphere cubic foot per second',
					plural: 'atmosphere cubic feet per second',
					symbol: 'atm cfs',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 2.8692044809344e3
				},
				btuPerHour: {
					name: 'BTU per hour',
					plural: 'BTUs per hour',
					symbol: 'BTU/h',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 0.293071
				},
				btuPerMinute: {
					name: 'BTU per minute',
					plural: 'BTUs per minute',
					symbol: 'BTU/min',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 17.584264
				},
				btuPerSecond: {
					name: 'BTU per second',
					plural: 'BTUs per second',
					symbol: 'BTU/s',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 1.05505585262e3
				},
				caloriePerSecond: {
					name: 'calorie per second',
					plural: 'calories per second',
					symbol: 'cal/s',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 4.1868
				},
				ergPerSecond: {
					name: 'erg per second',
					symbol: 'erg/s',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1e-7
				},
				footPoundForcePerHour: {
					name: 'foot-pound force per hour',
					symbol: 'ft lbf/h',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 3.766161e-4
				},
				footPoundForcePerMinute: {
					name: 'foot-pound force per minute',
					symbol: 'ft lbf/min',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 2.259696580552334e-2
				},
				footPoundForcePerSecond: {
					name: 'foot-pound force per second',
					symbol: 'ft lbf/s',
					type: 'customary',
					systems: ['imperial', 'englishUnits'],
					multiplier: 1.3558179483314
				},
				horsepowerBoiler: {
					name: 'horsepower (boiler)',
					otherNames: ['horsepower', 'boiler horsepower'],
					symbol: 'bhp',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 9.810657e3
				},
				horsepowerEuropeanElectrical: {
					name: 'horsepower',
					symbol: 'hp',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 736
				},
				horsepowerImperialElectrical: {
					name: 'horsepower',
					symbol: 'hp',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 746
				},
				horsepowerImperialMechanical: {
					name: 'horsepower',
					symbol: 'hp',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 745.6998715822702
				},
				horsepower: {
					name: 'horsepower',
					symbol: 'hp',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 735.49875
				},
				litreAtmospherePerMinute: {
					name: 'litre-atmosphere per minute',
					symbol: 'L·atm/min',
					otherSymbols: ['L atm/min'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1.68875
				},
				litreAtmospherePerSecond: {
					name: 'litre-atmosphere per second',
					symbol: 'L·atm/s',
					otherSymbols: ['L atm/s'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 101.325
				},
				lusec: {
					name: 'lusec',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1.333e-4,
					notes: 'Metrology, French, Contraction of symbols L·μmHg/s'
				},
				poncelet: {
					name: 'poncelet',
					symbol: 'p',
					type: 'customary',
					systems: ['oldEuropean'],
					multiplier: 980.665,
					notes: 'French. Now obsolete. Replaced by horsepower.'
				},
				squareFootEquivalentDirectRadiation: {
					name: 'square foot equivalent direct radiation',
					symbol: 'sq ft EDR',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 70.337057
				},
				tonOfAirConditioning: {
					name: 'ton of air conditioning',
					plural: 'tons of air conditioning',
					symbol: 'ton aircon',
					otherSymbols: ['ton'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 3504
				},
				tonOfRefrigerationImperial: {
					name: 'ton of refrigeration',
					plural: 'tons of air refrigeration',
					symbol: 'ton refrigeration',
					otherSymbols: ['ton'],
					type: 'customary',
					systems: ['imperial'],
					multiplier: 3.938875e3
				},
				tonOfRefrigeration: {
					name: 'ton of refrigeration',
					plural: 'tons of air refrigeration',
					symbol: 'ton refrigeration',
					otherSymbols: ['ton'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 3.516853e3
				},
				planckPower: {
					name: 'Planck power',
					symbol: 'P\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 3.62831e52,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		intensity: {
			name: 'intensity',
			symbol: 'I',
			baseUnit: 'wattPerSquareMetre',
			derived: 'mass/time/time/time',
			vector: true,
			units: {
				wattPerSquareMetre: {
					name: 'watt per square metre',
					plural: 'watts per square metre',
					otherNames: [
						'watt per metre squared',
						'watts per metre squared',
						'watt per square meter',
						'watts per square meter',
						'watt per meter squared',
						'watts per meter squared',
						'kilogram per cubic second',
						'kilograms per cubic second',
						'kilogram per second cubed',
						'kilograms per second cubed'
					],
					symbol: 'W/m²',
					otherSymbols: ['kg/s³'],
					type: 'customary',
					systems: ['si']
				},
				planckIntensity: {
					name: 'Planck intensity',
					symbol: 'I\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 1.38893e122,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		electricCharge: {
			name: 'electric charge',
			otherNames: ['charge'],
			symbol: 'Q',
			otherSymbols: ['q'],
			baseUnit: 'coulomb',
			derived: 'electricCurrent/time',
			vector: false,
			units: {
				coulomb: {
					name: 'coulomb',
					plural: 'coulombs',
					symbol: 'C',
					type: 'si',
					systems: ['metric']
				},
				faraday: {
					name: 'faraday',
					plural: 'faradays',
					symbol: 'F',
					type: 'customary',
					estimation: true,
					systems: ['legacyMetric'],
					multiplier: 96485.3383
				},
				milliampereHour: {
					name: 'milliampere hour',
					symbol: 'mAh',
					otherSymbols: ['mA·h', 'mA.h'],
					systems: ['legacyMetric'],
					type: 'customary',
					multiplier: 3.6
				},
				statcoulomb: {
					name: 'statcoulomb',
					symbol: 'statC',
					otherSymbols: ['Fr', 'esu'],
					otherNames: ['franklin', 'electrostaticUnit'],
					type: 'customary',
					estimation: true,
					systems: ['cgs'],
					multiplier: 3.335641e-10
				},
				abcoulomb: {
					name: 'abcoulomb',
					symbol: 'abC',
					otherSymbols: ['emu'],
					otherNames: ['electrostaticUnit'],
					type: 'customary',
					systems: ['cgs'],
					multiplier: 10
				},
				atomicUnitOfCharge: {
					name: 'atomic unit of charge',
					symbol: 'au',
					type: 'customary',
					systems: ['si'],
					estimation: true,
					multiplier: 1.602176462e-19
				},
				planckCharge: {
					name: 'Planck charge',
					symbol: 'q\u209A',
					type: 'customary',
					systems: ['planck'],
					multiplier: 1.875545956e-18,
					uncertainty: 0.000000041e-18
				},
				naturalChargeGaussian: {
					name: 'unit of electric charge',
					plural: 'units of electric charge',
					type: 'customary',
					systems: ['natural'],
					multiplier: 1.88e-18,
					uncertainty: 0.01e-18,
					notes: 'Unit does not have a symbol'
				},
				naturalChargeLorentzHeaviside: {
					name: 'unit of electric charge',
					plural: 'units of electric charge',
					type: 'customary',
					systems: ['natural'],
					multiplier: 5.29e-19,
					uncertainty: 0.01e-19,
					notes: 'Unit does not have a symbol'
				}
			}
		},
		electricDipoleMoment: {
			name: 'electric dipole moment',
			otherNames: ['electric dipole'],
			symbol: 'p',
			baseUnit: 'coulombMetre',
			derived: 'electricCurrent*length/time',
			vector: true,
			units: {
				coulombMetre: {
					name: 'coulomb metre',
					plural: 'coulomb metres',
					otherNames: ['coulomb meter', 'coulomb meters'],
					symbol: 'C·m',
					otherSymbols: ['C·m', 'Cm', 'C m'],
					type: 'si',
					systems: ['si']
				},
				debye: {
					name: 'debye',
					symbol: 'D',
					type: 'customary',
					systems: ['siCommon', 'cgs'],
					multiplier: 3.33564095e-30,
					notes: 'Still used within SI as all SI prefixes are too large for certain applications.'
				},
				atomicUnitOfElectricDipoleMoment: {
					name: 'atomic unit of electic dipole moment',
					symbol: 'ea₀',
					type: 'customary',
					systems: ['si'],
					estimation: true,
					multiplier: 8.47835281e-30
				}
			}
		},
		electricPotential: {
			name: 'electric potential',
			otherNames: [
				'voltage',
				'electric field potential',
				'electrostatic potential',
				'electric potential tension'
			],
			symbol: 'φ',
			otherSymbols: ['V', 'U', '∆V', '∆U', 'Δφ', 'E'],
			baseUnit: 'volt',
			derived: 'mass*length*length/electricCurrent/time/time/time',
			vector: false,
			units: {
				volt: {
					name: 'volt',
					plural: 'volts',
					otherNames: ['joules per coulomb'],
					symbol: 'V',
					type: 'si',
					systems: ['si', 'mks']
				},
				statvolt: {
					name: 'statvolt',
					plural: 'statvolts',
					symbol: 'statV',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 299.792458
				},
				abvolt: {
					name: 'abvolt',
					plural: 'abvolts',
					symbol: 'abV',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e-8
				},
				planckVoltage: {
					name: 'Planck voltage',
					symbol: 'V\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 1.04295e27,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		electricResistance: {
			name: 'electric resistance',
			otherNames: ['resistance', 'impedance', 'reactance'],
			symbol: 'R',
			otherSymbols: ['Z', 'X'],
			baseUnit: 'ohm',
			derived: 'mass*length*length/time/time/time/electricCurrent/electricCurrent',
			notes:
				'Impedance (Z) and Reactance (X) have the same units as resistance and in this context are considered equivalent',
			vector: false,
			units: {
				ohm: {
					name: 'ohm',
					plural: 'ohms',
					otherNames: ['legal ohm', 'volt/ampere'],
					symbol: 'Ω',
					otherSymbols: ['R'],
					type: 'si',
					systems: ['si', 'mks', 'englishUnits'],
					excludedPrefixes: ['mega', 'micro', 'giga'],
					notes:
						"Naming quantities may be done in the form 5.6 Ω => 5R6 to avoid 'rubbing off' decimal place"
				},
				megohm: {
					name: 'megohm',
					plural: 'megohms',
					symbol: 'MΩ',
					otherNames: ['megaohm', 'megaohms', 'mega ohm', 'mega ohms'],
					type: 'customary',
					systems: ['si', 'mks', 'englishUnits'],
					multiplier: 1e6,
					notes: 'Replaces the standard SI prefix mega- for ohms'
				},
				microhm: {
					name: 'microhm',
					plural: 'microhms',
					symbol: 'μΩ',
					otherNames: ['microohm', 'microohms', 'micro ohm', 'micro ohms'],
					type: 'customary',
					systems: ['si', 'mks', 'englishUnits'],
					multiplier: 1e-6,
					notes: 'Replaces the standard SI prefix micro- for ohms'
				},
				gigohm: {
					name: 'gigohm',
					plural: 'gigohms',
					symbol: 'GΩ',
					otherNames: ['gigaohm', 'gigaohms', 'giga ohm', 'giga ohms'],
					type: 'customary',
					systems: ['si', 'mks', 'englishUnits'],
					multiplier: 1e9,
					notes: 'Replaces the standard SI prefix giga- for ohms'
				},
				reciprocalSiemens: {
					name: 'reciprocal Siemens',
					symbol: '1/S',
					otherNames: ['reciprocal mho'],
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 1
				},
				quantizedHallResistance: {
					name: 'quantized Hall resistance',
					symbol: 'QHR',
					type: 'customary',
					systems: ['nonStandard'],
					multiplier: 3.874046143981e-5
				},
				abohm: {
					name: 'abohm',
					plural: 'abohms',
					symbol: 'abΩ',
					otherNames: ['EMU of resistance'],
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e-9
				},
				statohm: {
					name: 'statohm',
					plural: 'statohms',
					symbol: 'statΩ',
					otherNames: ['ESU of resistance'],
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1.11265002973e-12
				},
				planckImpedance: {
					name: 'Planck impedance',
					symbol: 'Z\u209A',
					type: 'customary',
					systems: ['planck'],
					multiplier: 29.9792458,
					notes:
						'Derived from fundamental planck units. Reasonably exact as does not rely on Gravitational constant (G).'
				}
			}
		},
		capacitance: {
			name: 'capacitance',
			symbol: 'C',
			baseUnit: 'farad',
			derived: 'time*time*time*time*electricCurrent*electricCurrent/length/length/mass',
			vector: false,
			units: {
				farad: {
					name: 'farad',
					plural: 'farads',
					symbol: 'F',
					type: 'si',
					systems: ['si', 'mks']
				},
				abfarad: {
					name: 'abfarad',
					plural: 'abfarads',
					symbol: 'abF',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e9
				},
				statfarad: {
					name: 'statfarad',
					plural: 'statfarads',
					symbol: 'statF',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1.112650056e-12
				}
			}
		},
		inductance: {
			name: 'inductance',
			symbol: 'L',
			otherSymbols: ['M'],
			baseUnit: 'henry',
			derived: 'mass*length*length/electricCurrent/electricCurrent/time/time',
			vector: false,
			units: {
				henry: {
					name: 'henry',
					plural: 'henries',
					symbol: 'H',
					type: 'si',
					systems: ['metric']
				}
			}
		},
		density: {
			name: 'density',
			symbol: 'ρ',
			baseUnit: 'kilogramPerCubicMetre',
			derived: 'mass/length/length/length',
			vector: false,
			units: {
				kilogramPerCubicMetre: {
					name: 'kilogram per cubic metre',
					plural: 'kilograms per cubic metre',
					otherNames: [
						'kilogram per cubic meter',
						'kilograms per cubic meter',
						'kilogram per metre cubed',
						'kilograms per metre cubed',
						'kilogram per meter cubed',
						'kilograms per meter cubed'
					],
					symbol: 'kg/m³',
					type: 'customary',
					systems: ['si']
				},
				gramPerMillilitre: {
					name: 'gram per millilitre',
					plural: 'grams per millilitre',
					symbol: 'g/mL',
					type: 'customary',
					systems: ['siCommon'],
					multiplier: 1000
				},
				kilogramPerLitre: {
					name: 'kilogram per litre',
					plural: 'kilograms per litre',
					symbol: 'kg/L',
					type: 'customary',
					systems: ['siCommon'],
					multiplier: 1000
				},
				ouncePerCubicFoot: {
					name: 'ounce per cubic foot',
					plural: 'ounces per cubic foot',
					otherNames: ['ounce per foot cubed', 'ounces per foot cubed'],
					symbol: 'oz/ft³',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 1.001153961
				},
				ouncePerCubicInch: {
					name: 'ounce per cubic inch',
					plural: 'ounces per cubic inch',
					otherNames: ['ounce per inch cubed', 'ounces per inch cubed'],
					symbol: 'oz/in³',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 1.729994044e3
				},
				ouncePerGallonImperial: {
					name: 'ounce per gallon',
					plural: 'ounces per gallon',
					symbol: 'oz/gal',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 6.236023291
				},
				ouncePerGallonUS: {
					name: 'ounce per gallon',
					plural: 'ounces per gallon',
					symbol: 'oz/gal',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 7.489151707
				},
				poundPerCubicFoot: {
					name: 'pound per cubic foot',
					plural: 'pounds per cubic foot',
					otherNames: ['pound per foot cubed', 'pounds per foot cubed'],
					symbol: 'lb/ft³',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 16.01846337
				},
				poundPerCubicInch: {
					name: 'pound per cubic inch',
					plural: 'pounds per cubic inch',
					otherNames: ['pound per inch cubed', 'pounds per inch cubed'],
					symbol: 'lb/in³',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 2.767990471e4
				},
				poundPerGallonImperial: {
					name: 'pound per gallon',
					plural: 'pounds per gallon',
					symbol: 'lb/gal',
					type: 'customary',
					systems: ['imperial'],
					multiplier: 99.77637266
				},
				poundPerGallonUS: {
					name: 'pound per gallon',
					plural: 'pounds per gallon',
					symbol: 'lb/gal',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 119.8264273
				},
				slugPerCubicFoot: {
					name: 'slug per cubic foot',
					plural: 'slugs per cubic foot',
					otherNames: ['slug per foot cubed', 'slugs per foot cubed'],
					symbol: 'slug/ft³',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 515.3788184
				},
				planckDensity: {
					name: 'Planck density',
					symbol: 'ρ\u209A',
					type: 'customary',
					systems: ['planck'],
					estimation: true,
					multiplier: 5.155e96,
					notes: 'Derived from fundamental planck units. Not exact.'
				}
			}
		},
		flowVolume: {
			name: 'flow volume',
			otherNames: [
				'volumetric flow rate',
				'volume flow rate',
				'rate of fluid flow',
				'volume velocity'
			],
			symbol: 'Q',
			baseUnit: 'cubicMetrePerSecond',
			derived: 'length*length*length/time',
			vector: false,
			units: {
				cubicMetrePerSecond: {
					name: 'cubic metre per second',
					plural: 'cubic metres per second',
					otherNames: [
						'cubic meter per second',
						'cubic meters per second',
						'metre cubed per second',
						'metres cubed per second',
						'meter cubed per second',
						'meters cubed per second'
					],
					symbol: 'm³/s',
					systems: ['si'],
					type: 'customary'
				},
				cubicFootPerMinute: {
					name: 'cubic foot per minute',
					plural: 'cubic feet per minute',
					otherNames: ['foot cubed per minute', 'feet cubed per minute'],
					symbol: 'CFM',
					otherSymbols: ['ft³/min'],
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 4.719474432e-4
				},
				cubicFootPerSecond: {
					name: 'cubic foot per second',
					plural: 'cubic feet per second',
					otherNames: ['foot cubed per second', 'feet cubed per second'],
					symbol: 'ft³/s',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 0.028316846592
				},
				cubicInchPerMinute: {
					name: 'cubic inch per minute',
					plural: 'cubic inches per minute',
					otherNames: ['inch cubed per minute', 'inches cubed per minute'],
					symbol: 'in³/min',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 2.73117733333333e-7
				},
				cubicInchPerSecond: {
					name: 'cubic inch per second',
					plural: 'cubic inches per second',
					otherNames: ['inch cubed per second', 'inches cubed per second'],
					symbol: 'in³/s',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 1.6387064e-5
				},
				gallonPerDay: {
					name: 'gallon per day',
					plural: 'gallons per day',
					symbol: 'GPD',
					otherSymbols: ['gal/day'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 4.3812636388889e-8,
					notes: 'Us Gallon'
				},
				gallonPerHour: {
					name: 'gallon per hour',
					plural: 'gallons per hour',
					symbol: 'GPH',
					otherSymbols: ['gal/h'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 1.05150327333333e-6,
					notes: 'Us Gallon'
				},
				gallonPerMinute: {
					name: 'gallon per minute',
					plural: 'gallons per minute',
					symbol: 'GPM',
					otherSymbols: ['gal/min'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 6.30901964e-5,
					notes: 'Us Gallon'
				},
				litrePerMinute: {
					name: 'litre per minute',
					plural: 'litres per minute',
					otherNames: ['liter per minute', 'litres per minute'],
					symbol: 'LPM',
					otherSymbols: ['L/min'],
					type: 'customary',
					systems: ['legacyMetric'],
					multiplier: 1.6666666666667e-5
				}
			}
		},
		luminance: {
			name: 'luminance',
			symbol: 'Lᵥ',
			baseUnit: 'candelaPerSquareMetre',
			derived: 'luminousIntensity/length/length',
			vector: true,
			units: {
				candelaPerSquareMetre: {
					name: 'candela per square metre',
					plural: 'candelas per square metre',
					otherNames: [
						'nit',
						'nits',
						'candela per square meter',
						'candelas per square meter',
						'candela per metre squared',
						'candelas per metre squared',
						'candela per meter squared',
						'candelas per meter squared'
					],
					symbol: 'cd/m²',
					type: 'customary',
					systems: ['si']
				},
				candelaPerSquareFoot: {
					name: 'candela per square foot',
					plural: 'candelas per square foot',
					otherNames: ['candela per foot squared', 'candelas per foot squared'],
					symbol: 'cd/ft²',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 10.763910417
				},
				candelaPerSquareInch: {
					name: 'candela per square inch',
					plural: 'candelas per square inch',
					otherNames: ['candela per inch squared', 'candelas per inch squared'],
					symbol: 'cd/in²',
					type: 'customary',
					systems: ['imperial', 'usCustomary'],
					multiplier: 1550.0031
				},
				footlambert: {
					name: 'foot-lambert',
					plural: 'foot-lamberts',
					otherNames: ['footlambert', 'footlamberts'],
					symbol: 'fL',
					otherSymbols: ['fl', 'ft-L'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 3.4262590996
				},
				lambert: {
					name: 'lambert',
					plural: 'lamberts',
					symbol: 'L',
					otherSymbols: ['la', 'Lb'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 3183.0988618,
					notes: 'More information on systems needed'
				},
				stilb: {
					name: 'stilb',
					plural: 'stilbs',
					symbol: 'sb',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e4
				}
			}
		},
		luminousFlux: {
			name: 'luminous flux',
			symbol: 'Φᵥ',
			baseUnit: 'lumen',
			otherNames: ['luminousPower'],
			derived: 'luminousIntensity*solidAngle',
			vector: false,
			units: {
				lumen: {
					name: 'lumen',
					plural: 'lumens',
					symbol: 'lm',
					type: 'si',
					systems: ['metric', 'imperial', 'usCustomary']
				}
			}
		},
		illuminance: {
			name: 'illuminance',
			symbol: 'Eᵥ',
			baseUnit: 'lux',
			derived: 'luminousIntensity*solidAngle/length/length',
			vector: true,
			units: {
				lux: {
					name: 'lux',
					symbol: 'lx',
					type: 'si',
					systems: ['si']
				},
				phot: {
					name: 'phot',
					plural: 'phots',
					symbol: 'ph',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e4
				},
				lumenPerSquareInch: {
					name: 'lumen per square inch',
					plural: 'lumens per square inch',
					otherNames: ['lumen per inch squared', 'lumens per inch squared'],
					symbol: 'lm/in²',
					estimation: true,
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 1550.0031
				},
				footCandle: {
					name: 'foot-candle',
					plural: 'foot-candles',
					otherNames: ['foot candle', 'foot candles', 'lumen per square foot'],
					symbol: 'fc',
					otherSymbols: ['lm/ft²', 'ft-c'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 10.763910417
				}
			}
		},
		magneticFlux: {
			name: 'magnetic flux',
			symbol: 'Φ',
			otherSymbols: ['ΦB', 'ΦM', 'Φb', 'Φm'],
			derived: 'mass*length*length/electricCurrent/time/time',
			baseUnit: 'weber',
			vector: false,
			units: {
				weber: {
					name: 'weber',
					plural: 'webers',
					symbol: 'Wb',
					type: 'si',
					systems: ['si', 'mts', 'mks', 'gravitational']
				},
				maxwell: {
					name: 'maxwell',
					plural: 'maxwells',
					symbol: 'Mx',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e-8
				}
			}
		},
		magneticFluxDensity: {
			name: 'magnetic flux density',
			otherNames: ['magnetic field', 'magnetic induction', 'B-field', 'magnetic B field'],
			symbol: 'B',
			derived: 'mass/electricCurrent/time/time',
			baseUnit: 'tesla',
			vector: true,
			units: {
				tesla: {
					name: 'tesla',
					plural: 'teslas',
					symbol: 'T',
					type: 'si',
					systems: ['si', 'mts', 'mks', 'gravitational']
				},
				gauss: {
					name: 'gauss',
					symbol: 'G',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e-4
				}
			}
		},
		magneticFieldStrength: {
			name: 'magnetic field strength',
			otherNames: [
				'magnetic field intensity',
				'magnetic field',
				'magnetizing field',
				'auxiliary magnetic field',
				'H-field',
				'magnetic H field'
			],
			symbol: 'H',
			derived: 'electricCurrent/length',
			baseUnit: 'amperePerMetre',
			vector: true,
			units: {
				amperePerMetre: {
					name: 'ampere per metre',
					plural: 'amperes per metre',
					otherNames: [
						'ampere per meter',
						'amperes per meter',
						'amp per metre',
						'amps per metre',
						'amp per meter',
						'amps per meter'
					],
					symbol: 'A/m',
					type: 'customary',
					systems: ['si', 'mts', 'mks', 'gravitational']
				},
				oersted: {
					name: 'œrsted',
					plural: 'œrsteds',
					otherNames: ['oersted', 'oersteds'],
					symbol: 'Oe',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 79.5774715
				}
			}
		},
		kinematicViscosity: {
			name: 'kinematic viscosity',
			symbol: 'ν',
			derived: 'length*length/time',
			baseUnit: 'squareMetrePerSecond',
			vector: false,
			units: {
				squareMetrePerSecond: {
					name: 'square metre per second',
					plural: 'square metres per second',
					otherNames: [
						'square meter per second',
						'square meters per second',
						'metre squared per second',
						'metres squared per second',
						'meter squared per second',
						'meters squared per second'
					],
					symbol: 'm²/s',
					type: 'customary',
					systems: ['si']
				},
				stokes: {
					name: 'stokes',
					symbol: 'St',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 1e-4
				},
				squareFootPerSecond: {
					name: 'square foot per second',
					plural: 'square feet per second',
					otherNames: ['foot squared per second', 'feet squared per second'],
					symbol: 'ft²/s',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 0.09290304
				}
			}
		},
		dynamicViscosity: {
			name: 'dynamic viscosity',
			symbol: 'μ',
			derived: 'mass/length/time',
			baseUnit: 'pascalSecond',
			vector: false,
			units: {
				pascalSecond: {
					name: 'pascal-second',
					plural: 'pascal-seconds',
					otherNames: ['pascal second', 'pascal seconds'],
					symbol: 'Pa·s',
					type: 'customary',
					systems: ['si']
				},
				poise: {
					name: 'poise',
					symbol: 'P',
					type: 'customary',
					systems: ['cgs'],
					multiplier: 0.1
				},
				poundPerFootHour: {
					name: 'pound per foot hour',
					plural: 'pounds per foot hour',
					symbol: 'lb/(ft·h)',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 4.133789e-4
				},
				poundPerFootSecond: {
					name: 'pound per foot second',
					plural: 'pounds per foot second',
					symbol: 'lb/(ft·s)',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 1.488164
				},
				poundForceSecondPerSquareFoot: {
					name: 'pound-force second per square foot',
					plural: 'pound-force seconds per square foot',
					symbol: 'lbf·s/ft²',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 47.88026
				},
				poundForceSecondPerSquareInch: {
					name: 'pound-force second per square inch',
					plural: 'pound-force seconds per square inch',
					symbol: 'lbf·s/in²',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 6894.757
				}
			}
		},
		action: {
			name: 'action',
			otherNames: ['angular momentum'],
			symbol: 'S',
			derived: 'mass*length*length/time',
			baseUnit: 'jouleSecond',
			vector: true,
			units: {
				jouleSecond: {
					name: 'joule-second',
					plural: 'joule-seconds',
					otherNames: ['joule second', 'joule seconds'],
					symbol: 'J·s',
					otherSymbols: ['J s'],
					type: 'customary',
					systems: ['si']
				},
				atomicUnitOfAction: {
					name: 'atomic unit of action',
					otherNames: ['reduced Planck constant'],
					symbol: 'au',
					otherSymbols: ['ħ'],
					type: 'customary',
					systems: ['si'],
					multiplier: 1.05457172647e-34,
					notes: 'ħ = h/2π'
				},
				planckConstant: {
					name: 'Planck constant',
					otherNames: ["Planck's constant"],
					symbol: 'h',
					type: 'si',
					systems: ['si'],
					multiplier: 6.6260695729e-34
				}
			}
		},
		torque: {
			name: 'torque',
			otherNames: ['moment', 'moment of force'],
			symbol: 'τ',
			otherSymbols: ['M'],
			derived: 'mass*length*length/time/time',
			baseUnit: 'newtonMetre',
			vector: true,
			units: {
				newtonMetre: {
					name: 'newton metre',
					plural: 'newton metres',
					otherNames: ['newton-metre', 'newton-metres', 'newton meter', 'newton meters'],
					symbol: 'N·m',
					otherSymbols: ['N m'],
					type: 'customary',
					systems: ['si']
				},
				footPoundForce: {
					name: 'foot-pound force',
					otherNames: ['foot-pound'],
					symbol: 'ft lbf',
					otherSymbols: ['ft·lbf', 'ft·lb'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 1.3558179483314
				},
				footPoundal: {
					name: 'foot-poundal',
					symbol: 'ft pdl',
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 4.21401100938048e-2
				},
				inchPoundForce: {
					name: 'inch-pound force',
					otherNames: ['inch-pound'],
					symbol: 'in lbf',
					otherSymbols: ['in·lbf', 'in·lb'],
					type: 'customary',
					systems: ['usCustomary'],
					multiplier: 0.1129848290276167
				},
				metreKilogram: {
					name: 'metre-kilogram',
					symbol: 'm·kg',
					otherSymbols: ['m kg', 'mkg'],
					type: 'customary',
					systems: ['mks'],
					multiplier: 0.101971621
				}
			}
		},
		information: {
			name: 'information',
			otherNames: ['data'],
			symbol: 'i',
			baseUnit: 'bit',
			vector: false,
			units: {
				bit: {
					name: 'bit',
					plural: 'bits',
					otherNames: ['shannon'],
					symbol: 'b',
					otherSymbols: ['Sh'],
					type: 'binary',
					systems: ['nonStandard']
				},
				byte: {
					name: 'byte',
					plural: 'bytes',
					symbol: 'B',
					type: 'binary',
					systems: ['nonStandard'],
					multiplier: 8
				}
			}
		}
	},
	prefixes: {
		yotta: {
			symbol: 'Y',
			type: 'si',
			multiplier: 1e24
		},
		zetta: {
			symbol: 'Z',
			type: 'si',
			multiplier: 1e21
		},
		exa: {
			symbol: 'E',
			type: 'si',
			multiplier: 1e18
		},
		peta: {
			symbol: 'P',
			type: 'si',
			multiplier: 1e15
		},
		tera: {
			symbol: 'T',
			type: 'si',
			multiplier: 1e12
		},
		giga: {
			symbol: 'G',
			type: 'si',
			multiplier: 1e9
		},
		mega: {
			symbol: 'M',
			type: 'si',
			multiplier: 1e6
		},
		kilo: {
			symbol: 'k',
			type: 'si',
			multiplier: 1e3
		},
		hecto: {
			symbol: 'h',
			type: 'si',
			multiplier: 100,
			rare: true,
			notes: '...'
		},
		deca: {
			symbol: 'da',
			type: 'si',
			multiplier: 10,
			rare: true,
			notes: '...'
		},
		deci: {
			symbol: 'd',
			type: 'si',
			multiplier: 0.1,
			rare: true,
			notes: '...'
		},
		centi: {
			symbol: 'c',
			type: 'si',
			multiplier: 0.01,
			rare: true,
			notes: 'Is rare for systems other than length'
		},
		milli: {
			symbol: 'm',
			type: 'si',
			multiplier: 1e-3
		},
		micro: {
			symbol: 'µ',
			type: 'si',
			multiplier: 1e-6
		},
		nano: {
			symbol: 'n',
			type: 'si',
			multiplier: 1e-9
		},
		pico: {
			symbol: 'p',
			type: 'si',
			multiplier: 1e-12
		},
		femto: {
			symbol: 'f',
			type: 'si',
			multiplier: 1e-15
		},
		atto: {
			symbol: 'a',
			type: 'si',
			multiplier: 1e-18
		},
		zepto: {
			symbol: 'z',
			type: 'si',
			multiplier: 1e-21
		},
		yocto: {
			symbol: 'y',
			type: 'si',
			multiplier: 1e-24
		},
		yobi: {
			symbol: 'Yi',
			type: 'siBinary',
			base: 2,
			power: 80
		},
		zebi: {
			symbol: 'Zi',
			type: 'siBinary',
			base: 2,
			power: 70
		},
		exbi: {
			symbol: 'Ei',
			type: 'siBinary',
			base: 2,
			power: 60
		},
		pebi: {
			symbol: 'Pi',
			type: 'siBinary',
			base: 2,
			power: 50
		},
		tebi: {
			symbol: 'Ti',
			type: 'siBinary',
			base: 2,
			power: 40
		},
		gibi: {
			symbol: 'Gi',
			type: 'siBinary',
			base: 2,
			power: 30
		},
		mebi: {
			symbol: 'Mi',
			type: 'siBinary',
			base: 2,
			power: 20
		},
		kibi: {
			symbol: 'Ki',
			type: 'siBinary',
			base: 2,
			power: 10
		},
		hella: {
			symbol: 'H',
			type: 'siUnofficial',
			multiplier: 1e27
		},
		bronto: {
			symbol: 'B',
			type: 'siUnofficial',
			multiplier: 1e27,
			rare: true,
			notes: '...'
		}
	}
} as const;


type units_options = (typeof units)['dimensions'][keyof (typeof units)['dimensions']]
type units_map = units_options['']
type unit_union = Array<unit> 