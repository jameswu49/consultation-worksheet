import Title from "../components/reuse/Title"
import loansArray from "../table-info/loans-data"
import TenTable from "./reuse/Ten-Table"
import TextBox from "./reuse/TextBox"

export default function Loans({ handleLoansInfo }) {

    return (
        <>
            <Title title='LOANS - Auto Loans, Student Loans, Personal Loans and Business Loans' subtext='(Required) Please fill out all your loan(s) information completely.' />
            <TenTable table={loansArray} onChange={handleLoansInfo} />
            <TextBox title='ADD EXTRA LOAN ACCOUNTS' name='Extra Loans Accounts' onChange={handleLoansInfo} index='10' />
        </>
    )
}