import React from 'react';



const Footer = () => {
    return (
        <footer id='kontakt_oss' className="bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-300 mt-10 pb-6">
        {/* grey line */}
        <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="container mx-auto px-4 lg:px-8 text-center pt-8 space-y-6">
            <h2 className="text-xl font-semibold">Kontakt oss</h2>
  
            <p className="text-sm md:text-base">
            Ta kontakt med oss på e-post eller telefon hvis du har noen spørsmål.
            </p>
  
            <div className="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-16">
                {/* E-post Section */}
                <div className="flex flex-col">
                    <p className="font-semibold">E-post</p>
                    <a
                        href="mailto:johannestjo@gmail.com"
                        className="text-black dark:text-blue-400 hover:underline"
                    >
                        johannestjo@gmail.com
                    </a>
                </div>
    
                {/* Phone Number Section */}
                <div className="flex flex-col">
                    <p className="font-semibold">Telefon</p>
                    <p className="text-black dark:text-blue-400">+47 978 74 147</p>
                </div>
            </div>
  
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Nettside utviklet av gruppe 3 - 2024
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
