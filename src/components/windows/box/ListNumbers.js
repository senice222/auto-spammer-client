import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_WINDOW, SELECT_NUMBER_FROM_LIST, SET_NUMBER_DATA } from '../../../reducers/types';
import GetFirstPhone from '../../queries/GetFirstPhone';
import Flag from 'react-world-flags';

const ListNumbers = () => {
    const number_list = useSelector(state => state.app.number_list);
    const user_data = useSelector(state => state.app.user_data);
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
        if (region !== 'Unknown') {
            return <Flag code={region} />;
        }
        return null;
    };

    return (
        <div style={{ height: '500px' }} className="window_content">
            {Object.keys(groupedNumbers).map(region => (
                <div key={region}>
                    <div style={{ width: '70px', height: 'auto', margin: '10px 0px' }}>
                        {renderFlag(region) || <span>Unknown</span>}
                    </div>
                    {groupedNumbers[region].map(n => (
                        <p key={n.id} onClick={() => selectNumber(n.id, n.number, n.region, n.sub_active)}>
                            {n.number} {n.sub_active ? '✔️' : ''}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ListNumbers;
