import PropTypes from 'prop-types';

const TasksFilter = ({fl,filter,onFilter}) => {
    
    return ( 
        <button onClick={onFilter}  className={filter === fl.name?'selected':''}>{fl.label}</button>
     );
}
TasksFilter.propTypes = {
    fl: PropTypes.object,
    filter: PropTypes.string,
    onFilter: PropTypes.func
   }
export default TasksFilter;