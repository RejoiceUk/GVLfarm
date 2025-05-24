import React from 'react';
import img from "../../assets/images/img9.png";
import Footer from '../layout/Footer';
import BackgroundImg from '../layout/BackgroundImg';
import locksymbol from "../../assets/images/lock.png"

export default function PrivacyPolicy() {
    return (
        <>
            <BackgroundImg heading="Privacy Policy" description='Explore our fields, our people, and our process. See how Gandaria Integrated Farms is transforming agriculture—one frame at a time.' />
            <div className='py-[5%] px-[10%] bg-[#E3E3E3] text-[1rem] flex flex-col gap-6'>
                <div>
                    <span className='bg-white px-6 py-2 rounded-[50px] text-[#404A3D] text-[.7rem] text-center'>📆 Effective Date: 12/06/2025</span>
                </div>

                <div className='text-[#2A2A2A]'>
                    <div className='md:w-[30%] w-[40%] float-right ml-4'>
                        <img src={img} alt="" />

                    </div>
                    <p>
                        At Gandaria Integrated Farms, your privacy is important to us. This policy explains
                        how we collect, use, and protect your personal information when you visit our
                        website or interact with our services.We may collect personal details such as
                        your name, email address, and phone number when you reach out to us, subscribe
                        to our newsletter, or complete any forms on our site. Additionally, we may gather
                        non-personal data such as IP address, browser
                        type, and user behavior on our site to help us improve your browsing experience.
                    </p>

                    <p>
                        At Gandaria Integrated Farms, your privacy is important to us. This policy explains
                        how we collect, use, and protect your personal information when you visit our website
                        or interact with our services.At Gandaria Integrated Farms, your privacy is important
                        to us. This policy explains how we collect, use, and protect your personal
                        information when you visit our website or interact with our services.
                    </p>

                    <p className='mt-2'>
                        We use cookies and similar tools to understand how our site is used and to remember your preferences. You can control cookies through your browser settings.
                        You have the right to access, update, or request deletion of your personal information. You may
                        also opt out of marketing messages at any time by contacting us..
                    </p>

                    <p className='mb-8 mt-4'>
                        We may collect personal details such as your name, email address, and phone number when you reach
                        out to us, subscribe to our newsletter, or complete any forms on our site. Additionally,
                        we may gather non-personal data such as IP address,
                        browser type, and user behavior on our site to help us improve your browsing experience.
                    </p>

                    <span className='bg-[var(--primary-color)] text-white rounded-lg py-2 flex gap-2 w-[300px] px-10' ><img src={locksymbol} alt="your privacy matter" />  Your Privacy matters</span>

                    <div className='text-[#666666] text-[.8rem] flex flex-col gap-2 py-3'>
                        <p>
                            Learn how we collect, use, and protect your information as you engage with Gandaria Integrated Farms online.
                            Transparency, security, and trust are at the heart of everything we do.
                        </p>
                        <p>
                            At Gandaria Integrated Farms, we are committed to respecting your privacy and
                            safeguarding any data you share with us. Whether you're browsing our website,
                            reaching out for inquiries, or subscribing to updates,
                            we want you to feel secure knowing that your information is handled with care.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
