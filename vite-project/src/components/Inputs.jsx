import Input from "./reuse/Input"

export default function Inputs() {

    function Text() {
        return (
            <>
                <div className="mt-5 text-center">
                    <p><span className="font-bold">CLICK SUBMIT</span> below and we will begin entering your data in preparation for your personalized Money Max Report appointment.</p>
                    <p className="my-5"> Your specialist will review your information with you during your appointment time.</p>
                    <p>See you soon!</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="my-10">
                <Input title='MONTHLY EXPENSES (All bills, food, gas, electric, etc, not including debt payments listed above)' subtext='How much per month do you spend?' />
                <h1 className="text-red-500 font-bold my-10 text-2xl">OR</h1>
                <Input title='MONTHLY DISCRETIONARY INCOME (How much $ is left after all the bills are paid?)' subtext='What&#39;s left at the end of the month after everything is paid?' />
                <Text />
            </div>
        </>
    )
}