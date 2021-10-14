var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "October 12 2021, 18:00";
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
            "Halloween Castle of Prayers and Mourning",
			"祈りと弔いのハロウィン城～生者は惑い死者は黙する～"
        ],
        "image": [
            "imgs/banner_0522_m.png"
        ],
        "column": 0,
        "priority": 20,
        "timers": [
			{
				name: "Maintenance",
				start: "October 4 2021, 15:00",
				end: "October 4 2021, 16:00",
				extraPriority: 20
			},
            {
                "name": "Main Event",
                "start": "October 4 2021, 16:00",
                "end": "October 13 2021, 14:59",
                "extraPriority": 20
            }
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】",
            "Only Dreamers ~ The Fable Watches the Dream of the Girl"
        ],
        "image": [
            "imgs/banner_0517_m.png"
        ],
        "column": 0,
        "priority": 18,
        "timers": [
			{
				name: "Maintenance",
				start: "September 21 2021, 15:00",
				end: "September 21 2021, 16:00",
				extraPriority: 20,
			},
            {
                "name": "Main Event",
                "start": "September 21 2021, 16:00",
                "end": "October 4 2021, 14:59",
                "extraPriority": 20,
				"markers": [
				{
					title: "Story Quests 11~20 & 100Evil",
					time: "September 27 2021, 17:00",
					type: "battle"
				}
				]
            }
        ]
    },
	{
        "type": "Event",
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
				name: "Maintenance",
				start: "October 13 2021, 15:00",
				end: "October 13 2021, 17:00",
				extraPriority: 30
			},
            {
                "name": "Main Event",
                "start": "October 13 2021, 17:00",
                "end": "October 18 2021, 15:59",
                "extraPriority": 30,
				"markers": [
				{
					title: "Part 2 - Group Battles",
					time: "October 15 2021, 17:00",
					type: "battle"
				}
				]
			}
				]
    },
	{
		type: "Event",
		title: [
			"1500 Days Celebration Campaign",
			"リリース1500日記念キャンペーン"
		],
		"image": [
			"imgs/banner_0519_m.png",
			"imgs/banner_0521_m.png"
		],
		column: 0,
		priority: 16,
		timers: [
		{
				name: "Limited-time Daily Missions & Login Bonus",
				start: "September 27 2021, 17:00",
				end: "October 13 2021, 23:59",
				extraPriority: 20
		},
		{
				name: "1/2 AP, x2 Player EXP, 2x Support Points, 2x Great & Super Success",
				start: "September 27 2021, 17:00",
				end: "October 13 2021, 14:59",
				extraPriority: 20
		}
		]
	},
	{
		type: "Event",
		title: [
			"Kaname Madoka Birthday Celebration Campaign",
			"鹿目まどか誕生日記念期間限定キャンペーン"
		],
		"image": [
			"imgs/banner_0518_m.png"
		],
		column: 0,
		priority: 25,
		timers: [
		{
			name: "Memoria Exchange & Limited-time missions",
			start: "October 3 2021, 0:00",
			end: "October 13 2021, 14:59",
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
        "priority": 18,
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
            },
			{
                "name": "Weekend 8 - Defeat 30 Enemies",
                "start": "September 18 2021, 00:00",
                "end": "September 19 2021, 23:59",
				extraPriority: 10
            },
			{
				name: "Weekend 9 - Defeat 30 Enemies",
				start: "September 25 2021, 00:00",
				end: "September 26 2021, 23:59",
				extraPriority: 10
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
        "priority": 100,
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
				name: "Halloween Castle of Prayers and Mourning - Event Shop and Missions",
				start: "October 4 2021, 16:00",
				end: "October 20 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Black - Halloween Castle of Prayers and Mourning",
				start: "October 4 2021, 16:00",
				end: "October 20 2021, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Purple - Dark Attribute Pickup Gacha",
				start: "October 13 2021, 17:00",
				end: "October 27 2021, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"Mirrors Selection Pack & Mirrors Beginner Pack",
		"「ミラーズセレクションパック」「ミラーズビギナーズパック」の販売"
		],
		image: [
            "imgs/banner_0523_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "September 27 2021, 17:00",
			end: "October 4 2021, 14:59",
			extraPriority: 20
		},
		{
			name: "Selection Ticket Exchange",
			start: "September 27 2021, 17:00",
			end: "October 11 2021, 14:59",
			extraPriority: 20
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
		"Dark Attribute Strengthening Pack",
		"闇属性魔法少女育成パック"
		],
		image: [
            "imgs/banner_0526_m.png"
        ],
		column: 2,
		priority: 6,
		timers: [ 
		{
			name: "Sales Period",
			start: "October 13 2021, 17:00",
			end: "October 20 2021, 14:59"
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
			"Dark Attribute Pickup Gacha",
            "闇属性ピックアップガチャ"
        ],
        "image": [
            "imgs/gachabanner_0795_m.png"
        ],
        "column": 1,
        "priority": 65,
        "timers": [
            {
                name: "Duration",
                start: "October 13 2021, 17:00",
				end: "October 20 2021, 14:59",
                extraPriority: 11
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Paid 4★ Dark Attribute Magical Girl Guaranteed Gacha",
            "有償限定 闇属性★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/gachabanner_0796_m.png"
        ],
        "column": 1,
        "priority": 65,
        "timers": [
            {
                name: "Duration",
                start: "October 13 2021, 17:00",
				end: "October 20 2021, 14:59",
                extraPriority: 11
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Halloween Castle of Prayers and Mourning Limited-time Pickup Gacha Part 1",
			"期間限定ガチャ 祈りと弔いのハロウィン城 第1弾"
        ],
        "image": [
            "imgs/gachabanner_0791_m.png"
			
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
