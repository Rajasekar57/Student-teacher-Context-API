import React,{useState} from 'react'
export const UsersContext = React.createContext()

function ContextComponent({children}) {
    let initialStudents = [
        {
          name: "Rajsekar",
          email: "raj@gmail.com",
          mobile: "9677193629",
          course: "Full-stack",
          batch: "B46"
    
      },
      {
          name: "Prakash",
          email: "prakash@gmail.com",
          mobile: "8919989291",
          course: "Full-stack",
          batch: "B46"
    
      },
      {
    
          name: "Manimekalai",
          email: "manimekalaiM@gmail.com",
          mobile: "9944556611",
          course: "Full-stack",
          batch: "B46"
    
      },
    
      {
          name: "Ganesh",
          email: "ganesh@gmail.com",
          mobile: "7988668983",
          course: "Devops",
          batch: "B46"
    
      },
    
      {
          name: "Padmapriya",
          email: "padma@gmail.com",
          mobile: "9846190191",
          course: "Data-science",
          batch: "B46"
    
      },
      {
          name: "Santhosh",
          email: "sandy@gmail.com",
          mobile: "7485975612",
          course: "Cloud-computing",
          batch: "B46"
      },
    ]
    
      let [students, setStudents] = useState(initialStudents);
    
      let initialTeachers = [
        {
          name: "Sathish",
          email: "sathish@gmail.com",
          mobile: "9191002011",
          specialization: "Full-stack",
        },
        {
          name: "Sai Mohan",
          email: "saimohan@gmail.com",
          mobile: "8919989291",
          specialization: "Devops",
        },
        {
          name: "Nagarajan",
          email: "nagarajan@gmail.com",
          mobile: "8090890191",
          specialization: "Cloud-computing",
        },
      ];
      let [teachers, setTeachers] = useState(initialTeachers);
  return (
    <UsersContext.Provider value ={{students,setStudents,teachers,setTeachers}}>
        {children}
    </UsersContext.Provider>
  )
}

export default ContextComponent