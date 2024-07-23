import ContactForm from "../components/Contact/ContactForm.jsx"; // Assume this is a form component you've created

const ContactView = () => (
    <div className="bg-neutral-100">
        <div className="grid grid-cols-5 w-full min-h-screen h-full">
            <img
                src={"/logo.png"}
                alt={"Logo Arquimedes"}
                className={"col-span-5 h-24 mx-auto absolute left-0 top-0 ml-5 mt-5 backdrop-blur-sm rounded-xl cursor-pointer"}
                onClick={() => window.location.href = "/"}
            />
            <div className="col-span-3 w-full h-full">
                <img
                    src="/call_center_agent.webp" // Change this to your desired image
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="col-span-2 bg-neutral-300 relative w-full h-full">
                <img
                    src="/call_center_agent.webp" // Optionally, a blurred version of the same image for background
                    alt="Contact Us"
                    className="absolute w-full h-full object-cover object-right blur-[40px]"
                    style={{ zIndex: 1 }}
                />
                <div className="container mx-auto my-15 h-full flex items-center justify-center relative" style={{ zIndex: 2 }}>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <div className={"mb-4"}>
                            <h1 className="text-xl font-bold">Contáctanos</h1>
                            <span className="text-md text-neutral-800">Estamos para ayudar!</span>
                        </div>
                        <ContactForm/> {/* This should be a form component you've created for contact inquiries */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactView;