import { deleteRecipe } from "../reducers";

const testStore = {
  recipes: [
    {
      id: "1",
      ingredients: [
        { id: 'i1', quantity: 3, unit: "", name: "Tomatoes" },
        { id: 'i1', quantity: 100, unit: "grams", name: "Goat Cheese" },
        { id: 'i1', quantity: 1, unit: "can", name: "Chipotle Peppers" },
        { id: 'i1', quantity: 1, unit: "splash", name: "Olive Oil" },
        { id: 'i1', quantity: 1, unit: "box", name: "Canapé Crackers" },
      ],
      instructions: "",
      rating: null,
      title: "Test 1",
      visible: true,
    },
    {
      id: "2",
      ingredients: [
        { id: 'i1', quantity: 3, unit: "", name: "Tomatoes" },
        { id: 'i1', quantity: 100, unit: "grams", name: "Goat Cheese" },
        { id: 'i1', quantity: 1, unit: "can", name: "Chipotle Peppers" },
        { id: 'i1', quantity: 1, unit: "splash", name: "Olive Oil" },
        { id: 'i1', quantity: 1, unit: "box", name: "Canapé Crackers" },
      ],
      instructions: "",
      rating: null,
      title: "Test 2",
      visible: true,
    },
  ],
};

describe("Reducer Tests", () => {
  it("should delete the correct recipe", () => {
    const expected = [
      {
        id: "2",
        ingredients: [
          { id: 'i1', quantity: 3, unit: "", name: "Tomatoes" },
          { id: 'i1', quantity: 100, unit: "grams", name: "Goat Cheese" },
          { id: 'i1', quantity: 1, unit: "can", name: "Chipotle Peppers" },
          { id: 'i1', quantity: 1, unit: "splash", name: "Olive Oil" },
          { id: 'i1', quantity: 1, unit: "box", name: "Canapé Crackers" },
        ],
        instructions: "",
        rating: null,
        title: "Test 2",
        visible: true,
      },
    ];
    expect(deleteRecipe(testStore.recipes, "1")).toEqual(expected);
  });
});
