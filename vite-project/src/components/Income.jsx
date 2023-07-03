import Title from "./reuse/Title"
import ThreeTable from "./reuse/Three-Table"
import incomeArray from "../table-info/income-data"
import TextBox from "./reuse/TextBox"

export default function Income({ handleIncomeInfo }) {
    return (
        <>
            <Title title='AVERAGE HOUSEHOLD NET INCOME' subtext='(Required) Please fill out all your income information completely.' asterik='*' />
            <ThreeTable table={incomeArray} onChange={handleIncomeInfo} />
            <TextBox title='ADD EXTRA INCOME' name='Extra Income' onChange={handleIncomeInfo} index='3' />
        </>
    )
}