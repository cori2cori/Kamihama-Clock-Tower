var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Feb 17 2023, 18:00";
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
            "Extermination Battle: Witches Paradox",
			"殲滅戦 魔女たちのパラドクス"
        ],
        "image": [
            "imgs/2001/banner_0494_m.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "",
				start: "Jan 20 2023, 17:00",
				end: "Jan 27 2023, 14:59",
				markers:
				[
				{time: "Jan 23 2023, 16:00", title: "Challenge Stages", type: "battle"},
				{time: "Jan 25 2023, 16:00", title: "EX Challenge Stages", type: "battle"}
				],
				extraPriority: 100
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "2000 Days Since Release Campaign",
			"リリース2000日記念キャンペーン"
        ],
        "image": [
            "imgs/1002/banner_0652_m.png",
			"imgs/1002/banner_0654_m.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Login Bonus",
				start: "feb 10 2023, 16:00",
				end: "feb 20 2023, 23:59",
				extraPriority: 100
			},
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "feb 10 2023, 16:00",
				end: "feb 20 2023, 14:59"
			},
			{
				name: "Limited-time Daily Missions",
				start: "feb 10 2023, 16:00",
				end: "feb 20 2023, 14:59"
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "Valentines Day Message ～Memories are Pale Black～",
			"新春☆初夢スクランブル"
        ],
        "image": [
            "imgs/1002/banner_0648_m.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "",
				start: "feb 10 2023, 16:00",
				end: "feb 20 2023, 14:59",
				extraPriority: 100,
				markers: 
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "feb 14 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Valentines Login Bonus",
			"バレンタインログインボーナス"
        ],
        "image": [
            "imgs/1002/banner_0651_m.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "",
				start: "feb 10 2023, 16:00",
				end: "feb 20 2023, 23:59",
				extraPriority: 100
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
				name: "Limited-time Memoria in the SP Shop",
				start: "Jan 1 2023, 0:00",
				end: "Jan 31 2023, 23:59"
			},
			{
				name: "Puella·Historia Battle Maidens of Kamihama - Event Shop & Missions",
				start: "Jan 27 2023, 16:00",
				end: "Feb 17 2023, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Blue - Tsuyu Gacha",
				start: "Jan 27 2023, 16:00",
				end: "Feb 17 2023, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Red - Chizuru Gacha",
				start: "Jan 27 2023, 16:00",
				end: "Feb 17 2023, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Purple - Sudachi Valentines Gacha",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Past Valentines Units Gachas",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Valentines Special Ticket Shop - Past Valentines Step-up Gacha",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Valentines Day Message - Event Shops & Missions",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "2000 Days Since Release - Special Missions & Shop",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			}
        ]
    },

{
		type: "Other",
		title: [
		"Mitama's Special Deal in occasion of the Extermination Battle",
		"殲滅戦開催記念!! みたまのスペシャルオファー 開催"
		],
		image: [
            "imgs/2001/banner_0591_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "Sales period",
			start: "Jan 20 2023, 17:00",
			end: "Jan 27 2023, 14:59",
			extraPriority: 100
		}
		]
	},
{
		type: "Other",
		title: [
		"Tart☆Magica Collaboration Commemorative Training Support Pack",
		"魔法少女たると☆マギカコラボ記念 育成応援パックの販売"
		],
		image: [
            "imgs/0901/banner_0647_m.png"
        ],
		column: 2,
		priority: 6,
		timers: [ 
		{
			name: "Sales period",
			start: "Jan 10 2023, 16:00",
			end: "Jan 20 2023, 14:59",
			extraPriority: 100
		}
		]
	},
{
		type: "Other",
		title: [
		"2000 Days Since Release Packs",
		"2000日記念パック"
		],
		image: [
            "imgs/1002/banner_0653_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "",
			start: "Feb 10 2023, 16:00",
			end: "Feb 20 2023, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance",
			"维护"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 4,
        timers: [
            {
                name: "",
                start: "Jan 27 2023, 15:00",
                end: "Jan 27 2023, 16:00",
				extraPriority: 1000
            }
        ]
    },
	{
        type: "Maintenance",
        title: [
            "Maintenance & App version 2.6.3 Update",
			"维护&アプリバージョン2.6.3強制アップデート"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 7,
        timers: [
            {
                name: "Scheduled Time",
                start: "Dec 20 2022, 15:00",
                end: "Dec 20 2022, 16:00",
				extraPriority: 1000
            }
        ]
    },
			{
        "type": "Gacha",
        "title": [
			"Limited-time Sawa Sudachi (Valentines ver.) Pick-up & Step-up gacha",
            "期間限定 佐和月出里 バレンタインver. ピックアップ&ステップアップガチャ"
        ],
        "image": [
            "imgs/1002/gachabanner_1317_m.png",
			"imgs/1002/gachabanner_1318_m.png",
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "",
                start: "Feb 10 2023, 16:00",
				end: "Feb 20 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Sakura Kyouko (Doppel ver.) Pick-up gacha",
            "期間限定 佐倉杏子 ドッペルver. ピックアップガチャ"
        ],
        "image": [
            "imgs/1002/gachabanner_0868_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "",
                start: "Feb 10 2023, 16:00",
				end: "Feb 20 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Valentines 2020-2021 Magical Girl Pick-up gacha",
            "期間限定 バレンタイン魔法少女2020-2021 ピックアップガチャ"
        ],
        "image": [
            "imgs/1002/gachabanner_1324_m.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "",
                start: "Feb 10 2023, 16:00",
				end: "Feb 20 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Paid-only Valentines Magical Girls Step-UP Gacha",
            "有償限定 ステップアップガチャ バレンタイン魔法少女編 "
        ],
        "image": [
            "imgs/1002/gachabanner_1325_m.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
                start: "Feb 10 2023, 16:00",
				end: "Feb 20 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Daily Free 10 pull Rare Gacha",
            "10連レアガチャ毎日1回無料"
        ],
        "image": [
            "imgs/1912/banner_0641_m.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                name: "",
                start: "Dec 21 2022, 00:00",
				end: "Jan 10 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Dec 21 2022, 00:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Dec 22 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Dec 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Dec 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Dec 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Dec 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Dec 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Dec 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Dec 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Dec 30 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Dec 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Jan 1 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Jan 2 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Jan 3 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Jan 4 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Jan 5 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "Jan 6 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "Jan 7 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 19",
					time: "Jan 8 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 20",
					time: "Jan 9 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 21",
					time: "Jan 10 2023, 0:00",
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
                name: "",
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
                name: "",
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
                name: "",
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
                name: "",
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
                name: "",
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
