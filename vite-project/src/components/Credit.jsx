import TenTable from "./reuse/Ten-Table"
import creditArray from "../table-info/credit-data"
import TextBox from "./reuse/TextBox"

export default function Credit({ handleCreditInfo }) {

    function Title() {
        return (
            <>
                <div className="my-8">
                    <h1 className="text-red-500 font-bold text-2xl">REVOLVING CREDIT - <span className="text-base font-bold">*LOC- Line of Credit, Credit Cards, HELOC - Home Equity Line of Credit, BLOC - Business Line of Credit</span></h1>
                </div>
            </>
        )
    }

    function SubText() {
        return (
            <>
                <div className="mb-4">
                    <p className="font-bold">(Required) Please fill out all your credit line information completely. <span className="text-red-500">*</span></p>
                </div>
            </>
        )
    }

    return (
        <>
            <Title />
            <SubText />
            <TenTable table={creditArray} onChange={handleCreditInfo} />
            <TextBox title='ADD EXTRA CREDIT ACCOUNTS' name='Extra Credit Accounts' onChange={handleCreditInfo} index='10' />
        </>
    )
}