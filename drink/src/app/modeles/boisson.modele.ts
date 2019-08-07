export interface IBoisson {
    nom: string;
    couleur: string;
    alcoolise: boolean;
    titre?: number;
}

export class Boisson implements IBoisson {

    constructor(
        public nom: string,
        public couleur: string,
        public alcoolise: boolean,
        public titre?: number,
    ) {}
}
