export class Toto {
    nevek1: string[] = [];
    golok1: number[] = [];
    nevek2: string[] = [];
    golok2: number[] = [];
    
    ujEredmeny(csapat1: string, gol1: number, csapat2: string, gol2: number): void {
        if (this.nevek1.length >= 14) {
            throw new Error("Egy Totó szelvány csak 14 sorból áll");
        }

        if (csapat1 === "" || csapat2 === "") {
            throw new Error("A csapatnév nem lehet üres");
        }

        if (gol1 < 0 || gol2 < 0) {
            throw new Error("A gólok száma nem lehet negatív");
        }

        this.nevek1.push(csapat1);
        this.golok1.push(gol1);
        this.nevek2.push(csapat2);
        this.golok2.push(gol2);
        
    }

}
