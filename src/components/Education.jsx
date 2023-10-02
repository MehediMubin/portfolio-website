import image from "../assets/1511_logo.jpg";
import logo from "../assets/logo.svg";

const Education = () => {
    return (
        <div className="h-auto pl-10 mb-20">
            <h2 className="text-3xl uppercase rounded text-[#FF2E00] mb-8 font-semibold tracking-wider bg-gray-300 py-1 px-2">
                Education
            </h2>
            <div className="flex items-center gap-5 shadow-lg hover:shadow-blue-500/50 py-5 mb-6 pl-3 transition ease-in-out delay-400">
                <img className="w-28" src={logo} alt="" />
                <div>
                    <h3 className="text-2xl font-semibold tracking-wide">
                        University of Liberal Arts Bangladesh
                    </h3>
                    <h4 className="text-xl font-semibold tracking-wider">
                       Bachelor of Science in Computer Science and Engineering
                    </h4>
                    <p className="text-lg">Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="flex items-center shadow-lg hover:shadow-indigo-500/50 py-5 transition ease-in-out delay-400">
                <img className="w-28" src={image} alt="" />
                <div>
                    <h3 className="text-2xl font-semibold tracking-wide">
                        Dr. Yakub Sharif Degree College
                    </h3>
                    <h4 className="text-xl font-semibold tracking-wider">
                        Higher Secondary
                    </h4>
                    <p className="text-lg">Barisal</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
