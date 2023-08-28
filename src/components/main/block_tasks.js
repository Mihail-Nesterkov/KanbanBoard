import React, {useEffect, useState} from "react";
import Column from "./column";
import AddCard from "./addCard";

function BlockTasks(props) {
  let [disabled, setDisabled] = useState([])
  let [resBut, setResBut] = useState(true)
  useEffect(() => {
    setDisabled(props.arrDisabled)
  }, [props.arrDisabled]);
  let onStatusChenge = (newStatus, id) => {
    props.onStatusChenge(newStatus, id)
  }
  const onCreateTask = (task) => {
    props.onCreateTask(task)
  }
  const resetButt = () => {
    setResBut(!resBut)
  }
  return (
    <div className={'blockTask'} key={'block_tasks'}>
      <div className={'resBut'} onClick={resetButt} key={'resBut'}></div>
      {props.taskStatus.map((status) => (
        <div className={'columnTask'} key={props.tasks.id}>
          <Column tasks={props.tasks}
                  status={status}/>
          <AddCard tasks={props.tasks}
                   onSubmit={onCreateTask}
                   status={status}
                   onStatusChenge={onStatusChenge}
                   act={props.act}
                   rea={props.rea}
                   pro={props.pro}
                   fin={props.fin}
                   disabled={disabled}
                   resBut={resBut}
          />
        </div>
      ))}
    </div>
  )
}

export default BlockTasks
