var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "September 1 2021, 18:00";
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
        "type": "Event",
        "title": [
			"【Broadcast Event】",
            "Magia Day 2021"
        ],
        "image": [
            "imgs/banner_0507_m.png"
        ],
        "column": 0,
        "priority": 20,
        "timers": [
            {
                "name": "Available Online:",
                "start": "September 12 2021, 17:00",
                "end": "September 19 2021, 23:59",
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "The Great Banquet that Transcends Time "
        ],
        "image": [
            "imgs/banner_0509_m.png"
        ],
        "column": 0,
        "priority": 200,
        "timers": [
            {
                "name": "Main Event",
                "start": "August 22 2021, 0:00",
                "end": "September 6 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Story Quests 11~20 & 100Evil",
					time: "August 30 2021, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Kimochi Battle】",
            "Depressed Turquoise Ears Kimochi Battle"
        ],
        "image": [
            "imgs/banner_0424_m.png"
        ],
        "column": 0,
        "priority": 29,
        "timers": [
			{
				name: "Maintenance",
				start: "August 16 2021, 15:00",
				end: "August 16 2021, 17:00",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "August 16 2021, 17:00",
                "end": "August 21 2021, 15:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Part 2 - Group Battles",
					time: "August 18 2021, 17:00",
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
		priority: 28,
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
		type: "Other",
		title: [
			"【Campaign】",
			"4th Anniversary Campaigns"
		],
		"image": [
			"imgs/banner_0503_m.png"
		],
		column: 2,
		priority: 4,
		timers: [
		{
			name: "Addition of Limited-time memoriae to the SP shop",
			start: "August 22 2021, 0:00",
			end: "September 30 2021, 23:59"
		}
		]
	},
	{
		type: "Event",
		title: [
			"【Campaign】",
			"Tamaki Iroha Birthday Celebration"
		],
		"image": [
			"imgs/banner_0504_m.png"
		],
		column: 0,
		priority: 25,
		timers: [
		{
			name: "Campaign Period & Unlimited 4★ Magical Girl Ticket Exchange",
			start: "August 22 2021, 0:00",
			end: "September 13 2021, 14:59",
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
			"【Server Maintenance】",
			"APK Update 2.4.1"
        ],
        "image": [
            "maintenance"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Duration",
				start: "August 20 2021, 16:00",
				end: "August 20 2021, 17:00",
				extraPriority: 100
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
        "priority": 28,
        "timers": [
			{
                "name": "Weekend 4 - Tsuruno",
                "start": "August 21 2021, 00:00",
                "end": "August 22 2021, 23:59"
            },
			{
                "name": "Weekend 5 - Defeat 30 Enemies",
                "start": "August 28 2021, 00:00",
                "end": "August 29 2021, 23:59"
            },
			{
                "name": "Weekend 6 - Felicia",
                "start": "September 4 2021, 00:00",
                "end": "September 5 2021, 23:59"
            },
			{
                "name": "Weekend 7 - Sana",
                "start": "September 11 2021, 00:00",
                "end": "September 12 2021, 23:59"
            }/*,
			{
                "name": "Weekend 8 - Defeat 30 Enemies",
                "start": "September 18 2021, 00:00",
                "end": "September 19 2021, 23:59"
            }*/
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Extermination Battle: Witches' Paradox",
			"Midori Ryou 5★ Uncap & Doppel Release",
			"Arc 2 Chapter 4 Voiced & Challenge Mode Release"
        ],
        "image": [
            "imgs/extermination.png"
        ],
        "column": 0,
        "priority": 40,
        "timers": [
			{
				name: "Maintenance",
				start: "September 6 2021, 15:00",
				end: "September 6 2021, 19:00",
				extraPriority: 10
			},
            {
                "name": "Main Event",
                "start": "September 6 2021, 19:00",
                "end": "September 13 2021, 14:59",
                "extraPriority": 10,
				"markers": [
				{
					title: "Ryou 5★ uncap & Doppel Release, Arc 2 Ch 4 Voices & Challenge Release",
					time: "September 6 2021, 19:00",
					type: "star"
				},
				{
					title: "Challenge Stage",
					time: "September 8 2021, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "September 10 2021, 16:00",
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
        "priority": 100,
        "timers": [
			/*{
				name: "Monthly Magia Stones Shops - July",
				start: "July 1 2021, 00:00",
				end: "July 31 2021, 23:59"
			},*/
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
			},
			{
				name: "Ad. Coin Shop: Purple - Little Kyubey & Iroha and Yachiyo Pickup Gachas",
				start: "August 16 2021, 17:00",
				end: "September 13 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Navy Blue - Choose your 4★ Memoria Selection Gacha",
				start: "August 22 2021, 0:00",
				end: "September 13 2021, 14:59"
			},
			{
				name: "Adj. Coin Shop: Brown - Choose your 4★ Magical Girl Pickup Gacha",
				start: "August 22 2021, 0:00",
				end: "September 13 2021, 14:59"
			},
			{
				name: "Adj. Coin Shop: Orange - Choose your 4★ Madoka☆Magica Magical Girl Pickup Gacha",
				start: "August 22 2021, 0:00",
				end: "September 13 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Peach - Madoka·Iroha Pickup Gacha",
				start: "August 22 2021, 0:00",
				end: "September 13 2021, 14:59"
			},
			{
				name: "4th Anniversary Medal Shop",
				start: "August 22 2021, 0:00",
				end: "September 13 2021, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"【Paid Shop】",
		"Mitama's special deal in occasion of the Extermination Battle"
		],
		image: [
            "imgs/banner_0491_m.png"
        ],
		column: 2,
		priority: 99,
		timers: [ 
		{
			name: "Sales period",
			start: "September 6 2021, 19:00",
			end: "September 13 2021, 14:59"
		}
		]
	},
	{
		type: "Other",
		title: [
		"【Paid Bundles】",
		"4th Anniversary Lucky Bags"
		],
		image: [
            "imgs/banner_0510_m.png",
			"imgs/banner_0511_m.png"
        ],
		column: 2,
		priority: 98,
		timers: [ 
		{
			name: "Sales period",
			start: "August 22 2021, 0:00",
			end: "September 6 2021, 14:59"
		},
		{
			name: "Tickets Exchange",
			start: "August 22 2021, 0:00",
			end: "September 13 2021, 14:59"
		}
		]
	},
	{
		type: "Other",
		title: [
		"【Sales】",
		"4th Anniversary Magia Stones Special Bundles",
		"Daily Magia Stones Bundle with Bonus"
		],
		image: [
            "imgs/banner_0129_m.png",
			"imgs/banner_0514_m.png"
        ],
		column: 2,
		priority: 6,
		timers: [ 
		{
			name: "Magia Stones Special Bundles Sales",
			start: "August 22 2021, 0:00",
			end: "August 31 2021, 23:59"
		},
		{
			name: "Daily Magia Stones Bundle with Bonus Sales",
			start: "September 1 2021, 0:00",
			end: "September 6 2021, 23:59"
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
			"【Memoria Gacha】",
            "Choose your 4★ Memoria Selection Gacha"
        ],
        "image": [
            "imgs/gachabanner_0769_m.png"
        ],
        "column": 1,
        "priority": 60,
        "timers": [
            {
                "name": "Duration",
                "start": "September 6 2021, 19:00",
                "end": "September 13 2021, 14:59",
                "extraPriority": 16
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Paid Gacha】",
            "Limited-time Paid 4★ Light Attribute Magical Girl Guaranteed Gacha"
        ],
        "image": [
            "imgs/gachabanner_0748_m.png"
        ],
        "column": 1,
        "priority": 66,
        "timers": [
            {
                "name": "Duration",
                "start": "August 16 2021, 17:00",
                "end": "August 21 2021, 14:59",
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha Rerun】",
            "Lets go to Zen Shin Sai! - Little Kyubey Pickup Gacha",
			"Iroha & Yachiyo (Final Battle ver.) Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0749_m.png",
			"imgs/gachabanner_0750_m.png"
        ],
        "column": 1,
        "priority": 68,
        "timers": [
            {
                "name": "Duration",
                "start": "August 16 2021, 17:00",
                "end": "September 6 2021, 14:59",
                "extraPriority": 10
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
                "extraPriority": 10
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
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "4th Anniversary Choose your 4★ Memoria Selection Gacha"
        ],
        "image": [
            "imgs/gachabanner_0757_m.png"
        ],
        "column": 1,
        "priority": 64,
        "timers": [
            {
                "name": "Duration",
                "start": "August 22 2021, 0:00",
                "end": "September 6 2021, 23:59",
                "extraPriority": 20
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "4th Anniversary Choose your 4★ Magical Girl Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0756_m.png"
        ],
        "column": 1,
        "priority": 63,
        "timers": [
            {
                "name": "Duration",
                "start": "August 22 2021, 0:00",
                "end": "September 6 2021, 23:59",
                "extraPriority": 20
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "Madoka·Iroha Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0753_m.png"
        ],
        "column": 1,
        "priority": 65,
        "timers": [
            {
                "name": "Duration",
                "start": "August 22 2021, 0:00",
                "end": "September 6 2021, 14:59",
                "extraPriority": 20
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "4th Anniversary Choose your 4★ Madoka☆Magica Magical Girl Pickup Gacha"
        ],
        "image": [
            "imgs/gachabanner_0755_m.png"
        ],
        "column": 1,
        "priority": 62,
        "timers": [
            {
                "name": "Duration",
                "start": "August 22 2021, 0:00",
                "end": "September 6 2021, 14:59",
                "extraPriority": 20
            }
        ]
    },
    {
        type: "Event",
        title: [
			"【Campaign】",
            "4th Anniversary pre-campaign: 4th Anniversary Countdown Login Story"
        ],
        image: [
			"imgs/banner_0505_m.png"
		],
        column: 0,
		priority: 28,
        timers: [
            {
                name: "Duration",
                start: "August 18 2021, 0:00",
                end: "September 6 2021, 23:59",
				extraPriority: 10,
				markers: [
				{
					title: "Episode 1",
					time: "August 18 2021, 0:00",
					type: "story"
				},
				{
					title: "Episode 2",
					time: "August 19 2021, 0:00",
					type: "story"
				},
				{
					title: "Episode 3",
					time: "August 20 2021, 0:00",
					type: "story"
				},
				{
					title: "Episode 4",
					time: "August 21 2021, 0:00",
					type: "story"
				},
				{
					title: "Episode 5",
					time: "August 22 2021, 0:00",
					type: "story"
				}
			]
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
			/*{
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
			},*/
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
