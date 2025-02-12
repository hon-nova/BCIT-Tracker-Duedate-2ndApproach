export type TAssignment = {
   id: string,
   assnname:string|null,
   duedate:string,
   isCompleted: boolean,  
   setAssignments: React.Dispatch<React.SetStateAction<TAssignment[] | []>>,
   setCountCompleted: React.Dispatch<React.SetStateAction<number>>
}

