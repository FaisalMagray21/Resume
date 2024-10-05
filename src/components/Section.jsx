let Section = ({ icon, children, sectiontitle }) => {
  return (
    <div className="my-8 mx-5">
      <div className="flex my-3 items-center mb-6">
        {icon}

        <h1 className="font-bold text-2xl mx-2">{sectiontitle}</h1>
      </div>
      {children}
    </div>
  );
};
export default Section;
