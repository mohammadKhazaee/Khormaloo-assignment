function Header() {
  return (
    <>
      <header className="pt-2 z-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
        <div className="flex justify-between p-2 items-center ">
          <div
            className="font-normal text-4xl text-[#FFC907] uppercase pl-6"
            style={{ fontFamily: " 'Griffy', cursive" }}
          >
            khormaloo
          </div>
          <div
            className="font-bold pr-10 text-sm text-white "
            style={{ fontFamily: "Montserrat" }}
          >
            Rebuilders
          </div>
          <div
            className="font-bold pr-10 text-sm text-white uppercase "
            style={{ fontFamily: "Montserrat" }}
          >
            home
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
