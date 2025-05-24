import React from 'react'
import BackgroundImg from '../layout/BackgroundImg';
import Footer from '../layout/Footer';

export default function TermsOfUse() {
    return (
        <div>
            <BackgroundImg heading='Terms Of Use' description="Explore our fields, our people, and our process. See how Gandaria Integrated Farms is transforming agriculture—one frame at a time." />
            <div className='px-[8%] py-[5%] bg-[#E3E3E3] flex flex-col gap-4'>
                <h2 className='text-[2rem] text-[var(--primary-color)] font-[700]'>Terms of Use</h2>

                <div>
                    <span className='bg-white px-6 py-2 rounded-[50px] text-[#404A3D] text-[.7rem] text-center'>📆 Effective Date: 12/06/2025</span>
                </div>

                <div className='text-[#2A2A2A] font-[400] flex flex-col gap-2'>
                    <p>
                        Welcome to the Gandaria Integrated Farms website. By accessing or using this website, you agree to
                        be bound by these Terms of Use. Please read them carefully. If you do not agree with any part of these terms, you should not use our site.
                        The content of this website is for general information and promotional purposes only. We reserve the right to update
                        or change information at any time without
                        notice. While we strive for accuracy, Gandaria Integrated Farms makes no guarantees regarding the completeness
                        or reliability of any content on this website.
                    </p>
                    <p>
                        All materials on this site, including text, images, graphics, and logos, are the property of Gandaria Integrated Farms and may not be used, copied,
                        or reproduced without prior written permission. Unauthorized use may result in legal action.
                    </p>
                    <p className='mt-20'>
                        You agree not to use this site for any unlawful purpose or in any way that may harm the reputation or
                        operations of Gandaria Integrated Farms. This includes transmitting malicious code,
                        attempting to breach the website’s security, or interfering with its functionality.
                    </p>
                    <p>
                        Our site may contain links to third-party websites. We are not responsible for the content, terms, or privacy practices of those websites. Visiting such sites is at your own risk.
                        We reserve the right to modify these Terms of Use at any time. Your continued use of the site after any changes signifies your acceptance of the updated terms.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
