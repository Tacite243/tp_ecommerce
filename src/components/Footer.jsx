



export default function Footer() {
    return(
        <footer className="w-full bg-white border border-gray-100 pt-16 pb-8 mt-auto font-sans">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* --- Grid Responsive --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 items-start">

                    {/* Col 1: Brand (Shopio) */}
                    <div className="col-span-1 pr-4 lg:pt-14">
                        <h3 className="text-xl font-bold text-gray-500 mb-3 leading-none">Shopio</h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    {/* Col 2: Policy Info */}
                    <div className="col-span-1">
                        <h4 className="text-xs font-bold text-gray-700 uppercase mb-5 tracking-wide">
                            Policy Info
                        </h4>
                        <ul className="space-y-2">
                            {['Privacy Policy', 'Terms of Sale', 'Terms of Use', 'Report Abuse & Takedown Policy', 'CSR Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Company */}
                    <div className="col-span-1">
                        <h4 className="text-xs font-bold text-gray-700 uppercase mb-5 tracking-wide">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            {['About Us', 'Blog', 'Sitemap', 'FAQ', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Business */}
                    <div className="col-span-1">
                        <h4 className="text-xs font-bold text-gray-700 uppercase mb-5 tracking-wide">
                            Business
                        </h4>
                        <ul className="space-y-2">
                            {['Sell on Shopio', 'Advertise on Shopio', 'Media Enquiries', 'Be an Affiliate', 'Deal of the Day'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: Subscribe */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 pl-0 lg:pl-2">
                        <h4 className="text-xs font-bold text-gray-700 uppercase mb-5 tracking-wide">
                            Subscribe
                        </h4>
                        <form className="flex mb-3">
                            <input
                                type="email"
                                placeholder="Your email Address"
                                className="w-full bg-white border border-gray-300 border-r-0 px-3 py-2 text-[11px] outline-none placeholder-gray-400 text-gray-600"
                            />
                            <button
                                type="submit"
                                className="bg-[#2c2c2c] text-white px-5 text-[10px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                        <p className="text-[10px] text-gray-400 leading-tight">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>

                {/* --- Copyright Bottom --- */}
                <div className="text-center pt-8 border-t border-white">
                    <p className="text-[10px] text-gray-300">
                        Copyright 2026. All Rights Reserved
                    </p>
                </div>

            </div>
        </footer>

    )
}