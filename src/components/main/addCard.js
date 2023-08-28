import React, {useEffect, useState} from "react";
import Select from 'react-select'

function AddCard(props) {
  let [value, setValue] = useState('')
  const [btn, usebtn] = useState(true)
  const [status, usestatus] = useState('Backlog')
  const onChangeHand = event => {
    setValue(event.target.value)
  }
  useEffect(() => {
    usebtn(true)
  }, [props.resBut])
  const onSubmit = () => {
    usebtn(!btn)
    setValue('')
    if (value !== '') {
      props.onSubmit({value})
    }
    usestatus(props.status)
  }
  const onChange = (e) => {
    props.onStatusChenge(status, e.id)
    usebtn(!btn)
  }
  if (btn) {
    return (
      <button className='addCard' onClick={onSubmit} id={props.status}  key={props.id} disabled={props.disabled.some((disabled) => disabled === props.status)}>+ Add card</button>
    )
  } else if (status === 'Backlog') {
    return (
      <form key={'form'}>
        <div>
          <label htmlFor="title" key={'label'}></label>
          <input type="text" className='newTask' value={value} onChange={onChangeHand} key={'newTask'}/>
        </div>
        <button className='addCardSub' onClick={onSubmit} id={props.status} key={'addCard'}>Submit</button>
      </form>
    )
  } else if (status === 'Ready') {
    return (
      <form key={'form1'}>
        <Select className='form-select' onChange={onChange} options={props.act} key={'form-select1'}/>
      </form>
    )
  } else if (status === 'In progress') {
    return (
      <form key={'form2'}>
        <Select className='form-select' onChange={onChange} options={props.rea} key={'form-select2'}/>
      </form>
    )
  } else if (status === 'Finished') {
    return (
      <form key={'form3'}>
        <Select className='form-select' onChange={onChange} options={props.pro} key={'form-select3'}/>
      </form>
    )
  }
}
export default AddCard