import type { Console } from "./Consoles"

export type Game = {
    _id: string;
    title: string;
    description: string;

    genres: string[];

    images: {
        cover: string;
        screenshots: string[];
    };

    consoles: Console[];
    createdBy: string;

    visibility: "public" | "unlisted" | "private";

    createdAt: string;
    updatedAt: string;
};
