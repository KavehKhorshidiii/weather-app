import { FaGithubAlt } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

export default function links() {
    return (
        <div className=" space-y-15 mt-15">
           
            <div className="aboutMe">
                <div className=" flex text-2xl font-bold text-weather-end items-center">Hi! I’m Kaveh Khorshidi</div>
                <div className="flex flex-col">
                    <span className=" dark:text-white text-black font-bold">Frontend Developer</span>
                    <span className=" dark:text-white text-black font-bold">"I hope you enjoy exploring this website and have a great experience"</span>
                </div>
            </div>

             <div className="SocialMedia">
                <div className=" flex text-2xl font-bold text-weather-end items-center">Let’s Connect</div>

                <div className=" group w-fit ">
                    <div className=" group-hover:translate-x-5  dark:text-white text-black text-xl flex items-center gap-2">
                        <FaGithubAlt className=" "></FaGithubAlt>
                        <span className="  font-bold">GitHub</span>
                    </div>
                </div>

                <div className=" group w-fit ">
                    <div className=" flex group-hover:translate-x-5  dark:text-white text-black text-xl items-center gap-2">
                        <FaTelegramPlane className=""></FaTelegramPlane>
                        <span className=" font-bold">Telegram</span>
                    </div>
                </div>

                <div className=" group w-fit ">
                    <div className="group-hover:translate-x-5  dark:text-white text-black text-xl flex items-center gap-2">
                        <SiGmail className=" "></SiGmail>
                        <span className=" font-bold">Gmail</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
