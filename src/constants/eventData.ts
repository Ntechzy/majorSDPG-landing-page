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
    title: "मिशन शक्ति अभियान 2026 ",
    image: "/event/e1.jpg",
    link: "https://www.facebook.com/majorsdsamc",
  },
  {
    id: 2,
    title: "Ayurved Vani – Zonal Oratory Excellence Competition",
    image: "/event/e2.jpg",
    link: "https://www.facebook.com/majorsdsamc",
  },
  {
    id: 3,
    title: "Lieutenant Colonel Ajay Pratap Singh जी का प्रेरणादायक संबोधन",
    image: "/event/e3.jpg",
    link: "https://www.facebook.com/majorsdsamc",
  },
  {
    id: 4,
    title: "गुड़ेरा गांव में आयुर्वेदिक स्वास्थ्य एवं निःशुल्क चिकित्सा शिविर",
    image: "/event/e4.jpg",
    link: "https://www.facebook.com/majorsdsamc",
  },
  {
  id: 5,
  title: "Stree Anushalyam – 2K26 International Conference में Academic Excellence",
  image: "/event/e5.jpg",
  link: "https://www.facebook.com/majorsdsamc",
},
{
  id: 6,
  title: "अग्निशमन सेवा सप्ताह – 2026 : सुरक्षा एवं जागरूकता अभियान",
  image: "/event/e6.jpg",
  link: "https://www.facebook.com/majorsdsamc",
},
];
