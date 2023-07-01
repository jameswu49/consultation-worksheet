import Title from "../components/reuse/Title"
import loansArray from "../data/loans-data"
import TenTable from "./reuse/Ten-Table"
import TextBox from "./reuse/TextBox"

export default function Loans() {

    return (
        <>
            <Title title='LOANS - Auto Loans, Student Loans, Personal Loans and Business Loans' subtext='(Required) Please fill out all your loan(s) information completely.' />
            <TenTable table={loansArray} />
            <TextBox title='ADD EXTRA LOAN ACCOUNTS' />
        </>
    )
}