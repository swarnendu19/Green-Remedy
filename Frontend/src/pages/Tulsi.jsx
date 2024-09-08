import TulsiModel from "../components/TulsiModel";
import PlantDetails from "../components/PlantDetails";
// import MultimediaSection from "../components/MultimediaSection"
// import BookmarkButton from "../components/BookmarkButton"
import "../App.css";

const Tulsi = () => {
  return (
    <div
      id="tulsi-page"
      className="bg-gradient-to-b from-green-300 via-green-200 to-green-100"
    >
      {/* 3D Model of Tulsi */}
      <section className="tulsi-model-section ">
        <div className="flex justify-center">
          <h2 className="text-[3rem] font-bold text-green-800">Tulsi (Holy Basil)</h2>
        </div>
          <div className="h-[1px] max-w-[1300px] bg-green-700 mx-auto"></div>
        <TulsiModel />
      </section>

      {/* Plant DetailPs */}
      <section className="tulsi-details-section">
        <PlantDetails />
      </section>

      {/* Multimedia Section */}
      {/* Multimedia Section */}

      {/* Bookmark Button */}
      {/* <section className="bookmark-section">
        <BookmarkButton plantName="Tulsi" />
      </section>*/}
    </div>
  );
};

export default Tulsi;
