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

    visibility: "public" | "unlisted" | "private";

    createdBy: {
        _id: string;
        username: string;
    };
    updatedAt: string;
};
