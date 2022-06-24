export enum Color {
    rojo, azul, negro, verde
}

export interface Heroe {
    nombre: string,
    vuela: boolean,
    color: Color;
}