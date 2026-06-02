import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";

const TrustBar = lazy(() => import("@/components/TrustBar"));
const About = lazy(() => import("@/components/About"));
const SEOContent = lazy(() => import("@/components/SEOContent"));
const Courses = lazy(() => import("@/components/Courses"));
const Facilities = lazy(() => import("@/components/Facilities"));
const AdmissionsProcess = lazy(() => import("@/components/AdmissionsProcess"));
const LeadForm = lazy(() => import("@/components/LeadForm"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const ChatBot = lazy(() => import("@/components/ChatBot"));

const FAQ_SCHEMA = [
  {
    q: "What is the eligibility for BAMS admission?",
    a: "For BAMS admission in UP, students need 10+2 with Physics, Chemistry, Biology, minimum required marks as per rules, and NEET-UG qualification.",
  },
  {
    q: "Where is Major SD Singh PG Ayurvedic Medical College located?",
    a: "The Ayurvedic medical college is located on Bewar Road, Fatehgarh-Farrukhabad, Uttar Pradesh 209601, serving students from Central UP, Kanpur, Lucknow, and nearby districts.",
  },
  {
    q: "Which PG Ayurveda courses are available?",
    a: "The college offers MS Prasuti Tantra Avum Stri Roga and MS Shalya Tantra for eligible BAMS graduates through the applicable AIAPGET admission process.",
  },
  {
    q: "Is the college NCISM approved?",
    a: "Yes, the college is NCISM approved and affiliated with the state university for BAMS and PG Ayurveda programs.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Major S.D. Singh PG Ayurvedic Medical College | Top BAMS College in UP" },
      {
        name: "description",
        content:
          "Apply for BAMS admission in UP and MS Prasuti Tantra or MS Shalya Tantra at Major SD Singh PG Ayurvedic Medical College, Farrukhabad. NCISM approved with attached hospital.",
      },
      {
        name: "keywords",
        content:
          "BAMS admission UP, BAMS college in Farrukhabad, Ayurvedic medical college UP, MS Prasuti Tantra admission UP, MS Shalya Tantra college UP, BAMS college in Uttar Pradesh NCISM approved, Major SD Singh Ayurvedic Medical College, BAMS college Farrukhabad, Ayurvedic college Fatehgarh, best BAMS college in Central UP, AYUSH college near Kanpur, BAMS college near Lucknow UP, Ayurvedic medical college Bewar Road, BAMS NEET admission UP, Bachelor of Ayurvedic Medicine Surgery UP, BAMS course fees UP private college, BAMS internship hospital UP, AIAPGET MS admission UP, Ksharasutra therapy training UP",
      },
      {
        property: "og:title",
        content: "Major S.D. Singh PG Ayurvedic Medical College | Top BAMS College in UP",
      },
      {
        property: "og:description",
        content:
          "Explore BAMS, MS Prasuti Tantra, and MS Shalya Tantra admissions at an NCISM approved Ayurvedic medical college in Farrukhabad, UP.",
      },
      { property: "og:url", content: "https://majorsdspgamc.com/" },
      { property: "og:image", content: "https://majorsdspgamc.com/thumnail.webp" },
      { property: "og:image:alt", content: "Major SD Singh PG Ayurvedic Medical College campus in Farrukhabad" },
      {
        name: "twitter:title",
        content: "Major S.D. Singh PG Ayurvedic Medical College | Top BAMS College in UP",
      },
      {
        name: "twitter:description",
        content:
          "BAMS NEET admission and MS Ayurveda programs in Farrukhabad, UP, with hospital-based clinical training.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "MSDSPG Admissions",
          url: "https://majorsdspgamc.com/",
          description:
            "Admissions page for Major SD Singh PG Ayurvedic Medical College with BAMS, MS Prasuti Tantra, and MS Shalya Tantra course details in Farrukhabad, Uttar Pradesh.",
          inLanguage: "en-IN",
          about: [
            "BAMS admission UP",
            "BAMS college in Farrukhabad",
            "MS Prasuti Tantra admission UP",
            "MS Shalya Tantra college UP",
            "NCISM approved PG Ayurvedic college UP",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_SCHEMA.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <TrustBar />
        <About />
        <StatsSection/>
        {/* <SEOContent /> */}
        <Courses />
        <Facilities />
        <EventsSection/>
        <AdmissionsProcess />
        <TestimonialsSection/>
        <LeadForm />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ChatBot />
      </Suspense>
    </main>
  );
}
