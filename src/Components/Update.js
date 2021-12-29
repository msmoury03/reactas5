import React, { useContext, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Link , useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { Contextapi } from './Context';



const intialvl = {
    Name: "",
    Age: "",
    Course: "",
    Batch: ""
}




const Update = () => {

    const { id } = useParams();
    const [student, setstudent] = useContext(Contextapi);
    const navigte = useNavigate();
    const [user, setuser] = useState(intialvl);
    const { Name, Age, Course, Batch } = user;
    



    useEffect(() => {
        loaduserdata();
        
    }, [])

    const loaduserdata = async () => {
        
        const amy = await student.filter((vii) => vii.Id === id)
        amy.map((val) => setuser(val))
        
    }

    const onhdlechng = (e) => {
        const valu = e.target.value
        const name = e.target.id
        setuser({ ...user, [name]: valu })
        

    }

    const updtebtn = () => {
        setstudent((prevState) =>
            prevState.map((std) =>
                (std.Id === id) ?
                    {
                        "Id": id,
                        "Name": Name,
                        "Age": Age,
                        "Course": Course,
                        "Batch": Batch
                    } : std
            )
        )

        navigte('/student')


    }







    return (
        <div className='container my-5'>




            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={Name} onChange={onhdlechng} fullWidth id="Name" label="Name" />
                <TextField className='mx-5' color="secondary" value={Age} onChange={onhdlechng} fullWidth id="Age" label="Age" />
            </div>
            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={Course} onChange={onhdlechng} fullWidth id="Course" label="Course" />
                <TextField className='mx-5' color="secondary" value={Batch} onChange={onhdlechng} fullWidth id="Batch" label="Batch" />
            </div>

            <div className='d-flex justify-content-end mx-5'>
                <Link to='/student'><Button className='mx-4' variant="outlined">Cancel</Button></Link>
                <Button className='mx-3' variant="contained" onClick={updtebtn} >Update</Button>

            </div>

        </div>
    )
}

export default Update
