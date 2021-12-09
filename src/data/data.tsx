import {AnalyticsGetSubImg, AnalyticsReasonImg, Images, AnalyticsWorkImg, AnalyticsServiceImg} from 'constant/ImageConstant'
import { CheckIcon,ArrowCircleDownIcon, StarIcon } from "@heroicons/react/solid";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/outline";

let textData:Array<Object> = [
    {
        text:"This is reusable component",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"3"
    },
    {
        text:"Детальная статистика по заказам, продажам, возвратам, отменам заказов, прибыли за любой период времени и каждому артикулу",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Точная аналитика по затратам: комиссия Wildberries, логистика и хранение",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Лидеры продаж и заказов за текущий период времени",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Тренды бизнеса на удобных графиках: продажи, заказы, возвраты, отмены заказов, логистика, прибыль в разрезе каждого склада",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Статус движения товаров по каждому артикулу в пути к клиенту и от клиента",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Общий процент выкупа по каждому бренду",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Удобные графики распределения заказов в течение дня по каждому артикулу для формирования успешных рекламных кампаний",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    }
]

let textData1:Array<Object> = [
    {
        text:"Контролируйте эффективность бизнеса и быстро реагируйте на изменения ",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"1"
    },
    {
        text:"Детальная статистика по заказам, продажам, возвратам, отменам заказов, прибыли за любой период времени и каждому артикулу",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Точная аналитика по затратам: комиссия Wildberries, логистика и хранение",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Лидеры продаж и заказов за текущий период времени",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Тренды бизнеса на удобных графиках: продажи, заказы, возвраты, отмены заказов, логистика, прибыль в разрезе каждого склада",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Статус движения товаров по каждому артикулу в пути к клиенту и от клиента",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Общий процент выкупа по каждому бренду",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Удобные графики распределения заказов в течение дня по каждому артикулу для формирования успешных рекламных кампаний",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    }
]

let textData2:Array<Object> = [
    {
        text:"Формируйте оптимальный ассортимент из ваших товаров",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"2"
    },
    {
        text:"Детальный ABC-анализ позволит определить товары приносящие 80%, 15% и 5% от общей выручки",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Гибкая фильтрация по продажам, заказам, выкупам и прибыли позволит выбрать лучшие артикулы",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Сортировка по возвратам позволит найти артикулы и размеры с наибольшим браком",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Динамика роста и упущенная выручка позволят выбрать товары с самым большим потенциалом",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Уникальный рейтинг артикулов по методологии Statrix",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Удобные настраиваемые в 1 клик таблицы с аналитикой",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
]

let textData3:Array<Object> = [
    {
        text:"Поддерживайте запасы и планируйте поставки с учетом реального спроса",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"3"
    },
    {
        text:"Детальная статистика по остаткам каждого артикула и размера в разрезе складов",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Уникальный инструмент расчета необходимого количества товара для поставки ",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Точный прогноз наступления дефицита товара по каждому артикулу и размеру в разрезе складов",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Статус движения товаров по каждому артикулу и размеру в пути и от клиента",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Расчет реального спроса и возвратов по каждому артикулу и размеру в разрезе складов",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Удобные настраиваемые в 1 клик таблицы с аналитикой, фильтрами и сортировками",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
]

let textData4:Array<Object> = [
    {
        text:"Выбирайте склады для поставок с наибольшим спросом",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"4"
    },
    {
        text:"Объемы и доли продаж по каждому артикулу в разрезе округов и областей",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Сорировка артикулов по округам и областям с наибольшим спросом",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Удобные карты покрытия складами регионов РФ для выбора наиболее оптимального варианта",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
]

let textData5:Array<Object> = [
    {
        text:"Контролируйте расходы на логистику и хранение",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"5"
    },
    {
        text:"Детальные расходы на логистику с учетом габаритов по каждому артикулу и периоду времени",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Точный мониторинг расходов, чтобы маркетплейс не списал с вашего бренда лишние деньги",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Аналитика расходов на логистику и хранение на единицу товара в разрезе всех складов ",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Настраиваемые в 1 клик таблицы с аналитикой, фильтрами и сортировками",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
]

let textData6:Array<Object> = [
    {
        text:"Выявляйте причины падения продаж, ищите стимулы роста заказов",
        icon:<ArrowCircleDownIcon className="h-5 w-8 text-blue-500" />,
        num:"6"
    },
    {
        text:"Графики продаж, заказов прибыли и цены для формирования оптимальной цены",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Анализ причин падения продаж, заказов или прибыли",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
    {
        text:"Графики продаж, заказов прибыли и скидок для формирования скидочной политики",
        icon:<CheckIcon className="h-5 w-8 text-blue-500" />
    },
]


let ReasonTextData:Array<Object> = [
    {
        img: AnalyticsReasonImg.VectorImg,
        title: "Разумная цена",
        content: "Самая полная база необходимых отчетов внутренней аналитики WIldberries по разумной цене от 900 руб/мес."
    },
    {
        img: AnalyticsReasonImg.InterfaceImg,
        title: "Дружелюбный интерфейс",
        content: "Признанный пользователями удобный и интуитивно понятный веб-интерфейс сервиса с обучающими материалами"
    },
    {
        img: AnalyticsReasonImg.EconomyImg,
        title: "Экономия денег",
        content: "Уникальный функционал сервиса, который позволит увеличить ваши продажи и сэкономит Вам время и деньги на личных аналитиков",
    },
    {
        img: AnalyticsReasonImg.SupportImg,
        title: "Постоянная поддержка",
        content: "Быстрая техническая поддержка, которая Вам поможет в самый нужный момент"
    }
]

let GetSubTextData:Array<Object> = [
    {
        img: AnalyticsGetSubImg.img1, 
        title: "Бесплатные аналитики к вам в бизнес",
        content: "Бесплатно 2 рабочих часа наших аналитиков, каждому пользователю, оплатившему доступ к платформе Statrix"
    },
    {
        img: AnalyticsGetSubImg.img2, 
        title: "Дополнительная экспертиза для развития вашего бизнеса",
        content: "Детальные рассылки многостраничных отчетов с полной аналитикой по Вашему бизнесу (доступно с момента регистрации)"
    },
    {
        img: AnalyticsGetSubImg.img3,
        title: "Обучение и поддержка",
        content: "Эксклюзивные обучающие материалы для пользователей, оплативших доступ к платформе, для поиска точек роста продаж"
    },
    {
        img:AnalyticsGetSubImg.img4,
        title: "Уведомления с рекомендациями  в чат-боте",
        content: "Еждневные уведомления о состоянии вашего бизнеса. Теперь вы не пропустите ничего важного! (доступно с момента регистрации)"
    },
]

let HowWorkTextData:Array<Object> = [
    {
        img:AnalyticsWorkImg.img1,
        content: "После регистрации, в личном кабинете вводите API-ключ",
    },
    {
        img: AnalyticsWorkImg.img2,
        content: "Платформа собирает и анализирует данные вашего бизнеса",
    },
    {
        img: AnalyticsWorkImg.img3,
        content: "Формируется аналитика по показателям вашего бизнеса в удобном виде"
    }
]

let ServiceTextData:Array<Object> = [
    {
        semi: AnalyticsServiceImg.semi,
        star: <StarIcon className="text-is w-6 h-6 hover:border-isb hover:border-2"/>,
        content: "Хочу поблагодарить команду Statrix за прекрасный сервис аналитики! Благодаря платформе, я могу отслеживать, какие регионы заказывают товар и через какой период времени он будут выкуплен! Это прям пушка (для меня точно)! Statrix также позволяет мониторить отмены, возвраты товаров, следить за остатками и прогнозировать необходимое количество поставок товаров на склады. Спасибо Вам за сервис !",
        subtitle: "Юлия",
        subContent: "Категория “Посуда и инвентарь”"
    },
    {
        semi: AnalyticsServiceImg.semi,
        star: <StarIcon className="text-is w-6 h-6 hover:border-isb hover:border-2" />,
        content: 'Я пользуюсь разделами "Текущая ситуация", "Остатки" и "Склады". Круто, что можно посмотреть какие размеры самые ходовые и откуда больше всего продаж. Хорошо, что есть расчеты комиссии вб, логистики и хранения. И самое главное можно посмотреть чистую прибыль. В модуле "Линейка продуктов" сейчас очень много показателей эффективности бизнеса, что затрудняет анализ. Дополнительной ценностью сервиса является возможность отслеживать возвраты, многие мои знакомые зарегистрировались на Statrix по этой причине. Спасибо!',
        subtitle: 'Людмила',
        subContent: "Категория “Платья и костюмы”"
    }
]

export const IntroData:{img:string,textData:Array<Object>, textData1:Array<Object>, textData2:Array<Object>, textData3:Array<Object>, textData4:Array<Object> , textData5:Array<Object>, textData6:Array<Object>} = {
    img:Images.image,
    textData:textData,
    textData1:textData1,
    textData2:textData2,
    textData3:textData3,
    textData4:textData4,
    textData5:textData5,
    textData6:textData6,
    
}

export const ReasonData:{title:string, textData:Array<Object>}={
    title: "Почему вам стоит попробовать внутреннюю аналитику Statrix",
    textData: ReasonTextData
}

export const GetSubData:{title:string, textData:Array<Object>, btnContent:string} = {
    title: "Что еще вы получаете с подпиской на StatriX",
    textData: GetSubTextData,
    btnContent: "Попробовать 7 дней бесплатно" 
}

export const HowWorkData:{title:string, textData:Array<Object>, btnContent:string, arrow1:string, arrow2:string}={
    title: "Принцип работы аналитики",
    textData: HowWorkTextData,
    btnContent: "Попробовать 7 дней бесплатно",
    arrow1: AnalyticsWorkImg.img4,
    arrow2: AnalyticsWorkImg.img5
}

export const ServiceData:{title:string, textData:Array<Object>, ArrowLeftIcon:any, ArrowRightIcon:any, bCircle:string, ls:string, rs:string} = {
    title: "Наши пользователи о нас",
    textData: ServiceTextData,
    ArrowLeftIcon: <ArrowLeftIcon className="w-14 h-14 text-red-800"/>,
    ArrowRightIcon: <ArrowRightIcon className="w-14 h-14 text-red-800"/>,
    bCircle: AnalyticsServiceImg.bCircle,
    ls: AnalyticsServiceImg.ls,
    rs: AnalyticsServiceImg.rs,
    
}