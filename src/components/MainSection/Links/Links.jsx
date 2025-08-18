import { FaGithubAlt } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

export default function Links() {
    return (
        <main className=" space-y-15 mt-15">
            {/* about me */}
            <section className="aboutMe">
                <h1 className=" flex text-xl md:text-2xl font-bold text-weather-end items-center">Hi! I’m Kaveh Khorshidi</h1>
                <div className="flex text-sm md:text-xl flex-col">
                    <span className=" dark:text-white text-black font-bold">Frontend Developer</span>
                    <span className=" dark:text-white text-black font-bold">"I hope you enjoy exploring this website and have a great experience"</span>
                </div>
            </section>
            {/* Social Media */}
            <section className="SocialMedia">
                <h2 className=" flex text-xl md:text-2xl font-bold text-weather-end items-center">Let’s Connect</h2>
                {/* github */}
                <div className=" group w-fit ">
                    <a href="https://github.com/KavehKhorshidiii">
                        <div className=" group-hover:translate-x-5  dark:text-white text-black text-xl md:text-2xl flex items-center gap-2">
                            <FaGithubAlt className="text-xl md:text-2xl"></FaGithubAlt>
                            <span className="  font-bold">GitHub</span>
                        </div>
                    </a>
                </div>
                {/* telegram */}
                <div className=" group w-fit ">
                    <a href="https://t.me/kavehkhorshidiiii">
                        <div className=" flex group-hover:translate-x-5  dark:text-white text-black text-xl md:text-2xl items-center gap-2">
                            <FaTelegramPlane className="text-xl md:text-2xl"></FaTelegramPlane>
                            <span className=" font-bold">Telegram</span>
                        </div>
                    </a>
                </div>

            </section>
        </main>
    )
}
