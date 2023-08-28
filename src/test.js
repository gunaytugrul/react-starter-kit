import { useEffect,useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";

function Test(){
    
    const [postId,setPostId]=useState(1)
    const [post,setPost]=useState(false)


    useEffect(()=>{
        console.log('component ilk yüklendiğinde')
        let interval= setInterval(()=>console.log(),1000)
        return()=>{
            console.log('component kaldırıldığında')
            clearInterval(interval)
        }
    },[])

    useEffect(()=>{
       fetch( `https://jsonplaceholder.typicode.com/posts/${postId}`)
         .then(response=>response.json())
            .then(data=>setPost(data))
    },[postId])

    useEffect(()=>{
        console.log('post değişti')
    },[post])

    
    /*
    useEffect(()=>{
        console.log('component render oldu')
    })
    */

 
    return(
    <div>
        <button className={classNames({"p-4 h-10 m-5 flex items-center rounded bg-yellow-200 text-red" :true})} 
        onClick={()=>setPostId(postId=> postId+1)}>Sonraki konu {postId}</button>
        <h1>{postId}</h1>
        {post && JSON.stringify(post)}
        <hr>
        </hr>
        test componenti
    </div>
    )
}

export default Test;    



