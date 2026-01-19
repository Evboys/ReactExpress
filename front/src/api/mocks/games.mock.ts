import type { Game } from "../../types/Games";
import { mockConsoles } from "./consoles.mock";

export const mockGames: Game[] = [
  {
    _id: "6962e27f40afb850d8a51347",
    title: "Hollow Knight",
    description: "Un metroidvania sombre et exigeant.",
    genres: ["Action", "Indé"],
    images: {
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaes9.jpg",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scyytz.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scyyu0.jpg",
      ],
    },
    consoles: [
      mockConsoles[0],
      mockConsoles[1],
      mockConsoles[2],
      mockConsoles[3],
      mockConsoles[4],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "admin" },
    visibility: "unlisted" as const,
    updatedAt: "2026-01-19T00:00:00.000Z",
  },
  {
    _id: "6962e27f40afb850d8a51348",
    title: "The Witcher 3: Wild Hunt",
    description: "Un RPG open world riche et immersif.",
    genres: ["RPG", "Action"],
    images: {
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaarl.jpg",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/farvemmmxav0bgt6wx7t.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/z5t0yuhyiiui1ickwhgj.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sciabd.jpg",
      ],
    },
    consoles: [
      mockConsoles[1],
      mockConsoles[0],
      mockConsoles[2],
      mockConsoles[3],
      mockConsoles[4],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "user" },
    visibility: "public" as const,
    updatedAt: "2026-01-19T00:00:00.000Z",
  },
  {
    _id: "6962e27f40afb850d8a51349",
    title: "Minecraft",
    description: "Jeu sandbox de création et survie.",
    genres: ["Sandbox", "Survie"],
    images: {
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co8fu7.webp",
      screenshots: [],
    },
    consoles: [
      mockConsoles[0],
      mockConsoles[1],
      mockConsoles[2],
      mockConsoles[3],
      mockConsoles[4],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "admin" },
    visibility: "public" as const,
    updatedAt: "2026-01-19T00:00:00.000Z",
  },
  {
    _id: "6962e27f40afb850d8a5134a",
    title: "Red Dead Redemption 2",
    description: "Western en monde ouvert ultra immersif.",
    genres: ["Action", "Aventure"],
    images: {
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/tdxv4zzkqyjnm9pmwxw0.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sctkgp.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sctkgq.jpg",
      ],
    },
    consoles: [
      mockConsoles[1],
      mockConsoles[3],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "admin" },
    visibility: "public" as const,
    updatedAt: "2026-01-19T00:00:00.000Z",
  },
  {
    _id: "6962e27f40afb850d8a5134b",
    title: "Cyberpunk 2077",
    description: "RPG futuriste en monde ouvert.",
    genres: ["RPG", "FPS"],
    images: {
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaih8.jpg",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scxw03.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/ts8wtae3t6aghttvtt2s.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scxw04.jpg",
      ],
    },
    consoles: [
      mockConsoles[0],
      mockConsoles[2],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "admin" },
    visibility: "public" as const,
    updatedAt: "2026-01-19T00:00:00.000Z",
  },
  {
    _id: "6962e27f40afb850d8a5134c",
    title: "Elden Ring",
    description: "Action-RPG exigeant par FromSoftware.",
    genres: ["RPG", "Action"],
    images: {
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scagdm.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scagdn.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/scagdo.jpg",
      ],
    },
    consoles: [
      mockConsoles[0],
      mockConsoles[1],
      mockConsoles[2],
      mockConsoles[3],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "admin" },
    visibility: "public" as const,
    updatedAt: "2026-01-19T00:00:00.000Z",
  },
  {
    _id: "6963a83b580505ced4109d7a",
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "Un jeu d'action-aventure en monde ouvert où Link explore le royaume d'Hyrule après un long sommeil pour vaincre Ganon.",
    genres: ["Action", "Aventure", "Open World"],
    images: {
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
      screenshots: [
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sckj69.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sckj6a.jpg",
        "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sckj6b.jpg",
      ],
    },
    consoles: [
      mockConsoles[4],
      mockConsoles[5],
    ],
    createdBy: { _id: "u1", username: "user" },
    visibility: "public" as const,
    updatedAt: "2026-01-11T13:42:01.091Z",
  },
  {
    _id: "696d81f4cb30b63c0a324e4a",
    title: "Clair Obscur: Expedition 33",
    description:
      "Menez les membres de l'Expédition 33 dans leur quête pour détruire la Peintresse et l'empêcher de peindre à nouveau la mort.",
    genres: [],
    images: {
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co9gam.webp",
      screenshots: [],
    },
    consoles: [
      mockConsoles[0],
      mockConsoles[2],
      mockConsoles[6],
    ],
    createdBy: { _id: "u1", username: "user" },
    visibility: "private" as const,
    updatedAt: "2026-01-19T01:00:48.845Z",
  },
];
