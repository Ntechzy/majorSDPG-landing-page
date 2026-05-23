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
    title: "Ashvamedha Fest 2022 – खेल प्रतियोगिताओं में छात्रों का शानदार प्रदर्शन",
    image: "/event/e7.webp",
    link: "https://www.instagram.com/p/Ck_j2Hsh0v-/?img_index=1&igsh=bGJqamVieGZ6d253",
    category: "Technology",
    date: "February 2026",
  },
  {
    id: 2,
    title: "अश्वमेधा फेस्ट 2022 का भव्य शुभारम्भ",
    image: "/event/e8.webp",
    link: "https://www.instagram.com/p/Ck8UXAsh888/?igsh=NGFlaHVoN2tyanI=",
    category: "Academic",
    date: "March 2026",
  },
  {
    id: 3,
    title: "Leadership Talk Series",
    image: "/event/e3.jpg",
    link: "https://www.facebook.com/majorsdsamc",
    category: "Seminar",
    date: "April 2026",
  },
  {
    id: 4,
    title: "Community Health & Wellness Camp",
    image: "/event/e4.jpg",
    link: "https://www.facebook.com/majorsdsamc",
    category: "Outreach",
    date: "May 2026",
  },
  {
    id: 5,
    title: "International Research Conference 2K26",
    image: "/event/e5.jpg",
    link: "https://www.facebook.com/majorsdsamc",
    category: "Conference",
    date: "August 2026",
  },
  {
    id: 6,
    title: "Campus Safety & Fire Awareness Week",
    image: "/event/e6.jpg",
    link: "https://www.facebook.com/majorsdsamc",
    category: "Awareness",
    date: "September 2026",
  },
];
