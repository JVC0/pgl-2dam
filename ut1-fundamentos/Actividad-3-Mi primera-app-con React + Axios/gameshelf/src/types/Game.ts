export type Game = {
    id: number;
    name: string;
    genre?: string[];
    realeasesDates?: {
        Europe?: string;
        NorthAmerica?: string;
        Japan?: string;
        Australia?: string;
    }
}