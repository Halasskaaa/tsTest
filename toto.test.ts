import { describe, expect } from "vitest";
import { Toto } from "./toto.js";

describe('Toto', () => {
    test('Egy elem hozzáadása nem dob kivételt', () => {
        const toto = new Toto();
        expect(() => toto.ujEredmeny("Csapat1", 3, "Csapat2", 4)).not.toThrow();
    })

    test('25 elem hozzáadása kivételt dob', )
})