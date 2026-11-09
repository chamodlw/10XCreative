export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Company logo shown on the card */
  logo: string;
  rating: number;
  tag: string;
}

const LOGO = "/images/partners";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "travelco-zanfer-sheriff",
    quote:
      "I'm really happy with the work of 10X Creative did for us! Their team made our ads way more effective, and we saw a big jump in new customers.\nThe graphics they designed looked awesome and made our brand stand out. Plus, the videos they created were super professional and got a lot of attention online.\nEveryone was friendly and easy to talk to - they always kept us in the loop. I'd definitely recommend them if you need help with digital advertising, graphics, or videos.",
    author: "Zanfer Sheriff",
    role: "Founder & CEO",
    company: "Travelco Holidays",
    logo: `${LOGO}/1.png`,
    rating: 5,
    tag: "Ads, Graphics & Video",
  },
  {
    id: "peacock-mathusoothanan-sundralingam",
    quote:
      "We have working with them for last 6month. since the beginning team was very active and enthusiastic towards our project. Every single day they came up with something new ideas to promote our brand.\nHighly recommended to everyone who wants to promote their product/brand through digital marketing.",
    author: "Mathusoothanan Sundralingam",
    role: "Owner",
    company: "Peacock.lk",
    logo: `${LOGO}/8.png`,
    rating: 5,
    tag: "Digital Marketing",
  },
  {
    id: "alpha-s-hamza",
    quote:
      "We've been working with 10X for a while now. They are committed and genuinely try their best to deliver what we need. One thing we really appreciate is the quality of the videos they created.\nThey turned out really well and performed strongly in our ad campaigns. They're open to feedback, easy to work with, and continue to improve with every project.",
    author: "S Hamza",
    role: "Owner",
    company: "Alpha Immigration & Education Consultants",
    logo: `${LOGO}/4.png`,
    rating: 5,
    tag: "Video & Ad Campaigns",
  },
  {
    id: "pride-perfumes-shah-rukh-zubair",
    quote:
      "One of the best digital marketing firms I've worked with! The team is highly understanding, professional, and truly committed to delivering exceptional results within the given timeframe. Their strategies are effective and tailored to your goals - highly recommend them for anyone looking for real results in digital marketing!",
    author: "Shah Rukh Zubair",
    role: "Owner",
    company: "Pride Perfumes",
    logo: `${LOGO}/10.png`,
    rating: 5,
    tag: "Marketing Strategy",
  },
  {
    id: "island-voyages-ahaz-shakoor",
    quote:
      "I was introduced to 10X Creative through a friend, and at first, I was a bit hesitant as I had never worked with a marketing agency before. However, after meeting Mr. Ajwad, the entire process was seamless. I truly appreciate his ability to understand client needs and deliver accordingly. Thank you very much for the excellent support!",
    author: "Ahaz Shakoor",
    role: "Owner",
    company: "Island Voyages",
    logo: `${LOGO}/15.png`,
    rating: 5,
    tag: "Client Partnership",
  },
  {
    id: "nile-construction-sri-prasath-thiyaga-moorthy",
    quote:
      "I've been working with this digital agency for our construction company's media advertisements and lead generation. The quality of leads has been excellent, and their strategies have significantly boosted our business presence. They truly understand our industry and deliver tailored solutions that work. Highly recommend their services to anyone looking to grow their business online. Great team, professional service, and real results!",
    author: "Sri Prasath Thiyaga Moorthy",
    role: "Owner",
    company: "Nile Construction",
    logo: `${LOGO}/2.png`,
    rating: 5,
    tag: "Lead Generation",
  },
];
