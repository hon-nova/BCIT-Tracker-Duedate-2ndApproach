import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TAssignment } from '../../shared/types'
import { FaCircleCheck } from "react-icons/fa6";

export function Assignment({ id, assnname,duedate, isCompleted, setAssignments, setCountCompleted }: TAssignment) {  
  
   function formatDay(duedate:string){
      const milliseconds = new Date(duedate).getTime()
      
      const now = new Date().getTime()     
      const days = Math.ceil((milliseconds-now) / (24 * 60 * 60 * 1000));      
      return days      
   }  

   function onCheckedBtn(id:string){      
      setAssignments((preAssns:TAssignment[])=>{
         const updateAssns = preAssns.map((item:TAssignment)=>item.id===id ? {...item,isCompleted: !item.isCompleted}:item)
      
         const updateCountCompleted = updateAssns.filter((item:TAssignment)=>item.isCompleted).length
         setCountCompleted(updateCountCompleted)

         return updateAssns
       })  
   }

   function onDelete(id:string){      
      setAssignments((preAssns:TAssignment[])=>{
         const updateAssns = preAssns.filter((item:TAssignment)=>item.id!==id)
         return updateAssns
      })
   }

   return (
    <div className={styles.assignment}>
      <button 
         className={styles.checkContainer}
         onClick={()=>{onCheckedBtn(id)}} >
          {isCompleted ? <FaCircleCheck /> : <div />}
      </button>

      <p className={isCompleted? styles.textCompleted : ''}>{assnname}</p>

      <div 
         className={styles.duedate}
         style={formatDay(duedate)>1 ? {backgroundColor:"#b3ffb3",color:"black"}:{backgroundColor:"red",color:"black"}} >
            {formatDay(duedate)>1 ? 
            <span>Due: {formatDay(duedate)} days</span> :
            <span>Due: tomorrow</span>}</div>
      <button 
         className={styles.deleteButton}
         onClick={()=>{onDelete(id)}}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
