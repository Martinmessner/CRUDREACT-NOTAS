import  React, { useEffect, useState } from 'react';
import './App.css';
import { ClearCompleted } from './components/ClearCompleted';
import CrudApp from './components/CrudApp';
import  {notasDefault}  from './components/DTBNotes';
import ListOfHeros from './components/MapNotes';

   
const heroes = JSON.parse(localStorage.getItem("dbHero")) || [notasDefault[0]];
   
function App() {
   
const [dbHero, SetdbHero] = useState(heroes)
const [editData, SeteditData] = useState(null)

useEffect(() => {
   localStorage.setItem("dbHero", JSON.stringify(dbHero))
}, [dbHero]);

const addData = (data) => {
  data.id = Date.now()
  SetdbHero([...dbHero, data])
}
const updateData = (data) => {
   SetdbHero(dbHero.map((el) => el.id === data.id ? data : el))
}

const taskCheck = (data) => {
    SetdbHero(dbHero.map((el) => el.id === data.id ?  {...el, completed: !el.completed} : el))
}

const deleteData = (id) => {
   SetdbHero(dbHero.filter((el) => el.id !== id))
}
const clearComplete = () => {
   SetdbHero(dbHero.filter((el) => !el.completed));
}
const restantes = dbHero.filter((el) => !el.completed).length

  return (
     <div className="app">
      {editData ? <h2 className='condicional'>Editar Tarea</h2> : <h2 className='condicional' >Agregar Tarea</h2>}
     <CrudApp addData={addData} updateData={updateData} editData={editData} SeteditData={SeteditData} />
      <h1 className='lista__tareas'>Mis Notas</h1>
     <ListOfHeros data={dbHero} SeteditData={SeteditData}  deleteData={deleteData} taskCheck={taskCheck}/>
     <div className='backgroundimage'></div>
     <ClearCompleted clearComplete={clearComplete} restantes={restantes} />
     
     </div>
  );

}

export default App;
