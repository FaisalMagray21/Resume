import React from "react";
import SecondProjecttool from "./SecondProjecttool";
function SocialMedia() {
  const tool = ["Vue.js", "D3.js", "Express", "PostgreSQL"];

  return (
    <div className="bg-gray-200 pl-4 mt-3">
      <h1 className="font-bold text-lg pt-3 ">Social Media Dashboard </h1>
      <p>
        Created a responsive dashboard for social media analytics, featuring
        real-time data visualization and reporting.
      </p>
      <p className="py-4 pb-8 ">
        {tool.map((listss) => (
          <SecondProjecttool listss={listss} />
        ))}
      </p>
    </div>
  );
}

export default SocialMedia;
