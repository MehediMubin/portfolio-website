import Lottie from 'lottie-react';
import experience from '../assets/Experience.json'

const Experience = () => {
    return (
        <div className="h-screen pl-11 flex items-center gap-5">
            <div className='w-4/6'>
                <h2 className="text-3xl uppercase rounded  mb-5 font-semibold tracking-wide bg-gray-300 py-1 px-2 flex items-center gap-5">
                    <span className="text-[#FF2E00]">Experiences</span>
                </h2>
                <div className="mb-3">
                    <h3 className="text-2xl tracking-wide font-semibold text-[#FF2E00]">
                        Moderator & System Tester
                    </h3>
                    <h4 className="text-xl tracking-wider">
                        ULAB Take Off Programming Contest
                    </h4>
                    <p className="text-lg tracking-wide">July, 2022</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-2xl tracking-wide font-semibold text-[#FF2E00]">
                        Problem Setter & System Tester{" "}
                    </h3>
                    <h4 className="text-xl tracking-wider">
                        ULAB Take Off Programming Contest
                    </h4>
                    <p className="text-lg tracking-wide">September, 2021</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-2xl tracking-wide font-semibold text-[#FF2E00]">
                        Competitive Programming Trainer
                    </h3>
                    <h4 className="text-xl tracking-wider">
                        ULAB Computer Programming Society
                    </h4>
                    <p className="text-lg tracking-wide">
                        August 2021 - March 2022
                    </p>
                </div>
                <div className="mb-3">
                    <h3 className="text-2xl tracking-wide font-semibold text-[#FF2E00]">
                        Class Coordinator
                    </h3>
                    <h4 className="text-xl tracking-wider">
                        ULAB Computer Programming Society
                    </h4>
                    <p className="text-lg tracking-wide">
                        August 2021 - March 2022
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-5/6">
                <Lottie animationData={experience} loop={false} />
            </div>
        </div>
    );
};

export default Experience;
