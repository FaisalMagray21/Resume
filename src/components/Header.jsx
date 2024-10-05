import passportphoto from "../assets/Faisalpic.jpg";
let Header = () => {
  return (
    <header className="bg-blue-700 text-white  py-4 px-4 flex justify-between items-center rounded-xl">
      <div>
        <h1 className="text-2xl font-bold">Faisal Mehmood</h1>
        <h1 className="pb-2"> Full Stack Developer</h1>
      </div>
      <img
        src={passportphoto}
        alt="Resumepic"
        className="h-12 w-12 rounded-full"
      />
    </header>
  );
};

export default Header;
