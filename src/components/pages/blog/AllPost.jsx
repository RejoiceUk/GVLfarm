import React from 'react';
import post1 from "../../../assets/images/lastestpost1.png";
import post2 from "../../../assets/images/lastestpost2.png";
import calendarimg from "../../../assets/images/calender.png";
import profile from "../../../assets/images/profile.png";
import post3 from "../../../assets/images/postimg6.png";
import post4 from "../../../assets/images/postimg3.png";
import post5 from "../../../assets/images/postimg4.png";
import post6 from "../../../assets/images/postimg5.png";


export default function AllPost() {

    const posts = [
        {
            id: 1,
            image: post1,
            title: "What technology is used in vertical farming?",
            date: "March 28, 2024",
            author: "ADMIN",
            alt: " What technology is used in vertical farming?"
        },
        {
            id: 2,
            image: post2,
            title: "Which type of farming is more prevalent today?",
            date: "March 28, 2024",
            author: "ADMIN",
            alt: "Which type of farming is more prevalent today?"
        },
        {
            id: 3,
            image: post3,
            title: "A farmer is a person who works in agriculture.",
            date: "March 28, 2024",
            author: "ADMIN",
            alt: "A farmer is a person who works in agriculture."
        },
        {
            id: 4,
            image: post4,
            title: "Organic Fruits: Hidden Advantages And Information",
            date: "March 28, 2024",
            author: "ADMIN",
            alt: "Organic Fruits: Hidden Advantages And Information"
        },
        {
            id: 5,
            image: post5,
            title: "Agricultural Infrastructure in Rural Areas",
            date: "March 28, 2024",
            author: "ADMIN",
            alt: "Agricultural Infrastructure in Rural Areas"
        },
        {
            id: 6,
            image: post6,
            title: "Are You Prepared for the Upcoming Season?",
            date: "March 28, 2024",
            author: "ADMIN",
            alt: "Are You Prepared for the Upcoming Season?"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 lg:gap-4 mb-8">
            {posts.map((post) => (
                <div key={post.id} className="flex flex-col h-full">
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src={post.image}
                            alt={post.alt}
                            className="w-[80%] m-auto h-auto object-cover transition duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <img src={calendarimg} alt="Calendar" className="w-4 h-4" />
                            <span className="text-[.7rem] text-gray-600">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={profile} alt="Profile" className="w-4 h-4" />
                            <span className="text-[.7rem] text-gray-600">{post.author}</span>
                        </div>
                    </div>
                    <h3 className="mt-3 text-base md:text-lg font-semibold text-[var(--primary-color)]">
                        {post.title}
                    </h3>
                </div>
            ))}
        </div>
    );
}