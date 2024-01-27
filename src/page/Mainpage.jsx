function Mainpage() {
    return ( 
        <div className="m-5">
        <header className="text-[4rem] text-center font-bold">나만의 레시피</header>
        <p className="text-2xl text-center font-bold">자기만의 레시피를 등록하거나 냉장고속 재료들로 레시피를 찾아보아요</p>
        <nav class="text-center mt-16">
            <section class="inline-block bg-gray-300 rounded-lg">
                    <a href="#" class="p-14 block font-bold tracking-widest inline-block hover:bg-sky-700">레시피</a>
                    <a href="#" class="p-14 block font-bold tracking-widest inline-block hover:bg-sky-700">냉장고</a>
            </section>
        </nav>
        </div>
     );
}

export default Mainpage;