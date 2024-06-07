const LastTimeMessage = ({last_time_message}) => {
    return <div className='last_time_message'>
        <p className='title'>Время крайней рассылки</p>
        {last_time_message
        ? <p style={{marginTop: "5px"}}>{last_time_message} (MSK)</p>
        : <p style={{marginTop: "5px"}}>Нет</p>}
    </div>
}

export default LastTimeMessage