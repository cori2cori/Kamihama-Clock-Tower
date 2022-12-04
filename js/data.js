var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Dec 9 2022, 18:00";
var nextAnniversary = "August 22 2023, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
    /*{
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 50,
        days: {
            "sunday": { elements: ["Sun", "Priest", "Mage", "Alchemist"], short:"Sun" },
            "monday": { elements: ["Moon", "Gold", "Warrior"], short:"Mon" },
            "tuesday": { elements: ["Fire", "Knight", "Priest"], short:"Tue" },
            "wednesday": { elements: ["Water", "Gold", "Mage"], short:"Wed" },
            "thursday": { elements: ["Wind", "Warrior", "Alchemist"], short:"Thu" },
            "friday": { elements: ["Gold", "Priest", "Mage"], short:"Fri" },
            "saturday": { elements: ["Earth", "Warrior", "Knight"], short:"Sat" }
        }
    },
    
  */
	{
        "type": "WeekendBoss",
        "title": [
			"Pleased Sapphire Lips Kimochi Battle",
            "キモチ戦悦ぶサファイアの唇"
        ],
        "image": [
            "imgs/2411/banner_0314_m.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Dec 5 2022, 17:00",
				end: "Dec 6 2022, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Dec 6 2022, 16:00",
				end: "Dec 7 2022, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Dec 7 2022, 17:00",
				end: "Dec 8 2022, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Dec 8 2022, 16:00",
				end: "Dec 9 2022, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Dec 9 2022, 16:00",
				end: "Dec 10 2022, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Dec 5 2022, 17:00",
                "end": "Dec 10 2022, 15:59",
                "extraPriority": 1000,
				"type": "normal",
				markers: 
				[{time: "Oct 7 2022, 17:00", title: "Part 2 - Groups", type: "battle"}]
			}
			]
    },
		{
        "type": "WeekendBoss",
        "title": [
			"Ranked Mirrors",
			"ミラーズランキング"
        ],
        "image": [
            "imgs/mirroran.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Preliminaries - Day 1",
				start: "Nov 7 2022, 17:00",
				end: "Nov 8 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 2",
				start: "Nov 8 2022, 16:00",
				end: "Nov 9 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 3",
				start: "Nov 9 2022, 16:00",
				end: "Nov 10 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 4",
				start: "Nov 10 2022, 16:00",
				end: "Nov 11 2022, 15:59"
			},
			{
				name: "Preliminaries - Day 5",
				start: "Nov 11 2022, 16:00",
				end: "Nov 12 2022, 15:59"
			},
			{
				name: "Finals",
				start: "Nov 12 2022, 17:00",
				end: "Nov 13 2022, 20:59"
			},
            {
                "name": "Main Event",
                "start": "Nov 7 2022, 17:00",
                "end": "Nov 13 2022, 20:59",
                "extraPriority": 1000,
				"type": "normal",
				markers: 
				[{time: "Nov 12 2022, 17:00", title: "Finals", type: "battle"}]
			}
			]
    },
	{
        "type": "Event",
        "title": [
            "1900 Days Since Release Campaign",
			"リリース1900日記念キャンペーン"
        ],
        "image": [
            "imgs/0611/banner_0629_m.png"
        ],
        "column": 0,
        "priority": 17,
        "timers": [
			{
				name: "Login Bonus",
				start: "Nov 7 2022, 17:00",
				end: "Nov 14 2022, 23:59"
			},
			{
				name: " 1/2 AP, x2 Player EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "Nov 7 2022, 17:00",
				end: "Nov 14 2022, 14:59"
			},
			{
				name: "Limited-time Daily Missions",
				start: "Nov 8 2022, 0:00",
				end: "Nov 14 2022, 23:59"
			}
        ]
    },
{
        "type": "Event",
        "title": [
			"Battle Museum III",
			"バトルミュージアム"
        ],
        "image": [
            "imgs/1411/banner_0530_m.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Main Event",
				start: "Nov 14 2022, 17:00",
				end: "Nov 25 2022, 14:59",
				extraPriority: 100
			}
        ]
   },
					{
        "type": "Event",
        "title": [
			"Mish Mash!? Aru-chan Alert!",
			"ちぐはぐ!?アルちゃん注意報！"
        ],
        "image": [
            "imgs/2411/banner_0633_m.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Main Event",
				start: "Nov 25 2022, 16:00",
				end: "Dec 5 2022, 14:59",
				extraPriority: 100,
				markers: 
				[{time: "Nov 30 2022, 16:00", title: "Story Quests 11-20 & 100Evils I-III", type: "battle"}]
			}
        ]
    },
	{
        "type": "Shop",
        "title": [
            "Shops and Limited-time Missions",
			"ショップと期間限定ミッション"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 100,
        "timers": [
			{
				name: "Adjuster Coin Shop: Peach - Rabi (Kimochi ver.) Gacha",
				start: "Nov 14 2022, 17:00",
				end: "Dec 2 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Green - Kagome Gacha",
				start: "Nov 25 2022, 16:00",
				end: "Dec 5 2022, 14:59"
			},
			{
				name: "4★ Memoria Selection Ticket Exchange - Kagome Step-UP Gacha",
				start: "Nov 25 2022, 16:00",
				end: "Dec 5 2022, 14:59"
			},
			{
				name: "Mish Mash!? Aru-chan Alert! - Event Shop and Missions",
				start: "Nov 25 2022, 16:00",
				end: "Dec 5 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Navy Blue - Forest Attribute Gacha",
				start: "Dec 5 2022, 17:00",
				end: "Dec 12 2022, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"1900 Days Anniversary Packs",
		"1900日記念パック"
		],
		image: [
            "imgs/0611/banner_0630_m.png"
        ],
		column: 2,
		priority: 20,
		timers: [ 
		{
			name: "Sales period",
			start: "Nov 7 2022, 17:00",
			end: "Nov 14 2022, 14:59",
			extraPriority: 1000
		}
		]
	},
{
		type: "Other",
		title: [
		"Ranking Mirrors Related Packs",
		"『ミラーズランキング』関連パックの販売"
		],
		image: [
            "imgs/0611/banner_0632_m.png"
        ],
		column: 2,
		priority: 19,
		timers: [ 
		{
			name: "Sales period",
			start: "Nov 7 2022, 17:00",
			end: "Nov 14 2022, 14:59",
			extraPriority: 0
		},
		{
			name: "Mirrors Selection Pack Ticket Exchange",
			start: "Nov 7 2022, 17:00",
			end: "Nov 21 2022, 14:59",
			extraPriority: 1000
		}
		]
	},
		{
		type: "Other",
		title: [
		"Forest Attribute Strengthening Pack",
		"木属性魔法少女育成パック"
		],
		image: [
            "imgs/0412/banner_0556_m.png"
        ],
		column: 2,
		priority: 10,
		timers: [ 
		{
			name: "Sales period",
			start: "Dec 5 2022, 17:00",
			end: "Dec 12 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance & App version 2.6.0 Update",
			"维护&アプリバージョン2.6.0強制アップデート"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "Nov 25 2022, 15:00",
                end: "Nov 25 2022, 16:00",
				extraPriority: 1000
            }
        ]
    },
	{
        type: "Maintenance",
        title: [
            "Maintenance & App version 2.6.1 Update",
			"维护&アプリバージョン2.6.1強制アップデート"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 7,
        timers: [
            {
                name: "Scheduled Time",
                start: "Dec 5 2022, 15:00",
                end: "Dec 5 2022, 17:00",
				extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Satori Kagome Pickup Gacha & Step-up Gacha",
            "佐鳥かごめ ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2411/gachabanner_1172_m.png",
			"imgs/2411/gachabanner_1173_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Nov 25 2022, 16:00",
				end: "Dec 5 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Forest Attribute Pickup Gacha",
            "木属性魔法少女ピックアップガチャ"
        ],
        "image": [
            "imgs/0412/gachabanner_1182_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Dec 5 2022, 17:00",
				end: "Dec 12 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Paid 4★ Attribute Attribute Magical Girl Guaranteed Gacha",
            "有償限定木属性★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/0412/gachabanner_1183_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Dec 5 2022, 17:00",
				end: "Dec 12 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time paid Step-UP Gacha: Battle Museum Edition",
            "有償限定 ステップアップガチャ バトルミュージアム編"
        ],
        "image": [
            "imgs/1411/gachabanner_1165_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Nov 14 2022, 17:00",
				end: "Nov 25 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time ★4 Memoria Selection Gacha",
            "選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/0611/gachabanner_1156_m.png"
        ],
        "column": 1,
        "priority": 9,
        "timers": [
            {
                name: "Duration",
                start: "Nov 7 2022, 17:00",
				end: "Nov 14 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Paid 4★ Dark Attribute Magical Girl Guaranteed Gacha",
            "有償限定闇属性★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/0210/gachabanner_1132_m.png"
        ],
        "column": 1,
        "priority": 18,
        "timers": [
            {
                name: "Duration",
                start: "Oct 3 2022, 17:00",
				end: "Oct 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Magical Girl Pickup Gacha ",
            "5周年記念 選べる★4魔法少女ピックアップガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1100_m.png"
        ],
        "column": 1,
        "priority": 19,
        "timers": [
            {
                name: "Duration",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Aug 22 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Aug 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Aug 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Aug 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Aug 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Aug 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Aug 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Aug 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Aug 30 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Aug 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 1 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 2 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 3 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 4 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 5 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Memoria Selection Gacha ",
            "5周年記念 選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1101_m.png"
        ],
        "column": 1,
        "priority": 18,
        "timers": [
            {
                name: "Duration",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Aug 22 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Aug 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Aug 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Aug 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Aug 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Aug 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Aug 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Aug 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Aug 30 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Aug 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 1 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 2 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 3 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 4 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 5 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Past Halloween Gachas Rerun",
            "期間限定 ハロウィン魔法少女編ピックアップガチャ復刻"
        ],
        "image": [
            "imgs/0910/gachabanner_1133_m.png",
			"imgs/0910/gachabanner_1134_m.png",
			"imgs/0910/gachabanner_1135_m.png"
			

        ],
        "column": 1,
        "priority": 17,
        "timers": [
            {
                name: "Duration",
                start: "Oct 11 2022, 16:00",
				end: "Oct 24 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time paid Step-UP Gacha: Halloween Edition",
            "有償限定 ステップアップガチャハロウィン魔法少女編"
        ],
        "image": [
            "imgs/0910/gachabanner_1136_m.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "Duration",
                start: "Oct 11 2022, 16:00",
				end: "Oct 24 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Limited Magical Girl Pickup Gacha ",
            "5周年記念 選べる期間限定★4魔法少女ピックアップガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1107_m.png"
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "Duration",
                start: "Sep 5 2022, 16:00",
				end: "Sep 20 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Sep 5 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Sep 6 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Sep 7 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Sep 8 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Sep 9 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Sep 10 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Sep 11 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Sep 12 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Sep 13 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Sep 14 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 15 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 16 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 17 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 18 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 19 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 20 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Limited Memoria Selection Gacha ",
            "5周年記念 選べる期間限定★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1108_m.png"
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "Duration",
                start: "Sep 5 2022, 16:00",
				end: "Sep 20 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Sep 5 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Sep 6 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Sep 7 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Sep 8 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Sep 9 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Sep 10 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Sep 11 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Sep 12 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Sep 13 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Sep 14 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 15 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 16 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 17 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 18 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 19 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 20 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    }
];
