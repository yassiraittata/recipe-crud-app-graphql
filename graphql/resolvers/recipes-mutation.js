const Recipe = require("../../models/recipe");

const mutation = {
  addRecipe: async (parent, { input }, { userId }) => {
    const recipe = new Recipe({
      name: input.name,
      description: input.description,
    });

    await recipe.save();

    return recipe;
  },

  deleteRecipe: async (parent, { id }) => {
    await Recipe.findByIdAndDelete(id);

    return true;
  },

  updateRecipe: async (parent, { id, input }) => {
    const recipe = await Recipe.findById(id);

    if (!recipe) throw new Error("No recipe was found!");

    Object.assign(recipe, input);

    await recipe.save();

    return recipe;
  },
};

module.exports = mutation;
