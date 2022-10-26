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
      console.log(e.target.value)
    };

    const sendForm = (e) => { //hacer validaciones
      e.preventDefault();
     if (!form.nameReal){
       alert("Te olvidaste de agregar una tarea")
      return;
     }
    
      if (form.id === null){
        addData(form)
        console.log(form)
      } else {
        updateData(form)
      }
      Setform(initialForm)
      SeteditData(null)
    }

  
  return (
    <div>
    <form onSubmit={sendForm}>
        <input className='input__task' type="text" name="nameReal" maxLength={40} value={form.nameReal} placeholder="Escribe aqui..." onChange={handleChange} />
        <input className='input__time' type="time" name="Hero"  value={form.Hero}onChange={handleChange} />
        <button className='agregar__tarea' type="submit" value="Agregar Tarea"><AddTasks /></button>

    <select className='select' name='Prioridad' onChange={handleChange}>
        <option  selected disabled hidden>Prioridad</option>
        <option className='prio__alta'  value={form.Alta}>Alta</option>
        <option className='prio__media' value={form.Media} >Media</option>
        <option className='prio__baja' value={form.Baja}>Baja</option>
    </select>
    </form>
    </div>
  )
}

export default CrudApp;