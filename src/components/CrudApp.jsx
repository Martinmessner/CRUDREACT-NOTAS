import React, { useEffect, useState } from 'react'
import AddTasks from "../icons/AddTask"

const initialForm = {
    nameReal: "",
    Hero: "",
    id: null,
    completed: false
}
const CrudApp = ({addData, updateData, editData, SeteditData}) => {

    const [form, Setform] = useState(initialForm);

  useEffect(() => {
    if (editData) {
      Setform(editData)
    } else {
      Setform(initialForm)
    }
  }, [editData])

    const handleChange = (e) => {
      Setform({
        ...form,
        [e.target.name]:e.target.value,
      });
    };

    const sendForm = (e) => { //hacer validaciones
      e.preventDefault();
     if (!form.nameReal){
       alert("Te olvidaste de agregar una tarea")
      return;
     }
    
      if (form.id === null){
        addData(form)
      } else {
        updateData(form)
      }
      Setform(initialForm)
      SeteditData(null)
    }

  return (
    <div>
    <form onSubmit={sendForm}>
        <input className='input__task' type="text" name="nameReal" maxLength={60} value={form.nameReal} placeholder="Escribe aqui..." onChange={handleChange} />
        <input className='input__time' type="time" name="Hero"  value={form.Hero} placeholder="Heroe" onChange={handleChange} />
        <button className='agregar__tarea' type="submit" value="Agregar Tarea"><AddTasks /></button>
    </form>
    </div>
  )
}

export default CrudApp;