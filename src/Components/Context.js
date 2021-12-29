import React, { createContext, useState } from 'react'


export const Contextapi = createContext();

export const Condata = (props) => {
    const [student, setstudent] = useState([
        {
            "Id": "1",
            "Name": "Yogesh",
            "Age": "21",
            "Course": "MERN",
            "Batch": "March"
        },

        {
            "Id": "2",
            "Name": "Rohit",
            "Age": "24",
            "Course": "MERN",
            "Batch": "July"
        },

        {
            "Id": "3",
            "Name": "Virat",
            "Age": "22",
            "Course": "MERN",
            "Batch": "June"
        },

        {
            "Id": "4",
            "Name": "Kapil",
            "Age": "23",
            "Course": "MERN",
            "Batch": "May"
        },
    ]);

    const studatadelete = (id)=>{
        const newdata = student.filter((stud)=> stud.Id!==id)

        setstudent(newdata)
        
    }



    return(
        <Contextapi.Provider value={[student,setstudent,studatadelete]}>
            {props.children}
        </Contextapi.Provider>

      
    )
}


