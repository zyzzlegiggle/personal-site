import stormImage from "@/assets/stormofsteel.webp";
import manSearchImage from "@/assets/manSearchImage.jpg";
import bugBountyImage from "@/assets/bugbounty.jpeg";
import intelligentInvImage from "@/assets/inteligentinv.jpg";
import thinkingImage from "@/assets/thinking.jpg";
import scienceEngImage from "@/assets/artofscience.svg";

export const books = [
  {
    id: 1,
    title: "Storm of Steel",
    author: "Ernst Jünger",
    rating: 2,
    status: "Not completed",
    notes: "Daily life of german soldier in WW2. ",
    image: stormImage,
  },
  {
    id: 2,
    title: "Man's Search For Meaning",
    author: "Viktor Frankl",
    rating: 4,
    status: "Completed",
    notes: "Great book, emphasizing the freedom of making a choice in any kinds of situations and having goal as main motivation in life",
    image: manSearchImage,
  },
  {
    id: 3,
    title: "Bug Bounty Bootcamp: The Guide to Finding and Reporting Web Vulnerabilities",
    author: "Vickie Li",
    rating: 3,
    status: "Completed",
    notes: "Introduction into bug bounty and penetration attacks",
    image: bugBountyImage,
  },
  {
    id: 4,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    rating: 3,
    status: "Not completed",
    notes: "Pretty classic investing fundamental book",
    image: intelligentInvImage,
  },
  {
    id: 5,
    title: "The Thinking Machine: Jensen Huang, Nvidia, and the World's Most Coveted Microchip",
    author: "Stephen Witt",
    rating: 4,
    status: "Not completed",
    notes: "Story of NVIDIA, GPUs and most importantly, Jensen Huang.",
    image: thinkingImage,
  },
  {
    id: 6,
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    rating: 3,
    status: "Not completed",
    notes: "Started reading",
    image: scienceEngImage,
  },
];
