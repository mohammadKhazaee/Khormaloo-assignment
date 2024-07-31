function Header() {
  return (
    <>
      <header
        className="relative z-20 flex justify-between items-center h-20"
        style={{
          background:
            "linear-gradient(90.53deg, rgba(0, 0, 0, 0.75) 0.45%, rgba(102, 80, 165, 0.75) 105.51%)",
        }}
      >
        <div className="flex justify-evenly gap-10 items-center">
          <div
            className=" font-normal text-4xl text-[#FFC907] uppercase pl-6"
            style={{ fontFamily: " 'Griffy', cursive" }}
          >
            khormaloo
          </div>
          <div>
            <i className="fa fa-bars text-white flex lg:hidden"></i>
            <ul
              className="hidden lg:flex gap-10 text-base font-bold "
              style={{ fontFamily: "Montserrat" }}
            >
              <li className="font-bold text-sm text-white uppercase ">home</li>
              <li className="font-bold text-sm text-white uppercase ">
                Tv Show
              </li>
              <li className="font-bold text-sm text-white uppercase ">
                movies
              </li>
              <li className="font-bold text-sm text-white uppercase ">new</li>
            </ul>
          </div>
        </div>
        <div className="pr-6">
          <i className="fa fa-bars text-white flex lg:hidden"></i>
          <div className="hidden lg:flex justify-evenly gap-10 items-center">
            <div className="bg-[#3B567D] rounded-3xl px-[19px] py-[4px]">
              <input
                className="bg-transparent outline-none text-white"
                type="text"
                placeholder="SEARCH"
              />
              <span className="text-white">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
            <img src="./img/gift.svg" alt="" />
            <img src="./img/Ring.svg" alt="" />
            <img src="./img/Ellipse.svg" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
