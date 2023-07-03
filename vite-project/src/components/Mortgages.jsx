import Title from "../components/reuse/Title"
import Table from "./reuse/Three-Table";
import mortagesArray from "../table-info/mortgages-data";
import TextBox from "./reuse/TextBox";


export default function Mortgages({ handleMortgageInfo }) {



    function SubText() {
        return (
            <>
                <div className="mt-20 mb-10">
                    <p>*Including Principal, Interest, Escrow, etc. </p>
                </div>
            </>
        )
    }

    return (
        <>
            <section>
                <Title title='MORTGAGES' subtext='Please fill out all your mortgage information completely.' />
                <Table table={mortagesArray} onChange={handleMortgageInfo} />
                <SubText />
                <TextBox title='ADD EXTRA MORTGAGE INFO' name='Extra Mortgage Info' onChange={handleMortgageInfo} index='3' />
            </section>
        </>
    )
}