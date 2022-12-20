const TasksFilter = ({fl,filter,onFilter}) => {
    
    return ( 
        <button onClick={onFilter}  className={filter === fl.name?'selected':''}>{fl.label}</button>
     );
}
 
export default TasksFilter;