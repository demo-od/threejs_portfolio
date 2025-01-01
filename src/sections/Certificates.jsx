import { useState, useEffect } from 'react';

const certificateList = [
    { file: 'Advanced-SQL-developer.png', text: 'W3Schools Advanced SQL Developer Certification', link: 'https://verify.w3schools.com/1OLBS1NN4C' },
    { file: 'CSS-developer.png', text: 'W3Schools CSS Developer Certification', link: 'https://verify.w3schools.com/1N9U4TCV01' },
    { file: 'JavaScript-developer.png', text: 'W3Schools JavaScript Developer Certification', link: 'https://verify.w3schools.com/1O1DO2EJES' },
    { file: 'Web-App-Developer.png', text: 'W3Schools Web Application Developer Certification', link: 'https://verify.w3schools.com/1OL5324YAL' },
    { file: 'front-end-developer.png', text: 'W3Schools Front-End Developer Certification', link: 'https://verify.w3schools.com/1O1DO2HW9X' },
    { file: 'html-developer.png', text: 'W3Schools HTML Developer Certification', link: 'https://verify.w3schools.com/1MV9RZ6WOS' },
    { file: 'php-developer.png', text: 'W3Schools PHP Developer Certification', link: 'https://verify.w3schools.com/1OL53222D9' },
    { file: 'SQL-developer.png', text: 'W3Schools SQL Developer Certification', link: 'https://verify.w3schools.com/1MWTTX83QE' }
];

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        // Set the certificates from the predefined list
        setCertificates(certificateList);
    }, []);

    return (
        <section className="c-space my-20">
            <h3 className="head-text text-center">My Certificates</h3>

            <div className="client-container">
                {certificates.map((certificate, index) => (
                    <div key={`certificate-${index}`} className="client-review">
                        <div>
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`/certificates/${certificate.file}`}
                                    alt={`Certificate ${index + 1}`}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </a>
                            <div className="client-content mt-4">
                                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-white-800">
                                    {certificate.text}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
