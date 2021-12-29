import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Contextapi } from './Context';
import { useNavigate } from "react-router-dom";



const Addstudent = () => {

    const [student,setstudent] = useContext(Contextapi);
    const navigte = useNavigate();
   

    const [dataa, setdataa] = useState({
        Id:"",
        Name: "",
        Age: "",
        Course: "",
        Batch:""
    })
   


    const onhdlechng = (e)=>{
        const name = e.target.id
        const value = e.target.value
        setdataa({...dataa,[name]:value})
        
    }



    const btnsub = (e)=>{
        e.preventDefault();
        const newdata = {...dataa, Id:`${student.length+1}`}
        setstudent([...student,newdata])
        
        navigte('/student')

        
        
        
        
        
    
    }


    return (
        <div className='container my-5'>

            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={dataa.Name} onChange={onhdlechng} fullWidth id="Name" label="Name" />
                <TextField className='mx-5' color="secondary" value={dataa.Age} onChange={onhdlechng} fullWidth id="Age" label="Age" />
            </div>

            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={dataa.Course} onChange={onhdlechng} fullWidth id="Course" label="Course" />
                <TextField className='mx-5' color="secondary" value={dataa.Batch} onChange={onhdlechng} fullWidth id="Batch" label="Batch" />
            </div>

            <div className='d-flex justify-content-end mx-5'>
                
                
                <Link to='/student'><Button className='mx-4' variant="outlined">Cancel</Button></Link>
                
                <Button className='mx-3' variant="contained" onClick={btnsub}>Submit</Button>
                
            </div>




        </div>
    )
}

export default Addstudent
