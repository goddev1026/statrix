import React from "react";
import {Images} from "constant/ImageConstant";

const FooterCom = () => {
  return (
    <>
      <div className="bg-white flex flex-row justify-center">
        <div className="w-ir flex flex-col items-center font-exo m-smc">
          <div className="flex w-full flex-row justify-end border-b pb-3 mb-smt fb:order-1 mbe:flex-col mbe:justify-center mbe:items-center mbe:pt-3">
            <span className="text-center">Оствайтесь в курсе наших новостей</span>
            <div className="flex flex-row items-center flex-wrap gap-x-2 ml-ssm mbe:mt-4 mbe:mb-4">
              <img src={Images.Discord} alt="Discord" />
              <img src={Images.Youtube} alt="Discord" />
              <img src={Images.Telegram} alt="Discord" />
            </div>
          </div>
          <div className="flex w-full flex-row border-b pb-5 fb:order-0 mbe:flex-col mbe:justify-center mbe:items-center">
            <div className="flex flex-col flex-wrap justify-center items-start font-exo text-ff mbe:items-center mbe:justify-center mbe:border-b mbe:pb-5 mbe:mb-5 mbe:w-full">
              <img alt="logo" src={Images.Logo} />
              <span className="mt-smt">+7 968 670 12 54</span>
              <span>statrix-manager@gmail.com</span>
              <span className="mt-smt">@statrix</span>
            </div>
            <div className="flex flex-row flex-wrap ml-sg gap-x-75 gap-y-8 mbe:flex-col mbe:items-center mbe:justify-center mbe:-ml-0">
              <div className="flex flex-col flex-wrap mbe:items-center mbe:justify-center">
                <span>Главная</span>
                <span className="mt-smc">Блог</span>
              </div>
              <div className="flex flex-col flex-wrap mbe:items-center mbe:justify-center">
                <span>Наши продукты</span>
                <span className="mt-smc">Внутренняя аналитика</span>
                <span>Конкурентный анализ</span>
              </div>
              <div className="flex flex-col flex-wrap mbe:items-center mbe:justify-center">
                <span>Доп. услуги</span>
                <span className="mt-smc">Консалтинг</span>
                <span>SEO оптимизация</span>
              </div>
              <div className="flex flex-col flex-wrap mbe:items-center mbe:justify-center">
                <span>О компании</span>
                <span className="mt-smc">О нас</span>
                <span>Контакты</span>
              </div>
            </div>
          </div>
          <div className="text-ff flex flex-row justify-start w-full pb-5 pt-5 text-fff fb:order-2 mbe:flex-col mbe:justify-center mbe:items-center">
            <span className="text-center mbe:flex-col mbe:justify-center mbe:items-center mbe:order-1 mbe:mt-5">©2021 StatriX. Аналитика и статистика продаж. Все права защищены.</span>
            <span className="flex-1"></span>
            <div className="flex flex-row flex-wrap gap-x-5 mbe:flex-col mbe:justify-center mbe:items-center mbe:order-0">
                <span className="mbe:order-1">Договор-оферта</span>
                <span className="mbe:order-0">Политика конфиденциальности</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCom;
