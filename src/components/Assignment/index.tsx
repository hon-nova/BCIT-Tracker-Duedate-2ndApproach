import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type AssignmentProps = {
   id:string|null,
   assnname:string|null,
   duedate:string,
   isChecked: boolean,
   onDelete: (id:string)=>void,
   onCheckedBtn: (id:string)=>void
}

export function Assignment({id, assnname, duedate,isChecked, onDelete, onCheckedBtn}: AssignmentProps) {
   console.log(`isChecked @Assignment: `,isChecked);
   function formatDay(duedate:string){
      const milliseconds = new Date(duedate).getTime()
      console.log(`typeof milliseconds: `,typeof milliseconds);
      const now = new Date().getTime()
      console.log('now: ',now);
      
      const days = Math.ceil((milliseconds-now) / (24 * 60 * 60 * 1000));
      console.log(`days: `,days);
      return days
      
   }
   formatDay(duedate)
  return (
    <div className={styles.assignment}>
      <button 
         className={styles.checkContainer}
         onClick={()=>{if(id){onCheckedBtn(id)}}}
         >
        <div />
      </button>

      <p className={isChecked? styles.textCompleted : ''}>{assnname}</p>

      <div 
         className={styles.duedate}
         style={formatDay(duedate)>1 ? {backgroundColor:"#b3ffb3",color:"black"}:{backgroundColor:"#ff4d4d",color:"black"}} >
            {formatDay(duedate)>1 ? 
            <span>Due: {formatDay(duedate)} days</span> :
            <span>Due: tomorrow</span>}</div>
      <button 
         className={styles.deleteButton}
         onClick={()=>{if(id){onDelete(id)}}}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
