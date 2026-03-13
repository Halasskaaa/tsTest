export class Phone {
    constructor(
        public readonly brand: string,
        public readonly price: number,
    ) {
        if (price < 0) {
            throw new Error('Az ár nem lehet negatív')
        }
    }
}

export function osszAr(phones: Phone[]): number {
    let osszeg = 0;
    for (const p of phones) {
        osszeg += p.price;
    }
    return osszeg;
}

export function nevLista(phones: Phone[]): string {
    return phones.map(p => p.brand).join(', ');
}

export function atlagAr(phones: Phone[]): number {
    if (phones.length === 0) {
        throw new Error('Üres listának nincs átlaga')
    }
    return osszAr(phones) / phones.length;
}