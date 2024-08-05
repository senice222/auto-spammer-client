import {useDispatch, useSelector} from 'react-redux';
import ListNumbers from './box/ListNumbers';
import {CLOSE_WINDOW} from '../../reducers/types';
import ChangeInterval from './box/ChangeInterval';
import TypesMailing from './box/TypesMailing';
import HeaderWindow from './HeaderWindow';
import AddAccount from './box/AddAccount';
import DeleteNumber from './box/DeleteNumber';
import SMSCodeWindow from './box/SMSCodeWindow';
import PaymentWindow from './box/PaymentWindow';
import SubscriptionWindow from './box/SubscriptionWindow';
import SubscriptionSuccessWindow from './success_box/SubscriptionSuccessWindow';
import NoMoneyWindow from './box/NoMoneyWindow';
import AddAccountSuccess from './success_box/AddAccountSuccess';
import Autoresponder from './box/Autoresponder';
import {useState} from "react";
import EnterAmount from "./box/EnterAmount";
import SelectCrypto from "./box/SelectCrypto";
import FinalStep from "./box/FinalStep";


/* Usage:
1. case for getSelectWindow (WindowControl)
2. case for getTitle (Headerwindow)
3. create new component for box (folder)
4. classname for block component - window_content
*/

const WindowControl = () => {
    const dispatch = useDispatch()
    const type_window = useSelector(w => w.app.window_data.type)
    const [step, setStep] = useState(0)
    const [type, setType] = useState("");
    const [amount, setAmount] = useState()
    const [crypto, setCrypto] = useState("");

    const objWindows = {
        0: <PaymentWindow setStep={setStep} setType={setType}/>,
        1: type === 'Cryptobot' ? <SelectCrypto setStep={setStep} setCrypto={setCrypto}/> :
            <EnterAmount type={type} setStep={setStep} setAmount={setAmount}/>,
        2: type === 'Cryptobot' ? <EnterAmount type={type} crypto={crypto} setStep={setStep} setAmount={setAmount}/> : null,
        3: <FinalStep type={type} amount={amount} crypto={crypto}/>
    };

    const getSelectWindow = () => {
        switch (type_window) {
            case 'list_numbers':
                return <ListNumbers/>
            case 'type_mailing':
                return <TypesMailing/>
            case 'interval':
                return <ChangeInterval/>
            case 'add_account':
                return <AddAccount/>
            case 'delete_number':
                return <DeleteNumber/>
            case 'sms_code':
                return <SMSCodeWindow/>
            case 'payment':
                return objWindows[step]
            case 'subscription':
                return <SubscriptionWindow/>
            case 'subscription_success':
                return <SubscriptionSuccessWindow/>
            case 'nomoney':
                return <NoMoneyWindow/>
            case 'add_success':
                return <AddAccountSuccess/>
            case 'autoresponder':
                return <Autoresponder/>
            default:
                break;
        }
    }

    return (
        <div className="window_container">
            <div className="background" onClick={() => dispatch({type: CLOSE_WINDOW})}></div>
            <div className="window_block">
                <HeaderWindow/>
                <div className='spliter'></div>
                {getSelectWindow()}
            </div>
        </div>

    );
}

export default WindowControl