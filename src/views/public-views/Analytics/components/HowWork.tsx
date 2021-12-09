import React from "react";

interface Item {
    title: string,
    data: any,
    btnContent: string,
    arrow1: string,
    arrow2: string
}

const HowWork = ({title, data, btnContent, arrow1, arrow2}:Item) => {
    return (<>
        <div className="w-full flex justify-center">
            <div className = "max-w-ir pt-32 flex flex-col items-center justify-center gap-10 pb-28 px-5">
                <div className="text-center text-2xl font-exo not-italic font-semibold text-hc">
                    {title}
                </div>
                <div className="flex gap-5 relative mdm:flex-col mdm:gap-20">
                        {data.map((item:any, index:number)=> {
                            return (<>
                                <div className="flex max-w-hwc flex-col items-center gap-5" key={index}>
                                    <img className="max-w-hwi" src={item.img} alt="" />
                                    <div className="px-2 text-it font-exo text-center tracking-hwt">{item.content}</div>
                                </div>
                            </>)
                        })}
                        <img className="absolute mt-8 ml-hwa1 lgm:ml-hwa1l mdm:ml-hwa1m w-32 mdm:hidden" src={arrow1} alt="" />
                        <img className="absolute mt-8 ml-hwa2 w-32 lgm:ml-hwa2l mdm:hidden lmm:ml-hwa1lm" src={arrow1} alt="" />
                        <img className="absolute hidden mdm:block max-h-10 ml-hwa3 mt-180" src={arrow2} alt=""/>
                        <img className="absolute hidden mdm:block max-h-10 ml-hwa3 mt-hwa4 vsm:mt-hwa5" src={arrow2} alt=""/>
                </div>
                <button className="rounded w-80 h-14 flex justify-center items-center text-gsbf bg-ib text-white mdm:w-full">{btnContent}</button>
            </div>  
        </div> 
    </>);
}

export default HowWork;