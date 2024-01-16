const Recipe = require("../../models/recipe");

exports.Mutation = {
  addRecipe: async (parent, { input }) => {
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

    await recipe.save()

    return recipe;
  },
};
