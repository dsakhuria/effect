import Cart from "./Cart";
import LoginModal from "./LoginModal";

function Header(props) {
  return (
    <div className="w-full h-[10rem]
                  bg-[#232323] text-white 
                  sm:h-auto
                  flex items-center justify-center
                  ">
      <div className="h-20 md:h-32 flex items-center justify-center">
        <span className="px-5 text-3xl md:text-5xl md:mr-16">Effect:</span>

        <div className="group flex items-center relative w-full md:w-[650px] h-12 md:h-16">
          <svg
            className="absolute left-3 md:left-[1.75rem] fill-[#9e9ea7] w-4 h-4 md:w-5 md:h-5"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            className="w-full h-full px-3 md:px-4 pl-8 md:pl-10 border-2 border-transparent rounded-lg outline-none bg-gray-200 text-gray-900 transition duration-300 placeholder:text-gray-600 focus:outline-none hover:outline-none focus:border-pink-400 hover:border-pink-400 focus:bg-white hover:bg-white focus:shadow-outline-pink hover:shadow-outline-pink"
            placeholder="Search for anything"
            type="search"
          />
        </div>

        <a className="font-bold px-2 md:px-6" href="#">
          <div className="flex items-center">
            <Cart />
            <div className="hidden md:block bg-red-900 px-2 py-1 rounded-lg ml-1">
              {props.cartItemsNum}
            </div>
          </div>
        </a>
        <a className="font-bold px-2 md:px-6" href="#">
          <LoginModal />
        </a>
      </div>
    </div>
  );
}

export default Header;
