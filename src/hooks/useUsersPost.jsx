import { useEffect, useState } from "react";

const useUsersPost = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/userPost")
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return post;
};

export default useUsersPost;