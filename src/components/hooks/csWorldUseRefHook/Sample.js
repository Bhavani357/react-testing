import {useRef,useState} from 'react'
import './sample.css'
const Sample = ()=>{

    let headings = useRef([])
    const changeh1Styles = (e)=>{
        for (let ele of headings.current){
            ele.classList.remove('primary')
        }
        e.target.classList.add('primary')
    }
    return(
        <div>
             {/* accessing single element 
            <h1 ref={headings} onClick={()=>{
                console.log(headings)
                console.log(headings.current)
                console.log(headings.innerHTML)
                console.log(headings.current.innerHTML)
            }}>This is heading 2</h1>*/}

        {/* accessing multiple elements */}
        <h1 ref={(each)=>headings.current[0]=each} onClick={(event)=>changeh1Styles(event)}>This is heading 3</h1>
        <h1 ref={(each)=>headings.current[1]=each}>This is heading 4</h1>
        <h1 ref={(each)=>headings.current[2]=each}>This is heading 5</h1>
        <h1 ref={(each)=>headings.current[3]=each}>This is heading 6</h1>
        </div>
        
    )
} 
export default Sample