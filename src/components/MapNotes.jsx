import React from 'react'
import { ListOfHeroesReal } from './ListNotes'
import { Droppable, Draggable } from "@hello-pangea/dnd";

 const listOfHeros = ({data, SeteditData,deleteData, taskCheck, }) => {
  return (
    <Droppable droppableId='data'>
            {
              (droppableProvider) => (

    <div ref={droppableProvider.innerRef}
         {...droppableProvider.droppableProps}  className='list__hero'>

         {data.length > 0 ? (
            data.map((el, index) => (   // index es para ordenarlos con el drag & drop
              <Draggable  key={el.id} index={index} draggableId={`${el.id}`}  >
                {
                  (draggableProvider) => (
                    <ListOfHeroesReal
                    //key={el.id}
                    el={el}
                    SeteditData={SeteditData}
                    deleteData={deleteData}
                    taskCheck={taskCheck}
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.dragHandleProps}
                    {...draggableProvider.draggableProps}
              />
                  )
                } 
              </Draggable>
            )))  
            : (
            <div className='contenedor__notask'>
              <h1 className='contenedor__notask--h2'>Ups...🤯 Ya no tienes Tareas / Desafios</h1>
              <h2 className='contenedor__notask--h2'> Puedes tomarte un descanso 😴 y seguir mas tarde</h2>
              <h2 className='contenedor__notask--h2'>O puedes seguir ahora mismo 😎</h2>
            </div>
          )}
            {droppableProvider.placeholder}
    </div> 
 )}
    </Droppable>
  );
};
 
export default listOfHeros


/*










*/