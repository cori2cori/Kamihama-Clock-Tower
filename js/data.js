var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Nov 4 2022, 18:00";
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
			"Vigorous Opal Neck Kimochi Battle",
            "キモチ戦 健やかなるオパールの首"
        ],
        "image": [
            "imgs/2409/banner_0430_m.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Oct 3 2022, 17:00",
				end: "Oct 4 2022, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Oct 4 2022, 16:00",
				end: "Oct 5 2022, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Oct 5 2022, 17:00",
				end: "Oct 6 2022, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Oct 6 2022, 16:00",
				end: "Oct 7 2022, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Oct 7 2022, 16:00",
				end: "Oct 8 2022, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Oct 3 2022, 17:00",
                "end": "Oct 8 2022, 15:59",
                "extraPriority": 1000,
				"type": "normal",
				markers: 
				[{time: "Oct 5 2022, 17:00", title: "Part 2 - Groups", type: "battle"}]
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
        "priority": 7,
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
			"Dark Halloween is The Colour of Love!? ~ Connect ・The East-West Frontline of Love! ~",
			"闇色ハロウィンは恋の色!? ～繋げて・恋の東西最前線！～"
        ],
        "image": [
            "imgs/2310/banner_0626_m.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Main Event",
				start: "Oct 24 2022, 16:00",
				end: "Nov 7 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 11-20 & 100Evils Challenges I-III",
					type: "battle",
					time: "Oct 31 2022, 16:00"
				}
				]
			}
        ]
   },
					{
        "type": "Event",
        "title": [
			"Main Story Arc 2 Special Mission",
			"メインストーリー第2部特別ミッション"
        ],
        "image": [
            "imgs/2310/banner_0627_m.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "Complete Arc 2 Chapter 12 to get a x10 gacha ticket",
				start: "Oct 24 2022, 16:00",
				end: "Nov 7 2022, 14:59",
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
				name: "Dream Halloween Festa - Event Shop and Missions",
				start: "Oct 11 2022, 16:00",
				end: "Oct 31 2022, 14:59",
				markers:[{time: "Oct 17 2022, 16:00", title: "Shop Update", type: "star"}]
			},
			{
				name: "Halloween Tickets Shop",
				start: "Oct 11 2022, 16:00",
				end: "Oct 31 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Red - Halloween Magical Girl Rerun Gachas",
				start: "Oct 11 2022, 16:00",
				end: "Oct 31 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Navy Blue - Mitama (Eternal Darkness ver.) Gacha",
				start: "Oct 24 2022, 16:00",
				end: "Nov 14 2022, 14:59"
			},
			{
				name: "Dark Halloween is the Colour of Love!? - Event Shop and Missions",
				start: "Oct 24 2022, 16:00",
				end: "Nov 14 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Brown - ★4 Memoria Selection Gacha",
				start: "Nov 7 2022, 17:00",
				end: "Nov 21 2022, 14:59"
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
            "Maintenance",
			"维护"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "Nov 7 2022, 15:00",
                end: "Nov 7 2022, 17:00",
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
			"Limited-time Yakumo Mitama (Eternal Darkness ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 八雲みたま 常闇ver. ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2310/gachabanner_1148_m.png",
			"imgs/2310/gachabanner_1149_m.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Duration",
                start: "Oct 24 2022, 16:00",
				end: "Nov 7 2022, 14:59",
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
