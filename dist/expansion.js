// Original teaching vocabulary; not an official textbook character list.
const EXPANSION = [
  {
    "char": "动",
    "pinyin": "dòng",
    "word": "动物",
    "sentence": "森林里住着许多动物。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "物",
    "pinyin": "wù",
    "word": "动物",
    "sentence": "森林里住着许多动物。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "植",
    "pinyin": "zhí",
    "word": "植物",
    "sentence": "植物生长需要阳光和水。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "同",
    "pinyin": "tóng",
    "word": "同伴",
    "sentence": "小兔和同伴一起过桥。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "伴",
    "pinyin": "bàn",
    "word": "同伴",
    "sentence": "小兔和同伴一起过桥。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "伙",
    "pinyin": "huǒ",
    "word": "伙伴",
    "sentence": "小熊邀请伙伴一起看书。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "习",
    "pinyin": "xí",
    "word": "学习",
    "sentence": "小兔每天学习新的本领。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "练",
    "pinyin": "liàn",
    "word": "练习",
    "sentence": "小熊认真练习拍皮球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "进",
    "pinyin": "jìn",
    "word": "进步",
    "sentence": "小兔每天练习，慢慢有了进步。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "步",
    "pinyin": "bù",
    "word": "进步",
    "sentence": "小兔每天练习，慢慢有了进步。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "合",
    "pinyin": "hé",
    "word": "合作",
    "sentence": "小动物们合作搭起一座小桥。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "作",
    "pinyin": "zuò",
    "word": "合作",
    "sentence": "小动物们合作搭起一座小桥。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "努",
    "pinyin": "nǔ",
    "word": "努力",
    "sentence": "小熊努力把积木搭得更高。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "力",
    "pinyin": "lì",
    "word": "努力",
    "sentence": "小熊努力把积木搭得更高。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "完",
    "pinyin": "wán",
    "word": "完成",
    "sentence": "小兔完成了今天的练习。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "成",
    "pinyin": "chéng",
    "word": "完成",
    "sentence": "小兔完成了今天的练习。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "问",
    "pinyin": "wèn",
    "word": "问题",
    "sentence": "小熊提出了一个问题。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "题",
    "pinyin": "tí",
    "word": "问题",
    "sentence": "小熊提出了一个问题。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "答",
    "pinyin": "dá",
    "word": "答案",
    "sentence": "小兔在故事里找到了答案。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "案",
    "pinyin": "àn",
    "word": "答案",
    "sentence": "小兔在故事里找到了答案。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "选",
    "pinyin": "xuǎn",
    "word": "选择",
    "sentence": "小熊选择了一条安全的小路。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "择",
    "pinyin": "zé",
    "word": "选择",
    "sentence": "小熊选择了一条安全的小路。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "观",
    "pinyin": "guān",
    "word": "观察",
    "sentence": "小兔蹲下来观察小蚂蚁。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "察",
    "pinyin": "chá",
    "word": "观察",
    "sentence": "小兔蹲下来观察小蚂蚁。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "比",
    "pinyin": "bǐ",
    "word": "比较",
    "sentence": "小熊比较两片叶子的大小。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "较",
    "pinyin": "jiào",
    "word": "比较",
    "sentence": "小熊比较两片叶子的大小。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "记",
    "pinyin": "jì",
    "word": "记忆",
    "sentence": "经常复习可以帮助记忆。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "忆",
    "pinyin": "yì",
    "word": "记忆",
    "sentence": "经常复习可以帮助记忆。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "解",
    "pinyin": "jiě",
    "word": "解决",
    "sentence": "两个伙伴一起解决了问题。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "决",
    "pinyin": "jué",
    "word": "解决",
    "sentence": "两个伙伴一起解决了问题。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "结",
    "pinyin": "jié",
    "word": "结果",
    "sentence": "小兔想知道比赛的结果。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "过",
    "pinyin": "guò",
    "word": "过程",
    "sentence": "小熊画下了种子发芽的过程。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "程",
    "pinyin": "chéng",
    "word": "过程",
    "sentence": "小熊画下了种子发芽的过程。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "首",
    "pinyin": "shǒu",
    "word": "首先",
    "sentence": "出门以前，首先要穿好鞋子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "先",
    "pinyin": "xiān",
    "word": "首先",
    "sentence": "出门以前，首先要穿好鞋子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "最",
    "pinyin": "zuì",
    "word": "最后",
    "sentence": "最后，小动物们一起回家了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "真",
    "pinyin": "zhēn",
    "word": "真正",
    "sentence": "小兔真正明白了故事的意思。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "正",
    "pinyin": "zhèng",
    "word": "真正",
    "sentence": "小兔真正明白了故事的意思。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "直",
    "pinyin": "zhí",
    "word": "一直",
    "sentence": "小河里的水一直向前流。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "今",
    "pinyin": "jīn",
    "word": "今天",
    "sentence": "今天的天空又蓝又亮。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "教",
    "pinyin": "jiào",
    "word": "教室",
    "sentence": "教室里的桌椅摆得很整齐。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "室",
    "pinyin": "shì",
    "word": "教室",
    "sentence": "教室里的桌椅摆得很整齐。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "窗",
    "pinyin": "chuāng",
    "word": "窗户",
    "sentence": "小熊打开窗户，让空气流进来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "户",
    "pinyin": "hù",
    "word": "窗户",
    "sentence": "小熊打开窗户，让空气流进来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "桌",
    "pinyin": "zhuō",
    "word": "桌椅",
    "sentence": "桌椅擦得干干净净。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "椅",
    "pinyin": "yǐ",
    "word": "桌椅",
    "sentence": "桌椅擦得干干净净。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "厨",
    "pinyin": "chú",
    "word": "厨房",
    "sentence": "小兔把厨房收拾干净了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "客",
    "pinyin": "kè",
    "word": "客厅",
    "sentence": "小熊在客厅里搭积木。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "厅",
    "pinyin": "tīng",
    "word": "客厅",
    "sentence": "小熊在客厅里搭积木。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "卧",
    "pinyin": "wò",
    "word": "卧室",
    "sentence": "卧室里放着一张小床。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "楼",
    "pinyin": "lóu",
    "word": "楼梯",
    "sentence": "小兔沿着楼梯慢慢往上走。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "梯",
    "pinyin": "tī",
    "word": "楼梯",
    "sentence": "小兔沿着楼梯慢慢往上走。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "墙",
    "pinyin": "qiáng",
    "word": "墙壁",
    "sentence": "墙壁上挂着一幅画。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "壁",
    "pinyin": "bì",
    "word": "墙壁",
    "sentence": "墙壁上挂着一幅画。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "镜",
    "pinyin": "jìng",
    "word": "镜子",
    "sentence": "小熊对着镜子整理衣服。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "巾",
    "pinyin": "jīn",
    "word": "毛巾",
    "sentence": "洗完脸，要用干净的毛巾擦一擦。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "刷",
    "pinyin": "shuā",
    "word": "牙刷",
    "sentence": "小兔拿起牙刷认真刷牙。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "肥",
    "pinyin": "féi",
    "word": "肥皂",
    "sentence": "洗手时可以用肥皂搓一搓。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "皂",
    "pinyin": "zào",
    "word": "肥皂",
    "sentence": "洗手时可以用肥皂搓一搓。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "杯",
    "pinyin": "bēi",
    "word": "杯碗",
    "sentence": "小熊把杯碗放到桌子上。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "碗",
    "pinyin": "wǎn",
    "word": "杯碗",
    "sentence": "小熊把杯碗放到桌子上。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "筷",
    "pinyin": "kuài",
    "word": "筷子",
    "sentence": "小兔用筷子夹起一小块豆腐。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "勺",
    "pinyin": "sháo",
    "word": "勺子",
    "sentence": "小熊用勺子喝汤。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "盘",
    "pinyin": "pán",
    "word": "盘子",
    "sentence": "盘子里放着切好的水果。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "瓶",
    "pinyin": "píng",
    "word": "瓶子",
    "sentence": "瓶子里装着清水。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "篮",
    "pinyin": "lán",
    "word": "篮子",
    "sentence": "小兔提着篮子去摘果子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "箱",
    "pinyin": "xiāng",
    "word": "箱子",
    "sentence": "小熊把玩具收进箱子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "柜",
    "pinyin": "guì",
    "word": "柜子",
    "sentence": "柜子里放着整齐的衣服。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "表",
    "pinyin": "biǎo",
    "word": "钟表",
    "sentence": "小兔看着钟表，知道该出门了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "闹",
    "pinyin": "nào",
    "word": "闹钟",
    "sentence": "闹钟响了，小熊准备起床。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "球",
    "pinyin": "qiú",
    "word": "地球",
    "sentence": "地球是小动物们共同的家园。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "气",
    "pinyin": "qì",
    "word": "空气",
    "sentence": "雨后的空气很清新。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "世",
    "pinyin": "shì",
    "word": "世界",
    "sentence": "小兔想看看更大的世界。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "界",
    "pinyin": "jiè",
    "word": "世界",
    "sentence": "小兔想看看更大的世界。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "南",
    "pinyin": "nán",
    "word": "南北",
    "sentence": "小熊在地图上找到了南北方向。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "北",
    "pinyin": "běi",
    "word": "南北",
    "sentence": "小熊在地图上找到了南北方向。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "东",
    "pinyin": "dōng",
    "word": "东边",
    "sentence": "太阳每天从东边升起。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "边",
    "pinyin": "biān",
    "word": "东边",
    "sentence": "太阳每天从东边升起。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "西",
    "pinyin": "xī",
    "word": "西方",
    "sentence": "太阳慢慢落向西方。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "城",
    "pinyin": "chéng",
    "word": "城市",
    "sentence": "城市里有高楼和公园。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "市",
    "pinyin": "shì",
    "word": "城市",
    "sentence": "城市里有高楼和公园。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "乡",
    "pinyin": "xiāng",
    "word": "乡村",
    "sentence": "乡村的小路两边种着庄稼。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "村",
    "pinyin": "cūn",
    "word": "乡村",
    "sentence": "乡村的小路两边种着庄稼。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "街",
    "pinyin": "jiē",
    "word": "街道",
    "sentence": "街道上的车辆慢慢向前走。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "商",
    "pinyin": "shāng",
    "word": "商店",
    "sentence": "小兔去商店买了一本书。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "推",
    "pinyin": "tuī",
    "word": "推门",
    "sentence": "小兔轻轻推门走进屋里。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "拉",
    "pinyin": "lā",
    "word": "拉手",
    "sentence": "过桥时，小动物们互相拉手。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "抬",
    "pinyin": "tái",
    "word": "抬头",
    "sentence": "小熊抬头看见了白云。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "拍",
    "pinyin": "pāi",
    "word": "拍球",
    "sentence": "小兔在草地上练习拍球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "接",
    "pinyin": "jiē",
    "word": "接住",
    "sentence": "小熊伸出手，接住了皮球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "扔",
    "pinyin": "rēng",
    "word": "扔球",
    "sentence": "小兔轻轻扔球，传给旁边的伙伴。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "踢",
    "pinyin": "tī",
    "word": "踢球",
    "sentence": "小熊和伙伴一起踢球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "捡",
    "pinyin": "jiǎn",
    "word": "捡起",
    "sentence": "小兔捡起了地上的纸片。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "放",
    "pinyin": "fàng",
    "word": "放下",
    "sentence": "小熊轻轻放下手里的篮子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "拿",
    "pinyin": "ná",
    "word": "拿起",
    "sentence": "小兔拿起铅笔开始画画。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "扫",
    "pinyin": "sǎo",
    "word": "扫地",
    "sentence": "小熊每天帮忙扫地。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "擦",
    "pinyin": "cā",
    "word": "擦桌",
    "sentence": "小兔拿着抹布擦桌。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "关",
    "pinyin": "guān",
    "word": "关门",
    "sentence": "小熊轻轻关门，没有吵醒小猫。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "穿",
    "pinyin": "chuān",
    "word": "穿衣",
    "sentence": "小兔起床后先穿衣。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "脱",
    "pinyin": "tuō",
    "word": "脱鞋",
    "sentence": "走进屋子以后，小熊先脱鞋。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "伸",
    "pinyin": "shēn",
    "word": "伸手",
    "sentence": "小兔伸手接住了一片落叶。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "弯",
    "pinyin": "wān",
    "word": "弯腰",
    "sentence": "小熊弯腰捡起一颗小石头。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "腰",
    "pinyin": "yāo",
    "word": "弯腰",
    "sentence": "小熊弯腰捡起一颗小石头。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "举",
    "pinyin": "jǔ",
    "word": "举手",
    "sentence": "想说话的小兔先举手。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "转",
    "pinyin": "zhuǎn",
    "word": "转弯",
    "sentence": "小路在大树旁边转弯。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "停",
    "pinyin": "tíng",
    "word": "停车",
    "sentence": "到达车站以后，司机慢慢停车。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "等",
    "pinyin": "děng",
    "word": "等待",
    "sentence": "小兔在树下等待伙伴。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "待",
    "pinyin": "dài",
    "word": "等待",
    "sentence": "小兔在树下等待伙伴。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "排",
    "pinyin": "pái",
    "word": "排队",
    "sentence": "小动物们排队走过小桥。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "队",
    "pinyin": "duì",
    "word": "排队",
    "sentence": "小动物们排队走过小桥。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "抱",
    "pinyin": "bào",
    "word": "抱紧",
    "sentence": "小熊抱紧了怀里的大皮球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "紧",
    "pinyin": "jǐn",
    "word": "抱紧",
    "sentence": "小熊抱紧了怀里的大皮球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "拥",
    "pinyin": "yōng",
    "word": "拥抱",
    "sentence": "两个朋友见面时互相拥抱。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "摇",
    "pinyin": "yáo",
    "word": "摇摆",
    "sentence": "树枝随着风轻轻摇摆。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "摆",
    "pinyin": "bǎi",
    "word": "摇摆",
    "sentence": "树枝随着风轻轻摇摆。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "滚",
    "pinyin": "gǔn",
    "word": "滚动",
    "sentence": "小球沿着草地慢慢滚动。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "追",
    "pinyin": "zhuī",
    "word": "追赶",
    "sentence": "小狗在草地上追赶皮球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "赶",
    "pinyin": "gǎn",
    "word": "追赶",
    "sentence": "小狗在草地上追赶皮球。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "躲",
    "pinyin": "duǒ",
    "word": "躲藏",
    "sentence": "小猫躲藏在大树后面。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "藏",
    "pinyin": "cáng",
    "word": "躲藏",
    "sentence": "小猫躲藏在大树后面。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "苹",
    "pinyin": "píng",
    "word": "苹果",
    "sentence": "篮子里放着红红的苹果。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "香",
    "pinyin": "xiāng",
    "word": "香蕉",
    "sentence": "小猴子剥开一根香蕉。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蕉",
    "pinyin": "jiāo",
    "word": "香蕉",
    "sentence": "小猴子剥开一根香蕉。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "橘",
    "pinyin": "jú",
    "word": "橘子",
    "sentence": "小兔把橘子分给了伙伴。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "葡",
    "pinyin": "pú",
    "word": "葡萄",
    "sentence": "架子上挂着一串紫色的葡萄。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "萄",
    "pinyin": "táo",
    "word": "葡萄",
    "sentence": "架子上挂着一串紫色的葡萄。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "柠",
    "pinyin": "níng",
    "word": "柠檬",
    "sentence": "柠檬闻起来清香，吃起来有点酸。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "檬",
    "pinyin": "méng",
    "word": "柠檬",
    "sentence": "柠檬闻起来清香，吃起来有点酸。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "桃",
    "pinyin": "táo",
    "word": "桃子",
    "sentence": "树上结着又大又甜的桃子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "梨",
    "pinyin": "lí",
    "word": "梨子",
    "sentence": "盘子里的梨子又甜又多汁。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蔬",
    "pinyin": "shū",
    "word": "蔬菜",
    "sentence": "菜园里种着各种蔬菜。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "菜",
    "pinyin": "cài",
    "word": "蔬菜",
    "sentence": "菜园里种着各种蔬菜。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "萝",
    "pinyin": "luó",
    "word": "萝卜",
    "sentence": "小兔从土里拔出一根萝卜。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "卜",
    "pinyin": "bo",
    "word": "萝卜",
    "sentence": "小兔从土里拔出一根萝卜。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "番",
    "pinyin": "fān",
    "word": "番茄",
    "sentence": "熟透的番茄红红的。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "茄",
    "pinyin": "qié",
    "word": "番茄",
    "sentence": "熟透的番茄红红的。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "豆",
    "pinyin": "dòu",
    "word": "豆角",
    "sentence": "架子上挂着长长的豆角。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "角",
    "pinyin": "jiǎo",
    "word": "豆角",
    "sentence": "架子上挂着长长的豆角。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "豌",
    "pinyin": "wān",
    "word": "豌豆",
    "sentence": "小兔剥开豆荚，看到圆圆的豌豆。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "玉",
    "pinyin": "yù",
    "word": "玉米",
    "sentence": "玉米粒在阳光下亮晶晶的。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "麦",
    "pinyin": "mài",
    "word": "麦子",
    "sentence": "田里的麦子慢慢变黄了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "粮",
    "pinyin": "liáng",
    "word": "粮食",
    "sentence": "小动物们把粮食放进仓库。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "食",
    "pinyin": "shí",
    "word": "粮食",
    "sentence": "小动物们把粮食放进仓库。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "饼",
    "pinyin": "bǐng",
    "word": "饼干",
    "sentence": "小熊把饼干分成小块。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "干",
    "pinyin": "gān",
    "word": "饼干",
    "sentence": "小熊把饼干分成小块。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蛋",
    "pinyin": "dàn",
    "word": "蛋糕",
    "sentence": "桌上放着一个小小的蛋糕。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "糕",
    "pinyin": "gāo",
    "word": "蛋糕",
    "sentence": "桌上放着一个小小的蛋糕。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "奶",
    "pinyin": "nǎi",
    "word": "牛奶",
    "sentence": "小兔早餐喝了一杯牛奶。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "酸",
    "pinyin": "suān",
    "word": "酸甜",
    "sentence": "这颗果子的味道酸甜酸甜的。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "甜",
    "pinyin": "tián",
    "word": "酸甜",
    "sentence": "这颗果子的味道酸甜酸甜的。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蝴",
    "pinyin": "hú",
    "word": "蝴蝶",
    "sentence": "一只蝴蝶轻轻停在花朵上。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蝶",
    "pinyin": "dié",
    "word": "蝴蝶",
    "sentence": "一只蝴蝶轻轻停在花朵上。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蜻",
    "pinyin": "qīng",
    "word": "蜻蜓",
    "sentence": "蜻蜓在小河上方飞来飞去。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蜓",
    "pinyin": "tíng",
    "word": "蜻蜓",
    "sentence": "蜻蜓在小河上方飞来飞去。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蚂",
    "pinyin": "mǎ",
    "word": "蚂蚁",
    "sentence": "蚂蚁排着队搬运食物。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蚁",
    "pinyin": "yǐ",
    "word": "蚂蚁",
    "sentence": "蚂蚁排着队搬运食物。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蜘",
    "pinyin": "zhī",
    "word": "蜘蛛",
    "sentence": "蜘蛛在树枝之间结了一张网。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蛛",
    "pinyin": "zhū",
    "word": "蜘蛛",
    "sentence": "蜘蛛在树枝之间结了一张网。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蜗",
    "pinyin": "wō",
    "word": "蜗牛",
    "sentence": "蜗牛背着小房子慢慢爬。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "乌",
    "pinyin": "wū",
    "word": "乌龟",
    "sentence": "乌龟伸出脑袋看了看。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "龟",
    "pinyin": "guī",
    "word": "乌龟",
    "sentence": "乌龟伸出脑袋看了看。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "熊",
    "pinyin": "xióng",
    "word": "熊猫",
    "sentence": "熊猫抱着竹子慢慢吃。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "狐",
    "pinyin": "hú",
    "word": "狐狸",
    "sentence": "小狐狸在森林里寻找果子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "狸",
    "pinyin": "lí",
    "word": "狐狸",
    "sentence": "小狐狸在森林里寻找果子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "狮",
    "pinyin": "shī",
    "word": "狮子",
    "sentence": "狮子在树下安静地休息。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "老",
    "pinyin": "lǎo",
    "word": "老虎",
    "sentence": "老虎身上有一条条花纹。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "虎",
    "pinyin": "hǔ",
    "word": "老虎",
    "sentence": "老虎身上有一条条花纹。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "猴",
    "pinyin": "hóu",
    "word": "猴子",
    "sentence": "猴子灵活地爬到树枝上。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "松",
    "pinyin": "sōng",
    "word": "松鼠",
    "sentence": "松鼠把松果藏进树洞。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "鼠",
    "pinyin": "shǔ",
    "word": "松鼠",
    "sentence": "松鼠把松果藏进树洞。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "骆",
    "pinyin": "luò",
    "word": "骆驼",
    "sentence": "骆驼在沙地上慢慢走。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "驼",
    "pinyin": "tuó",
    "word": "骆驼",
    "sentence": "骆驼在沙地上慢慢走。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "斑",
    "pinyin": "bān",
    "word": "斑马",
    "sentence": "斑马身上有黑白相间的条纹。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "象",
    "pinyin": "xiàng",
    "word": "大象",
    "sentence": "大象用长鼻子卷起一根木头。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "企",
    "pinyin": "qǐ",
    "word": "企鹅",
    "sentence": "企鹅摇摇摆摆地走向海边。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "鹅",
    "pinyin": "é",
    "word": "企鹅",
    "sentence": "企鹅摇摇摆摆地走向海边。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "豚",
    "pinyin": "tún",
    "word": "海豚",
    "sentence": "海豚从水面跃了出来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "鲸",
    "pinyin": "jīng",
    "word": "鲸鱼",
    "sentence": "鲸鱼在大海里慢慢游。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "鲨",
    "pinyin": "shā",
    "word": "鲨鱼",
    "sentence": "鲨鱼摆动尾巴向前游。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "螃",
    "pinyin": "páng",
    "word": "螃蟹",
    "sentence": "螃蟹横着走进沙洞。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蟹",
    "pinyin": "xiè",
    "word": "螃蟹",
    "sentence": "螃蟹横着走进沙洞。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "虾",
    "pinyin": "xiā",
    "word": "虾米",
    "sentence": "小鱼游过水草，看到了虾米。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "枝",
    "pinyin": "zhī",
    "word": "枝干",
    "sentence": "大树的枝干伸向天空。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "竹",
    "pinyin": "zhú",
    "word": "竹笋",
    "sentence": "春雨以后，竹笋从土里钻出来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "笋",
    "pinyin": "sǔn",
    "word": "竹笋",
    "sentence": "春雨以后，竹笋从土里钻出来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "蘑",
    "pinyin": "mó",
    "word": "蘑菇",
    "sentence": "雨后，树下长出了小蘑菇。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "菇",
    "pinyin": "gu",
    "word": "蘑菇",
    "sentence": "雨后，树下长出了小蘑菇。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "玫",
    "pinyin": "méi",
    "word": "玫瑰",
    "sentence": "花园里的玫瑰开花了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "瑰",
    "pinyin": "guī",
    "word": "玫瑰",
    "sentence": "花园里的玫瑰开花了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "菊",
    "pinyin": "jú",
    "word": "菊花",
    "sentence": "秋天的菊花开得很美丽。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "荷",
    "pinyin": "hé",
    "word": "荷花",
    "sentence": "池塘里的荷花轻轻摇动。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "池",
    "pinyin": "chí",
    "word": "池塘",
    "sentence": "小鸭子在池塘里游泳。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "塘",
    "pinyin": "táng",
    "word": "池塘",
    "sentence": "小鸭子在池塘里游泳。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "湖",
    "pinyin": "hú",
    "word": "湖泊",
    "sentence": "远处的湖泊像一面镜子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "泊",
    "pinyin": "pō",
    "word": "湖泊",
    "sentence": "远处的湖泊像一面镜子。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "溪",
    "pinyin": "xī",
    "word": "溪流",
    "sentence": "清清的溪流绕过小山。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "流",
    "pinyin": "liú",
    "word": "溪流",
    "sentence": "清清的溪流绕过小山。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "瀑",
    "pinyin": "pù",
    "word": "瀑布",
    "sentence": "瀑布从高高的山崖落下来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "布",
    "pinyin": "bù",
    "word": "瀑布",
    "sentence": "瀑布从高高的山崖落下来。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "滩",
    "pinyin": "tān",
    "word": "沙滩",
    "sentence": "小动物们在沙滩上堆城堡。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "波",
    "pinyin": "bō",
    "word": "波浪",
    "sentence": "一阵阵波浪轻轻拍着小船。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "岛",
    "pinyin": "dǎo",
    "word": "岛屿",
    "sentence": "大海中有一座绿色的岛屿。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "屿",
    "pinyin": "yǔ",
    "word": "岛屿",
    "sentence": "大海中有一座绿色的岛屿。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "彩",
    "pinyin": "cǎi",
    "word": "彩虹",
    "sentence": "雨后，天空出现了一道彩虹。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "虹",
    "pinyin": "hóng",
    "word": "彩虹",
    "sentence": "雨后，天空出现了一道彩虹。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "雷",
    "pinyin": "léi",
    "word": "雷声",
    "sentence": "远处传来轰隆隆的雷声。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "闪",
    "pinyin": "shǎn",
    "word": "闪电",
    "sentence": "闪电照亮了乌黑的天空。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "冰",
    "pinyin": "bīng",
    "word": "冰雹",
    "sentence": "冰雹落在空地上，发出轻轻的响声。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "雹",
    "pinyin": "báo",
    "word": "冰雹",
    "sentence": "冰雹落在空地上，发出轻轻的响声。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "露",
    "pinyin": "lù",
    "word": "露珠",
    "sentence": "清晨，叶子上挂着晶亮的露珠。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "伤",
    "pinyin": "shāng",
    "word": "伤心",
    "sentence": "小熊丢了玩具，有一点伤心。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "害",
    "pinyin": "hài",
    "word": "害怕",
    "sentence": "夜里听到陌生的声音，小兔有些害怕。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "怕",
    "pinyin": "pà",
    "word": "害怕",
    "sentence": "夜里听到陌生的声音，小兔有些害怕。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "担",
    "pinyin": "dān",
    "word": "担心",
    "sentence": "小熊担心小苗缺水，连忙去浇水。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "羞",
    "pinyin": "xiū",
    "word": "害羞",
    "sentence": "小兔第一次上台，有一点害羞。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "骄",
    "pinyin": "jiāo",
    "word": "骄傲",
    "sentence": "小熊为伙伴的进步感到骄傲。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "傲",
    "pinyin": "ào",
    "word": "骄傲",
    "sentence": "小熊为伙伴的进步感到骄傲。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "诚",
    "pinyin": "chéng",
    "word": "诚实",
    "sentence": "小兔是一个诚实的好伙伴。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "实",
    "pinyin": "shí",
    "word": "诚实",
    "sentence": "小兔是一个诚实的好伙伴。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "相",
    "pinyin": "xiāng",
    "word": "相信",
    "sentence": "小动物们相信合作可以完成任务。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "信",
    "pinyin": "xìn",
    "word": "相信",
    "sentence": "小动物们相信合作可以完成任务。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "愿",
    "pinyin": "yuàn",
    "word": "愿望",
    "sentence": "小兔的愿望是种出一棵大树。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "望",
    "pinyin": "wàng",
    "word": "愿望",
    "sentence": "小兔的愿望是种出一棵大树。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "希",
    "pinyin": "xī",
    "word": "希望",
    "sentence": "小熊希望明天是个晴天。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "梦",
    "pinyin": "mèng",
    "word": "梦想",
    "sentence": "小兔的梦想是乘着小船看大海。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "健",
    "pinyin": "jiàn",
    "word": "健康",
    "sentence": "经常运动可以让身体更健康。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "康",
    "pinyin": "kāng",
    "word": "健康",
    "sentence": "经常运动可以让身体更健康。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "舒",
    "pinyin": "shū",
    "word": "舒服",
    "sentence": "小熊躺在草地上，觉得很舒服。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "服",
    "pinyin": "fu",
    "word": "舒服",
    "sentence": "小熊躺在草地上，觉得很舒服。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "疲",
    "pinyin": "pí",
    "word": "疲倦",
    "sentence": "小兔走了很久，感到有些疲倦。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "倦",
    "pinyin": "juàn",
    "word": "疲倦",
    "sentence": "小兔走了很久，感到有些疲倦。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  },
  {
    "char": "精",
    "pinyin": "jīng",
    "word": "精神",
    "sentence": "睡了一觉，小熊又有精神了。",
    "emoji": "🌱",
    "group": 2,
    "advanced": true
  }
];
BASE.push(...EXPANSION);
