import { deleteRecipe } from "../recipeBox.reducers";

const testStore = {
  recipes: [
    {
      id: "1",
      ingredients: [
        { quantity: 3, unit: "", name: "Tomatoes" },
        { quantity: 100, unit: "grams", name: "Goat Cheese" },
        { quantity: 1, unit: "can", name: "Chipotle Peppers" },
        { quantity: 1, unit: "splash", name: "Olive Oil" },
        { quantity: 1, unit: "box", name: "Canapé Crackers" },
      ],
      instructions: "",
      rating: null,
      title: "Test 1",
      visible: true,
    },
    {
      id: "2",
      ingredients: [
        { quantity: 3, unit: "", name: "Tomatoes" },
        { quantity: 100, unit: "grams", name: "Goat Cheese" },
        { quantity: 1, unit: "can", name: "Chipotle Peppers" },
        { quantity: 1, unit: "splash", name: "Olive Oil" },
        { quantity: 1, unit: "box", name: "Canapé Crackers" },
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
          { quantity: 3, unit: "", name: "Tomatoes" },
          { quantity: 100, unit: "grams", name: "Goat Cheese" },
          { quantity: 1, unit: "can", name: "Chipotle Peppers" },
          { quantity: 1, unit: "splash", name: "Olive Oil" },
          { quantity: 1, unit: "box", name: "Canapé Crackers" },
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
