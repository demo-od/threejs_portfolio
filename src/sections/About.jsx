import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("odusanyademola11@gmail.com");
        setHasCopied(true);

        setTimeout( () => {
            setHasCopied(false);
        }, 2000)
    }
    return (
        <section className={`c-space my-20 mt-40`} id="about">
            <div className={`grid xl:grid-cols-3 xl:grid-rows-6
              md:grid-cols-2 grid-cols-1 gap-5 h-full`}>
                <div className={`col-span-1 xl:row-span-3`}>
                    <div className={`grid-container`}>
                        <img src="data:image/jpeg;base64,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" alt="grid-1"
                        className={`w-full sm:h-[276px] h-fit 
                        object-contain`}/>

                        <div>
                            <p className={`grid-headtext`}>Hi, I'm Ademola</p>

                            <p className={`grid-subtext`}> I have honed my skills in
                            fullstack web development, mobile and desktop application development, with
                            a focus on building applications that run seamlessly on
                                any platform or device.</p>
                        </div>
                    </div>
                </div>

                <div className={`col-span-1 xl:row-span-3`}>
                    <div className={`grid-container`}>
                        <img src="/assets/stack-1024x408.png" alt="grid-2" className={`w-full sm:h-[276px] h-fit object-contain`}/>

                        <div>
                            <p className={`grid-headtext`}>Tech Stack</p>
                            <p className={`grid-subtext`}>I specialize in JavaScript with a focus on React and
                                I build mobile and desktop apps with the Flutter SDK.</p>
                        </div>
                    </div>
                </div>

                <div className={`col-span-1 xl:row-span-4`}>
                 <div className={`grid-container`}>
                     <div className={`rounded-3xl w-full sm:h-[326px] h-fit flex
                     justify-center items-center`}>
                         <Globe
                         height={326}
                         width={326}
                         backgroundColor="rgba(0, 0, 0, 0)"
                         backgroundImageOpacity={0.5}
                         ShowAtmosphere
                         ShowGraticules
                         globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                         bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                         />
                     </div>
                     <div>
                         <p className={`grid-headtext`}>
                         I work remotely across most timezones. </p>
                         <p className={`grid-subtext`}>
                             I'm based in Nigeria, with remote work available.
                         </p>
                         <Button name="Contact Me" isBeam containerClass={`w-full mt-10`} />
                     </div>
                 </div>
                </div>

                <div className={`xl:col-span-2 xl:row-span-3`}>
                 <div className={`grid-container`}>
                     <img src="/assets/grid3.png" alt="grid-3"
                          className={`w-full sm:h-[276px] h-fit object-contain`}/>

                     <div>
                         <p className={`grid-headtext`}> My Passion for Programming</p>
                         <p className={`grid-subtext`}>I love programming and building applications
                          through code. Programming isn't just a profession, it is my passion</p>
                     </div>
                 </div>
                </div>

                <div className={`xl:col-span-1 xl:row-span-2`}>
                    <div className={`grid-container`}>
                        <img src="/assets/grid4.png" alt="grid-4"
                             className={`w-full md:h-[126px]
                              sm:h-[276px] h-fit object-cover sm:object-top`}/>
                        <div className={`space-y-2`}>
                            <p className={`grid-subtext text-center`}>Contact me</p>
                            <div className={`copy-container`} onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy" />
                                <p className={`lg:text-xl md:text-xl font-medium text-gray_gradient
                                 text-white`}>odusanyademola11@gmail.com</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
