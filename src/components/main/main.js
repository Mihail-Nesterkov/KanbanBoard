import React, {useEffect, useState} from "react";
import BlockTasks from "./block_tasks";
import { Route, Routes} from "react-router-dom";
import Disctription from "./disctriptionWin";
import {reactLocalStorage} from "reactjs-localstorage";
import Header from "../header/header";
import Footer from "../footer/footer";

const taskStatus = ['Backlog', 'Ready', 'In progress', 'Finished'];

let initTask = reactLocalStorage.getObject('start')
if (initTask.length === undefined){
  initTask = []
}
const Board = () => {
  let [tasks, setTask] = useState(initTask)
  let [arrDisabled, setArrDisabled] = useState(['Ready', 'In progress', 'Finished'])

  let onStatusChengeM = (newStatus, id) => {
    setTask(tasks.map((task) => (task.id === id) ? {...task, status: newStatus} : task));
  }
  const onCreateTaskM = (task) => {
    setTask([...tasks, {...task, id: Math.random(), status: 'Backlog', label: task.value, discription: ''}])
  }
  let act = tasks.filter((task) => task.status === 'Backlog')
  let rea = tasks.filter((task) => task.status === 'Ready')
  let pro = tasks.filter((task) => task.status === 'In progress')
  let fin = tasks.filter((task) => task.status === 'Finished')

  useEffect(() => {
    let newArrDisabled = []
    itemsDisabled(newArrDisabled)
  },[tasks])

  const itemsDisabled = (newArrDisabled) => {
    act.length === 0 && newArrDisabled.push('Ready')
    rea.length === 0 && newArrDisabled.push('In progress')
    pro.length === 0 && newArrDisabled.push('Finished')

    setArrDisabled(newArrDisabled)
  }

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<BlockTasks
        tasks={tasks}
        taskStatus={taskStatus}
        onStatusChenge={onStatusChengeM}
        onCreateTask={onCreateTaskM}
        act={act}
        rea={rea}
        pro={pro}
        fin={fin}
        arrDisabled={arrDisabled}
      />}></Route>
      {tasks.map((task) => (
        <Route path={`/${task.id}`} element={<Disctription task={task}/>}/>
      ))}
    </Routes>
  <Footer tasks={tasks}
          act={act.length}
          fin={fin.length}/>
    </>
  )
}
export default Board