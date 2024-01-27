import { useState } from "react";
import Headerbar from "../../components/Recipecomponents/Headerbar";
import axios from "axios";

function MakeRecipe() {
    const [Field, setField] = useState("");
    const [description, setdescription] = useState("");
    const [cooking_time, setcooking_time] = useState("");
    const [Rlist, setRlist] = useState([]);

    const getList = () => {
        axios.get("https://recipe-backend.fly.dev/api/v1/recipes")
        .then((response) => {
            setRlist(response.data.data);
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const addList = () => {
        axios.post("https://recipe-backend.fly.dev/api/v1/recipes", {Field , description, cooking_time})
        .then(() => {
            getList();
            setField("");
            setdescription("")
            setcooking_time("")
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const onFieldChange = (e) => {
        setField(e.target.value);
    };

    const onDescription = (e) => {
        setdescription(e.target.value);
    };

    const onCooking_time = (e) => {
        setcooking_time(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addList();
      };
    return (  
        <>
        <Headerbar />
        <h1>레시피 만들기창</h1>
        <form onSubmit={onSubmit}>
        <input
            placeholder="레시피 이름을 작성하세요."
            type="text"
            value={Field}
            onChange={onFieldChange}
            className="mb-2 p-1 border border-4"
        ></input>
         <input
            placeholder="레시피를 설명해보세요."
            type="text"
            value={description}
            onChange={onDescription}
            className="mb-2 p-1 border border-4"
        ></input>
         <input
            placeholder="레시피 조리시간을 작성하세요."
            type="text"
            value={cooking_time}
            onChange={onCooking_time}
            className="mb-2 p-1 border border-4"
        ></input>
         <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          저장
        </button>
        </form>
        </>
    );
}

export default MakeRecipe;