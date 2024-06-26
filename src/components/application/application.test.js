import {render, screen} from "@testing-library/react"
import Application from './application'

describe("Application", ()=>{
    test("rendering", ()=>{
        render(<Application/>);

        const headingElement = screen.getByRole("heading",{
            name:/job application form/i   // for caseInsensitive
        })
        expect(headingElement).toBeInTheDocument()

        const heading2 = screen.getByRole("heading",{name:"Section 1"})
        expect(heading2).toBeInTheDocument()

        const nameElement = screen.getByRole("textbox",{name:"Name"})
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText("Name",{selector:"input"})
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByDisplayValue("Bhavani")
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByPlaceholderText("enter name")
        expect(nameElement4).toBeInTheDocument()

        const paraElement = screen.getByText("all fields are mandatory") // for p,div,span
        expect(paraElement).toBeInTheDocument()

        const closeElement = screen.getByTitle("close")
        expect(closeElement).toBeInTheDocument()

        const customElement = screen.getByTestId("custom element")
        expect(customElement).toBeInTheDocument()

        const textareaElement = screen.getByRole("textbox",{name:"Bio"})
        expect(textareaElement).toBeInTheDocument()

        const selectElement = screen.getByRole("combobox")
        expect(selectElement).toBeInTheDocument()

        const checkboxElement = screen.getByRole('checkbox')
        expect(checkboxElement).toBeInTheDocument()

        const checkboxElelment2 = screen.getByLabelText(/i agree to the terms and conditions/i)
        expect(checkboxElelment2).toBeInTheDocument()

        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeInTheDocument()
        
    })
})