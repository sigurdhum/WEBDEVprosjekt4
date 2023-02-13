export interface ModalInterface{
    isShown: boolean;
    hide: () => void;
    modalContent?: JSX.Element;
    _id: string;
    title?: string;
    rating? : number;
    year?: number;
    length: string;
    language?: string;
    age?: number;
    tags: string[];
    description?: string;
    bildeURL?: string;
    reviews?:[];
}
