var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "November 26 2021, 18:00";
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
            "Dream Halloween Festa ～Alina-senpai! Be a good girl!",
			"ドリームハロウィンフェスタ～アリナ先輩！いい子になるの！～"
        ],
        "image": [
            "imgs/banner_0528_m.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Maintenance",
				start: "October 29 2021, 15:00",
				end: "October 29 2021, 16:00",
				extraPriority: 20
			},
            {
                "name": "Main Event",
                "start": "October 29 2021, 16:00",
                "end": "November 12 2021, 14:59",
                "extraPriority": 20,
				markers:[
				{
					title: "Part 2",
					time: "November 5 2021, 16:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"Kagura San Wants to be Honest - Story Campaign",
			"正直になりたい神楽燦 "
        ],
        "image": [
            "imgs/banner_0532_m.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
            {
                "name": "Campaign duration",
                start: "November 12 2021, 17:00",
                end: "November 19 2021, 23:59",
                "extraPriority": 100
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
			"New Chapter Campaign",
			"新章キャンペーン "
		],
		"image": [
			"imgs/banner_0359_m.png"
		],
		column: 0,
		priority: 1,
		timers: [
		{
				name: "1/2 AP, x2 Player EXP, 2x Support Points, 2x Great & Super Success",
				start: "November 12 2021, 17:00",
				end: "November 19 2021, 23:59",
				extraPriority: 100
		}
		]
	},
	{
		type: "Event",
		title: [
			"Battle Museum",
			"バトルミュージアム"
		],
		"image": [
			"imgs/banner_0530_m.png"
		],
		column: 0,
		priority: 5,
		timers: [
		{
				name: "Maintenance",
				start: "November 12 2021, 15:00",
				end: "November 12 2021, 17:00",
				extraPriority: 100
		},
		{
			name: "Event duration",
			start: "November 12 2021, 17:00",
			end: "November 19 2021, 14:59",
			extraPriority: 100
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
			"【Ranked Mirrors】",
            "12th Session"
        ],
        "image": [
            "mirroran"
        ],
        "column": 0,
        "priority": 19,
        "timers": [
			{
				name: "Maintenance",
				start: "September 27 2021, 15:00",
				end: "September 27 2021, 16:59",
				extraPriority: 20
			},
			{
				name: "Main Event",
				start: "September 27 2021, 17:00",
				end: "October 3 2021, 20:59",
				extraPriority: 20
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
				name: "Magia Report no. 200 Memoria in the SP Shop",
				start: "October 1 2021, 0:00",
				end: "October 31 2021, 23:59"
			},
			{
				name: "Adjuster Coin Shop: Navy Blue - The Cuddly Despairs & Another Daze Pickup Gachas",
				start: "October 20 2021, 16:00",
				end: "November 5 2021, 14:59"
			},
			{
				name: "The Cuddly Despairs Event Shop & Missions",
				start: "October 20 2021, 16:00",
				end: "November 5 2021, 14:59"
			},
			{
				name: "Dream Halloween Festa - Event shops & Missions",
				start: "October 29 2021, 16:00",
				end: "November 19 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Orange - Dream Halloween Festa Limited-time Gacha",
				start: "October 29 2021, 16:00",
				end: "November 19 2021, 14:59"
			},
			{
				name: "Battle Museum - Limited-time Missions",
				start: "November 12 2021, 17:00",
				end: "November 26 2021, 14:59"
			},
			{
				name: "Kagura San Wants to be Honest - Campaign Shop & Missions",
				start: "November 12 2021, 17:00",
				end: "November 26 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Green - Kagura San Pickup Gacha",
				start: "November 12 2021, 17:00",
				end: "November 26 2021, 14:59"
			},
			{
				name: "Yukari Miyuri on Practice! - Event Shop & Limited-time missions",
				start: "November 19 2021, 16:00",
				end: "December 6 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Yukari Miyuri Pickup Gacha",
				start: "November 19 2021, 16:00",
				end: "December 6 2021, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"Special Offers in Occasion of the Battle Museum",
		"バトルミュージアム開催記念!!スペシャルオファー"
		],
		image: [
            "imgs/banner_0535_m.png",
			"imgs/banner_0536_m.png"
        ],
		column: 2,
		priority: 1,
		timers: [ 
		{
			name: "Sales period",
			start: "November 12 2021, 17:00",
			end: "November 19 2021, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"1500 Days Commemorative Bags",
		"1500日記念パック"
		],
		image: [
            "imgs/banner_0520_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "September 27 2021, 17:00",
			end: "October 13 2021, 14:59",
			extraPriority: 20
		},
		{
			name: "4★ Guaranteed Ticket Exchange",
			start: "September 27 2021, 17:00",
			end: "October 20 2021, 14:59",
			extraPriority: 20
		}
		]
	},
	{
		type: "Other",
		title: [
		"Autumn Selection Pack",
		"オータムセレクションパック"
		],
		image: [
            "imgs/banner_0531_m.png"
        ],
		column: 2,
		priority: 2,
		timers: [ 
		{
			name: "Sales Period",
			start: "October 29 2021, 16:00",
			end: "November 12 2021, 14:59",
			extraPriority: 100
		},
		{
			name: "Selection Ticket Exchange",
			start: "October 29 2021, 16:00",
			end: "November 19 2021, 14:59"
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
			"Kagura San Pickup Gacha",
            "神楽燦 ピックアップガチャ"
        ],
        "image": [
            "imgs/gachabanner_0808_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "November 12 2021, 17:00",
				end: "November 19 2021, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Yukari Miyuri Pickup Gacha",
            "遊狩ミユリ ピックアップガチャ"
        ],
        "image": [
            "imgs/gachabanner_0813_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Duration",
                start: "November 19 2021, 16:00",
				end: "November 29 2021, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"The Cuddly Despairs ～Mahou Shoujo Kazumi☆Magica～ Limited-time Gacha",
			"期間限定ガチャ The Cuddly Despairs ～魔法少女かずみ☆マギカ～"
        ],
        "image": [
            "imgs/gachabanner_0799_m.png"
        ],
        "column": 1,
        "priority": 3,
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
		type: "LoginDays",
		title: [
			"【Campaign】",
            "Free Rolls in occasion of the 2nd SEASON of the TV Anime"
		],
		image: [
			"imgs/banner_0496_m.png"
		],
		column: 1,
		priority: 60,
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
			},*/
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
			},
			{
				name: "Free roll 25",
				date: "September 25 2021",
				days: "1"
			},
			{
				name: "Free roll 26",
				date: "September 26 2021",
				days: "1"
			}
		]
	}
];
