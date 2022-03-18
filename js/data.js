var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "March 18 2022, 16:00";
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
    
    {
        "type": "Event",
        "title": [
            "No Laughing in the Maid Manor!",
            "メイド館では笑えない！",
            "Maid 2021 Event"
        ],
        "image": [
            "https://i.imgur.com/NjKzQaN.png",
            "https://i.imgur.com/5UpNoBs.png",
            "https://i.imgur.com/XVjhDho.png",
            "https://i.imgur.com/pLSTVc3.png",
            "https://i.imgur.com/g8JoM7F.png"
        ],
        "column": 0,
        "priority": 32,
        "timers": [
            {
                "name": "Main Event",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 15:59",
                "markers": [
                    {
                        "title": "Extra Chapter 1",
                        "time": "May 5 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 2",
                        "time": "May 6 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 3",
                        "time": "May 7 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Extra Chapter 4",
                        "time": "May 8 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Boss Quest",
                        "time": "April 29 2021, 17:00",
                        "type": "battle"
                    },
                    {
                        "title": "EX Quest",
                        "time": "May 1 2021, 17:00",
                        "type": "battle"
                    }
                ],
                "extraPriority": 4
            },
            {
                "name": "Missions",
                "start": "April 27 2021, 17:00",
                "end": "May 14 2021, 23:59"
            },
            {
                "name": "Event Shop",
                "start": "April 27 2021, 17:00",
                "end": "May 21 2021, 13:59"
            }
        ]
    },*/

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
			"End of a Legend ～The Limits of Light～",
			"伝説の終わり、光の果て"
        ],
        "image": [
            "imgs/0503/banner_0568_m.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Maintenance",
				start: "Mar 7 2022, 15:00",
				end: "Mar 7 2022, 16:00",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Mar 7 2022, 16:00",
				end: "Mar 18 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Part 2",
					time: "Mar 11 2022, 16:00",
					type: "story"
				}
				]
			}
        ]
    },
	{
		type: "Event",
		title: [
			"Arc 2 Chapter 9 Release & Campaign",
			"メインストーリー第2部9章配信と新章キャンペーン"
		],
		"image": [
			"imgs/0503/banner_1030900_m.png",
			"imgs/0503/banner_0359_m.png"
		],
		column: 0,
		priority: 7,
		timers: [
		{
				name: "Duration",
				start: "March 7 2022, 16:00",
				end: "March 18 2022, 23:59",
				extraPriority: 100
		}
		]
	},
		{
        "type": "Event",
        "title": [
			"The Inheritors of Our Souls ～Puella Magi Tart☆Magica～",
			"想いを継ぐものたち～魔法少女たると☆マギカ～ "
        ],
        "image": [
            "imgs/1703/banner_0569_m.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "Maintenance",
				start: "Mar 18 2022, 15:00",
				end: "Mar 18 2022, 16:00",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Mar 18 2022, 16:00",
				end: "Mar 28 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 10~20 & Evil100 Challenges I~III",
					time: "Mar 24 2022, 16:00",
					type: "battle"
				}
				]
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
        "priority": 1,
        "timers": [
			{
				name: "Maintenance",
				start: "December 13 2021, 15:00",
				end: "December 13 2021, 16:59",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "December 13 2021, 17:00",
				end: "December 19 2021, 20:59",
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
				name: "Moving Aquamarine Heels Kimochi Battle Shop",
				start: "Feb 21 2022, 17:00",
				end: "Mar 7 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Red - Flame Attribute Pickup Gacha",
				start: "Feb 21 2022, 17:00",
				end: "Mar 7 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Yellow-Green - Memoria Selection Gacha",
				start: "Feb 28 2022, 17:00",
				end: "Mar 14 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Blue - Tart☆Magica Gachas",
				start: "Mar 7 2022, 16:00",
				end: "Apr 4 2022, 14:59"
			},
			{
				name: "End of a Legend, The Limits of Light - Event Shop and Missions",
				start: "Mar 7 2022, 16:00",
				end: "Mar 25 2022, 14:59",
				markers:[
				{
					title: "Part 2",
					time: "Mar 11 2022, 16:00",
					type: "story"
				}
				]
			},
			{
				name: "New Chapter Release Missions",
				start: "Mar 7 2022, 16:00",
				end: "Mar 25 2022, 14:59"
			},
			{
				name: "The Inheritors of Our Souls - Event Shop & Missions",
				start: "Mar 18 2022, 16:00",
				end: "Apr 4 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Purple - Isabeau Pickup Gacha",
				start: "Mar 18 2022, 16:00",
				end: "Apr 8 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Peach - Isabeau Pickup Gacha",
				start: "Mar 24 2022, 16:00",
				end: "Apr 8 2022, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"Magia Stones Sales",
		"お得な期間限定マギアストーン"
		],
		image: [
            "imgs/banner_0129_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "December 28 2021, 16:00",
			end: "January 11 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"Tart☆Magica Collaboration Support Pack",
		"魔法少女たると☆マギカコラボ記念育成応援パックの販売"
		],
		image: [
            "imgs/1703/banner_0570_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "Sales period",
			start: "Mar 18 2022, 16:00",
			end: "Apr 1 2022, 14:59",
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
			"Paid 4★ Tart☆Magica Magical Girl Guaranteed Gacha",
            "有償限定 魔法少女たると☆マギカ★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/0503/gachabanner_0889_m.png"
        ],
        "column": 1,
        "priority": 2,
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
			"Isabeau Limited-time Pickup Gacha & Step-up Gacha",
            "期間限定 イザボーピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/1703/gachabanner_0892_m.png",
			"imgs/1703/gachabanner_0899_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Duration",
                start: "Mar 18 2022, 16:00",
				end: "Apr 1 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Pernelle Limited-time Pickup Gacha & Step-up Gacha",
            "期間限定 ペレネルピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/1703/gachabanner_0896_m.png",
			"imgs/1703/gachabanner_0904_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Duration",
                start: "Mar 24 2022, 16:00",
				end: "Apr 1 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
		type: "Gacha",
		title: [
			"New Year Campaign Vol. 1: Free x10 rolls in Premium Gacha",
            "10連レアガチャ毎日1回無料"
		],
		image: [
			"imgs/banner_0547_m.png"
		],
		column: 1,
		priority: 1,
		timers: [
			{
                "name": "Duration",
                "start": "December 28 2021, 16:00",
                "end": "January 10 2022, 23:59",
                "extraPriority": 100,
				markers: [
				{
					title: "Free Pull 2",
					time: "December 29 2021, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 3",
					time: "December 30 2021, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 4",
					time: "December 31 2021, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 5",
					time: "January 1 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 6",
					time: "January 2 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 7",
					time: "January 3 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 8",
					time: "January 4 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 9",
					time: "January 5 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 10",
					time: "January 6 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 11",
					time: "January 7 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 12",
					time: "January 8 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 13",
					time: "January 9 2022, 00:00",
					type: "star"
				},
				{
					title: "Free Pull 14",
					time: "January 10 2022, 00:00",
					type: "star"
				},
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
				start: "December 28 2021, 15:00",
				end: "December 28 2021, 16:00",
				extraPriority: 100,
				type: "normal"
			}
		]
	}
];
