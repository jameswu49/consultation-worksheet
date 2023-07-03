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
                <input className="input mt-2" type="text" name="First Name" onChange={handleContactInfo} />
                <h4>First Name</h4>
                <input className="input" type="text" name="Last Name" onChange={handleContactInfo} />
                <h4>Last Name</h4>
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
                    <div className="flex flex-col w-full">
                        <input className="border-[1px] rounded-md border-[#808080]" type="tel" name="Phone" onChange={handleContactInfo} />
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
                <div>
                    <input className="input mt-2" type="Email" name="email" onChange={handleContactInfo} />
                    <span>Ex: jake@example.com</span>
                </div>
            </div>
        </>
    )
}