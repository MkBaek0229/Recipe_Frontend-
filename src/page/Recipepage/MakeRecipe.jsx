import { useState } from "react";
import Headerbar from "../../components/Recipecomponents/Headerbar";
import InputRecipe from "../../components/InputRecipe";

function MakeRecipe() {

  return (
    <>
      <Headerbar />
      <h1 className="text-3xl font-bold mb-4">레시피 만들기창</h1>
      <InputRecipe />
    </>
  );
}

export default MakeRecipe;
