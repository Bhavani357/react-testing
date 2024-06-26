import {useState,useEffect} from 'react';

const Skills = (props)=>{
    const {skills} = props
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(!isLoggedIn)
        },1001)
    },[]);
    
    return(
        <>
        <ul>
            {skills.map((skill)=>{
                return <li key={skill}>{skill}</li>
            })}
        </ul>
        {isLoggedIn?(
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Start learning</button>
        ):(
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Login</button>
        )}
        </>
    )
}
export default Skills