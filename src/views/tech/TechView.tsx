import Tech from "../../components/Tech";
const TechView = () => {
  return (
    <div id="work" className="w-full md:h-fit text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 pt-[10rem] flex flex-col justify-center w-full h-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#77B255] text-green">
              Technologies
            </p>
          </div>
        </div>
        <Tech />
      </div>
      {/* <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7186258120023625730"
          height="592"
          width="504"
          allowFullScreen={true}
          title="Embedded post"
        ></iframe>
      </div> */}
    </div>
  );
};

export default TechView;
