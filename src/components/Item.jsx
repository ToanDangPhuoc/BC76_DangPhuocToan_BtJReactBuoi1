import React from "react";
import "@fortawesome/fontawesome-free";

const Item = () => {
  return (
    <div className=" grid grid-cols-3	gap-12  mt-10 max-w-5xl mx-auto	">
      <div className="grid-col-4">
        <div>
          <i className="fas fa-folder-open bg-blue-600 rounded-xl   p-3 text-white text-xl mb-5"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Fresh new layout</h2>
        <p className="text-base">
          With Bootstrap 5, we've created a fresh new layout for this template!
        </p>
      </div>
      <div className="grid-col-4">
        <div>
          <i className="fas fa-solid fa-cloud-arrow-down text-blue-600 text-5xl mb-5"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Free to download </h2>
        <p className="text-base">
          As always, Start Bootstrap has a powerful collectin of free templates.
        </p>
      </div>
      <div className="grid-col-4">
        <div>
          <i className="fas fa-solid fa-file-lines bg-blue-600 rounded-xl   p-3 text-white text-xl mb-5"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Jumbotron hero header t</h2>
        <p className="text-base">
          The heroic part of this template is the jumbotron hero header!
        </p>
      </div>
      <div className="grid-col-4">
        <div>
          <i className="fas fa-solid fa-boxes-packing bg-blue-600 rounded-xl   p-3 text-white text-xl mb-5"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Feature boxes</h2>
        <p className="text-base">
          We've created some custom feature boxes using Bootstrap icons!
        </p>
      </div>
      <div className="grid-col-4">
        <div>
          <i className="fas fa-solid fa-code bg-blue-600 rounded-xl   p-3 text-white text-xl mb-5"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Simple clean code</h2>
        <p className="text-base">
          We keep our dependencies up to date and squash bugs as they come!
        </p>
      </div>
      <div className="grid-col-4">
        <div>
          <i className="fas fa-regular fa-circle-check bg-blue-600 rounded-xl   p-3 text-white text-xl mb-5"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">A name you trust</h2>
        <p className="text-base">
          Start Bootstrap has been the leader in free Bootstrap templates since
          2013!
        </p>
      </div>
    </div>
  );
};

export default Item;
