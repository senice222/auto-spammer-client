import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    CLOSE_WINDOW,
    DELETE_FROM_NUMBER_LIST,
    DELETE_NUMBER,
    SELECT_NUMBER_FROM_LIST,
    SET_NUMBER_DATA
} from '../../../reducers/types';
import GetFirstPhone from '../../queries/GetFirstPhone';
import Flag from 'react-world-flags';
import {Dropdown, notification} from "antd";
import {GetNumber} from "../../panel/GetNumber";
import DeleteNumberQuery from "../../queries/DeleteNumberQuery";
import UpdateData from "../../handlers/UpdateData";


const ListNumbers = () => {
    const number_list = useSelector(state => state.app.number_list);
    const user_data = useSelector(state => state.app.user_data);
    const [isOpened, setOpened] = useState(false)
    const [activePhone, setActivePhone] = useState(false)


    const dispatch = useDispatch();

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
            return <div style={{width: '25px', height: 'auto', margin: '0 7px'}}>
                <Flag code={region} />
            </div>
        }

        return <div style={{width: '35px', height: 'auto', margin: '0 7px'}}>
            <div style={{backgroundColor: 'rgba(123, 123, 123, 0.8)',
            width: '100%', height: '23px'}}></div>
        </div>
    };
    const deleteNumber = (id) => {
        setActivePhone(id)
        console.log(id)
        setOpened(true)
    }
    const DeleteNumber = async () => {
        await DeleteNumberQuery(user_data.id, activePhone.id, activePhone.number).then(data => {
            localStorage.removeItem("current_tab")
            dispatch({ type: DELETE_FROM_NUMBER_LIST, payload: activePhone.id })
            dispatch({ type: DELETE_NUMBER })
            UpdateData(user_data, dispatch)
        })
        notification.success({
            message: 'Вы успешно удалили номер телефона.',
            duration: 2.5,
            style: {
                fontFamily: "Montserrat-Medium",
            }
        });
    }
    return (
        <>
            {isOpened ? <div className="window_block">
                <div style={{width: '300px'}} className={'window_content'}>
                    <h2>Вы уверены, что хотите удалить?</h2>
                    <div className={'dvadiva'}>
                        <p onClick={DeleteNumber} className={"div1337228666"}>
                            Да
                        </p>
                        <p onClick={() => setOpened(false)} className={"div1337228666"}>
                            Отмена
                        </p>
                    </div>
                </div>
            </div> : null}
        <div style={{ height: '500px' }} className="window_content">
            {Object.keys(groupedNumbers).map(region => (
                <div key={region}>
                    {groupedNumbers[region].map(n => (
                        <p key={n.id} onClick={() => selectNumber(n.id, n.number, n.region, n.sub_active)}>
                            <div className={"div1337228666"}>
                                {renderFlag(n.region)} <GetNumber n={n.number}/>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Dropdown
                                    className="custom-dropdown"
                                    menu={{
                                        items : [{
                                            key: '1',
                                            label: (
                                                <div onClick={(e) => {
                                                    e.stopPropagation()
                                                    deleteNumber(n)
                                                }}>Удалить номер</div>
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
                                <div style={{width: '15px', height: '15px', borderRadius: '50%', backgroundColor: n.sub_active === 1 ? 'green' : '#9c1111'}}></div>
                            </div>
                        </p>
                    ))}
                </div>
            ))}
        </div>
        </>
    );
};

export default ListNumbers;
