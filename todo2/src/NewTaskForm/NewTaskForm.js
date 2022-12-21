import { useState } from "react";

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
export default NewTaskForm;