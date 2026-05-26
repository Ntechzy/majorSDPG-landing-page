export interface EventCard {
  id: number;
  title: string;
  image: string;
  link: string;
  category?: string;
  date?: string;
}

export const events: EventCard[] = [
  {
    id: 1,
    title: "Ashvamedha Fest",
    image: "/event/e9.webp",
    link: "https://www.facebook.com/share/p/1H41RyUZV6/",
    category: "Technology",
    date: "February 2026",
  },
  {
    id: 2,
    title: "Ashvamedha Fest 2022 Ka Bhavya Shubharambh",
    image: "/event/e8.webp",
    link: "https://www.instagram.com/p/Ck8UXAsh888/?igsh=NGFlaHVoN2tyanI=",
    category: "Academic",
    date: "March 2026",
  },
  {
    id: 3,
    title: "Ashvamedha Fest 2022 – Khel Pratiyogitaon Mein Chhatron Ka Shandaar Pradarshan",
    image: "/event/e7.webp",
    link: "https://www.instagram.com/p/Ck_j2Hsh0v-/?img_index=1&igsh=bGJqamVieGZ6d253",
    category: "Technology",
    date: "February 2026",
  },
  {
    id: 4,
    title: "9th National Seminar on “Dosh Dhatu Mal Moolam Hi Shariram”",
    image: "/event/e13.jpg",
    link: "https://www.facebook.com/share/p/1BFvyBRhTe/",
    category: "Outreach",
    date: "May 2026",
  },
  {
    id: 5,
    title: "Synergy Fest 2025",
    image: "/event/e11.webp",
    link: "https://www.facebook.com/photo?fbid=1416414077158488&set=pcb.1416414433825119",
    category: "Conference",
    date: "August 2026",
  },
  {
    id: 6,
    title: "Mr. & Miss Farewell 2022 – Yaadon Aur Nai Shuruaat Ki Yaadgaar Shaam",
    image: "/event/e12.webp",
    link: "https://www.facebook.com/share/19BMGMNT8w/",
    category: "Awareness",
    date: "September 2026",
  },
];
