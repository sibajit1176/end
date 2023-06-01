class TollBooth {
    private static totalCarCount: number = 0;
    private static totalAmount: number = 0;
    // private static payingCarCount: number;
    // private static nopayingCarCount: number;

    public payingCar(): void {
        TollBooth.totalCarCount++;
        TollBooth.totalAmount += 50;
    }
    public nopayCar(): void {
        TollBooth.totalCarCount++;
    }
    public display(): void {
        console.log(`Total car count: ${TollBooth.totalCarCount}`);
        console.log(`Total amount: ${TollBooth.totalAmount}`);
    }
}
function sample(...inputs: ('p' | 'n')[]): void {
    const tollBooth = new TollBooth();

    for (const input of inputs) {
        if (input === 'p') {
            tollBooth.payingCar();
        } else if (input === 'n') {
            tollBooth.nopayCar();
        }
    }

    tollBooth.display();
}
sample('p', 'p', 'n', 'p', 'n');