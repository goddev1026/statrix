import React from "react";

const RateSection = () => {
    return (<>
        <div className = "w-screen flex justify-center px-5">
            <div className="max-w-ir flex-col justify-center items-center">
            <div className = "text-center text-2xl font-exo not-italic font-semibold text-hc">
                Тарифы           
             </div>
             <div className="flex gap-36 lgsm:flex-col vsm:pl-6 xlsm:gap-5 items-center">
                  <div className="pt-78 flex-col max-w-793">
                      <div className="flex justify-end mb-1 "> 
                        <button className="text-white bg-rbc w-83 h-30 rounded-100 ">Скоро</button>
                      </div>
                        <div className="flex smm:flex-col smm:items-start pb-2">
                            <div className="not-italic font-semibold text-ic leading-rcl">
                                Выберите продукт:
                            </div>
                            <div className="flex smm:flex-col smm:gap-4 smm:pt-4 smm:-ml-8">
                                <div className="flex items-center">
                                <input type="checkbox" className="ml-32 w-6 h-6 box-border" />
                                <div className="not-italic ml-2 font-normal font-icf leading-rcl">Внутренняя аналитика</div>
                                </div>
                                <div className="flex items-center">
                                <input type="checkbox"  className="ml-32 w-6 h-6 box-border" />
                                <div className="not-italic ml-2 font-normal font-icf leading-rcl">Конкурентный анализ</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex p-pr box-border rounded-10 border-1">
                                <div className="text-2xl text-hc font-exo smm:text-base">Предполагаемая выручка</div>
                                <span className="flex-1"></span>
                                <div className="text-2xl text-hc font-exo smm:text-base">350 000 ₽</div>
                            </div>
                        </div>
                        <div className="text-lg text-isc font-exo">
                        Предварительный расчёт
                        </div>
                        <div className="pt-4 font-exo font-normal text-xl leading:rcl">
                        У нас гибкое ценообразование: цена зависит от ежемесячной выручки. Учитывается выручка после комиссии маркетплейса на момент оплаты. Если в течение оплаченного периода она увеличивается, цена не меняется
                        </div>
                        <button className="mt-10 rounded w-308 h-50 flex justify-center  items-center text-gsbf bg-ib text-white lgsm:hidden">Попробовать 7 дней бесплатно</button>
                  </div>
                  <div className="flex flex-col justify-end gap-10 xlsm:items-center min-w-285">
                      <div>
                        <div className="text-rtc text-28 font-exo font-bold leading:rsl">Месячный</div>
                        <div className="text-hc font-normal text-2xl font-exo">1 990 ₽ (1 990 ₽/мес.)</div>
                        </div>
                        <div>
                        <div className="text-rtc text-28 font-exo font-bold leading:rsl">На 6 месяцев</div>
                        <div className="text-hc font-normal text-2xl font-exo">11 350 ₽ (1 890 ₽/мес.)</div>
                        </div>
                        <div>
                        <div className="text-rtc text-28 font-exo font-bold leading:rsl">Месячный</div>
                        <div className="text-hc font-normal text-2xl font-exo">21 500 ₽ (1 791 ₽/мес.)</div>
                        </div>
                  </div>
                  <button className=" hidden mt-10 rounded w-308 h-50 justify-center items-center text-gsbf bg-ib text-white lgsm:flex">Попробовать 7 дней бесплатно</button>
                </div>
            </div>
        </div>
    </>);
}

export default RateSection;