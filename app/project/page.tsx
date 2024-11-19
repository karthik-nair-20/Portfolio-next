import { HoverEffect } from "../ui/card-hover-effect";

export default function Project() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Medium Clone",
    description:
      "A backend clone of Medium, deployed on Cloudflare and developed using TypeScript, Prisma, and PostgreSQL for efficient and scalable data management.",
    link: "https://github.com/karthik-nair-20/Medium.git",
  },
  {
    title: "Paytm Clone",
    description:
      "A MERN full-stack Paytm clone developed with a modern tech stack, offering features like user authentication, payment processing, and wallet functionality.",
    link: "https://github.com/karthik-nair-20/Paytm.git",
  },
  {
    title: "Food Mine",
    description:
      "A front-end solution for food delivery built with Angular, featuring a menu of dishes, cart functionality, and ordering options.",
    link: "https://github.com/karthik-nair-20/food-mine.git",
  },
  {
    title: "Quizzical",
    description:
      "A quiz game built with React and Context API,real-time API integration for question fetching and score tracking. Users can test their knowledge across topics with instant feedback.",
    link: "https://github.com/karthik-nair-20/Quiz_App.git",
  },
  {
    title: "Tenziee Game",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://github.com/karthik-nair-20/tenziee-game.git",
  },
  {
    title: "Random Quote Generator",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://github.com/karthik-nair-20/advice-generation-app.git",
  },
  {
    title: "Black Jack Game",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://github.com/karthik-nair-20/black-jack-game.git",
  },
  {
    title: "Google Seach Clone",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://github.com/karthik-nair-20/Google-Clone.git",
  },
];
