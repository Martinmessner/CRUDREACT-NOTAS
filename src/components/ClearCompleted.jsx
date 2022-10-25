export const ClearCompleted = ( {clearComplete, restantes } ) => {
    return (
            <div className="div__clearcomplete">
                <p>  Tareas Restantes: {restantes}</p>
                <button className="button__clearcomplete" onClick={clearComplete}>Eliminar todas las tareas completadas</button>
            </div>
    )
}