export interface MovieComponentInterface {
    _id: string;
    title?: string;
    rating? : number;
    year?: number;
    length: number;
    language?: string;
    age?: number;
    tags: string[];
    bildeURL?: string;
    lengthString?: string;
    description?: string;
}