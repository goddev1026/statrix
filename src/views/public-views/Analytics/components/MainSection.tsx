import React from "react";
import {Images} from "constant/ImageConstant";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const MainSection = () => {
  return (
    <>
      <div className="min-h-ms bg-bg bg-cover bg-center flex flex-row justify-center items-center overflow-x-hidden">
        <div className="flex w-ir flex-row flex-wrap m-smc mr:flex-col relative">
          <div className="flex flex-1 flex-row justify-center items-center font-exo text-white max-w-het mr:justify-center mr:items-center mr:max-w-full">
            <div className="flex flex-col mr:justify-center mr:items-center mr:flex-1 mr:w-full">
              <h2 className="text-cp">
                Внутренняя аналитика Wildberries увеличит продажи и сэкономит
                вам время на анализ
              </h2>
              <p className="text-it mt-smt">
                Анализируйте эффективность вашего бизнеса на маркетплейсе по
                более чем 200 показателям
              </p>
              <button className="bg-gradient-to-r from-y-100 to-y-200 rounded w-sb p-sbp mt-lmm mr:hidden">
                Попробовать 7 дней бесплатно
              </button>
              <button className="p-sbp w-sb border-white border rounded mt-smc mr:hidden">
                Запросить демо-режим
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col hidden justify-center items-center mr:flex">
            <button className="bg-gradient-to-r from-y-100 to-y-200 rounded w-sb p-sbp mt-lmm">
              Попробовать 7 дней бесплатно
            </button>
            <button className="p-sbp w-sb border-white border rounded mt-smc">
              Запросить демо-режим
            </button>
          </div>
          <div className="flex flex-1 flex-row ml-mm justify-center items-center mr:ml-0 relative inad:justify-start">
            <span className="w-mark h-mark flex flex-row justify-center items-center border rounded-full absolute left-lb mr:left-0 mr:hidden">
              <ChevronLeftIcon className="text-white w-8 h-8" />
            </span>
            <img
              src={Images.SlideImg}
              alt="SlideImg"
              className="shadow-sImg rounded mt-mm mb-mm mr:shadow-none cap:w-smb inad:w-smb fin:max-w-test"
            />
            <img src={Images.RightImg} alt="SliderImg" className="hidden mr:block mr:absolute mr:right-sub cap:w-smb cap:left-psub inad:w-smb inad:left-psub fin:max-w-test" />
            <span className="w-mark h-mark flex flex-row justify-center items-center border rounded-full absolute right-lb mr:right-0 mr:hidden">
              <ChevronRightIcon className="text-white w-8 h-8" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
