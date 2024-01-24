const usersMutations = require("./user-mutation");
const recipesMutations = require("./recipes-mutation");

exports.Mutation = {
  ...usersMutations,
  ...recipesMutations,
};
