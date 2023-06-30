import { useState } from "react";
import axios from "axios"
import InputContainer from "./Input-Container";
import Mortgages from "./Mortgages";
import Table from "./Table";

export default function Form() {
    const [mortgage, setMortgage] = useState({ name: '' })
    const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '', phone: '', email: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/', contactInfo, {
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
                    {/* <Table /> */}
                    <button type="submit">Submit</button>

                </form>
            </section>
        </>
    )
}