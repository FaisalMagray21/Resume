import React from "react";
import Projecttool from "./Projecttool";
function Ecommerce() {
  const tool = ["React", "Node.js", "MongoDB", "Stripe"];
  return (
    <div className="bg-gray-200 pl-4">
      <h1 className="font-bold text-lg pt-3 ">E-commerce Platform </h1>
      <p className=" ">
        Develop a fully-functional e-commerce platform with user authentication,
        product management, and payment integration
      </p>
      <p className="py-4 pb-8 flex flex-wrap gap-4 ">
        {tool.map((lists) => (
          <Projecttool key={lists} lists={lists} />
        ))}
      </p>
    </div>
  );
}

export default Ecommerce;
