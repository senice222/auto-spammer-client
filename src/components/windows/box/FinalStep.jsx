import React, {useState} from 'react';
import style from "../../../styles/PaymentModal.module.scss";
import { Flex, Spin } from 'antd';

const FinalStep = ({setAmount, setStep}) => {

    return (
        <div className="window_content payment_window">
            <div className={style.icon}>
                <svg className={style.loading} width="50" height="50" viewBox="0 0 201 201">
                    <path
                        d="M198.999 119.479C203.058 98.0848 200.023 75.9502 190.354 56.4386C180.685 36.9271 164.911 21.1046 145.43 11.3757C125.948 1.64672 103.823 -1.45721 82.4162 2.53555C61.0097 6.52831 41.491 17.3996 26.8266 33.4975C12.1623 49.5953 3.1531 70.0402 1.16831 91.7254C-0.816488 113.411 4.33149 135.151 15.8299 153.644C27.3283 172.136 44.5491 186.37 64.8752 194.183C85.2012 201.995 107.522 202.959 128.446 196.929L122.766 177.221C106.134 182.015 88.3906 181.249 72.2333 175.039C56.0761 168.828 42.3872 157.514 33.2471 142.814C24.1069 128.114 20.0148 110.832 21.5925 93.5948C23.1702 76.3572 30.3317 60.1054 41.9884 47.3092C53.6452 34.5129 69.1606 25.8713 86.1768 22.6974C103.193 19.5236 120.78 21.9909 136.266 29.7245C151.752 37.4581 164.291 50.0354 171.977 65.5452C179.663 81.055 182.076 98.6499 178.849 115.656L198.999 119.479Z"
                        fill="#419FD9"></path>
                </svg>
            </div>
        </div>
    );
};

export default FinalStep;