export default function ContactInfo({ handleContactInfo }) {
    return (
        <>
            <NameContainer handleContactInfo={handleContactInfo} />
            <PhoneContainer handleContactInfo={handleContactInfo} />
            <EmailContainer handleContactInfo={handleContactInfo} />
        </>
    )
}

function NameContainer({ handleContactInfo }) {
    return (
        <>
            <div id="name-container">
                <h1 className="font-bold text-xl">NAME <span id='asterik'>*</span></h1>
                <div className="lg:flex lg:space-x-5">
                    <div>
                        <input className="input mt-2" type="text" name="First Name" onChange={handleContactInfo} required />
                        <h4>First Name</h4>
                    </div>
                    <div>
                        <input className="input mt-2" type="text" name="Last Name" onChange={handleContactInfo} required />
                        <h4>Last Name</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

function PhoneContainer({ handleContactInfo }) {
    return (
        <>
            <div id="phone-container">
                <h1 className="font-bold text-xl py-2">PHONE NUMBER</h1>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:w-1/3">
                        <input className="border-[1px] rounded-md border-[#808080]" type="tel" name="Phone" onChange={handleContactInfo} required />
                        <label>Phone Number (format: xxx-xxx-xxxx)</label>
                    </div>
                </div>
            </div>
        </>
    )
}

function EmailContainer({ handleContactInfo }) {
    return (
        <>
            <div id="email-container">
                <h1 className="font-bold text-xl py-2">E-MAIL</h1>
                <div className="lg:flex lg:flex-col">
                    <input className="input mt-2 lg:w-1/3" type="Email" name="email" onChange={handleContactInfo} required />
                    <span>Ex: jake@example.com</span>
                </div>
            </div>
        </>
    )
}