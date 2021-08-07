var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "July 23 2021, 18:00";
var nextAnniversary = "August 22 2021, 0:00";
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
        "type": "Event",
        "title": [
			"【Event】",
            "The Legendary Story of the Paper Mulberry Leaf",
			"～These Shaking Feelings are Once Again Fascinating～"
        ],
        "image": [
            "imgs/banner_0495_m.png"
        ],
        "column": 0,
        "priority": 34,
        "timers": [
			{
				name: "Maintenance",
				start: "June 28 2021, 15:00",
				end: "June 28 2021, 15:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "June 28 2021, 16:00",
                "end": "July 12 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Story quests 11-20 & 100Evil I-III",
					time: "July 5 2021, 17:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Night Fairytale ～You Were At the Water's Edge～ "
        ],
        "image": [
            "imgs/banner_0501_m.png"
        ],
        "column": 0,
        "priority": 33,
        "timers": [
			{
				name: "Maintenance",
				start: "July 30 2021, 15:00",
				end: "July 30 2021, 18:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "July 30 2021, 19:00",
                "end": "August 10 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Story Quests 11~20 & 100Evil",
					time: "August 4 2021, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Please Yuna-san ～Leave your worries to your eldest daughter～"
        ],
        "image": [
            "imgs/banner_0499_m.png"
        ],
        "column": 0,
        "priority": 30,
        "timers": [
			{
				name: "Maintenance",
				start: "August 10 2021, 15:00",
				end: "August 10 2021, 16:00",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "August 10 2021, 16:00",
                "end": "August 21 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Story Quests 11~20 & 100Evil",
					time: "August 16 2021, 17:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
		type: "Event",
		title: [
			"【Campaign】",
			"New Chapter Release & Campaign"
		],
		"image": [
			"imgs/banner_1030700_m.png",
			"imgs/banner_0359_m.png"
		],
		column: 0,
		priority: 29,
		timers: [
		{
			name: "Campaign Period",
			start: "August 10 2021, 16:00",
			end: "August 21 2021, 23:59",
			extraPriority: 10
		}
		]
	},
	{
        "type": "Event",
        "title": [
			"【Campaign】",
            "Summer Missions"
        ],
        "image": [
            "imgs/banner_0492_m.png"
        ],
        "column": 0,
        "priority": 31,
        "timers": [
            {
                "name": "Duration",
                "start": "June 28 2021, 16:00",
                "end": "August 6 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Missions 1-5",
					time: "June 28 2021, 16:00",
					type: "battle"
				},
				{
					title: "Missions 6-10",
					time: "July 5 2021, 17:00",
					type: "battle"
				},
				{
					title: "Missions 11-15",
					time: "July 12 2021, 16:00",
					type: "battle"
				},
				{
					title: "Missions 15-20",
					time: "July 19 2021, 17:00",
					type: "battle"
				},
				{
					title: "Missions 21-26",
					time: "July 26 2021, 16:00",
					type: "battle"
				}
				]
            },
			{
				"name": "Guaranteed 4★ Ticket Exchange",
                "start": "July 26 2021, 16:00",
                "end": "August 13 2021, 14:59"
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Campaign】",
            "Saturday and Sunday Awakening-Strengthening Quests",
			"Limited-time Missions"
        ],
        "image": [
            "imgs/banner_0498_m.png"
        ],
        "column": 0,
        "priority": 25,
        "timers": [
            {
                "name": "Weekend 1 - Iroha",
                "start": "July 31 2021, 00:00",
                "end": "August 1 2021, 23:59",
                "extraPriority": 10
            },
			{
                "name": "Weekend 2 - Yachiyo",
                "start": "August 7 2021, 00:00",
                "end": "August 8 2021, 23:59",
                "extraPriority": 10
            },
			{
                "name": "Weekend 3 - Defeat 30 Enemies",
                "start": "August 14 2021, 00:00",
                "end": "August 15 2021, 23:59",
                "extraPriority": 10
            }/*,
			{
                "name": "Weekend 4 - Tsuruno",
                "start": "August 21 2021, 00:00",
                "end": "August 22 2021, 23:59",
                "extraPriority": 10
            },
			{
                "name": "Weekend 5 - Defeat 30 Enemies",
                "start": "August 28 2021, 00:00",
                "end": "August 29 2021, 23:59",
                "extraPriority": 10
            },
			{
                "name": "Weekend 6 - Felicia",
                "start": "September 4 2021, 00:00",
                "end": "September 5 2021, 23:59",
                "extraPriority": 10
            },
			{
                "name": "Weekend 7 - Sana",
                "start": "September 11 2021, 00:00",
                "end": "September 12 2021, 23:59",
                "extraPriority": 10
            },
			{
                "name": "Weekend 8 - Defeat 30 Enemies",
                "start": "September 18 2021, 00:00",
                "end": "September 19 2021, 23:59",
                "extraPriority": 10
            }*/
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Extermination Battle: Witches' Paradox",
			"Main Story Arc 2 Chapter 6 Release"
        ],
        "image": [
            "imgs/banner_0487_m.png",
			"imgs/banner_1030600_m.png"
        ],
        "column": 0,
        "priority": 35,
        "timers": [
			{
				name: "Maintenance",
				start: "June 21 2021, 15:00",
				end: "June 21 2021, 16:59",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "June 21 2021, 17:00",
                "end": "June 28 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Challenge Stage",
					time: "June 23 2021, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "June 25 2021, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Mirrors Ranking】",
            "11th Session"
        ],
        "image": [
            "mirroran"
        ],
        "column": 0,
        "priority": 33, /*7/5 17:00～7/11 20:59 JST*/
        "timers": [
			{
				name: "Maintenance",
				start: "July 19 2021, 15:00",
				end: "July 19 2021, 16:59",
				extraPriority: 20
			},
			{
				name: "Main Event",
				start: "July 19 2021, 17:00",
				end: "July 25 2021, 20:59",
				extraPriority: 20
			}
        ]
    },
	{
        "type": "Shop",
        "title": [
            "【Shops and Limited-time Missions】"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 10,
        "timers": [
			/*{
				name: "Monthly Magia Stones Shops - July",
				start: "July 1 2021, 00:00",
				end: "July 31 2021, 23:59"
			},*/
			{
				"name": "Swimsuit Costume Tickets - Exchange Shop",
				"start": "June 28 2021, 16:00",
				"end": "August 13 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The Call of the Open Sea - Event Shop and Missions",
				"start": "July 12 2021, 16:00",
				"end": "August 2 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster's Coins Shop: Black - Summer Limited-time Gachas",
				"start": "July 12 2021, 16:00",
				"end": "August 2 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				name: "A. C. Shop: Yellow-Green - Choose your 4★ Memoria Selection Gacha",
				start: "July 19 2021, 17:00",
				end: "August 2 2021, 14:59"
			},
			{
				name: "Adjuster Coins Shop: Green - TV Anime 2nd Season Celebration", /*2021 9/26 14:59*/
				start: "July 3 2021, 00:00",
				end: "September 26 2021, 14:59"
			},
			{
				name: "Mirrors Ranking - Limited-time Shop and Missions",
				start: "July 19 2021, 17:00",
				end: "August 2 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Water - 2019 Swimsuit Banners",
				start: "July 26 2021, 16:00",
				end: "August 17 2021, 14:59"
			},
			{
				name: "Limited-time Daily Missions",
				start: "July 26 2021, 00:00",
				end: "September 19 2021, 23:59"
			},
			{
				name: "Adjuster Coin Shop: Blue - Miki Sayaka (Surfing ver.) Pickup Gacha",
				start: "July 30 2021, 19:00",
				end: "August 17 2021, 14:59"
			},
			{
				name: "Night Fairytale: Limited-time Shop and Missions",
				start: "July 30 2021, 19:00",
				end: "August 17 2021, 14:59"
			},
			{
				name: "Please Yuna-san: Limited-time Shop and Missions",
				start: "August 10 2021, 16:00",
				end: "August 28 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Red - Kureha Yuna Pickup Gacha",
				start: "August 10 2021, 16:00",
				end: "August 28 2021, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"【Paid Shop】",
		"Mirrors Selection Pack & Mirrors Beginner Pack"
		],
		image: [
            "imgs/banner_0436_m.png"
        ],
		column: 2,
		priority: 8,
		timers: [ /*7/5 17:00～7/12 14:59*/
		{
			name: "Sales period",
			start: "July 5 2021, 17:00",
			end: "July 26 2021, 14:59",
			keepAfterFinished: "9 hours"
		},
		{
			name: "Ticket Exchange",
			start: "July 5 2021, 17:00",
			end: "August 2 2021, 14:59",
			keepAfterFinished: "9 hours"
		}
		]
	},
	/*{
        type: "Maintenance",
        title: [
            "Maintenance"
        ],
		"image": "maintenance",
        column: 0,
        priority: 39,
        timers: [
            {
                name: "Scheduled Time",
                start: "May 24 2021, 15:00",
                end: "May 24 2021, 16:00",
                keepAfterFinished: "60 minutes",
				extraPriority: 10
            }
        ]
    },*/
	{
        "type": "Gacha",
        "title": [
			"【Gacha】",
            "Choose Your 4* Memoria Selection Gacha"
        ],
        "image": [
            "imgs/gachabanner_0705_m.png"
        ],
        "column": 1,
        "priority": 60,
        "timers": [
            {
                "name": "Duration",
                "start": "July 19 2021, 17:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours",
				markers: [
				{
					title: "2nd Pool",
					time: "July 23 2021, 15:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "Night Fairytale - Miki Sayaka (Surfing ver.) Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0731_m.png"
        ],
        "column": 1,
        "priority": 72,
        "timers": [
            {
                "name": "Duration",
                "start": "July 30 2021, 19:00",
                "end": "August 10 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha Rerun】",
            "The Crescent Moon Manor's Summer Vacation Pickup Gacha",
			"The Ribbon at the Beach Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0714_m.png",
			"imgs/gachabanner_0713_m.png"
        ],
        "column": 1,
        "priority": 71,
        "timers": [
            {
                "name": "Duration",
                "start": "July 12 2021, 16:00",
                "end": "July 26 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha Rerun】",
            "The Ephemeral Summer Night Pickup Gacha",
			"SamaTore! Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0724_m.png",
			"imgs/gachabanner_0725_m.png"
        ],
        "column": 1,
        "priority": 70,
        "timers": [
            {
                "name": "Duration",
                "start": "July 26 2021, 16:00",
                "end": "August 10 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Paid Gacha】",
            "Promised Blood 4★ Magical Girl Guaranteed Gacha"
        ],
        "image": [
            "imgs/gachabanner_0740_m.png"
        ],
        "column": 1,
        "priority": 69,
        "timers": [
            {
                "name": "Duration",
                "start": "August 10 2021, 16:00",
                "end": "August 21 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Paid Gacha】",
            "2019 4★ Swimsuit Magical Girl Guaranteed Gacha"
        ],
        "image": [
            "imgs/gachabanner_0726_m.png"
        ],
        "column": 1,
        "priority": 70,
        "timers": [
            {
                "name": "Duration",
                "start": "July 26 2021, 16:00",
                "end": "August 10 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Pickup Gacha】",
            "Kureha Yuna Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0739_m.png"
        ],
        "column": 1,
        "priority": 70,
        "timers": [
            {
                "name": "Duration",
                "start": "August 10 2021, 16:00",
                "end": "August 21 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours"
            }
        ]
    },
    {
        type: "Event",
        title: [
			"【Campaign】",
            "1400 Days Since Release"
        ],
        image: [
			"imgs/banner_0488_m.png",
			"imgs/banner_0490_m.png"
		],
        column: 0,
		priority: 35,
        timers: [
            {
                name: "Login Bonus",
                start: "June 11 2021, 16:00",
                end: "June 28 2021, 23:59",
				extraPriority: 10
            },
			{
				name: "1/2 AP, x2 Player EXP, 2x Support Points, 2x Great Success & Super Success",
				start: "June 11 2021, 16:00",
                end: "June 28 2021, 14:59"
			},
			{
				name: "Guaranteed 4★ Magical Girl Ticket Exchange",
				start: "June 17 2021, 00:00",
				end: "July 5 2021, 23:59"
			}
        ]
    },
	{
		type: "LoginDays",
		title: [
			"【Campaign】",
            "Free Rolls in occasion of the 2nd SEASON of the TV Anime"
		],
		image: [
			"imgs/banner_0496_m.png"
		],
		column: 1,
		priority: 75,
		timers: [
			{
				name: "Free roll 1",
				date: "July 3 2021",
				days: "1"
			},
			{
				name: "Free roll 2",
				date: "July 4 2021",
				days: "1"
			},
			{
				name: "Free roll 3",
				date: "July 10 2021",
				days: "1"
			},
			{
				name: "Free roll 4",
				date: "July 11 2021",
				days: "1"
			},
			{
				name: "Free roll 5",
				date: "July 17 2021",
				days: "1"
			},
			{
				name: "Free roll 6",
				date: "July 18 2021",
				days: "1"
			}
			,
			{
				name: "Free roll 7",
				date: "July 24 2021",
				days: "1"
			},
			{
				name: "Free roll 8",
				date: "July 25 2021",
				days: "1"
			},
			{
				name: "Free roll 9",
				date: "July 31 2021",
				days: "1"
			},
			{
				name: "Free roll 10",
				date: "August 1 2021",
				days: "1"
			},
			{
				name: "Free roll 11",
				date: "August 7 2021",
				days: "1"
			},
			{
				name: "Free roll 12",
				date: "August 8 2021",
				days: "1"
			},
			{
				name: "Free roll 13",
				date: "August 14 2021",
				days: "1"
			},
			{
				name: "Free roll 14",
				date: "August 15 2021",
				days: "1"
			},
			{
				name: "Free roll 15",
				date: "August 21 2021",
				days: "1"
			},
			{
				name: "Free roll 16",
				date: "August 22 2021",
				days: "1"
			},
			{
				name: "Free roll 17",
				date: "August 28 2021",
				days: "1"
			},
			{
				name: "Free roll 18",
				date: "August 29 2021",
				days: "1"
			},
			{
				name: "Free roll 19",
				date: "September 4 2021",
				days: "1"
			},
			{
				name: "Free roll 20",
				date: "September 5 2021",
				days: "1"
			},
			{
				name: "Free roll 21",
				date: "September 11 2021",
				days: "1"
			},
			{
				name: "Free roll 22",
				date: "September 12 2021",
				days: "1"
			},
			{
				name: "Free roll 23",
				date: "September 18 2021",
				days: "1"
			},
			{
				name: "Free roll 24",
				date: "September 19 2021",
				days: "1"
			}
		]
	}
];
