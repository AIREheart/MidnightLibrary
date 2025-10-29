
import type { Shelf } from '../types';

export const SHELVES_DATA: Shelf[] = [
  {
    title: "Currently Reading",
    books: [
      {
        id: 1,
        title: "Dune",
        author: "Frank Herbert",
        coverUrl: "https://picsum.photos/id/10/300/450",
        finishedDate: "In Progress",
        summary: "A mythic and emotionally charged hero's journey, 'Dune' tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding.",
      },
    ],
  },
  {
    title: "2024 Reads",
    books: [
      {
        id: 2,
        title: "Project Hail Mary",
        author: "Andy Weir",
        coverUrl: "https://picsum.photos/id/20/300/450",
        finishedDate: "Aug 2024",
        summary: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
        reviewLink: "#",
      },
      {
        id: 3,
        title: "The Three-Body Problem",
        author: "Cixin Liu",
        coverUrl: "https://picsum.photos/id/30/300/450",
        finishedDate: "Jul 2024",
        summary: "Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal and plans to invade Earth. Meanwhile, on Earth, different camps start forming, planning to either welcome the superior beings and help them take over a world seen as corrupt, or to fight against the invasion.",
      },
      {
        id: 4,
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        coverUrl: "https://picsum.photos/id/40/300/450",
        finishedDate: "May 2024",
        summary: "The story of Klara, an Artificial Friend with outstanding observational qualities, who, from her place in the store, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful that a customer will soon choose her.",
      },
       {
        id: 5,
        title: "Hyperion",
        author: "Dan Simmons",
        coverUrl: "https://picsum.photos/id/50/300/450",
        finishedDate: "Mar 2024",
        summary: "On the world called Hyperion, beyond the law of the Hegemony of Man, there waits the creature called the Shrike. There are those who worship it. There are those who fear it. And there are those who have vowed to destroy it. In the Valley of the Time Tombs, where huge, brooding structures move backward through time, the Shrike waits for them all.",
        reviewLink: "#",
      },
    ],
  },
  {
    title: "All-Time Favorites",
    books: [
      {
        id: 6,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        coverUrl: "https://picsum.photos/id/60/300/450",
        finishedDate: "Re-read Jun 2023",
        summary: "The book chronicles the life of Kvothe, an adventurous and gifted young man who grows to be the most notorious wizard his world has ever seen.",
      },
      {
        id: 7,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        coverUrl: "https://picsum.photos/id/70/300/450",
        finishedDate: "Re-read Jan 2023",
        summary: "In a world where ash falls from the sky and mists rule the night, an evil immortal emperor has ruled with an iron fist for a thousand years. A young, daring thieving street urchin named Vin is recruited into a crew of specialists with an audacious plan to overthrow the Lord Ruler.",
        reviewLink: "#",
      },
      {
        id: 8,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverUrl: "https://picsum.photos/id/80/300/450",
        finishedDate: "Classic",
        summary: "The story of the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
      },
    ],
  },
];
