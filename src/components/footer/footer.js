import React, {useEffect, useState} from "react";

const Footer = (props) => {
  const [active, setActive] = useState(props.act)
  const [finish, setFinish] = useState(props.fin)
  useEffect(() =>{
    setActive(props.act)
  }, [props.act])
  useEffect(() =>{
    setFinish(props.fin)
  }, [props.fin])
  if (props.act === active && props.fin === finish){
  return (
    <div className='footer' key={'footer'}>
      <div className={'footerTask'} key={'footerTask'}>
      <p className='footerTxt footterActiveTask' key={'footterActiveTask'}>Active tasks: {active}</p>
      <p className='footerTxt' key={'footerTxt'}>Finished tasks: {finish} </p>
      </div>
      <p className='footerTxt' key={'footerTxtName'}>Kanban board by NAME, YEAR</p>
    </div>
  )
  }
}

export default Footer