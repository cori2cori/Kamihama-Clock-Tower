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
            "Mitama's Special Training - Kaede Episode"
        ],
        "image": [
            "http://jp.rika.ren/magica/resource/image_web/banner/announce/banner_0480_m.png",
        ],
        "column": 0,
        "priority": 40,
        "timers": [
            {
                "name": "Main Event",
                "start": "May 10 2021, 16:00",
                "end": "May 24 2021, 14:59",
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Other",
        "title": [
            "【Shops and Limited-time Missions】"
        ],
        "image": [
            "maintenance"
        ],
        "column": 2,
        "priority": 10,
        "timers": [
			{
                "name": "Mitama's Special Training: Kaede episode: Event Shop and Missions",
                "start": "May 10 2021, 16:00",
                "end": "May 31 2021, 14:59"
            },
			{
                name: "Pleased Sapphire Lips Kimochi Battle: Event shop and Missions",
                start: "May 17 2021, 17:00",
                end: "May 29 2021, 14:59",
				keepAfterFinished: "9 hours"
            },
			{
				name: "Adjuster Coins Shop: Green - Forest Attribute Pickup Gacha",
				start: "May 17 2021, 17:00",
				end: "May 31 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Yellow - Tart☆Magica Gachas",
				"start": "May 17 2021, 17:00",
				"end": "June 11 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "The Masked Student Council Strikes Back: Event Shop and Missions",
				"start": "May 24 2021, 16:00",
                "end": "June 11 2021, 14:59",
				keepAfterFinished: "9 hours"
			},
			{
				"name": "Adjuster Coins Shop: Black - The Masked Student Council Strikes Back Pickup Gacha Parts 1 & 2",
				"start": "May 24 2021, 16:00",
				"end": "June 11 2021, 14:59",
				keepAfterFinished: "9 hours"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"Tart☆Magica Collaboration Commemorative Training Support Pack"
		],
		image: [
            "http://jp.rika.ren/magica/resource/image_web/banner/announce/banner_0485_m.png",
        ],
		column: 2,
		priority: 9,
		timers: [
		{
			name: "Sales period",
			start: "May 24 2021, 16:00",
			end: "June 4 2021, 14:59",
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
        "type": "Event",
        "title": [
			"【Collaboration Event】",
            "The Masked Student Council Strikes Back",
			"Corbeau & Lapine 5★ Awakening and Doppel Release"
        ],
        "image": [
            "http://jp.rika.ren/magica/resource/image_web/banner/announce/banner_0482_m.png",
			"http://jp.rika.ren/magica/resource/image_web/banner/announce/banner_0483_m.png",
        ],
        "column": 0,
        "priority": 38,
        "timers": [
			{
				name: "Maintenance",
				start: "May 24 2021, 15:00",
				end: "May 24 2021, 16:00",
				keepAfterFinished: "2 hours"
			},
            {
                "name": "Main Event",
                "start": "May 24 2021, 16:00",
                "end": "June 4 2021, 14:59",
                "extraPriority": 10,
				keepAfterFinished: "9 hours",
				"markers": [
				{
					"title": "Story quests 11-20 & 100Evil Challenges I-III",
					"time": "May 28 2021, 16:00",
					"type": "battle"
				}
			]
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Gacha】",
            "Forest Attribute Pickup Gacha",
			"Limited-time Paid 4☆ Forest Attribute Pickup Gacha"
        ],
        "image": [
            "http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0673_m.png",
			"http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0674_m.png"
        ],
        "column": 1,
        "priority": 80,
        "timers": [
            {
                "name": "Duration",
                "start": "May 17 2021, 17:00",
                "end": "May 24 2021, 14:59",
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
			"The Chiming Bell That Transcends Time Pickup Gacha Part 1",
			"The Chiming Bell That Transcends Time Pickup Gacha Part 2",
			"Rebels from the Land of Everlasting Night Pickup Gacha",
			"End of a Legend, the Limits of Light Pickup Gacha"
			
        ],
        "image": [
            "http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0675_m.png",
			"http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0676_m.png",
			"http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0677_m.png",
			"http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0678_m.png"
			
        ],
        "column": 1,
        "priority": 79,
		keepAfterFinished: "9 hours",
        "timers": [
            {
                "name": "Duration",
                "start": "May 17 2021, 17:00",
                "end": "June 4 2021, 14:59",
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "The masked Student Council Strikes back Part 1: Isabeau (Witch ver.)"
        ],
        "image": [
            "http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0681_m.png"
        ],
        "column": 1,
        "priority": 78,
		keepAfterFinished: "9 hours",
        "timers": [
            {
                "name": "Duration",
                "start": "May 24 2021, 16:00",
                "end": "June 4 2021, 14:59",
                "extraPriority": 10
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited-time Gacha】",
            "The masked Student Council Strikes back Part 2: Minou"
        ],
        "image": [
            "http://jp.rika.ren/magica/resource/image_web/banner/gacha/gachabanner_0683_m.png"
        ],
        "column": 1,
        "priority": 77,
		keepAfterFinished: "9 hours",
        "timers": [
            {
                "name": "Duration",
                "start": "May 24 2021, 16:00",
                "end": "June 4 2021, 14:59",
                "extraPriority": 10
            }
        ]
    },
    {
        type: "Other",
        title: [
            "1200 Days Celebration Login Bonus",
            "1200日記念ログインボーナス",
            "Log in on 10 days for up to 300 Free Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "March 24 2021, 0:00",
                "end": "April 6 2021, 23:59"
            }
        ]
    },
    {
        type: "LoginDays",
        title: [
            "Ochikobore Fruit Tart participation Login Bonus",
            "おちこぼれフルーツタルト参戦決定記念ログインボーナス",
            "20 Gems on days the anime airs"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Episode 2",
                date: "October 19 2020",
                days: 2
            },
        ]
    },
    {
        type: "Other",
        title: [
            "Main Quest & Author Quest Half Stamina Campaign",
            "メインクエスト＆作家クエストスタミナ半減キャンペーン",
        ],
        image: "match",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "April 29 2021, 0:00",
                "end": "May 10 2021, 23:59",
                "markers": [
                    {
                        "title": "Main Quest Part 2",
                        "time": "April 29 2021, 0:00",
                        "type": "story"
                    },
                    {
                        "title": "Main Quest Part 1 & Author Quests",
                        "time": "May 5 2021, 0:00",
                        "type": "story"
                    }
                ]
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Pleased Sapphire Lips Kimochi Battle",
            "キモチ戦悦ぶサファイアの唇 開催"
        ],
        image: "http://jp.rika.ren/magica/resource/image_web/banner/announce/banner_0314_m.png",
		priority: 36,
        column: 0,
        timers: [
			{
				name: "Duration",
				start: "May 17 2021, 17:00",
				end: "May 22 2021, 16:59",
				keepAfterFinished: "12 hours",
				extraPriority: 10,
				markers: [
				{
					title: "Day 2",
					time: "May 18 2021, 16:00",
					type: "battle"
				},
				{
					title: "Aggregation Period I",
					time: "May 19 2021, 16:00",
					type: "story"
				},
				{
					title: "Day 3",
					time: "May 19 2021, 17:00",
					type: "battle"
				},
				{
					title: "Day 4",
					time: "May 20 2021, 16:00",
					type: "battle"
				},
				{
					title: "Day 5",
					time: "May 21 2021, 16:00",
					type: "battle"
				},
				{
					title: "Aggregation Period II",
					time: "May 22 2021, 16:00",
					type: "story"
				}
			]
			}
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Past Sports Festival Room Decorations",
            "運動会限定ルームアイテム再登場"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                "start": "May 14 2021, 17:00",
                "end": "May 20 2021, 16:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Skills Update Special Sale",
            "運動会アイテムショップに期間限定アイテム追加"
        ],
        image: "cork",
        column: 2,
        timers: [
            {
                name: "Item Sets",
                "start": "May 14 2021, 17:00",
                "end": "May 20 2021, 16:59"
            }
        ]
    }
];
