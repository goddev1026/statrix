import React from "react";

interface Item {
    title: string,
    data: any,
    btnContent: string
}

const GetSubSection = ({title, data, btnContent}:Item) => {
    return (<>
        <div className="w-full flex justify-center px-5">
            <div className="max-w-ir flex flex-col items-center gap-10 pb-28">
                <div className="text-center text-2xl font-exo not-italic font-semibold text-hc">
                    {title}
                </div>
                <div className="grid grid-cols-2 gap-6 smm:grid-cols-1">
                    {data.map((item:any, index:number)=>{
                        return (
                            <div className="flex max-w-gscmw rounded-lg items-center shadow-redefault" key={index}>
                            <div className="flex gap-5 pt-10 pb-12 items-center lmm:hidden">
                            <img className="max-w-gsi max-h-gsi" src={item.img} alt=""/>
                            <div className="flex flex-col gap-5 max-w-gsc justify-center">
                                <div className="not-italic font-semibold text-lg text-ic leading-rcl">
                                    {item.title}
                                </div>
                                <div className="not-italic font-normal text-lg text-hc leading-rcl">
                                    {item.content}
                                </div>
                            </div>
                            </div>
                            <div className="flex gap-5 pt-10 pb-12 items-center hidden lmm:block smm:w-80">
                            <div className="flex gap-5 max-w-gsc items-center justify-center">
                            <img className="max-w-gsli max-h-gsli" src={item.img} alt=""/>
                                <div className="not-italic font-semibold max-w-gslc text-il text-ic leading-rcl">
                                    {item.title}
                                </div>
                            </div>
                                <div className="not-italic font-normal text-il text-hc leading-rcl">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    )})}
                    </div>
                <button className="rounded w-80 h-14 flex justify-center items-center text-gsbf bg-ib text-white mdm:w-full">{btnContent}</button>
            </div>
        </div>
    </>)
}

export default GetSubSection;