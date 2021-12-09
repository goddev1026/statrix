import React from "react";
import {Images} from "constant/ImageConstant";
import { MenuAlt1Icon,WifiIcon } from "@heroicons/react/outline";

const HeaderCom = () => {
  return (
    <>
      <header className="flex flex-row items-center justify-center bg-white min-header">
        <div className="w-ir flex flex-row items-center font-exo m-smc">
          <div className="flex flex-col w-full">
            <div className="flex mb-8 flex-row px-5 hidden hb:flex">
                <div>
                    9:41
                </div>
                <span className="flex-1 hidden hb:flex"></span>
                <div className="flex flex-row items-center flex-wrap gap-x-1">
                    <WifiIcon className="w-5 h-5" />
                    <img alt="Battery" src={Images.Battery} />
                    <img alt="Mobile" src={Images.Mobile} />
                </div>
            </div>
            <div className="flex flex-row items-center">
              <img alt="Header Logo" src={Images.Logo} />
              <span className="hidden flex-1 hb:block"></span>
              <div className="flex flex-wrap ml-sg gap-x-44 hb:hidden">
                <span className="font-bold text-hf relative border-b border-bt">Внутренняя аналитика</span>
                <span className="text-hf relative">Конкурентный анализ<span className="absolute bg-spg text-white right-ms p-vp h-mah flex flex-row items-center rounded-full top-mw">Скоро</span></span>
                <span className="text-hf relative">Тарифы</span>
                <span className="text-hf relative">Доп. услуги</span>
                <span className="text-hf relative">О компании</span>
                <span className="text-hf relative">Блог</span>
              </div>
              <button className="ml-sg bg-gradient-to-r from-y-100 to-y-200 text-white p-hb rounded hb:-ml-0">
                Войти
              </button>
              <MenuAlt1Icon className="w-8 h-8 ml-smm hidden hb:block" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderCom;
