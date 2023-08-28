import React, {useState} from "react";
import {FiEdit} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const Disctription = (props) => {
  const [disabled, setDisabled] = useState(true)
  const ActiveInput = () => {
    setDisabled(!disabled)
  }
  const save =() => {
    let newDisc = document.getElementById('areaDicr').value
    props.task.discription = newDisc
  }
  return (
    <div className='discript_fon' key={'discript_fon'}>
      <div className='disrip' key={'disrip'}>
        <div className='edit_title' key={'edit_title'}>
          <p className='titel' key={'title'}>{props.task.value}</p>
          <div>
            <FiEdit onClick={ActiveInput} className='icon'/>
            <NavLink to='/' onClick={save}><AiOutlineClose className='icon'/></NavLink>
          </div>
        </div>
        <textarea disabled={disabled} className='inputDiscrip' id='areaDicr' placeholder='This task has no description' key={'inputDiscrip'}>{props.task.discription}</textarea>
      </div>
    </div>
  )
}

export default Disctription