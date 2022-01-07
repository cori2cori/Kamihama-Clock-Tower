var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "December 29 2020, 18:00";
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
            "Mitama's Special Training",
			"みたまの特訓"
        ],
        "image": [
            "imgs/banner_0554_m.png"
        ],
        "column": 0,
        "priority": 7,
        "timers": [
			{
				name: "Maintenance",
				start: "January 11 2022, 15:00",
				end: "January 11 2022, 16:00",
				extraPriority: 100
			},
            {
                "name": "Main Event",
                "start": "January 11 2022, 16:00",
                "end": "January 21 2022, 14:59",
                "extraPriority": 100
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"Tokime Clan Monogatari ～Let's Go See the First Sunrise of the Year～",
			"時女拾遺物語～初日の出を呼びませう！～"
        ],
        "image": [
            "imgs/banner_0555_m.png"
        ],
        "column": 0,
        "priority": 4,
        "timers": [
			{
                name: "Duration",
                start: "January 1 2022, 00:00",
                end: "January 11 2022, 14:59",
                extraPriority: 100,
				markers: [
					{
						title: "Story Quests 11~20 & 100Evils I~III",
						time: "January 5 2022, 16:00",
						type: "battle"
					}
				]
            }
        ]
    },
	{
        "type": "WeekendBoss",
        "title": [
			"Vigorous Opal Neck Kimochi Battle",
            "キモチ戦健やかなるオパールの首"
        ],
        "image": [
            "imgs/banner_0430_m.png"
        ],
        "column": 0,
        "priority": 29,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "October 13 2021, 17:00",
				end: "October 14 2021, 16:00"
			},
			{
				name: "Part 1 - Day 2",
				start: "October 14 2021, 16:00",
				end: "October 15 2021, 16:00"
			},
			{
				name: "Part 2 - Day 1",
				start: "October 15 2021, 17:00",
				end: "October 16 2021, 16:00"
			},
			{
				name: "Part 2 - Day 2",
				start: "October 16 2021, 16:00",
				end: "October 17 2021, 16:00"
			},
			{
				name: "Part 2 - Day 3",
				start: "October 17 2021, 16:00",
				end: "October 18 2021, 15:59"
			},
            {
                "name": "Main Event",
                "start": "October 13 2021, 17:00",
                "end": "October 18 2021, 15:59",
                "extraPriority": 30,
				"type": "normal"
			}
				]
    },
	{
		type: "Event",
		title: [
			"Happy New Year Campaign",
			"謹賀新年お正月キャンペーン"
		],
		"image": [
			"imgs/banner_0551_m.png",
			"imgs/banner_0552_m.png"
		],
		column: 0,
		priority: 3,
		timers: [
		{
				name: "1/2 AP, x2 Player EXP, x2 SP and x2 Mirrors Coins Campaign",
				start: "December 28 2021, 16:00",
				end: "January 11 2022, 14:59"
		},
		{
				name: "Fortune Telling at Mizuna Shrine, New Year Login Bonus & New Year Limited Daily Missions",
				start: "January 1 2022, 0:00",
				end: "January 11 2022, 23:59",
				extraPriority: 100
		}
		]
	},
	{
		type: "Event",
		title: [
			"1600 Days Anniversary Campaign",
			"リリース1600日記念キャンペーン"
		],
		"image": [
			"imgs/banner_0549_m.png"
		],
		column: 0,
		priority: 6,
		timers: [
		{
			name: "1/2 AP, x2 Player EXP, x2 SP",
			start: "January 11 2022, 16:00",
			end: "January 21 2022, 14:59"
		},
		{
			name: "Login Bonus",
			start: "January 11 2022, 16:00",
			end: "January 21 2022, 23:59",
			extraPriority: 100
		},
		{
			name: "Limited-time Daily Missions",
			start: "January 12 2022, 00:00",
			end: "January 21 2022, 23:59"
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
			"Yukari Miyuri on practice!",
			"遊狩ミユリの現在修行中！"
        ],
        "image": [
            "imgs/banner_0534_m.png"
        ],
        "column": 0,
        "priority": 4,
        "timers": [
			{
				name: "Maintenance",
				start: "November 19 2021, 15:00",
				end: "November 19 2021, 16:00",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "November 19 2021, 16:00",
				end: "November 29 2021, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story quests 11-20 & 100Evils I-III",
					time: "November 24 2021, 16:00",
					type: "battle"
				}
				]
			}
        ]
    },
	{
		type: "Event",
		title: [
			"F4 Fan Festival -Part 3-",
			"f4ファンフェスティバル part3"
		],
		"image": [
			"imgs/f4fanfest.png"
		],
		column: 0,
		priority: 5,
		timers: [
		{
				name: "Live Event",
				start: "December 5 2021, 20:30",
				end: "December 5 2021, 22:00",
				extraPriority: 100
		}
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
				name: "Adjuster Coin Shop: Navy Blue - Snow Thawing Befana",
				start: "December 20 2021, 16:00",
				end: "January 7 2022, 14:59"
			},
			{
				name: "Snow Thawing Befana - Event Shop & Missions",
				start: "December 20 2021, 16:00",
				end: "January 7 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Yellow - Haregi Gachas",
				start: "December 28 2021, 16:00",
				end: "January 18 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Peach - Tokime Shizuka (First Sunrise of the Year ver.) Gacha",
				start: "January 1 2022, 0:00",
				end: "January 18 2022, 14:59"
			},
			{
				name: "Tokime Clan Monogatari - Event Missions & Omikuji Box",
				start: "January 1 2022, 0:00",
				end: "January 18 2022, 14:59"
			},
			{
				name: "New Year 2022 Ticket Exchange Shop",
				start: "January 1 2022, 0:00",
				end: "January 18 2022, 14:59"
			},
			{
				name: "Limited-time Memoria in the SP Shop",
				start: "January 1 2022, 0:00",
				end: "January 31 2022, 23:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Nanami Yachiyo (Anime ver.) Gacha",
				start: "January 11 2022, 16:00",
				end: "January 28 2022, 14:59"
			},
			{
				name: "Mitama's Special Training - Event Shop & Missions",
				start: "January 11 2022, 16:00",
				end: "January 28 2022, 14:59"
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
		"Mitama's New Year Lucky Bags",
		"みたまのお正月DX福袋"
		],
		image: [
            "imgs/banner_0544_m.png"
        ],
		column: 2,
		priority: 4,
		timers: [ 
		{
			name: "Sales period",
			start: "January 1 2022, 00:00",
			end: "January 11 2022, 14:59",
			extraPriority: 100
		},
		{
			name: "Tickets Exchange",
			start: "January 1 2022, 00:00",
			end: "January 18 2022, 14:59"
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
		"1600 Days Anniversary Packs",
		"1600日記念パック"
		],
		image: [
            "imgs/banner_0550_m.png"
        ],
		column: 2,
		priority: 6,
		timers: [ 
		{
			name: "Sales Period",
			start: "January 11 2022, 16:00",
			end: "January 21 2022, 14:59",
			extraPriority: 100
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
			"Haregi Limited-time Gacha",
            "晴着期間限定ガチャ"
        ],
        "image": [
            "imgs/gachabanner_0838_m.png",
			"imgs/gachabanner_0839_m.png",
			"imgs/gachabanner_0840_m.png",
			"imgs/gachabanner_0841_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Duration",
                start: "December 28 2021, 16:00",
				end: "January 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Tokime Shizuka (First Sunrise of the Year ver.) Limited-time Pickup Gacha",
            "期間限定 時女静香 初日の出ver.ピックアップガチャ"
        ],
        "image": [
            "imgs/gachabanner_0844_m.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Duration",
                start: "January 1 2022, 0:00",
				end: "January 11 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Nanami Yachiyo (Anime ver.) Limited-time Pickup Gacha",
            "期間限定 七海やちよ アニメver. ピックアップガチャ"
        ],
        "image": [
            "imgs/gachabanner_0855_m.png"
        ],
        "column": 1,
        "priority": 6,
        "timers": [
            {
                name: "Duration",
                start: "January 11 2022, 16:00",
				end: "January 21 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Snow Thawing Befana Limited-time Pickup Gacha",
			"期間限定ガチャ雪解けのベファーナ"
        ],
        "image": [
            "imgs/gachabanner_0834_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                "name": "Duration",
                "start": "December 20 2021, 16:00",
                "end": "December 31 2021, 14:59",
                "extraPriority": 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Another Daze ～Mahou Shoujo Kazumi☆Magica～ Limited-time Gacha",
			"期間限定ガチャ Another Daze～魔法少女かずみ☆マギカ～"
        ],
        "image": [
            "imgs/gachabanner_0801_m.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                "name": "Duration",
                "start": "October 20 2021, 16:00",
                "end": "October 29 2021, 14:59",
                "extraPriority": 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
            "Halloween Castle of Prayers and Mourning Pickup Limited-time Gacha Part 2",
			"期間限定ガチャ 祈りと弔いのハロウィン城 第2弾"
        ],
        "image": [
            "imgs/gachabanner_0792_m.png"
        ],
        "column": 1,
        "priority": 66,
        "timers": [
            {
                "name": "Duration",
                "start": "October 4 2021, 16:00",
                "end": "October 13 2021, 14:59",
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
			"【Memoria Gacha】",
            "Choose your 4★ Memoria Selection Gacha"
        ],
        "image": [
            "imgs/gachabanner_0786_m.png"
        ],
        "column": 1,
        "priority": 59,
        "timers": [ 
            {
                "name": "Duration",
                "start": "September 27 2021, 17:00",
                "end": "October 4 2021, 14:59",
                "extraPriority": 20,
				markers: [
				{
					title: "2nd 2ool",
					time: "October 1 2021, 14:59",
					type: "star"
					
				}
				]
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
