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
};
