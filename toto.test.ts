import { describe, expect, test } from "vitest";
import { Toto } from "./toto.js";

describe('Toto', () => {
    test('Egy elem hozzáadása nem dob kivételt', () => {
        const toto = new Toto();
        expect(() => toto.ujEredmeny("Csapat1", 3, "Csapat2", 4)).not.toThrow();
    })

    test('15. elem hozzáadása kivételt dob', () => {
        const toto = new Toto();

        for (let i = 0; i < 14 i++) {
            toto.ujEredmeny("A", 1, "B", 2);
        }

        expect(() => toto.ujEredmeny("C", 1, "D", 2)).toThrow();
    });
});
