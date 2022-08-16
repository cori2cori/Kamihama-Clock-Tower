var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Aug 8 2022, 18:00";
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
			"Kimochi Battle Special Edition: Alina Eve",
            "キモチ戦特別編 アリナ・イブ"
        ],
        "image": [
            "imgs/2506/banner_0603_m.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Jul 4 2022, 17:00",
				end: "Jul 5 2022, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Jul 5 2022, 16:00",
				end: "Jul 6 2022, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Jul 6 2022, 17:00",
				end: "Jul 7 2022, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Jul 7 2022, 16:00",
				end: "Jul 8 2022, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Jul 8 2022, 16:00",
				end: "Jul 9 2022, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Jul 4 2022, 17:00",
                "end": "Jul 9 2022, 15:59",
                "extraPriority": 100,
				"type": "normal",
				markers: [
					{
						title: "Part 2 - Groups",
						time: "Jun 6 2022, 17:00",
						type: "battle"
					}
				]
			}
			]
    },
			{
        "type": "Maintenance",
        "title": [
			"Maintenance",
			"维护"
        ],
        "image": [
            "imgs/maintenance.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Maintenance 1 & App Version 2.5.3",
				start: "Jun 27 2022, 15:00",
				end: "Jun 27 2022, 16:00",
				extraPriority: 1000
			},
			{
				name: "Maintenance 2",
				start: "Jul 4 2022, 15:00",
				end: "Jul 4 2022, 17:00",
				extraPriority: 1000
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"Rainbow Coloured Summer",
			"七色夏模様～ノートに記された日常～"
        ],
        "image": [
            "imgs/2807/banner_0605_m.png"
        ],
        "column": 0,
        "priority": 7,
        "timers": [
			{
				name: "Main Event",
				start: "Jul 29 2022, 16:00",
				end: "Aug 22 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Part 2",
					type: "story",
					time: "Aug 10 2022, 16:00"
				}
				]
			}
        ]
    },
			{
        "type": "Event",
        "title": [
			"Summer Missions 2022",
			"七色夏模様～ノートに記された日常～"
        ],
        "image": [
            "imgs/2807/banner_0604_m.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "Campaign duration",
				start: "Jul 29 2022, 16:00",
				end: "Aug 22 2022, 14:59",
				extraPriority: 100,
				markers: [
				{
					title: "Missions 1～5",
					type: "battle",
					time: "Jul 29 2022, 16:00"
				},
				{
					title: "Missions 6～10",
					type: "battle",
					time: "Aug 3 2022, 16:00"
				},
				{
					title: "Missions 11～20",
					type: "battle",
					time: "Aug 10 2022, 16:00"
				},
				{
					title: "Missions 21～26",
					type: "battle",
					time: "Aug 15 2022, 16:00"
				}
				]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"5th Anniversary Countdown Login Story",
			"5周年カウントダウンログインストーリー"
        ],
        "image": [
            "imgs/0808/banner_0608_m.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
			{
				name: "Duration",
				start: "Aug 18 2022, 0:00",
				end: "Sep 5 2022, 14:59",
				extraPriority: 0,
				markers:[
				{
					title: "Episode 1",
					time: "Aug 18 2022, 0:00",
					type: "story"
				},
				{
					title: "Episode 2",
					time: "Aug 19 2022, 0:00",
					type: "story"
				},
				{
					title: "Episode 3",
					time: "Aug 20 2022, 0:00",
					type: "story"
				},
				{
					title: "Episode 4",
					time: "Aug 21 2022, 0:00",
					type: "story"
				},
				{
					title: "Episode 5",
					time: "Aug 22 2022, 0:00",
					type: "story"
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
                "name": "Main Event",
                "start": "Jul 22 2022, 17:00",
                "end": "Jul 29 2022, 14:59",
                "extraPriority": 100,
				"markers": [
				{
					title: "Challenge Stage",
					time: "Jul 24 2022, 16:00",
					type: "battle"
				},
				{
					title: "EX Challenge Stage",
					time: "Jul 26 2022, 16:00",
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
        "priority": 4,
        "timers": [
			{
				name: "Main Event",
				start: "Jul 11 2022, 17:00",
				end: "Jul 17 2022, 20:59",
				extraPriority: 100
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"5th Anniversary Program Magia Day 2022",
            "5周年記念番組「Magia Day 2022」"
        ],
        "image": [
            "imgs/magiaday2022.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Call for Questions and Concerns",
				start: "Jul 22 2022, 18:00",
				end: "Jul 31 2022, 23:59",
				extraPriority: 100
			},
			{
				name: "Main Event",
				start: "Sep 17 2022, 20:00",
				end: "Sep 17 2022, 22:30",
				extraPriority: 1000
			},
			{
				name: "Archive",
				start: "Sep 17 2022, 22:30",
				end: "Sep 30 2022, 23:59"
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
				name: "Adjuster Coin Shop: Chartreuse - Rabi Gacha",
				start: "Jul 11 2022, 17:00",
				end: "Jul 29 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Tea - Memoria Gacha",
				start: "Jul 11 2022, 17:00",
				end: "Jul 25 2022, 14:59"
			},
			{
				name: "Mitama Special Training - Event Shop and Missions",
				start: "Jul 11 2022, 17:00",
				end: "Jul 29 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Red - Uwasa no Tsuruno (Anime ver.) Gacha",
				start: "Jul 22 2022, 17:00",
				end: "Aug 5 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Peach - Memoria Gacha",
				start: "Jul 22 2022, 17:00",
				end: "Aug 5 2022, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Black - Kuroe (Swimsuit ver.) Gacha",
				start: "Jul 29 2022, 16:00",
				end: "Aug 17 2022, 14:59"
			},
			{
				name: "Rainbow Coloured Summer - Event Shop and Missions",
				start: "Jul 29 2022, 16:00",
				end: "Aug 29 2022, 14:59",
				markers:
				[
				{
					time: "Aug 10 2022, 16:00",
					type: "story",
					title: "Part 2 Shop"
				}
				]
			},
			{
				name: "Adjuster Coin Shop: Blue - Madoka (Swimsuit ver.) Gacha",
				start: "Aug 10 2022, 16:00",
				end: "Aug 29 2022, 14:59"
			},
			{
				name: "Summer Missions - Swimsuit Ticket Exchange",
				start: "Jul 29 2022, 16:00",
				end: "Aug 29 2022, 14:59"
			}
        ]
    },
	{
		type: "Other",
		title: [
		"TV Anime BD2 Release Campaign - Support Bag",
		"TVアニメFinal SEASON Blu-ray＆DVD第2巻発売記念 育成応援パック"
		],
		image: [
            "imgs/2506/banner_0602_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "Jun 27 2022, 16:00",
			end: "Jul 11 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"Mirrors Selection Pack & Mirrors Beginner Pack",
		"「ミラーズセレクションパック」&「ミラーズビギナーズパック」の販売"
		],
		image: [
            "imgs/0807/banner_0580_m.png"
        ],
		column: 2,
		priority: 2,
		timers: [ 
		{
			name: "Sales period",
			start: "Jul 11 2022, 17:00",
			end: "Jul 18 2022, 14:59"
		},
		{
			name: "Mirrors Selection 4★ Magical Girl Ticket Exchange",
			start: "Jul 11 2022, 17:00",
			end: "Jul 25 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"Mitama's Special Offer",
		"殲滅戦開催記念!!みたまのスペシャルオファー"
		],
		image: [
            "imgs/2107/banner_0591_m.png"
        ],
		column: 2,
		priority: 3,
		timers: [ 
		{
			name: "Sales period",
			start: "Jul 22 2022, 17:00",
			end: "Jul 29 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
		type: "Other",
		title: [
		"1800 Days Celebration Bags",
		"1800日記念パック"
		],
		image: [
            "imgs/2107/banner_0600_m.png"
        ],
		column: 2,
		priority: 4,
		timers: [ 
		{
			name: "Sales period",
			start: "Jul 22 2022, 17:00",
			end: "Jul 29 2022, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance, App Version 2.5.5 & Attribute Enhancement Implementation",
			"维护、アプリバージョン2.5.5 & 「属性強化」実装のお知らせ"
        ],
		"image": [
			"imgs/maintenance.png",
			"imgs/0808/banner_0615_m.png"
		],
        column: 0,
        priority: 10,
        timers: [
            {
                name: "Scheduled Time",
                start: "Aug 10 2022, 15:00",
                end: "Aug 10 2022, 16:00",
				extraPriority: 1000
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
			"Limited-time Yachiyo·Mifuyu (Origin ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 やちよ・みふゆ 始まりver.ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/1806/gachabanner_1001_m.png",
			"imgs/1806/gachabanner_1002_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Jun 20 2022, 17:00",
				end: "Jun 27 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Kuroe (Swimsuit ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 黒江 水着ver. ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2807/gachabanner_1062_m.png",
			"imgs/2807/gachabanner_1063_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Duration",
                start: "Jul 29 2022, 16:00",
				end: "Aug 10 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Kaname Madoka (Swimsuit ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 鹿目まどか 水着ver. ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/0808/gachabanner_1071_m.png",
			"imgs/0808/gachabanner_1072_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Duration",
                start: "Aug 10 2022, 16:00",
				end: "Aug 22 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Uwasa no Tsuruno (Anime ver.) Pickup Gacha & Step-up Gacha",
            "期間限定 ウワサの鶴乃 アニメver. ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/2107/gachabanner_1054_m.png",
			"imgs/2107/gachabanner_1055_m.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Duration",
                start: "Jul 22 2022, 17:00",
				end: "Jul 29 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Himuro Rabi Pickup Gacha & Step-up Gacha",
            "氷室ラビ ピックアップガチャとステップアップガチャ"
        ],
        "image": [
            "imgs/0807/gachabanner_1043_m.png",
			"imgs/0807/gachabanner_1044_m.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Duration",
                start: "Jul 11 2022, 17:00",
				end: "Jul 22 2022, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Choose Your 4★ Memoria Selection Gacha",
            "選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/2107/gachabanner_1053_m.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Duration",
                start: "Jul 22 2022, 17:00",
				end: "Jul 29 2022, 14:59",
                extraPriority: 100
            }
        ]
    }
];
