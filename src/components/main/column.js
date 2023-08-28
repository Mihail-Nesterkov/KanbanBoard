import React from "react";
import {reactLocalStorage} from "reactjs-localstorage";
import {NavLink} from "react-router-dom";

function Column(props) {
    reactLocalStorage.clear();
    reactLocalStorage.setObject('start', props.tasks)
  return (
    <>
      <p className='statusTask'>{props.status}</p>
      <div className={'column'} key={'column'}>
        {props.tasks
          .filter((task) => task.status === props.status)
          .map((task) => (
            <div className='task' key={task.id}>
              <NavLink to={`/${task.id}`} className='taskValue'>{task.value}</NavLink>
            </div>
          ))}
      </div>
    </>
  )
}

export default Column