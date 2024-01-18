const Recipe = require("../../models/recipe");

exports.Query = {
  recipes: async () => {
    const recipes = await Recipe.find();
    return recipes;
  },

  recipe: async (parent, { id }, context) => {
    const recipe = await Recipe.findById(id);
    console.log(recipe);
    return recipe;
  },

  
};
