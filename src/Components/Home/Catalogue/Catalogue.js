import React from "react";

function Catalogue() {
  return (
    <section className="catalogue flex items-center justify-evenly p-4 m-4">
      <div>
        <div className="container">
          <a className="item rounded-xl shadow-md hover:shadow-xl transition ease-in-out duration-200" id="item1">
            Content
          </a>
          <a className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200" id="item2">
            Content
          </a>
          <a className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200" id="item3">
            Content
          </a>
          <a className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200" id="item4">
            Content
          </a>
          <a className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200" id="item5">
            Content
          </a>
          <a className="item rounded-xl shadow-md hover:shadow-lg transition ease-in-out duration-200" id="item6">
            Content
          </a>
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
