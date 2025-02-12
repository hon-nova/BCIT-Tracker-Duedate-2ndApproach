import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { TAssignment } from '../../shared/types'
import { FaCircleCheck } from "react-icons/fa6";

export function Assignment({ id, assnname,duedate, isCompleted, setAssignments, setCountCompleted }: TAssignment) {  
  
   // function formatDay(duedate:string){
   //    const milliseconds = new Date(duedate).getTime()
      
   //    const now = new Date().getTime()     
   //    const days = Math.ceil((milliseconds-now) / (24 * 60 * 60 * 1000));      
   //    return days      
   // }  
   function formatDay(duedate: string) {
      const dueDateMs = new Date(duedate).setHours(0, 0, 0, 0); 
      const todayMs = new Date().setHours(0, 0, 0, 0);
  
      const diffInDays = Math.ceil((dueDateMs - todayMs) / (24 * 60 * 60 * 1000));
      return diffInDays;
   }

   const showDueDate = {
      text:'',
      styles: {}
   }
   
   if(formatDay(duedate)>1){
      showDueDate.text = `Due: ${(formatDay(duedate))} days`;
      showDueDate.styles = { backgroundColor: "green", color: "black" }; 
   } else if (formatDay(duedate)===1){
      showDueDate.text = `Due: tomorrow`;
      showDueDate.styles = { backgroundColor: "red", color: "black" };
   } else {
      showDueDate.text = "Due: Now";
      showDueDate.styles= { backgroundColor: "gray", color: "white" };
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
             
      <div className={styles.duedate} style={showDueDate.styles}>
        <span>{showDueDate.text}</span>
      </div>
      
      <button 
         className={styles.deleteButton}
         onClick={()=>{onDelete(id)}}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
