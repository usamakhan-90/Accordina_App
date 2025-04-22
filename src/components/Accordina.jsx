import React, { useState } from 'react'
import data from './data'
function Accordina() {
  const [selected, setSelected] = useState(null);

  // Enable multiple selection
  const [toggle, setToggle] = useState(false);

  const [multiple, setMultiple] = useState([]);

  const singleSelection = (currId) =>{
    setSelected(selected===currId ? null : currId);
  }

  const multipleSelection = (currId) =>{
    let copyMultiple = [...multiple];

    const currentIndex = copyMultiple.indexOf(currId);

    if(currentIndex === -1)
    {
      copyMultiple.push(currId);
    }
    else
    {
      copyMultiple.splice(currentIndex, 1);
    }

    setMultiple(copyMultiple);
  }
  return (
    <>
    <div>
      <button onClick={()=>setToggle(!toggle)}>Convert Multiple Selected</button>
      {
        data && data.length>0
         ? 
         data.map(item=> 
         <div key={item.id}>
          <p onClick={toggle ? ()=>multipleSelection(item.id) : ()=>singleSelection(item.id)}>{item.question}</p>
          <span>+</span>
          {
            selected==item.id || multiple.indexOf(item.id)!==-1 ? <div>{item.answer}</div> : null
          }
         </div>
         )
         : 
         <div>
          <p>
            No Data Appear Here
          </p>
          </div>
      }
    </div>
    </>
  )
}

export default Accordina