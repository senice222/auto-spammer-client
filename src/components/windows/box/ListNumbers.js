import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CLOSE_WINDOW, SELECT_NUMBER_FROM_LIST, SET_NUMBER_DATA} from '../../../reducers/types';
import GetFirstPhone from '../../queries/GetFirstPhone';
import Flag from 'react-world-flags';
import {Dropdown} from "antd";


const ListNumbers = () => {
    const number_list = useSelector(state => state.app.number_list);
    const user_data = useSelector(state => state.app.user_data);
    const dispatch = useDispatch();
    console.log(number_list)

    const selectNumber = (id, number, region, sub_active) => {
        GetFirstPhone(user_data.id, id).then(data => dispatch({ type: SET_NUMBER_DATA, payload: data }));
        dispatch({ type: SELECT_NUMBER_FROM_LIST, payload: { id, number, region, sub_active } });
        dispatch({ type: CLOSE_WINDOW });
    };

    const sortedNumbers = number_list.slice().sort((a, b) => {
        if (a.region && b.region) {
            return a.region.localeCompare(b.region);
        } else if (a.region) {
            return -1;
        } else if (b.region) {
            return 1;
        }
        return 0;
    });

    const groupedNumbers = sortedNumbers.reduce((acc, num) => {
        const region = num.region || 'Unknown';
        if (!acc[region]) {
            acc[region] = [];
        }
        acc[region].push(num);
        return acc;
    }, {});

    const renderFlag = (region) => {
        if (region) {
            return <div style={{width: '35px', height: 'auto', margin: '0 7px'}}>
                <Flag code={region} />
            </div>
        }

        return <div style={{width: '35px', height: 'auto', margin: '0 7px'}}>
            <div style={{backgroundColor: 'rgba(123, 123, 123, 0.8)',
            width: '100%', height: '23px'}}></div>
        </div>
    };

    return (
        <div style={{ height: '500px' }} className="window_content">
            {Object.keys(groupedNumbers).map(region => (
                <div key={region}>
                    {groupedNumbers[region].map(n => (
                        <p key={n.id} onClick={() => selectNumber(n.id, n.number, n.region, n.sub_active)}>
                            <div className={"div1337228666"}>
                                {renderFlag(n.region)} {n.number}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Dropdown
                                    className="custom-dropdown"
                                    menu={{
                                        items : [{
                                            key: '1',
                                            label: (
                                                <div>Удалить номер</div>
                                            ),
                                        },
                                            // {
                                            //     key: '2',
                                            //     label: (
                                            //         <div>Купить подписку</div>
                                            //     ),
                                            //     disabled: !!n.sub_active
                                            // },
                                        ],
                                    }}
                                >
                                    <div onClick={(e) => e.stopPropagation()} className={'knopo4ka'}>⁝</div>
                                </Dropdown>
                                <div style={{width: '15px', height: '15px', borderRadius: '50%', backgroundColor: n.sub_active === 1 ? 'green' : 'red'}}></div>
                            </div>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ListNumbers;
