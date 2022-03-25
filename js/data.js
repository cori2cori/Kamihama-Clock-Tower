var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "April 6 2022, 18:00";
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
			"ANIPLEX STAGE - Special Program before Magia Record Final SEASON broadcast",
			"ANIPLEXステージ - TVアニメ「マギアレコード Final SEASON -浅き夢の暁-」放送直前スペシャルステージ"
        ],
        "image": [
            "imgs/1703/aniplexstage.png"
        ],
        "column": 0,
        "priority": 15,
        "timers": [
			{
				name: "Duration",
				start: "Mar 26 2022, 16:20",
				end: "Mar 26 2022, 16:50",
				extraPriority: 100
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
			"Little Bird's Star",
			"Little Bird's Star "
        ],
        "image": [
            "imgs/2503/banner_0575_m.png"
        ],
        "column": 0,
        "priority": 11,
        "timers": [
			{
				name: "Maintenance",
				start: "Mar 28 2022, 15:00",
				end: "Mar 28 2022, 16:00",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Mar 28 2022, 16:00",
				end: "Apr 8 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Story Quests 10~20 & Evil100 Challenges I~III",
					time: "Apr 1 2022, 16:00",
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
			"TV Anime FINAL SEASON Broadcast Campaign",
			"TVアニメFinal SEASON 放送記念キャンペーン"
        ],
        "image": [
            "imgs/2503/banner_0573_m.png",
			"imgs/2503/banner_0571_m.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "1/2 AP, x2 Player EXP, x2 SP & x2 Magical Girl Enhancement Great and Super Success Rate",
				start: "Mar 28 2022, 16:00",
				end: "Apr 8 2022, 14:59",
				extraPriority: 100
			},
			{
				name: "Limited-time Missions",
				start: "Mar 29 2022, 0:00",
				end: "Apr 8 2022, 23:59",
				extraPriority: 100
			},
			{
				name: "Login Bonus",
				start: "Apr 3 2022, 0:00",
				end: "Apr 8 2022, 23:59",
				extraPriority: 100
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
				name: "Adjuster Coin Shop: Peach - Pernelle Pickup Gacha",
				start: "Mar 24 2022, 16:00",
				end: "Apr 8 2022, 14:59"
			},
			{
				name: "Little Bird's Star - Event Shop & Missions",
				start: "Mar 28 2022, 16:00",
				end: "Apr 15 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Black - Kuroe Pickup Gacha",
				start: "Mar 28 2022, 16:00",
				end: "Apr 15 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Water - Premium Gacha",
				start: "Mar 28 2022, 16:00",
				end: "Apr 15 2022, 23:59"
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
        "priority": 5,
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
        "type": "Gacha",
        "title": [
			"Kuroe Limited-time Pickup Gacha & Step-up Gacha",
            "期間限定 黒江ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2503/gachabanner_0909_m.png",
			"imgs/2503/gachabanner_0910_m.png"
        ],
        "column": 1,
        "priority": 7,
        "timers": [
            {
                name: "Duration",
                start: "Mar 28 2022, 16:00",
				end: "Apr 8 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Free 10-Roll in Premium Gacha Once a Day",
            "毎日1回10連レアガチャ無料"
        ],
        "image": [
            "imgs/2503/banner_0574_m.png"
        ],
        "column": 1,
        "priority": 7,
        "timers": [
            {
                name: "Duration",
                start: "Mar 28 2022, 16:00",
				end: "Apr 8 2022, 14:59",
                extraPriority: 100
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
