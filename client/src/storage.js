
export const addToStorage = (title, url, image) => {
    const savedRecipes = JSON.parse(window.localStorage.getItem("savedRecipes"))
  
    if(!savedRecipes) {
        window.localStorage.setItem("savedRecipes", JSON.stringify([{"title": title, "url": url, "image":image}]))
    }

    else {
        const isAlreadySaved = savedRecipes.find(recipe => recipe.title === title) 
        if(isAlreadySaved === undefined) savedRecipes.push({"title": title, "url": url, "image":image})
        window.localStorage.setItem("savedRecipes",JSON.stringify(savedRecipes))
    }
  }

  export const deleteFromStorage = (titleToDelete) => {
    let savedRecipes = JSON.parse(window.localStorage.getItem("savedRecipes"))
    savedRecipes = savedRecipes.filter(recipe => recipe.title !== titleToDelete)
    window.localStorage.setItem("savedRecipes",JSON.stringify(savedRecipes))
    window.location.reload();
  }