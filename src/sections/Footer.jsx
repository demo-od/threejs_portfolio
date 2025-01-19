const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className={`c-space pt-7 pb-3 border-t
        border-black-300 flex justify-between items-center
        flex-wrap gap-5`}>
            <div className={`text-white-500 flex gap-2`}>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className={`flex gap-3`}>
                <div className={`social-icon`}>
                    <a href="https://github.com/demo-od" className={`w-1/2 h-1/2`} target="_blank" rel="noreferrer">
                        <img src={"/assets/github.svg"} alt="Github"/>
                    </a>
                </div>

                <div className={`social-icon`}>
                    <a href="https://www.instagram.com/__demo9_/" className={`w-1/2 h-1/2`} target="_blank" rel="noreferrer">
                        <img src={"/assets/instagram.svg"} alt="Github"/>
                    </a>
                </div>
            </div>
            <p className={`text-white-500`}>© {currentYear} Odusanya Ademola. All rights reserved</p>
        </section>
    )
}
export default Footer
