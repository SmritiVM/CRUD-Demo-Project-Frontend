import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]};
        Axios.post("http://localhost:4000/studentRoute/create-student", data)
        .then((res) => {
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err) => alert(err));
    }
    // Axios.post("url",data)
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}/>
        </form>
    )
}
export default CreateStudent;
