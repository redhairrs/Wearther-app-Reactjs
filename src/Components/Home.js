import React from 'react';
import WeekInfoCardComponents from './WeekInfoCard';
import ChooseStateComponents from './ChooseState';
import HumidityComponents from './HUMIDITY';
import LeftComponents from './Left';

import { UseWeatherAppContext } from '../Context/Context';

export default function HomeComponents() {
    return (
        <>
            <div className='homeWrap' style={{backgroundImage:`url('https://source.unsplash.com/1600x900/?${city.city}')`}}>
                <div className='weatherSection'>
                    <LeftComponents />
                    <div className='rightSide'>
                        <ChooseStateComponents />
                        <WeekInfoCardComponents />
                        <HumidityComponents />
                    </div>
                </div>
            </div>
        </>
    )
}


