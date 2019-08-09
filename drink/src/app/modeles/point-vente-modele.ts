export interface IPointVente {
    pointVenteId: number;
    nom: string;
    note: number;
    latitude: number;
    longitude: number;
}

export class PointVente implements IPointVente {

    constructor(
        public pointVenteId: number,
        public nom: string,
        public note: number,
        public latitude: number,
        public longitude: number,
    ) {}

}
