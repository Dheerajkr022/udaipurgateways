import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { text: "Our Udaipur honeymoon was pure magic! Udaipur Gateway's information on Lake Pichola hotels made our stay unforgettable.", author: "Amit & Priya Sharma", rating: 5 },
    { text: "The recommendation to visit Kumbhalgarh Fort and Ranakpur on our day trip from Udaipur was fantastic and well planned.", author: "Rahul Verma", rating: 5 },
    { text: "Best local travel information service in Udaipur. Honest guidance on sunset lake cruises and palace tickets.", author: "Sneha Desai", rating: 5 },
    { text: "Helped us arrange courier assistance for our handicrafts shipment from Udaipur to Delhi seamlessly.", author: "Vikram Singh", rating: 5 },
    { text: "The boat cruise advisory for Lake Pichola was spot on. Sunset at Jag Mandir was the highlight of our vacation.", author: "Ananya Gupta", rating: 5 },
    { text: "Extremely helpful team. They guided us on the best heritage havelis near Gangaur Ghat within our budget.", author: "Rohit Khanna", rating: 5 },
    { text: "Informative, genuine and transparent. We planned our entire Mewar circuit with their guidance.", author: "The Patel Family", rating: 5 },
    { text: "Top-notch courier assistance when we needed urgent documents forwarded during our business visit to Udaipur.", author: "Neha Kapoor", rating: 5 },
    { text: "Their deep knowledge of Udaipur's history and temples made our pilgrimage visit very smooth and meaningful.", author: "Kunal Joshi", rating: 5 },
    { text: "Watching the Dharohar dance at Bagore Ki Haveli on their suggestion was mesmerizing. Five stars!", author: "Pooja & Karan", rating: 5 },
    { text: "Great local assistance for our family reunion in Udaipur. We appreciated their honest advice.", author: "Rajesh Nair", rating: 5 },
    { text: "From arrival to exploring Fateh Sagar, everything was made easier by Udaipur Gateway's clear guidance.", author: "Divya Chawla", rating: 5 },
    { text: "Their courier support in Udaipur handled our delicate marble souvenirs with extreme care and prompt delivery.", author: "Abhishek Jain", rating: 5 },
    { text: "Reliable travel advice without pushy booking sales. A truly independent and helpful travel partner.", author: "Sunita Rao", rating: 5 },
    { text: "Customized our entire Udaipur, Kumbhalgarh and Chittorgarh itinerary flawlessly. Highly recommended!", author: "Manoj Tiwari", rating: 5 }
  ];

  return (
    <div className="bg-white overflow-hidden py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="text-center mb-8 lg:mb-10">
        <h2 className="text-xl font-bold text-primary uppercase tracking-wide">
          WHAT TRAVELERS SAY ABOUT UDAIPUR GATEWAY
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fading Gradients for smooth entrance/exit */}
        <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {/* First set of testimonials */}
          {testimonials.map((test, i) => (
            <div key={`first-${i}`} className="flex flex-col gap-4 p-5 bg-page-bg rounded-xl border border-border-color shadow-sm relative w-[300px] md:w-[350px] mx-3 shrink-0">
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-text-primary italic flex-1">"{test.text}"</p>
              <span className="text-xs font-semibold text-text-secondary mt-2">- {test.author}</span>
            </div>
          ))}
          {/* Second identical set of testimonials to create seamless loop */}
          {testimonials.map((test, i) => (
            <div key={`second-${i}`} className="flex flex-col gap-4 p-5 bg-page-bg rounded-xl border border-border-color shadow-sm relative w-[300px] md:w-[350px] mx-3 shrink-0">
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-text-primary italic flex-1">"{test.text}"</p>
              <span className="text-xs font-semibold text-text-secondary mt-2">- {test.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
