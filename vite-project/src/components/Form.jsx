import { useState } from "react";
import InputContainer from "./Input-Container";
import Mortgages from "./Mortgages";

export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [mortgage, setMortgage] = useState({ name: '' })


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(firstName)
        console.log(lastName)
        console.log(phone)
        console.log(email)
        console.log(mortgage)
    }

    return (
        <>
            <section className="mt-8">
                <form onSubmit={handleFormSubmit}>
                    <InputContainer setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} />
                    <Mortgages mortgage={mortgage} setMortgages={setMortgage} />
                    <button type="submit">Submit</button>

                </form>
            </section>
        </>
    )
}