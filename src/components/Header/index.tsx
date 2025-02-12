import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react'
import { TAssignment } from "../../shared/types";

type HeaderProps = {	
   setAssignments: React.Dispatch<React.SetStateAction<TAssignment[] | []>>
}

type HeaderObj = {
   assnname: string,
   duedate: string
}

export function Header({ setAssignments }: HeaderProps) {
   const [assn, setAssn] = useState<HeaderObj>({
      assnname:'',
      duedate:''
   })

   function isEmptyInput():boolean{
      return (!assn.assnname || assn.assnname==='') || (!assn.duedate || assn.duedate==='')
   }

   function handleAddClick(){
      setAssignments((preAssignments: TAssignment[]|null)=>{
         const newAssn: TAssignment = {
            id: crypto.randomUUID(),
            assnname: assn?.assnname || null,
            duedate: assn?.duedate,
            isCompleted: false,
            setAssignments: setAssignments,
            setCountCompleted: () => 0
         }
         return preAssignments ? [newAssn,...preAssignments ]: []
      })
   }
   function handleSubmit(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      // setAssignments((preAssignments: TAssignment[]|null)=>{
      //    const newAssn: TAssignment = {
      //       id: crypto.randomUUID(),
      //       assnname: assn?.assnname || null,
      //       duedate: assn?.duedate,
      //       isCompleted: false
      //    }
      //    return preAssignments ? [...preAssignments, newAssn]: []
      // })
      setAssn({ assnname:'', duedate:''})
   }   

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form 
         className={styles.newAssignmentForm}
         onSubmit={handleSubmit}>
         <input 
            placeholder="Add a new assignment" 
            type="text"
            name="assnname"
            value={assn.assnname}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAssn((preAssn: HeaderObj)=>({...preAssn, assnname: e.target.value}))} />
         <input
            type="date"
            required
            name="duedate"
            value={assn.duedate}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAssn((preAssn: HeaderObj)=>({...preAssn, duedate: e.target.value}))} />
        <button
            onClick={handleAddClick}
            disabled={isEmptyInput()}
            style={isEmptyInput() ? {backgroundColor:"lightgrey",cursor:"not-allowed"}:{cursor:"pointer"}}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
