var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "May 9 2022, 18:00";
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
				extraPriority: 100
			}
        ]
    },

		{
        "type": "Event",
        "title": [
			"Night Fairytale",
			"ナハトメルヒェン～水際に君がいた～"
        ],
        "image": [
            "imgs/2704/banner_0588_m.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Main Event",
				start: "Apr 28 2022, 16:00",
				end: "May 11 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 11-20 & 100Evil Challenges I-III",
					type: "battle",
					time: "May 2 2022, 16:00"
				}
				]
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"My Only Salvation ～Puella Magi Oriko☆Magica～",
			"My Only Salvation ～魔法少女おりこ☆マギカ～"
        ],
        "image": [
            "imgs/0905/banner_0586_m.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Main Event",
				start: "May 11 2022, 16:00",
				end: "May 23 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 15-30",
					type: "story",
					time: "May 17 2022, 16:00"
				}
				]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"Golden Week Campaign",
			"ゴールデンウィークキャンペーン"
        ],
        "image": [
            "imgs/2704/banner_0587_m.png"
        ],
        "column": 0,
        "priority": 17,
        "timers": [
			{
				name: "1/2 AP, x2 Player EXP, x2 SP & x2 Magical Girl Enhancement Great and Super Success Rate",
				start: "Apr 28 2022, 16:00",
				end: "May 8 2022, 23:59",
				extraPriority: 100
			},
			{
				name: "Limited-time Daily Missions",
				start: "Apr 29 2022, 00:00",
				end: "May 8 2022, 23:59",
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
				name: "Night Fairytale - Event Shop & Missions",
				start: "Apr 28 2022, 16:00",
				end: "May 18 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Blue - Swimsuit Magical Girl Gachas",
				start: "Apr 28 2022, 16:00",
				end: "May 18 2022, 14:59"
			},
			{
				name: "Swimsuit Magical Girl Tickets Exchange",
				start: "Apr 28 2022, 16:00",
				end: "May 18 2022, 14:59"
			},
			{
				name: "My Only Salvation - Event Shop & Missions",
				start: "May 11 2022, 16:00",
				end: "May 30 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Yellow-Green - Mikuni Oriko (Final ver.) Gacha",
				start: "May 11 2022, 16:00",
				end: "May 30 2022, 14:59"
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
		},
		{
			name: "Ticket Exchange",
			start: "Apr 18 2022, 17:00",
			end: "May 2 2022, 14:59",
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
			"Swimsuit Magical Girl 2020-2021 Limited-time Pickup Gacha & Step-up Gacha",
            "期間限定 水着魔法少女2020-2021ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2704/gachabanner_0944_m.png",
			"imgs/2704/gachabanner_0946_m.png"
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "Duration",
                start: "Apr 28 2022, 16:00",
				end: "May 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Swimsuit Magical Girl 2018-2019 Limited-time Pickup Gacha & Step-up Gacha",
            "期間限定 水着魔法少女2018-2019ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2704/gachabanner_0945_m.png",
			"imgs/2704/gachabanner_0951_m.png"
        ],
        "column": 1,
        "priority": 13,
        "timers": [
            {
                name: "Duration",
                start: "Apr 28 2022, 16:00",
				end: "May 11 2022, 14:59",
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
			"Limited-time Mikuni Oriko (Final ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 美国織莉子 ver.Finalピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/0905/gachabanner_0958_m.png",
			"imgs/0905/gachabanner_0959_m.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "Duration",
                start: "May 11 2022, 16:00",
				end: "May 23 2022, 14:59",
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
