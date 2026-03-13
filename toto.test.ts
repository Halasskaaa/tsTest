import { describe, expect, test } from "vitest";
import { Toto } from "./toto.js";

describe('Toto', () => {
    test('Egy elem hozzáadása nem dob kivételt', () => {
        const toto = new Toto();
        expect(() => toto.ujEredmeny("Csapat1", 3, "Csapat2", 4)).not.toThrow();
    });

    test('15. elem hozzáadása kivételt dob', () => {
        const toto = new Toto();

        for (let i = 0; i < 14; i++) {
            toto.ujEredmeny("A", 1, "B", 2);
        }
        expect(() => toto.ujEredmeny("C", 1, "D", 2)).toThrow();
    });

    test('Üres csapatnév kivételt dob', () => {
        const toto = new Toto();
        expect(() => toto.ujEredmeny("", 1, "B", 2).toThrow();
    });

    test('Negatív gól kivételt dob', () => {
        const toto = new Toto();
        expect(() => toto.ujEredmeny("A", -1, "B", 2)).toThrow();
    });

    test('Meccs eredmény helyes formátumban', () => {
        const toto = new Toto();

        toto.ujEredmeny("A", 2, "B", 3);
        expect(toto.merkozesEredmeny(0)).toBe("2-3");
    });

    test('Érvénytelen id kivételt dob', () => {
        const toto = new toto();
        expect(() => toto.merkozesEredmeny(0)).toThrow();
    });
});
