var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Sep 30 2022, 18:00";
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
			"Kimochi Battle Special Edition: Alina Eve",
            "キモチ戦特別編 アリナ・イブ"
        ],
        "image": [
            "imgs/2506/banner_0603_m.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Jul 4 2022, 17:00",
				end: "Jul 5 2022, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Jul 5 2022, 16:00",
				end: "Jul 6 2022, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Jul 6 2022, 17:00",
				end: "Jul 7 2022, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Jul 7 2022, 16:00",
				end: "Jul 8 2022, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Jul 8 2022, 16:00",
				end: "Jul 9 2022, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Jul 4 2022, 17:00",
                "end": "Jul 9 2022, 15:59",
                "extraPriority": 100,
				"type": "normal",
				markers: [
					{
						title: "Part 2 - Groups",
						time: "Jun 6 2022, 17:00",
						type: "battle"
					}
				]
			}
			]
    },
			{
        "type": "Maintenance",
        "title": [
			"Maintenance",
			"维护"
        ],
        "image": [
            "imgs/maintenance.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Maintenance",
				start: "Aug 22 2022, 15:00",
				end: "Aug 22 2022, 16:00",
				extraPriority: 2000
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"Sayonara ・ Storage",
			"サヨナラ・ストレージ"
        ],
        "image": [
            "imgs/1509/banner_0622_m.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Main Event",
				start: "Sep 20 2022, 16:00",
				end: "Oct 3 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 11-20 & 100Evils I-III",
					type: "battle",
					time: "Sep 26 2022, 16:00"
				}
				]
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"Stardust Mirage",
			"星屑のミラージュ"
        ],
        "image": [
            "imgs/anniv/banner_0609_m.png"
        ],
        "column": 0,
        "priority": 20,
        "timers": [
			{
				name: "Main Event",
				start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story quests 11-20",
					type: "story",
					time: "Aug 29 2022, 16:00"
				}
				]
			}
        ]
    },
				{
        "type": "Event",
        "title": [
			"Main Story Arc 2 Chapter 12 Part I Release & New Chapter Campaign",
			"メインストーリー第2部12章前編 配信 & 新章キャンペーン"
        ],
        "image": [
            "imgs/0109/banner_1031200_m.png",
			"imgs/0109/banner_0590_m.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "Campaign duration",
				start: "Sep 5 2022, 16:00",
				end: "Sep 16 2022, 14:59",
				extraPriority: 100
			}
        ]
    },
					{
        "type": "Event",
        "title": [
			"Main Story Arc 2 Chapter 12 Part II Release & New Chapter Campaign",
			"メインストーリー第2部12章中編 配信 & 新章キャンペーン"
        ],
        "image": [
            "imgs/1509/banner_1031201_m.png",
			"imgs/1509/banner_0590_m.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Campaign duration",
				start: "Sep 16 2022, 17:00",
				end: "Sep 26 2022, 14:59",
				extraPriority: 100
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"Closing and Opening Symposium ～Summarizing Arc 2～",
			"むすんでひらいて座談会～第2部をまとめて～"
        ],
        "image": [
            "imgs/0109/banner_0620_m.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Main Event",
				start: "Sep 5 2022, 16:00",
				end: "Sep 16 2022, 14:59",
				extraPriority: 100,
				markers: [{time: "Sep 9 2022, 16:00", title: "Story Quests 11~20 & 100Evils I~III", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Extermination Battle: Witches' Paradox",
			"殲滅戦 魔女たちのパラドクス"
        ],
        "image": [
            "imgs/extermination.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
            {
                "name": "Main Event",
                "start": "Jul 22 2022, 17:00",
                "end": "Jul 29 2022, 14:59",
                "extraPriority": 100,
				"markers": [
				{
					title: "Challenge Stage",
					time: "Jul 24 2022, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "Jul 26 2022, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"Ranked Mirrors",
            "ミラーズランキング"
        ],
        "image": [
            "mirroran"
        ],
        "column": 0,
        "priority": 4,
        "timers": [
			{
				name: "Main Event",
				start: "Jul 11 2022, 17:00",
				end: "Jul 17 2022, 20:59",
				extraPriority: 100
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"Cinderella Mirrors Tournament",
            "ミラーズシンデレラトーナメント"
        ],
        "image": [
            "imgs/1509/tourny1.png",
			"imgs/1509/tourny2.png",
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "Registration Period",
				start: "Sep 15 2022, 18:00",
				end: "Oct 2 2022, 23:59",
				extraPriority: 50
			},
			{
				name: "Check-in Time",
				start: "Oct 15 2022, 12:00",
				end: "Oct 15 2022, 13:00",
				extraPriority: 50,
				keepAfterFinished: "3 hours"
			}
			
        ]
    },
		{
        "type": "Event",
        "title": [
			"5th Anniversary Program Magia Day 2022",
            "5周年記念番組「Magia Day 2022」"
        ],
        "image": [
            "imgs/magiaday2022.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Call for Questions and Concerns",
				start: "Jul 22 2022, 18:00",
				end: "Jul 31 2022, 23:59",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Sep 17 2022, 20:00",
				end: "Sep 17 2022, 22:30",
				extraPriority: 1000
			},
			{
				name: "Archive",
				start: "Sep 17 2022, 22:30",
				end: "Sep 30 2022, 23:59"
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
			/*{
				name: "Monthly Magia Stones Shops - July",
				start: "July 1 2021, 00:00",
				end: "July 31 2021, 23:59"
			},*/
			{
				name: "Adjuster Coin Shop: Pink - Limited 4★ Magical Girl Selection Gacha",
				start: "Sep 5 2022, 16:00",
				end: "Sep 27 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Orange - Limited 4★ Memoria Selection Gacha",
				start: "Sep 5 2022, 16:00",
				end: "Sep 27 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Sena Mikoto Gacha",
				start: "Sep 20 2022, 16:00",
				end: "Oct 10 2022, 14:59"
			},
			{
				name: "Sayonara · Storage - Event Shop & Missions",
				start: "Sep 20 2022, 16:00",
				end: "Oct 10 2022, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"5th Anniversary Magia Stones Special Bundles",
		"期間限定 お得なマギアストーン販売"
		],
		image: [
            "imgs/anniv/banner_0129_m.png"
        ],
		column: 2,
		priority: 20,
		timers: [ 
		{
			name: "Sales period",
			start: "Aug 22 2022, 16:00",
			end: "Sep 5 2022, 14:59",
			extraPriority: 1000
		}
		]
	},
		{
		type: "Other",
		title: [
		"Daily Magia Stones Bundle with Bonus",
		"1日1回限定 お得なマギアストーン販売"
		],
		image: [
            "imgs/anniv/banner_0514_m.png"
        ],
		column: 2,
		priority: 18,
		timers: [ 
		{
			name: "Sales period",
			start: "Aug 23 2022, 0:00",
			end: "Sep 5 2022, 23:59",
			extraPriority: 1000
		}
		]
	},
		{
		type: "Other",
		title: [
		"Last Battle Support Bags",
		"ラストバトル応援パック"
		],
		image: [
            "imgs/1509/banner_0621_m.png"
        ],
		column: 2,
		priority: 10,
		timers: [ 
		{
			name: "Sales period",
			start: "Sep 16 2022, 17:00",
			end: "Sep 26 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance & App Version 2.5.8",
			"维护 & アプリバージョン2.5.8"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "Sep 20 2022, 15:00",
                end: "Sep 20 2022, 16:00",
				extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Sena Mikoto Pickup Gacha & Step-up Gacha",
            "期間限定 瀬奈みこと ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/1509/gachabanner_1115_m.png",
			"imgs/1509/gachabanner_1116_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Sep 20 2022, 16:00",
				end: "Oct 3 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Infinite Iroha Pickup Gacha & Step-up Gacha",
            "期間限定 ∞いろは ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1079_m.png",
			"imgs/anniv/gachabanner_1080_m.png"
        ],
        "column": 1,
        "priority": 20,
        "timers": [
            {
                name: "Duration",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 14:59",
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
			"Limited-time Past Anniversary Gachas Rerun",
            "期間限定 周年ピックアップガチャ復刻"
        ],
        "image": [
            "imgs/anniv/gachabanner_1086_m.png",
			"imgs/anniv/gachabanner_1087_m.png",
			"imgs/anniv/gachabanner_1088_m.png",
			"imgs/anniv/gachabanner_1089_m.png",
			

        ],
        "column": 1,
        "priority": 17,
        "timers": [
            {
                name: "Duration",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time paid Step-UP Gacha: Anniversary Edition",
            "有償限定 ステップアップガチャアニバーサリー編"
        ],
        "image": [
            "imgs/anniv/gachabanner_1090_m.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "Duration",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 14:59",
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
