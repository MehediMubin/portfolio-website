import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../assets/contact.json";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message Sent Successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div id="contact" className="flex items-center pl-16 h-screen mb-3">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="w-full lg:w-3/6">
                <h2 className="text-3xl uppercase rounded text-[#FF2E00] mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs mb-5"
                        required
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs mb-5"
                        required
                    />
                    <br />
                    <textarea
                        className="textarea textarea-primary w-3/6 mb-1"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <br />

                    <input
                        className="btn text-[#FF2E00] hover:bg-purple-700 hover:text-white shadow-lg shadow-indigo-500/40 ease-in-out duration-500 px-24 py-4 mb-5"
                        type="submit"
                        value="Send Message"
                    />
                </form>
            </div>
            <div className="w-full lg:w-3/6">
                <Lottie animationData={contact} loop={false} />
            </div>
        </div>
    );
};

export default Contact;
