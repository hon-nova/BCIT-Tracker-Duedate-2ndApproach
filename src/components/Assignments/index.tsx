import { TAssignment } from "../../shared/types";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

type AssignmentsProps = {
   assignments: TAssignment[],  
}
export function Assignments({ assignments }: AssignmentsProps) {
  const [countCompleted, setCountCompleted] = useState<number>(0)

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{countCompleted} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        
    {assignments.length >0 && assignments.map((item:TAssignment)=>(
      <div key={item.id}>
         <Assignment
            id={item.id}
            assnname={item.assnname}
            duedate={item.duedate}
            isCompleted={item.isCompleted}          
            setAssignments={item.setAssignments}
            setCountCompleted={setCountCompleted}
           />
      </div>
      ))}
        
   </div>
   </section>
  );
}
