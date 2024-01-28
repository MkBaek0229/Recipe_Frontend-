// 메뉴버튼 컴포넌트

function Menubutton(props) {
    return (  
        <button className="bg-gray-400 inline-block px-7 py-2 rounded-3xl drop-shadow-3xl font-bold hover:text-white active:drop-shadow-4xl">{props.name}</button>
    )
}
    
export default Menubutton;

