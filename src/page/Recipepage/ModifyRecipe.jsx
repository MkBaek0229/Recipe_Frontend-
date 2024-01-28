import { useEffect } from "react";
import Headerbar from "../../components/Recipecomponents/Headerbar";
import axios from "axios";
import { useState } from "react";

function ModifyRecipe() {
    const [Field, setField] = useState("");
    const [description, setdescription] = useState("");
    const [cooking_time, setcooking_time] = useState("");


    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        axios.get("https://recipe-backend.fly.dev/api/v1/recipes")
        .then((response) => {
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return ( 
        <>
        <Headerbar />
        <h1 className="text-3xl font-bold mb-4">레시피 수정 창</h1>
        
        </>
     );
}

export default ModifyRecipe;