import React from 'react'
import { ListOfHeroesReal } from './ListNotes'

 const listOfHeros = ({data, SeteditData,deleteData, taskCheck, }) => {
  return (
    <div className='list__hero'>
         {data.length > 0 ? (
            data.map((el) => (
              <ListOfHeroesReal
                key={el.id}
                el={el}
                SeteditData={SeteditData}
                deleteData={deleteData}
                taskCheck={taskCheck}
              />
            ))
          ) : (
            <div className='contenedor__notask'>
              <h1 className='contenedor__notask--h2'>Ups...🤯 Ya no tienes Tareas / Desafios</h1>
              <h2 className='contenedor__notask--h2'> Puedes tomarte un descanso 😴 y seguir mas tarde</h2>
              <h2 className='contenedor__notask--h2'>O puedes seguir ahora mismo 😎</h2>
            </div>
          )}

    </div>
    
  );
};
 
export default listOfHeros