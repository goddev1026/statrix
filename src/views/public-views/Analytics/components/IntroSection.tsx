import React from "react";

interface Item {
  img: any;
  order: string;
  data: any;
}

const IntroSection = ({ img, data, order }: Item) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-ir m-row flex flex-col px-5 pb-24">
          <div className="flex flex-row">
            <span className={`w-wsp flex order-${order} ei:hidden`}></span>
            <span className="flex-1 hidden ei:block"></span>
            <div
              className={
                order === "1"
                  ? "flex-1 ei:flex-none mb-smm"
                  : "flex-1 ei:flex-none mb-smm"
              }
            >
              <button className="w-ib rounded-full p-ip text-white bg-gradient-to-r from-gp-200 to-gp-100 font-exo">
                Отчет “Сводная аналитика”
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ei:flex-col">
            <img src={img} alt="Intro" className={`order-${order}`} />
            <div className={order==="1" ? "flex flex-col ei:m-0 ei:order-1 mr-mm" : "flex flex-col ei:m-0 ei:order-1 ml-mm"}>
              {data.map((item: any, index: number) => {
                return item.num ? (
                  <p className="flex items-center mt-smm font-exo text-ic" key={index}>
                    <span className="mr-ssm border rounded-full p-cp border-cnb">
                      {item.num}
                    </span>
                    {item.text}
                  </p>
                ) : (
                  <p className="mt-smc font-exo text-it flex" key={index}>
                    <span className="mt-1 mr-sm">{item.icon}</span>
                    <span>{item.text}</span>
                  </p>
                );
              })}
              <div className="mi:flex m-smc flex-row justify-center items-center">
                <button className="w-ib rounded p-is mt-lm text-white bg-ib font-exo">
                  Отчет “Сводная аналитика”
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
