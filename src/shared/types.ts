export type AssignmentProps = {
   id:string|null,
   assnname:string|null,
	duedate:string,
   isChecked: boolean,
   onDelete: (id:string)=>void,
   onCheckedBtn: (id:string)=>void
}