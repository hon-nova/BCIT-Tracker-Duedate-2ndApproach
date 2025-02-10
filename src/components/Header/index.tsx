import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderProps = {
	assnname:string|null,
	duedate: string|null,
   setAssnname:React.Dispatch<React.SetStateAction<string|null>>
   setDuedate:React.Dispatch<React.SetStateAction<string|null>>
   onAdd: (assnname:string,duedate:string)=>void

}
export function Header({assnname, duedate,setAssnname,setDuedate, onAdd }: HeaderProps) {
   function isEmptyInput():boolean{
      return (!assnname || assnname==='') || (!duedate ||duedate==='')
   }
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form 
         className={styles.newAssignmentForm}
         onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault(); setAssnname("");setDuedate("")}}>
         <input 
            placeholder="Add a new assignment" 
            type="text"
            name="assnname"
            value={assnname||''}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAssnname(e.target.value)} />
         <input
            type="date"
            required
            name="duedate"
            value={duedate||''}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setDuedate(e.target.value)} />
        <button
            onClick={()=> {if(assnname && duedate) {onAdd(assnname,duedate)}}}
            disabled={isEmptyInput()}
            style={isEmptyInput() ? {backgroundColor:"lightgrey",cursor:"not-allowed"}:{cursor:"pointer"}}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
