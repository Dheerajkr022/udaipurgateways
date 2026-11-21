export interface HolidayPackage {
  title: string;
  desc: string;
  img: string;
}

export const holidayPackages: HolidayPackage[] = [
  { title: "Royal Udaipur Honeymoon", desc: "Romantic lakeside stays, private sunset boat rides & candlelight palace dining", img: "/packages/honeymoon.jpg" },
  { title: "Mewar Heritage & Family Tour", desc: "Explore City Palace, Sahelion Ki Bari, puppet shows & heritage havelis", img: "/packages/family.jpg" },
  { title: "Aravali Adventure & Trekking", desc: "Sajjangarh hill treks, Aravali nature trails & wildlife sanctuary safaris", img: "/packages/adventure.jpg" },
  { title: "Weekend Lake City Escape", desc: "Curated 2-3 day weekend getaway around Udaipur's serene lakes & ghats", img: "/packages/weekend.jpg" },
  { title: "Mewar Forts & Group Excursion", desc: "Group exploration to Kumbhalgarh Fort wall, Chittorgarh & Haldighati", img: "/packages/group.jpg" },
  { title: "Sacred Temples & Pilgrimage", desc: "Spiritual journeys to Eklingji, Nathdwara Shrinathji & Ranakpur Jain Temples", img: "/packages/pilgrimage.jpg" },
];
