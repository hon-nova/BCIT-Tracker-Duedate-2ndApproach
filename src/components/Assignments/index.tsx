import { AssignmentProps } from "../../shared/types";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type AssignmentsProps = {
   assignments: AssignmentProps[],
   countCompleted: number
}
export function Assignments({assignments, countCompleted}: AssignmentsProps) {
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
        
    {assignments.length >0 && assignments.map((item:AssignmentProps)=>(
      <div key={item.id}>
         <Assignment
            id={item.id}
            assnname={item.assnname}
            duedate={item.duedate}
            isChecked={item.isChecked}
            onDelete={item.onDelete}
            onCheckedBtn={item.onCheckedBtn}
           />
      </div>
    ))}
        
      </div>
    </section>
  );
}
