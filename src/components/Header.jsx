import React from "react";

const Header = () => {
  return (
    <div className=" bg-slate-800 mb-5 pt-3 pb-3">
      <div className="grid grid-cols-2 items-center h-full">
        <div className="grid-rows-6">
          <h3 className="text-white ">Start Bootstrap</h3>
        </div>
        <div className="grid-rows-6">
          <div className="text-white">
            <ul className="flex gap-3 justify-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
