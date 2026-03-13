import { beforeEach, describe, expect, test } from "vitest";
import { osszAr, Phone, nevLista, atlagAr } from "./phone.js";

let lista: Phone[]  = [];
beforeEach(() => {
    lista = [
      new Phone("Apple", 799.99),
      new Phone("Apple", 699.99),
      new Phone("Samsung", 259.99),
    ];
});

describe("osszAr()", () => {
  test("osszAr(): néhány adattal helyesen számol", () => {
    expect(osszAr(lista)).toBeCloseTo(1760, 1);
    expect(lista.length).not.toBe(0);
  });
  test("osszAr(): üres listával helyes", () => {
    expect(osszAr([])).toBe(0);
  });
});

describe("nevLista()", () => {
  test("néhány elemmel helyes", () => {
    expect(nevLista(lista)).toBe("Apple, Apple, Samsung");
  });
});

describe('atlagAr()', () => {
    test('üres listával', () => {
        expect(() => atlagAr([])).toThrow();
    });
    test('nem üres listával', () => {
        expect(() => atlagAr(lista)).not.toThrow();
    });
});

describe('Phone', () => {
    expect(() => new Phone('asdf', -100)).toThrow();
})