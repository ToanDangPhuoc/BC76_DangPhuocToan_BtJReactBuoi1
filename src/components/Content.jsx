import React from "react";

const Content = () => {
  return (
    <div>
      <div>
        <div class="p-4 lg:px-5 bg-gray-100 rounded-lg text-center">
          <h2 className="text-black text-5xl font-bold"> A warm welcome!</h2>
          <p className="m-3 text-xl">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework.<br></br> Why
            create custom CSS when you can use utilities?
          </p>
          <button className="p-3 rounded-lg bg-blue-600 mb-10">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
