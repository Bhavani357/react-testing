// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name 
import {render, screen} from "@testing-library/react"
import Greet from "./Greet"

describe("Greet", ()=>{
    test("renders correctly",()=>{
        render(<Greet/>)
        const textElement= screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument()
    })
    
    test('renders a name',()=>{
        render(<Greet name="bhavani"/>)
        const textElement = screen.getByText("Hello bhavani")
        expect(textElement).toBeInTheDocument()
    
    })
})
