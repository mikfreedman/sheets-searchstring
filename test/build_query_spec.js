import BUILD_QUERY from '../src/build_query';

describe("BUILD_QUERY", () => {
    describe("When the input is an array", () => {
        let input;

        beforeEach(() => {
            input = [
                [true, "preset 1", "fish", "shark", "eel", "sea dog"],
                [false, "preset 2", "saltwater", "", "", "", ""],
                [true, "preset 3", "freshwater", "", "", "", ""],
            ]

        })

        it("quotes values that are more than one word", () => {
            expect(BUILD_QUERY(input)).toContain("\"sea dog\"")
        })

        it("skip rows that shouldn't be included", () => {
            expect(BUILD_QUERY(input)).not.toContain("saltwater")
        })

        it("returns rows as ANDs and columns as ORs", () => {
            expect(BUILD_QUERY(input)).toEqual("(fish OR shark OR eel) AND freshwater")
        })
    })

    describe("when the input is not an array", () => {
        it("returns without a value", () => {
            expect(BUILD_QUERY("a")).toBeUndefined();
        })
    })
})