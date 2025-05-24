// AgricultureTips.jsx - Component for agriculture tips
import post1 from "../../../assets/images/lastestpost1.png";
import calendarimg from "../../../assets/images/calender.png";
import profile from "../../../assets/images/profile.png";


export function AgriculturalTips() {
    const agriculturePosts = [
        // Your agriculture-specific posts here
        {
            id: 1,
            image: post1, // Import these images
            title: "Best Irrigation Techniques for Modern Farming",
            date: "March 25, 2024",
            author: "ADMIN",
            alt: "Irrigation techniques"
        },
        // Add more agriculture-specific posts...
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 lg:gap-4 mb-8">
            {agriculturePosts.map((post) => (
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