 function getCategory(categoryString) {
    // Split the category string into a list of parts.
    const categoryParts = categoryString.split("/");
  
    // Return the first element of the list.
    return categoryParts[0];
  }

  module.exports = {getCategory}