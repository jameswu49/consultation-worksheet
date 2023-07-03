import { useState } from "react";
import emailjs from "emailjs-com"
import ContactInfo from "./Contact-Info";
import initialContactInfo from "./hooks/contact-hook";
import Mortgages from "./Mortgages";
import { initialMortgageState } from "./hooks/mortgage-hook";
import Loans from "./Loans";
import { initialLoansState } from "./hooks/loans-hook";
import Credit from "./Credit";
import { initialCreditInfo } from "./hooks/credit-hook";
import Income from "./Income";
import { initialIncomeInfo } from "./hooks/income-hook";
import Inputs from "./Inputs";
import { initialMonthlyInfo } from "./hooks/monthly-hook";
import Button from "./Button";

import { handleContactInfo } from "../functions/handleContactInfo"

emailjs.init('WTYG-lZAifFRnGgJ4');


export default function Form() {
    const [contactInfo, setContactInfo] = useState(initialContactInfo)
    const [mortgage, setMortgage] = useState(initialMortgageState)
    const [loans, setLoans] = useState(initialLoansState)
    const [credit, setCredit] = useState(initialCreditInfo)
    const [income, setIncome] = useState(initialIncomeInfo)
    const [monthly, setMonthly] = useState(initialMonthlyInfo)

    // const handleContactInfo = (event) => {
    //     const { name, value } = event.target;
    //     setContactInfo((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const handleMortgageInfo = (headerIndex, event) => {
        const { name, value } = event.target;
        setMortgage((prevData) => {
            const updatedMortgage = [...prevData]; // Create a copy of the mortgage array
            const updatedData = { ...updatedMortgage[headerIndex].data }; // Create a copy of the data object for the specified headerIndex
            updatedData[name] = value; // Update the value for the specified name in the data object
            updatedMortgage[headerIndex].data = updatedData; // Update the data object in the mortgage array
            return updatedMortgage; // Return the updated mortgage array
        });
    };

    const handleLoansInfo = (headerIndex, event) => {
        const { name, value } = event.target;
        setLoans((prevData) => {
            const updatedLoans = [...prevData];
            const updatedData = { ...updatedLoans[headerIndex].data };
            updatedData[name] = value;
            updatedLoans[headerIndex].data = updatedData;
            return updatedLoans;
        });
    };

    const handleCreditInfo = (headerIndex, event) => {
        const { name, value } = event.target;
        setCredit((prevData) => {
            const updatedCredit = [...prevData];
            const updatedData = { ...updatedCredit[headerIndex].data };
            updatedData[name] = value;
            updatedCredit[headerIndex].data = updatedData;
            return updatedCredit;
        });
    };

    const handleIncomeInfo = (headerIndex, event) => {
        const { name, value } = event.target;
        setIncome((prevData) => {
            const updatedIncome = [...prevData];
            const updatedData = { ...updatedIncome[headerIndex].data };
            updatedData[name] = value;
            updatedIncome[headerIndex].data = updatedData;
            return updatedIncome;
        });
    };


    const handleMonthlyInfo = (headerIndex, event) => {
        const { name, value } = event.target;
        setMonthly((prevData) => {
            const updatedMonthly = [...prevData];
            const updatedData = { ...updatedMonthly[headerIndex].data };
            updatedData[name] = value;
            updatedMonthly[headerIndex].data = updatedData;
            return updatedMonthly;
        });
    };

    const sendFormData = async (formData) => {
        const templateParams = {
            firstName: formData.contactInfo['First Name'],
            lastName: formData.contactInfo['Last Name'],
            phone: formData.contactInfo['Phone'],
            email: formData.contactInfo['email'],
            lenderName: formData.mortgageRows[0].data['Lender Name'],
            startDate: formData.mortgageRows[0].data['Mortgage Start Date'],
            mortgageTerm: formData.mortgageRows[0].data['Mortage Term'],
            monthlyPayments: formData.mortgageRows[0].data['Monthly Payment* Including Escrows'],
            extraPrincipal: formData.mortgageRows[0].data['Extra Principal Payment'],
            interestRate: formData.mortgageRows[0].data['Interest Rate'],
            escrowPayment: formData.mortgageRows[0].data['Escrow Payment'],
            insurancePayment: formData.mortgageRows[0].data['Mortgage Insurance Payment'],
            mortgageBalance: formData.mortgageRows[0].data['Current Mortgage Balance'],
            originalBalance: formData.mortgageRows[0].data['Original Mortgage Balance'],
        }
        console.log(formData.mortgageRows[0].data);


        try {
            const response = await emailjs.send('service_u4ai4eb', 'template_llp4i3', templateParams);
            console.log('Email sent successfully:', response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const mortgageRows = mortgage.filter((row) => {
            const rowData = Object.values(row.data);
            return rowData.some((value) => value !== '');
        });

        const loansRows = loans.filter((row) => {
            const rowData = Object.values(row.data);
            return rowData.some((value) => value !== '');
        });

        const creditRows = credit.filter((row) => {
            const rowData = Object.values(row.data);
            return rowData.some((value) => value !== '');
        });

        const incomeRows = income.filter((row) => {
            const rowData = Object.values(row.data);
            return rowData.some((value) => value !== '');
        });

        const formData = {
            contactInfo,
            mortgageRows,
            loansRows,
            creditRows,
            incomeRows,
            monthly
        }

        sendFormData(formData);


        // try {
        //     const response = await axios.post('http://localhost:3001/', contactInfo, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });

        //     if (response.status === 200) {
        //         console.log('Contact info inserted successfully');
        //     } else {
        //         console.error('Error inserting contact info:', response.status);
        //         // Handle error case
        //     }
        // } catch (error) {
        //     console.error('Error inserting contact info:', error);
        //     // Handle error case
        // }
    };


    return (
        <>
            <section className="mt-8">
                <form onSubmit={handleFormSubmit}>
                    <ContactInfo handleContactInfo={handleContactInfo} />
                    <Mortgages handleMortgageInfo={handleMortgageInfo} />
                    <Loans handleLoansInfo={handleLoansInfo} />
                    <Credit handleCreditInfo={handleCreditInfo} />
                    <Income handleIncomeInfo={handleIncomeInfo} />
                    <Inputs handleMonthlyInfo={handleMonthlyInfo} />
                    <Button />
                </form>
            </section>
        </>
    )
}