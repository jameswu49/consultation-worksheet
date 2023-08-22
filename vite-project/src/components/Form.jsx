import { useState } from "react";
import emailjs from "emailjs-com"
import Header from "./Header";
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
import Button from "./Button";
import Modal from "./Modal"

emailjs.init('WTYG-lZAifFRnGgJ4');


export default function Form() {
    const [contactInfo, setContactInfo] = useState(initialContactInfo)
    const [mortgage, setMortgage] = useState(initialMortgageState)
    const [loans, setLoans] = useState(initialLoansState)
    const [credit, setCredit] = useState(initialCreditInfo)
    const [income, setIncome] = useState(initialIncomeInfo)
    const [monthlyExpenses, setMonthlyExpenses] = useState('')
    const [monthlyDiscretionary, setMonthlyDiscretionary] = useState('')
    const [incomeRequired, setIncomeRequired] = useState(true)
    const [mortgageRequired, setMortgageRequired] = useState(true)
    const [loanRequired, setLoanRequired] = useState(true)
    const [hidden, setHidden] = useState(false)
    const [hiddenError, setHiddenError] = useState(false)

    const handleContactInfo = (event) => {
        const { name, value } = event.target;
        setContactInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleMortgageInfo = (headerIndex, event) => {
        const { name, value } = event.target;

        setLoanRequired(false)

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

        setMortgageRequired(false)

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

    const handleMonthlyInfo = (event) => {
        setMonthlyExpenses(event.target.value)
        console.log(monthlyExpenses)
    }

    const handleDiscretionaryInfo = (event) => {
        setMonthlyDiscretionary(event.target.value)
        console.log(monthlyDiscretionary)
    }

    const sendFormData = async (formData) => {

        const templateParams = {
            firstName: formData.contactInfo['First Name'],
            lastName: formData.contactInfo['Last Name'],
            phone: formData.contactInfo['Phone'],
            email: formData.contactInfo['email'],
            extraMortgageInfo: formData.mortgageRows.length ? formData.mortgageRows[formData.mortgageRows.length - 1].data.Text : '',
            extraLoanAccounts: formData.loansRows.length ? formData.loansRows[formData.loansRows.length - 1].data.Text : '',
            extraCreditAccounts: formData.creditRows.length ? formData.creditRows[formData.creditRows.length - 1].data.Text : '',
            extraIncome: formData.incomeRows.length ? formData.incomeRows[formData.incomeRows.length - 1].data.Text : '',
            monthlyExpenses: monthlyExpenses,
            discretionaryIncome: monthlyDiscretionary
        };

        const mortgageData = (index) => {
            return {
                lenderName: formData.mortgageRows[index].data['Lender Name'],
                startDate: formData.mortgageRows[index].data['Mortgage Start Date'],
                mortgageTerm: formData.mortgageRows[index].data['Mortage Term'],
                monthlyPayments: formData.mortgageRows[index].data['Monthly Payment* Including Escrows'],
                extraPrincipal: formData.mortgageRows[index].data['Extra Principal Payment'],
                interestRate: formData.mortgageRows[index].data['Interest Rate'],
                escrowPayment: formData.mortgageRows[index].data['Escrow Payment'],
                insurancePayment: formData.mortgageRows[index].data['Mortgage Insurance Payment'],
                mortgageBalance: formData.mortgageRows[index].data['Current Mortgage Balance'],
                originalBalance: formData.mortgageRows[index].data['Original Mortgage Balance'],
            }
        }

        const loansData = (index) => {
            return {
                accountName: formData.loansRows[index].data['Account Name*'],
                loanStartDate: formData.loansRows[index].data['Loan Start Date'],
                loanTerm: formData.loansRows[index].data['Loan Term'],
                monthlyLoanPayment: formData.loansRows[index].data['Monthly Payment'],
                extraLoanPayment: formData.loansRows[index].data['Extra Principal Payment'],
                loanInterestRate: formData.loansRows[index].data['Interest Rate'],
                currentLoanBalance: formData.loansRows[index].data['Current Loan Balance'],
                originalLoanAmount: formData.loansRows[index].data['Original Loan Amount'],
            }
        }

        const creditData = (index) => {
            return {
                creditType: formData.creditRows[index].data['Type of Credit*'],
                currentBalance: formData.creditRows[index].data['Current Balance'],
                minimumPayment: formData.creditRows[index].data['Minimum Payment'],
                extraPrincipalPayment: formData.creditRows[index].data['Extra Principal Payment'],
                interestRate: formData.creditRows[index].data['Interest Rate'],
                creditLimit: formData.creditRows[index].data['Credit Limit']
            }
        }

        const incomeData = (index) => {
            return {
                incomeSource: formData.incomeRows[index].data['Income Source*'],
                paymentFrequency: formData.incomeRows[index].data['Payment Frequency*'],
                netIncome: formData.incomeRows[index].data['Average Net Income Per Paycheck']
            }
        }

        function loop(row, formData) {
            for (let i = 0; i < row.length; i++) {
                const data = formData(i)
                for (const key in data) {
                    if (key in templateParams) {
                        let newKey = key + i
                        templateParams[newKey] = data[key]
                    } else {
                        templateParams[key] = data[key]
                    }
                }
            }
        }

        loop(formData.mortgageRows, mortgageData)
        loop(formData.loansRows, loansData)
        loop(formData.creditRows, creditData)
        loop(formData.incomeRows, incomeData)

        try {
            const response = await emailjs.send('service_u4ai4eb', 'template_llp4i36', templateParams);
            console.log('Email sent successfully:', response);
            setHidden(true)
        } catch (error) {
            console.error('Error sending email:', error);
            setHiddenError(true)
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
        }

        sendFormData(formData);
    };


    return (
        <>
            <section className={`mt-8 ${hidden || hiddenError ? 'hidden' : ''}`}>
                <form onSubmit={handleFormSubmit}>
                    <Header />
                    <ContactInfo handleContactInfo={handleContactInfo} />
                    <Mortgages handleMortgageInfo={handleMortgageInfo} mortgageRequired={mortgageRequired} />
                    <Loans handleLoansInfo={handleLoansInfo} loanRequired={loanRequired} />
                    <Credit handleCreditInfo={handleCreditInfo} />
                    <Income handleIncomeInfo={handleIncomeInfo} incomeRequired={incomeRequired} />
                    <Inputs handleMonthlyInfo={handleMonthlyInfo} handleDiscretionaryInfo={handleDiscretionaryInfo} />
                    <Button />
                </form>
            </section>
            <Modal hidden={hidden} hiddenError={hiddenError} setHidden={setHidden} setHiddenError={setHiddenError} />
        </>
    )
}