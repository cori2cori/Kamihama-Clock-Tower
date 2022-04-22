var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "April 26 2022, 18:00";
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
			"Moving Aquamarine Heels Kimochi Battle",
            "キモチ戦振動するアクアマリンの踵"
        ],
        "image": [
            "imgs/aquamarine.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Feb 21 2022, 17:00",
				end: "Feb 22 2022, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Feb 22 2022, 16:00",
				end: "Feb 23 2022, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Feb 23 2022, 17:00",
				end: "Feb 24 2022, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Feb 24 2022, 16:00",
				end: "Feb 25 2022, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Feb 25 2022, 16:00",
				end: "Feb 26 2022, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Feb 21 2022, 17:00",
                "end": "Feb 26 2022, 15:59",
                "extraPriority": 100,
				"type": "normal",
				markers: [
					{
						title: "Part 2 - Groups",
						time: "Feb 23 2022, 17:00",
						type: "battle"
					}
				]
			}
				]
    },
	{
        "type": "Event",
        "title": [
			"Kamihama Beach Spa Adventure: The Demon's Grudge Whirlpooling at the Beach",
			"神浜スパアドベンチャービーチに渦巻く悪魔の怨嗟"
        ],
        "image": [
            "imgs/0704/banner_0576_m.png"
        ],
        "column": 0,
        "priority": 14,
        "timers": [
			{
				name: "Maintenance",
				start: "Apr 8 2022, 15:00",
				end: "Apr 8 2022, 16:00",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Apr 8 2022, 16:00",
				end: "Apr 18 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 5-6",
					time: "Apr 9 2022, 16:00",
					type: "story"
				},
				{
					title: "Story Quests 7-8",
					time: "Apr 10 2022, 16:00",
					type: "story"
				},
				{
					title: "Story Quests 9-10",
					time: "Apr 11 2022, 16:00",
					type: "story"
				},
				{
					title: "Story Quests 11-12",
					time: "Apr 12 2022, 16:00",
					type: "story"
				},
				{
					title: "Story Quests 13-14 & Evil100 Challenges I~III",
					time: "Apr 13 2022, 16:00",
					type: "battle"
				},
				{
					title: "Story Quests 15-17",
					time: "Apr 14 2022, 16:00",
					type: "story"
				},
				{
					title: "Story Quests 18-20",
					time: "Apr 15 2022, 16:00",
					type: "story"
				}
				]
			}
        ]
    },
	{
        "type": "LoginDays",
        "title": [
			"TV Anime FINAL SEASON Countdown Login Bonus",
			"TVアニメFinal SEASON放送カウントダウンログインボーナス"
        ],
        "image": [
            "imgs/2503/banner_0572_m.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "10 Magia Stones",
				date: "Mar 29 2022",
				extraPriority: 100
			},
			{
				name: "10 Magia Stones",
				date: "Mar 30 2022",
				extraPriority: 100
			},
			{
				name: "10 Magia Stones",
				date: "Mar 31 2022",
				extraPriority: 100
			},
			{
				name: "10 Magia Stones",
				date: "Apr 1 2022",
				extraPriority: 100
			},
			{
				name: "10 Magia Stones",
				date: "Apr 2 2022",
				extraPriority: 100
			},
			{
				name: "Special 4✷ Memoria",
				date: "Apr 3 2022",
				extraPriority: 100
			},
			{
				name: "Extra",
				date: "Apr 4 2022",
				extraPriority: 100
			}
        ]
    },
{
        "type": "Event",
        "title": [
			"1700 Days Since Release Campaign",
			"リリース1700日記念キャンペーン"
        ],
        "image": [
            "imgs/1604/banner_0584_m.png"
        ],
        "column": 0,
        "priority": 15,
        "timers": [
			{
				name: "1/2 AP, x2 Player EXP, x2 SP & x2 Magical Girl Enhancement Great and Super Success Rate",
				start: "Apr 18 2022, 17:00",
				end: "Apr 28 2022, 14:59",
				extraPriority: 0
			},
			{
				name: "Login Bonus",
				start: "Apr 18 2022, 17:00",
				end: "Apr 28 2022, 23:59",
				extraPriority: 0
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"Mitama's Special Training",
			"みたまの特訓"
        ],
        "image": [
            "imgs/1604/banner_0577_m.png"
        ],
        "column": 0,
        "priority": 16,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 18 2022, 17:00",
				end: "Apr 28 2022, 14:59",
				extraPriority: 0
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
        "priority": 17,
        "timers": [
			{
				name: "Maintenance",
				start: "Apr 18 2022, 15:00",
				end: "Apr 18 2022, 16:59",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Apr 18 2022, 17:00",
				end: "Apr 24 2022, 20:59",
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
        "priority": 1000,
        "timers": [
			/*{
				name: "Monthly Magia Stones Shops - July",
				start: "July 1 2021, 00:00",
				end: "July 31 2021, 23:59"
			},*/
			{
				name: "Adjuster Coin Shop: Water - Premium Gacha",
				start: "Mar 29 2022, 0:00",
				end: "Apr 15 2022, 23:59"
			},
			{
				name: "Adjuster Coin Shop: Navy Blue - Akuma Homura-chan Gacha",
				start: "Apr 8 2022, 16:00",
				end: "Apr 25 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Orange - Magia☆Report Gachas Rerun & Step-up Gacha",
				start: "Apr 8 2022, 16:00",
				end: "Apr 25 2022, 14:59"
			},
			{
				name: "Kamihama Beach Spa Adventure - Event Shops & Missions",
				start: "Apr 8 2022, 16:00",
				end: "Apr 25 2022, 14:59"
			},
			{
				name: "Magia☆Report ★4 Magical Girl Exchange Ticket Shop",
				start: "Apr 8 2022, 16:00",
				end: "Apr 25 2022, 14:59"
			},
			{
				name: "Ranked Medals Shop",
				start: "Apr 18 2022, 17:00",
				end: "May 2 2022, 14:59"
			},
			{
				name: "Mitama's Special Training - Event Shop",
				start: "Apr 18 2022, 17:00",
				end: "May 5 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Yellow - Tamaki Iroha (Anime ver.) Gacha",
				start: "Apr 18 2022, 17:00",
				end: "May 5 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Brown - Memoria Selection Gacha",
				start: "Apr 18 2022, 17:00",
				end: "May 2 2022, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"1700 Days Anniversary Packs",
		"1700日記念パック"
		],
		image: [
            "imgs/1604/banner_0583_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "Apr 18 2022, 17:00",
			end: "Apr 28 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"Mirrors Selection Pack & Mirrors Beginner Pack",
		"「ミラーズセレクションパック」と「ミラーズビギナーズパック」の販売"
		],
		image: [
            "imgs/1604/banner_0580_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "Sales period",
			start: "Apr 18 2022, 17:00",
			end: "Apr 25 2022, 14:59",
			extraPriority: 100
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
            "imgs/banner_0514_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "Sales Period",
			start: "January 11 2022, 16:00",
			end: "January 21 2022, 23:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"Mitama's Extermination Battle Special Deal",
		"殲滅戦開催記念!!みたまのスペシャルオファー "
		],
		image: [
            "imgs/banner_0567_m.png"
        ],
		column: 2,
		priority: 6,
		timers: [ 
		{
			name: "Sales Period",
			start: "Feb 28 2022, 17:00",
			end: "Mar 7 2022, 14:59",
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
        priority: 8,
        timers: [
            {
                name: "Scheduled Time",
                start: "Feb 21 2022, 15:00",
                end: "Feb 21 2022, 17:00",
				extraPriority: 100
            }
        ]
    },
{
        "type": "Gacha",
        "title": [
			"Tart☆Magica Limited-time Gachas Rerun",
            "限定魔法少女たると☆マギカガチャ復刻"
        ],
        "image": [
            "imgs/0503/gachabanner_0883_m.png",
			"imgs/0503/gachabanner_0885_m.png",
			"imgs/0503/gachabanner_0884_m.png",
			"imgs/0503/gachabanner_0886_m.png",
			"imgs/0503/gachabanner_0887_m.png",
			"imgs/0503/gachabanner_0888_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Mar 7 2022, 16:00",
				end: "Mar 28 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Akuma Homura-chan Limited-time Pickup Gacha & Step-up Gacha",
            "期間限定 悪魔ほむらちゃんピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/0704/gachabanner_0918_m.png",
			"imgs/0704/gachabanner_0919_m.png"
        ],
        "column": 1,
        "priority": 10,
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
			"Limited-time Paid Magia☆Report Step-up Gacha",
            "有償限定 ステップアップガチャマギア☆レポート編"
        ],
        "image": [
            "imgs/0704/gachabanner_0924_m.png"
        ],
        "column": 1,
        "priority": 9,
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
			"Tamaki Iroha (Anime ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 環いろは アニメver.ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/1604/gachabanner_0934_m.png",
			"imgs/1604/gachabanner_0935_m.png"
        ],
        "column": 1,
        "priority": 12,
        "timers": [
            {
                name: "Duration",
                start: "Apr 18 2022, 17:00",
				end: "Apr 28 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
			{
        "type": "Gacha",
        "title": [
			"Limited-time Choose Your 4★ Memoria Selection Gacha",
            "選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/1604/gachabanner_0940_m.png"
        ],
        "column": 1,
        "priority": 11,
        "timers": [
            {
                name: "Duration",
                start: "Apr 18 2022, 17:00",
				end: "Apr 25 2022, 14:59",
                extraPriority: 100,
				markers: [
				{
					time: "Apr 22 2022, 16:00",
					title: "Part 2",
					type: "star"
				}
				]
            }
        ]
    },
	{
		type: "Event",
		title: [
			"Maintenance",
            "メンテナンス"
		],
		image: [
			"imgs/maintenance.png"
		],
		column: 0,
		priority: 4,
		timers: [
			{
				name: "Maintenance",
				start: "Apr 1 2022, 15:00",
				end: "Apr 1 2022, 16:00",
				extraPriority: 200
			}
		]
	}
];
