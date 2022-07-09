var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Jul 20 2022, 18:00";
var nextAnniversary = "August 22 2022, 0:00";
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
        "priority": 10,
        "timers": [
			{
				name: "Maintenance 1 & App Version 2.5.3",
				start: "Jun 27 2022, 15:00",
				end: "Jun 27 2022, 16:00",
				extraPriority: 1000
			},
			{
				name: "Maintenance 2",
				start: "Jul 4 2022, 15:00",
				end: "Jul 4 2022, 17:00",
				extraPriority: 1000
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"Urara, a Secret, and a Farewell Party",
			"うららとナイショと送別会"
        ],
        "image": [
            "imgs/2506/banner_0563_m.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
			{
				name: "Main Event",
				start: "Jun 27 2022, 16:00",
				end: "Jul 11 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 11-20 & 100Evils I-III",
					type: "battle",
					time: "Jul 4 2022, 17:00"
				}
				]
			}
        ]
    },
			{
        "type": "Event",
        "title": [
			"Mysterious Announcement in Aniplex Youtube Channel",
			"https://www.youtube.com/watch?v=3gR73OGPvVU"
        ],
        "image": [
            "imgs/0107/MA.png"
        ],
        "column": 0,
        "priority": 104,
        "timers": [
			{
				name: "Main Event",
				start: "Jul 4 2022, 0:00",
				end: "Jul 4 2022, 1:00",
				extraPriority: 0
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"TV Anime Final Season BD&DVD Vol. 2 Release Campaign",
			"TVアニメFinal SEASON Blu-ray＆DVD 第2巻発売記念キャンペーン"
        ],
        "image": [
            "imgs/2506/banner_0596_m.png",
			"imgs/2506/banner_0598_m.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "Login Bonus",
				start: "Jun 29 2022, 00:00",
				end: "Jul 11 2022, 23:59",
				extraPriority: 50
			},
			{
				name: "1/2 AP, x2 Player EXP, x2 SP & x2 Magical Girl Enhancement Great and Super Success Rate",
				start: "Jun 27 2022, 16:00",
				end: "Jul 11 2022, 14:59",
				extraPriority: 50
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"Main Story Chapter 11 Release & New Chapter Campaign",
			"メインストーリー第2部11章&新章キャンペーン"
        ],
        "image": [
            "imgs/0807/banner_1031100_m.png",
			"imgs/0807/banner_0590_m.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "1/2 AP, x2 Player EXP, x2 SP & x2 Magical Girl Enhancement Great and Super Success Rate",
				start: "Jul 11 2022, 17:00",
				end: "Jul 22 2022, 23:59",
				extraPriority: 50
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
				name: "Maintenance",
				start: "Feb 28 2022, 15:00",
				end: "Feb 28 2022, 17:00",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "Feb 28 2022, 17:00",
                "end": "Mar 7 2022, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Challenge Stage",
					time: "Mar 2 2022, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "Mar 4 2022, 16:00",
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
			"Mitama Special Training",
            "みたまの特訓"
        ],
        "image": [
            "imgs/0807/banner_0577_m.png"
        ],
        "column": 0,
        "priority": 4,
        "timers": [
			{
				name: "Main Event",
				start: "Jul 11 2022, 17:00",
				end: "Jul 22 2022, 20:59",
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
			/*{
				name: "Monthly Magia Stones Shops - July",
				start: "July 1 2021, 00:00",
				end: "July 31 2021, 23:59"
			},*/
			{
				name: "Urara, a Secret, and a Farewell Party - Event Shop & Missions",
				start: "Jun 27 2022, 16:00",
				end: "Jul 18 2022, 14:59"
			},
			{
				name: "TV Anime Final Season BD2 Release Campaign - Limited time Missions",
				start: "Jun 27 2022, 16:00",
				end: "Jul 11 2022, 23:59"
			},
			{
				name: "Adjuster Coin Shop: Black - Kuroe & Anime Magical Girls Gachas",
				start: "Jun 27 2022, 16:00",
				end: "Jul 18 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Blue - Urara Gacha",
				start: "Jun 27 2022, 16:00",
				end: "Jul 18 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Green - Premium Gacha",
				start: "Jun 28 2022, 00:00",
				end: "Jul 11 2022, 23:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Yachiyo (Tanabata ver.) Gacha",
				start: "Jul 4 2022, 17:00",
				end: "Jul 18 2022, 14:59"
			},
			{
				name: "Alina Eve Kimochi Battle - Event Shop",
				start: "Jul 4 2022, 17:00",
				end: "Jul 18 2022, 14:59"
			},
			{
				name: "Ranked Mirrors Coins Exchange",
				start: "Jul 11 2022, 17:00",
				end: "Jul 24 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Chartreuse - Rabi Gacha",
				start: "Jul 11 2022, 17:00",
				end: "Jul 29 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Tea - Memoria Gacha",
				start: "Jul 11 2022, 17:00",
				end: "Jul 25 2022, 14:59"
			},
			{
				name: "Mitama Special Training - Event Shop and Missions",
				start: "Jul 11 2022, 17:00",
				end: "Jul 29 2022, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"TV Anime BD2 Release Campaign - Support Bag",
		"TVアニメFinal SEASON Blu-ray＆DVD第2巻発売記念 育成応援パック"
		],
		image: [
            "imgs/2506/banner_0602_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "Jun 27 2022, 16:00",
			end: "Jul 11 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"Mirrors Selection Pack & Mirrors Beginner Pack",
		"「ミラーズセレクションパック」&「ミラーズビギナーズパック」の販売"
		],
		image: [
            "imgs/0807/banner_0580_m.png"
        ],
		column: 2,
		priority: 2,
		timers: [ 
		{
			name: "Sales period",
			start: "Jul 11 2022, 17:00",
			end: "Jul 18 2022, 14:59"
		},
		{
			name: "Mirrors Selection 4★ Magical Girl Ticket Exchange",
			start: "Jul 11 2022, 17:00",
			end: "Jul 25 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance & App Version 2.5.4 Forced Update",
			"维护とバージョン2.5.4"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 10,
        timers: [
            {
                name: "Scheduled Time",
                start: "Jul 11 2022, 15:00",
                end: "Jul 11 2022, 17:00",
				extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Magia☆Report Gachas Rerun",
            "期間限定 マギア☆レポートピックアップガチャ復刻"
        ],
        "image": [
            "imgs/0704/gachabanner_0929_m.png",
			"imgs/0704/gachabanner_0930_m.png",
			"imgs/0704/gachabanner_0931_m.png"

        ],
        "column": 1,
        "priority": 8,
        "timers": [
            {
                name: "Duration",
                start: "Apr 8 2022, 16:00",
				end: "Apr 18 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Yachiyo·Mifuyu (Origin ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 やちよ・みふゆ 始まりver.ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/1806/gachabanner_1001_m.png",
			"imgs/1806/gachabanner_1002_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Jun 20 2022, 17:00",
				end: "Jun 27 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Kuroe Pickup Gacha & Step-up Gacha",
            "期間限定 黒江 ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2506/gachabanner_1009_m.png",
			"imgs/2506/gachabanner_1010_m.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Duration",
                start: "Jun 27 2022, 16:00",
				end: "Jul 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Magical Girl Anime ver. Pickup Gacha & Step-up Gacha",
            "期間限定 アニメver.魔法少女 ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2506/gachabanner_1015_m.png",
			"imgs/2506/gachabanner_1016_m.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Duration",
                start: "Jun 27 2022, 16:00",
				end: "Jul 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Yume Urara Pickup Gacha & Step-up Gacha",
            "有愛うらら ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2506/gachabanner_1023_m.png",
			"imgs/2506/gachabanner_1024_m.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Duration",
                start: "Jun 27 2022, 16:00",
				end: "Jul 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Yachiyo (Tanabata ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 七海やちよ 七夕ver. ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/0107/gachabanner_1033_m.png",
			"imgs/0107/gachabanner_1034_m.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Duration",
                start: "Jul 4 2022, 17:00",
				end: "Jul 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Free 10-Roll in Premium Once a Day",
            "毎日1回10連レアガチャ無料"
        ],
        "image": [
            "imgs/2506/banner_0574_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Jun 28 2022, 00:00",
				end: "Jul 4 2022, 23:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Himuro Rabi Pickup Gacha & Step-up Gacha",
            "氷室ラビ ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/0807/gachabanner_1043_m.png",
			"imgs/0807/gachabanner_1044_m.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Duration",
                start: "Jul 11 2022, 17:00",
				end: "Jul 22 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Choose Your 4★ Memoria Selection Gacha",
            "選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/0807/gachabanner_1041_m.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Duration",
                start: "Jul 11 2022, 17:00",
				end: "Jul 18 2022, 14:59",
                extraPriority: 100,
				markers:
				[
				{
					time: "Jul 15 2022, 15:00",
					type: "star",
					title: "Part 2"
				}
				]
            }
        ]
    }
];
