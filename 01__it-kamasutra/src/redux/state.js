import renderSite from '../renderSite'

let getTimeElement = () => {
    let data = new Date()
    let day = data.getDate()
    let moth = data.getMonth()
    let hours = data.getHours()
    let min = data.getMinutes()

    if (min < 10) {
        min = '0' + min
    }

    switch (moth) {
        case 0:
            moth = 'января'
            break
        case 1:
            moth = 'февраля'
            break
        case 2:
            moth = 'марта'
            break
        case 3:
            moth = 'ареля'
            break
        case 4:
            moth = 'мая'
            break
        case 5:
            moth = 'июня'
            break
        case 6:
            moth = 'июля'
            break
        case 7:
            moth = 'августа'
            break
        case 8:
            moth = 'сентября'
            break
        case 9:
            moth = 'октября'
            break
        case 10:
            moth = 'ноября'
            break
        case 11:
            moth = 'декобря'
            break
    }

    return `${day} ${moth}, ${hours}:${min}`
}

let state = {

    userData: [
        {
            nikname: "Akenov Ruslan",
            avatar: "https://sun1.tele2-nn.userapi.com/c858324/v858324452/4fbc0/tZaKq09gMR0.jpg",
            bgImg: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
            descr: "— Веб-разработчик, веб-дизайнер и любитель посмотреть фильм вечерком с чашечкой горячего чая",
            active: 1
        },
        {
            inst: "www.instagram.com/rus_aksenov",
            email: "akseonov.ru@ya.ru",
            tel: "89527862625"
        }
    ],

    ProfilePage: {
        allPost_User: [
            {
                info:
                    `Напомню я Аксёнов Руслан, веб-разработчик
    
Привет, на связи ваш исполнитель.Могу сверстать одностраничные сайты (landing page), сайты визитки и блоги по PSD макетам. Но если макета нет могу предложить свои услуги.После моей работы сайт будет быстро загружаться и одинаково хорошо выглядеть на смартфонах, планшетах и компьютерах. Вы сможете менять содержимое и следить за поведением пользователя на сайте. При срыве сроков готов дать скидку 10% или добавить услугу за мой счёт. При небольшом бюджете могу опустить некоторые услуги.Остальные подробности обсуждаются индивидуально.

Со мной можно связаться с 12: 00 до 20: 00 по Москве
ВК
vk.com/rusaksenov (желательно)

Instagram
www.instagram.com/rusaksen0v

E-mail
akseonov-jobs@ya.ru(желательно)

Тел.
+ 7(952) 786-26-25`
                ,
                img: "https://sun9-10.userapi.com/c857136/v857136110/13e379/DHJ3uO-AlbU.jpg",
                like: 3,
                share: 23,
                bookmarks: 45,
                time: getTimeElement()

            },
            {
                info: `Сегодня праздник #Emoji`,
                img: `https://sun9-59.userapi.com/c857216/v857216130/1d9d13/aOywR_y3JGw.jpg`,
                like: 3,
                share: 23,
                bookmarks: 65,
                time: getTimeElement()
            },
            {
                info:
                    `Расписание сериала #ВнутриЛапенко2
До осени... оXP`,
                img: `https://sun9-35.userapi.com/c854528/v854528724/2459b7/uE_baI0m_mo.jpg`,
                like: 3,
                share: 23,
                bookmarks: 75,
                time: getTimeElement()
            }
        ],
        textPost: 'x'
    },

    DialogsPage: {
        allMessage: [
            {
                info: "Hello",
                author: "you",
                time: getTimeElement()
            },
            {
                info: "GoodBy",
                author: "other",
                time: getTimeElement()
            },
            {
                info: "I am Ruslan?",
                author: "you",
                time: getTimeElement()
            },
            {
                info: "I am Ruslan?",
                author: "you",
                time: getTimeElement()
            },
            {
                info: "I am Ruslan?",
                author: "you",
                time: getTimeElement()
            },
            {
                info: "No, you are Nalsur",
                author: "other",
                time: getTimeElement()
            },
            {
                info: "No, you are Nalsur",
                author: "other",
                time: getTimeElement()
            }
        ],
        allMessage_Companion: [
            {
                imgSrc: "https://avatars.mds.yandex.net/get-pdb/2366926/370c37eb-46bc-4326-b528-c36acb85fd93/s1200?webp=false",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://i.pinimg.com/originals/12/04/25/1204252254d6cfa30814f1a413da61e5.jpg",
                nikName: "Даниил Крабов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://img1.akspic.ru/fit/124491-kurenie-kostyum-muzhchina-chelovek-dzhentlmen-x750.jpg",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://img1.akspic.ru/fit/124491-kurenie-kostyum-muzhchina-chelovek-dzhentlmen-x750.jpg",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://img1.akspic.ru/fit/124491-kurenie-kostyum-muzhchina-chelovek-dzhentlmen-x750.jpg",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://img1.akspic.ru/fit/124491-kurenie-kostyum-muzhchina-chelovek-dzhentlmen-x750.jpg",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://img1.akspic.ru/fit/124491-kurenie-kostyum-muzhchina-chelovek-dzhentlmen-x750.jpg",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            },
            {
                imgSrc: "https://img1.akspic.ru/fit/124491-kurenie-kostyum-muzhchina-chelovek-dzhentlmen-x750.jpg",
                nikName: "Егор Ефремов",
                descr: "Любитель посмотреть тёплым вечером кино",
            }
        ]
    },

    NewsPage: {
        allPost_News: [
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,
            },
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,

            },
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,

            },
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,

            },
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,

            },
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,

            },
            {
                nikname: "KODштп",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,
            },
            {
                nikname: "KOD",
                avatar: "https://sun6-16.userapi.com/c855620/v855620212/160ded/5mdzQhQZ2ec.jpg?ava=1",
                info:
                    `Чтобы понять рекурсию, нужно понять рекурсию…
    #объяснялово_Код`
                ,
                img: "",
                time: getTimeElement(),
                like: 3,
                share: 23,
                bookmarks: 45,

            }
        ]
    },

    MusicPage: {
        allTreak: [
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://avatars.yandex.net/get-music-content/2373979/3839f7af.a.9103822-1/m1000x1000?webp=false",
                name: "Гнев",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            },
            {
                img: "https://cdn52.zvooq.com/pic?type=release&id=10721345&size=200x200&ext=jpg",
                name: "Тревога",
                author: "LeTai"
            }
        ]
    }

}


export let createPost = (postMessage) => {
    // debugger

    let newPost = {
        // id: 5,

        info: postMessage,
        img: "",
        like: 3,
        share: 23,
        bookmarks: 45,
        time: getTimeElement()
    }

    state.ProfilePage.allPost_User.unshift(newPost)
    // state.ProfilePage.allPost_User.push(newPost)
    renderSite(state)
}

export let createMessage = (message) => {
    let newMessage = {
        info: message,
        author: 'author',
        time: getTimeElement()
    }

    state.DialogsPage.allMessage.push(newMessage)
    renderSite(state)
}

export default state;