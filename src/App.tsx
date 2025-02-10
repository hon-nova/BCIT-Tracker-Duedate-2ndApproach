import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react'
import { AssignmentProps } from "./shared/types";

function App() {
  const [assnname, setAssnname]=useState<string|null>(null)
  const [duedate, setDuedate]=useState<string|null>(null)
  const [assignments, setAssignments ]= useState<AssignmentProps[]>([])
  const [countCompleted, setCountCompleted ]=useState<number>(0)

   console.log(`assnname: `,assnname);
   console.log(`duedate: `,duedate);
   
   
  function handleDelete(id:string){
      
      const updateAssns = [...assignments].filter((item:AssignmentProps)=>item.id !==id)
      setAssignments(updateAssns)
         
   }
      
//   console.log(`assignments: `,assignments);
  function handleCheckedBtn(id:string){
      //setAssignments with isChecked for a clicked item
      // alert(`item clicked with id: ${id}`)
      console.log(`item clicked: `,id);
      
      setAssignments((preAssns:AssignmentProps[])=>{
         const updateAssns = preAssns.map((item:AssignmentProps)=>item.id ===id ? {...item,isChecked: !item.isChecked}: item)

         //update countCompleted
         const updateCount = updateAssns.filter((item:any)=>item.isChecked).length
         setCountCompleted(updateCount)

         return updateAssns
      })
  }
  function handleAdd(assnname:string, duedate:string){

   const newAssn = {
      id: crypto.randomUUID(),
      assnname: assnname,
      duedate: duedate,
      onDelete:handleDelete,
      isChecked: false,
      onCheckedBtn:handleCheckedBtn
   }
   setAssignments((preAssignments:AssignmentProps[])=>([ newAssn,...preAssignments]))
  }
    
  return (
    <>
      <Header 
        assnname={assnname}
        duedate={duedate}
        setAssnname={setAssnname}
        setDuedate={setDuedate}
        onAdd={handleAdd}
      />
      <Assignments 
         assignments={assignments}
         countCompleted={countCompleted}/>
    </>
  );
}

export default App;
