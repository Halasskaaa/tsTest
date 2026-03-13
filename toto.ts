class Toto {
    nevek1: string[] = [];
    golok1: number[] = [];
    nevek2: string[] = [];
    golok2: number[] = [];
    
    ujEredmeny(csapat1: string, gol1: number, csapat2: string, gol2: number): void {
        if (this.nevek1.length === 14) {
            new Error("Egy Totó szelvány csak 14 sorból áll");
        }
    }

}