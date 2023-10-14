import backgroundImage from "../assets/images/more/3.png";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              {/* eslint-disable-next-line */}
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
