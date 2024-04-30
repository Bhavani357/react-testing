
const Greet = (props)=>{
    const{name} = props
    return(
        <div>Hello {name? name: "Guest"}</div>
    )
}

export default Greet