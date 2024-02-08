import { useEffect, useState } from "react";


const useAllAssignment = () => {

    const [assignment, setAssignment] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/assignment')
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[])
    
    return assignment;
};

export default useAllAssignment;