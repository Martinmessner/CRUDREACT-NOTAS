import React from 'react'
import EditNote from '../icons/Edit';
import CrossIcon from '../icons/Iconsvg';
import CheckNote from '../icons/CheckItem';

export const ListOfHeroesReal = ({el, deleteData, SeteditData, taskCheck}) => {
 
  return (
    <div className='div__hero'>
        <ul className='ul__hero'>
          <button className={`xd ${el.completed ? < CheckNote /> : "xd"}`}

              onClick={() => taskCheck(el)}
               >  

              {el.completed && < CheckNote />}

          </button>

            <li className={`flex ${el.completed && "taskCompleted" }`}>{el.nameReal}  </li>
            <li className={`flex ${el.completed && "taskCompleted" }`}>{el.Hero}   </li>
            <li className={`flex ${el.Prioridad === "Alta" ? "prio__alta" : "flex"} || ${el.Prioridad === "Media" ? "prio__media" : "flex"} || ${el.Prioridad === "Baja" ? "prio__baja" : "flex"}   `}>Prioridad: {el.Prioridad}
            
            </li>
            <div>
            <button className='flex' onClick={() => SeteditData(el)}> <EditNote /></button>
            <button className='flex' onClick={() => deleteData(el.id)}> < CrossIcon/> </button>
            </div>
        </ul>
    </div>
  );
};
