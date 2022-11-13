/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Какой он, ваш любимый вкус в десерте?",
        ["Шоколад", "Цитрус", "Орехи", "Фрукты", "Ягоды"],
        [
            "this.score.alasnick++; this.score.pryanaya++",
            "this.score.morkov++; this.score.limonmak++",
            "this.score.alasnick++",
            "this.score.yablkor++; this.score.limonmak++; this.score.morkov++",
            "this.score.barhat++; this.score.pryanaya++"
        ]
    ],
    [
        "Как насчет карамели?",
        ["Обязательно!", "Лучше карамель с орехами, мм...", "Не хочу)"],
        [
            "this.score.morkov++; this.score.yablkor++",
            "this.score.alasnick++",
            "this.score.barhat++; this.score.limonmak++; this.score.pryanaya++"
        ]
    ],
    [
        "А что скажете про десерт с пряностями?",
        ["Интересно!", "Лучше без пряностей :)", "Люблю шоколадный с орехами)"],
        [
            "this.score.pryanaya++; this.score.morkov++; this.score.yablkor++",
            "this.score.limonmak++; this.score.barhat++",
            "this.score.alasnick++"
        ]
    ],
    [
        "Лимон, немного апельсина и белый шоколад... Как вам такое?",
        ["Супер, хочу попробовать", "Орехи всегда лучше всех))", "Мне по душе молочный шоколад :)"],
        [
            "this.score.limonmak++", 
            "this.score.alasnick++",
            "this.score.limonmak--; this.score.pryanaya++"
        ]
    ],
    [
        "Если ягодный десерт, то...",
        ["Ягоды с шоколадом!", "Классический - ягоды и крем", "Не хочу ягоды, хочу орехи!)", "Хочу цитрусовый, а не ягодный)", "Фруктовый хочу!)"],
        [
            "this.score.pryanaya++;",
            "this.score.barhat++;",
            "this.score.alasnick++; this.score.pryanaya--; this.score.barhat--",
            "this.score.limonmak++; this.score.morkov++",
            "this.score.yablkor+=2"
        ]
    ],
    [
        "Любите морковные десерты?",
        ["Да, очень!", "Ой, нет, мы бы с ягодами или фруктами)", "Хочу ореховый)"],
        [
            "this.score.morkov++", 
            "this.score.morkov--; this.score.yablkor++; this.score.barhat++; this.score.pryanaya++",
            "this.score.alasnick++; this.score.barhat--; this.score.pryanaya--"
        ]
    ],
    [
        "Что для вас привлекательнее - торт с яблоком или маковый торт (с начинкой, разумеется, а не просто с маком :) )?",
        ["Мм, с яблоком!", "С маком звучит интересно!", "Мне бы классический - с ягодами, например)", "Безусловно, орехи..."],
        [
            "this.score.yablkor++; this.score.limonmak--", 
            "this.score.limonmak+=2; this.score.yablkor--",
            "this.score.barhat++; this.score.pryanaya++",
            "this.score.alasnick++"
        ]
    ],
    [
        "Вам больше нравятся ягоды или фрукты?",
        ["Обожаю фрукты", "В восторге от ягод", "Хочу ОРЕХИ! :)"],
        [
            "this.score.yablkor++; this.score.morkov++; this.score.limonmak++", 
            "this.score.yablkor--; this.score.morkov--; this.score.limonmak--; this.score.barhat++; this.score.pryanaya++",
            "this.score.alasnick++; this.score.barhat--; this.score.pryanaya--"
        ]
    ],
    [
        "Что бы вы выбрали между лимоном и апельсином?",
        ["Лимон", "Апельсин", "Не люблю фрукты, люблю ягоды!)", "Не люблю цитрусовые, но фрукты люблю", "И всё-таки я за орехи))"],
        [
            "this.score.limonmak++; this.score.morkov--", 
            "this.score.limonmak--; this.score.morkov++",
            "this.score.barhat++; this.score.pryanaya++",
            "this.score.yablkor++",
            "this.score.alasnick++; this.score.barhat--; this.score.pryanaya--"
        ]
    ],
    [
        "Вам больше нравится кремчиз, сметанный или шоколадный крем?",
        ["Кремчиз", "Ореховый кремчиз!", "Сметанный", "Шоколадный"],
        [
            "this.score.barhat++; this.score.limonmak++; this.score.alasnick++; this.score.morkov++; this.score.yablkor++; this.score.pryanaya++", 
            "this.score.alasnick++",
            "this.score.barhat--; this.score.alasnick--; this.score.limonmak--; this.score.morkov--; this.score.yablkor--; this.score.pryanaya++", 
            "this.score.barhat--; this.score.alasnick--; this.score.limonmak--; this.score.morkov--; this.score.yablkor--; this.score.pryanaya++"
        ]
    ],
];
/* Данные для экранов результата для каждого торта */
const results = {
    'barhat': {
        name: "Красный бархат",
        description: "Классическое сочетание красных коржей с нежным кремчизом. В начинке малина или вишня, на выбор) Легкая шоколадная нотка во вкусе коржей",
        points: "7"
    },
    'alasnick': {
        name: "А-ля Сникерс",
        description: "Торт, напоминающий известный батончик. Шоколадные коржи, арахисовый кремчиз, соленый арахис и карамель в начинке, финишное покрытие - классический кремчиз",
        points: "15"
    },
    'limonmak': {
        name: "Лимон-мак",
        description: "Сочетание одновременно достаточно необычное, но всё же уже близкое к классическому) Коржи с маком, в начинке цитрусовый курд на белом шоколаде, кремчиз",
        points: "9"
    },
    'morkov': {
        name: "Морковь-апельсин",
        description: "Сочные морковные коржи, нежный кремчиз, апельсиновая начинка и взбитая карамель с грецким орехом!",
        points: "8"
    },
    'yablkor': {
        name: "Яблоко-корица",
        description: "Нежные ванильные коржи, яблочно-коричная начинка, взбитая карамель с грецким орехом в прослойке, и всё это в обрамлении из кремчиза",
        points: "10"
    },
    'pryanaya': {
        name: "Пряная вишня",
        description: "Невероятно вкусные шоколадные коржи, сочная вишня, сметанно-шоколадный крем (на темном шоколаде) с корицей и мускатным орехом, финишное покрытие - классический кремчиз или кремчиз на молочном и темном шоколаде)",
        points: "8"
    },
    'nikak': {
        name: "Таинственный тортик",
        description: "Упс, кажется, вам нравятся многие вкусы) Пишите мне, обсудим и выберем самый-самый)",
        points: "4"
    }
}