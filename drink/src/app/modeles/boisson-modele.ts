export interface IBoisson {
    boissonId: number;
    nom: string;
    couleur: string;
    alcoolisee: boolean;
    titre?: number;
}

export class Boisson implements IBoisson {

    constructor(
        public boissonId: number,
        public nom: string,
        public couleur: string,
        public alcoolisee: boolean,
        public titre?: number,
    ) {}

}
