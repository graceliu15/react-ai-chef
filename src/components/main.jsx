import React from "react"
import Recipe from "./recipe"
import IngredientList from "./ingredient-list"
import { getRecipeFromMistral } from "../ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    const ingredientList = ingredients.map((i) => {
        return <li>{i}</li>
    })


    function handleOnSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevArray => [...prevArray, newIngredient])
        formEl.reset()
    }

    // function handleSubmit(formData) {
    //     const newIngredient = formData.get("ingredient")
    //     setIngredients(prevArray => [...prevArray, newIngredient])
    // }

    async function getRecipe() {
        const aiRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(aiRecipe);
    }

    return (
        <main>
            <form /*action={handleSubmit}*/ onSubmit={handleOnSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredientList.length > 0 && <IngredientList ingredientList={ingredientList} getRecipe={getRecipe}/>}

            
            {recipe && <Recipe recipe={recipe} /* recipe is true as long as it's not an empty string */ />}
        </main>
    )
}