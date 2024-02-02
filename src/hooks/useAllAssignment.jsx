import { useEffect, useState } from "react";


const useAllAssignment = () => {

    const [assignment, setAssignment] = useState([])

    useEffect(() => {
        fetch('./assignment.json')
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[])
    
    return assignment;
};

export default useAllAssignment;