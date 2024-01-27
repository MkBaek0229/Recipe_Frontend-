import Masonry from "./Masonry";
import Menubutton from "../Menubutton";
import { Link } from "react-router-dom";

function Headerbar() {
    return (  
    <div className="border border-solid border-black relative min-w-[100%] p-3 mx-auto">
        <Link to={'/'}><Menubutton name="뒤로가기"/></Link>
        <Link to={'/myrecipe'}><Menubutton name="내 레시피"/></Link>
        <Menubutton name="레시피 만들기"/> 
        <input className="rounded-3xl border-black bg-gray-200 w-[700px] h-[50px] ml-[80px]" type="text" placeholder="원하는 재료로 만들수 있는 레시피를 검색해보세요"/>
        <Menubutton name="검색"/>
    </div>
    );
}

export default Headerbar;