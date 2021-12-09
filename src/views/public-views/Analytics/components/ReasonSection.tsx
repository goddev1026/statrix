import React from "react";
interface Item {
    title: string,
    data: any
}

const ReasonSection = ({title, data}:Item) => {
    return <>
        <div className = "w-screen flex justify-center px-5">
            <div className="max-w-ir flex-col justify-center items-center">
                    <div className = "text-center text-2xl font-exo not-italic font-semibold text-hc">
                        {title}
                    </div>
                    <div className="pt-10 justify-center gap-5 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:justify-center">
                    {data.map((item:any, index:number)=>{
                        return (
                            <div className = "flex justify-center" key={index}>
                            <div className="max-w-rcw py-8 px-5 rounded-lg shadow-redefault flex flex-col items-center smm:px-2">
                                <img className="w-rci h-rci " src={item.img} alt=""/>
                                <div className="max-w-rscw flex flex-col items-center">
                                <div className="text-lg font-exo text-ric text-center not-italic font-semibold leading-rsl pt-rspt pb-2">
                                    {item.title}
                                </div>
                                <div className="text-base font-exo max-w-rscw not-italic text-center font-normal flex leading-rcl">
                                    {item.content}
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                   
                    
                    </div>
            </div>
        </div>
    </>
}

export default ReasonSection;