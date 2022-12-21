import { useState } from "react";
import PropTypes from 'prop-types';

const NewTaskForm = ({AddItem}) => {
    const [val,setVal] = useState('')
    return ( 
       <form onSubmit={(e) => {
        e.preventDefault()
        AddItem(val)
        setVal('')
    }
        }>
         <input value={val} onChange={(e)=> {
            
            setVal(e.target.value)}
            } className="new-todo" placeholder="What needs to be done?" autoFocus/>
       </form>
     );
}
NewTaskForm.defaultProps= {
    AddItem: () => {console.log('ddd')}
}
NewTaskForm.propTypes = {
    AddItem: PropTypes.func
}
export default NewTaskForm;