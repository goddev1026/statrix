import React from 'react';
import IntroSection from './components/IntroSection';
import {IntroData} from 'data/data';
import { ReasonData, GetSubData, HowWorkData, ServiceData } from 'data/data';
import ReasonSection from './components/ReasonSection';
import GetSubSection from './components/GetSubSecction';
import HowWork from './components/HowWork';
import ServiceSection from './components/ServiceSection';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import RateSection from './components/RateSection';
import MainSection from 'views/public-views/Analytics/components/MainSection';


const AnalyticsView = () => {
    return (
        <>
            <MainSection/>
            {/* <IntroSection order="0" img={IntroData.img} data={IntroData.textData} /> */}
            <IntroSection order="0" img={IntroData.img} data={IntroData.textData1} />
            <IntroSection order="1" img={IntroData.img} data={IntroData.textData2} />
            <IntroSection order="0" img={IntroData.img} data={IntroData.textData3} />
            <IntroSection order="1" img={IntroData.img} data={IntroData.textData4} />
            <IntroSection order="0" img={IntroData.img} data={IntroData.textData5} />
            <IntroSection order="1" img={IntroData.img} data={IntroData.textData6} />
            
            <GetSubSection title={GetSubData.title} btnContent={GetSubData.btnContent} data={GetSubData.textData} />
            <ReasonSection title={ReasonData.title} data={ReasonData.textData} />
            <RateSection />
            <HowWork title={HowWorkData.title} data={HowWorkData.textData} btnContent={HowWorkData.btnContent} arrow1={HowWorkData.arrow1} arrow2={HowWorkData.arrow2}/>
            <ServiceSection title={ServiceData.title} data={ServiceData.textData}  ArrowLeft={ArrowLeftIcon} ArrowRight={ArrowRightIcon} bCircle={ServiceData.bCircle} ls={ServiceData.ls} rs={ServiceData.rs}/>
        </>
    );
}

export default AnalyticsView;