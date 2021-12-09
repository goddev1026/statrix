import React from "react";

interface Item {
    title: string,
    data: any,
    ArrowLeft: any,
    ArrowRight: any,
    bCircle: string,
    ls: string,
    rs: string,
}

const ServiceSection = ({title, data,  ArrowLeft, ArrowRight, bCircle, ls, rs}:Item) => {
    return (<>
        <div className="w-full bg-sbg bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div className="max-w-ir pt-24 flex flex-col items-center justify-center gap-10 pb-28 px-5">
            <div className="text-center text-2xl font-exo not-italic font-semibold text-hc">
                {title}
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 gap-14 lmm:grid-cols-1">
                        <div className="flex gap-5 max-w-xl lmm:flex-col lmm:gap-1">
                            <img className="w-20 h-20 lmm:hidden" src={bCircle} alt=""></img>
                            <div className="hidden lmm:flex">
                            <img className="w-20 h-20" src={bCircle} alt=""></img>
                            <img className="w-7 h-6 ml-2" src={data[0].semi} alt="" />
                                <span className="flex-1"></span>
                                <div className="flex pt-4">
                                    {data[0].star}{data[0].star}{data[0].star}{data[0].star}{data[0].star}
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex">
                                <img className="w-9 h-8 lmm:hidden" src={data[0].semi} alt="" />
                                <span className="flex-1 lmm:hidden"></span>
                                <div className="flex pt-4 lmm:hidden">
                                    {data[0].star}{data[0].star}{data[0].star}{data[0].star}{data[0].star}
                                </div>
                                </div>
                                <div className=" text-it font-exo tracking-hwt">
                                    {data[0].content}
                                </div>
                                <div className="text-2xl font-bold">
                                    {data[0].subtitle}
                                </div>
                                <div className="text-isc font-exo tracking-hwt">
                                    {data[0].subContent}
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-5 max-w-xl lmm:hidden">
                            <img className="w-20 h-20 lmm:hidden" src={bCircle} alt=""></img>
                            <div className="hidden lmm:flex">
                            <img className="w-20 h-20" src={bCircle} alt=""></img>
                            <img className="w-7 h-6 ml-2" src={data[1].semi} alt="" />
                                <span className="flex-1"></span>
                                <div className="flex pt-4">
                                    {data[1].star}{data[1].star}{data[1].star}{data[1].star}{data[1].star}
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex">
                                <img className="w-9 h-8 lmm:hidden" src={data[1].semi} alt="" />
                                <span className="flex-1 lmm:hidden"></span>
                                <div className="flex pt-4 lmm:hidden">
                                    {data[1].star}{data[1].star}{data[1].star}{data[1].star}{data[1].star}
                                </div>
                                </div>
                                <div className=" text-it font-exo tracking-hwt">
                                    {data[1].content}
                                </div>
                                <div className="text-2xl font-bold">
                                    {data[1].subtitle}
                                </div>
                                <div className="text-isc font-exo tracking-hwt">
                                    {data[1].subContent}
                                </div>
                            </div>
                        </div>
                        <div className="lmm:flex flex-col hidden">
                        <span className="border-1 w-1/3 border-cnb"></span>
                        <span className="border-1 w-full border-ls"></span>
                        </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        </div>
        <div className="flex flex-col items-center gap-10 px-5 -mt-32 pb-6">
        <div className="pt-32 text-center text-2xl font-exo not-italic font-semibold text-hc">Нам доверяют уже более 500 брендов</div>
            <button className="rounded w-80 vsm:w-full h-14 flex justify-center items-center text-gsbf bg-ib text-white">Попробовать 7 дней бесплатно</button>
        </div>
    </>);
}

export default ServiceSection;