import Masonry from "./Masonry";
import axios from "axios";

function BodyContainer() {
    // 레시피 조회하기
    const Recipelist = async () => {
        try {
            const response = await axios.get('/api/v1/recipes')
            console.log(response);
        }
        catch (e) {
            console.error(e);
        }
    }
    
    return ( 
        <div className="h-[100%] max-w-[1000px] ml-auto mr-auto">
            <h1>레시피</h1>
        
            
            
        </div>
     );
}

export default BodyContainer;