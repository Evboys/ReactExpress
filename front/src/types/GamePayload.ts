export type GamePayload = {
  title: string;
  description: string;
  genres?: string[];
  consoles: string[]; 
  visibility: "public" | "unlisted" | "private";
  images: {
    cover: string;
    screenshots: string[];
  };
};
