const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around w-full">
        <img
          src="/public/Images/51elPu8mILL.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Box Office News!
          </h1>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
