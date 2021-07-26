import { calculateTip, calculateTotalCost } from "./helpers";

describe("Helper functions", () => {
    it("should get the rigt tip amount per person for 200 dollar, 10% and 4 people", () => {
        expect(calculateTip("200", "10", "4")).toBe("5.00");
    });

    it("should get the rigt tip amount per person for 31 dollar, 50% and 7 people", () => {
        expect(calculateTip("31", "50", "7")).toBe("2.21");
    });

    it("should get the total cost per person for 200 dollar, 10% and 4 people", () => {
        expect(calculateTotalCost("200", "10", "4")).toBe("55.00");
    });

    it("should get the total cost per person for 654 dollar, 5% and 3 people", () => {
        expect(calculateTotalCost("654", "5", "3")).toBe("228.90");
    });
});
