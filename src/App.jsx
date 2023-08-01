import { useState } from "react";
import LoginModal from "./components/loginModal";

function App() {
  const [count, setCount] = useState(0);

  // Storing multi-use btn inside one variable
  const categoryStyles =
    "bg-white text-black p-4 rounded-lg hover:bg-[#1f1f1f] hover:text-white transition-all";

    let addToCardBtn = (
      <div className="card-button flex items-center justify-center">
        <span className="px-2">Add to</span>
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
          <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
          <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
        </svg>
      </div>
    );


  // Returning JSX with Tailwind CSS classes
  return (
    <main className="bg-[#a2a2a2] w-full h-screen">
      <header className="text-white w-full h-[150px] bg-[#232323] flex justify-center flex-shrink-0">
        <headerContainer className="w-full h-full flex items-center justify-center">
          <span className="px-5 text-5xl mr-16">Effect:</span>

          <searchInput className="group flex items-center relative leading-[28px] w-[650px]">
          <svg
              className="absolute left-[1rem] fill-[#9e9ea7] w-4 h-4"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              className="w-full h-16 px-4 pl-10 border-2 border-transparent rounded-lg outline-none bg-gray-200 text-gray-900 transition duration-300 placeholder:text-gray-600 focus:outline-none hover:outline-none focus:border-pink-400 hover:border-pink-400 focus:bg-white hover:bg-white focus:shadow-outline-pink hover:shadow-outline-pink"
              placeholder="Search for anything"
              type="search"
            />
          </searchInput>

          <a className="headerBtn font-bold px-6 " href="#">
            Cart
          </a>
          <a className="headerBtn font-bold px-6 " href="#">
            <LoginModal className="" />
          </a>
        </headerContainer>
      </header>
      
      <footer className="py-10 text-white w-full h-auto bg-black flex flex-col items-center justify-center">
        <sectionInfo className="mb-5 w-full h-auto flex items-center justify-around">
        <ul>
            <li className="font-bold">Beauty & Care</li>
            <li>Korean Cosmetics</li>
            <li>Perfume</li>
            <li>Gift Kits</li>
            <li>Hair Care</li>
            <li>Beard Care</li>
          </ul>
          <ul>
            <li className="font-bold">Beauty & Care</li>
            <li>Korean Cosmetics</li>
            <li>Perfume</li>
            <li>Gift Kits</li>
            <li>Hair Care</li>
            <li>Beard Care</li>
          </ul>
          <ul>
            <li className="font-bold">Beauty & Care</li>
            <li>Korean Cosmetics</li>
            <li>Perfume</li>
            <li>Gift Kits</li>
            <li>Hair Care</li>
            <li>Beard Care</li>
          </ul>
          <ul>
            <li className="font-bold">Beauty & Care</li>
            <li>Korean Cosmetics</li>
            <li>Perfume</li>
            <li>Gift Kits</li>
            <li>Hair Care</li>
            <li>Beard Care</li>
          </ul>
        </sectionInfo>
        <sectionLaw className="mt-16 w-full flex items-center justify-around">
          <software>
            <a href="#">Download IOS</a>
            <a href="#">Download .Apk</a>
          </software>
          <span className="text-[10px]">
            Copyright &copy; 2023 Effect, All Rights reserved
          </span>
        </sectionLaw>
      </footer>
    </main>
  );
}

export default App;
