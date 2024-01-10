exports.Query = {
  recipes: async (parent, args, { Recipe }) => {
    return await Recipe.find();
  },

  recipe: async (id) => {},
};
