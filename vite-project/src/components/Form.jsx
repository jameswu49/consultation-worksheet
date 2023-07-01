import { useState } from "react";
import axios from "axios"
import InputContainer from "./Input-Container";
import Mortgages from "./Mortgages";
import Loans from "./Loans";
import Credit from "./Credit";
import Income from "./Income";
import Inputs from "./Inputs";
import Button from "./Button";

export default function Form() {
    const [mortgage, setMortgage] = useState({ name: '' })
    const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '', phone: 0, email: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        const parsedValue = name === "phone" ? parseInt(value, 10) : value;
        setContactInfo((prevData) => ({
            ...prevData,
            [name]: parsedValue,
        }));
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/', contactInfo, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Contact info inserted successfully');
            } else {
                console.error('Error inserting contact info:', response.status);
                // Handle error case
            }
        } catch (error) {
            console.error('Error inserting contact info:', error);
            // Handle error case
        }
    };


    return (
        <>
            <section className="mt-8">
                <form onSubmit={handleFormSubmit}>
                    <InputContainer handleChange={handleChange} />
                    <Mortgages mortgage={mortgage} setMortgages={setMortgage} />
                    <Loans />
                    <Credit />
                    <Income />
                    <Inputs />
                    <Button />
                </form>
            </section>
        </>
    )
}