import Typed from "react-typed";

const Typewriter = () => {
  return (
    <div className="aligncenter">
      <Typed
        className="child"
        strings={[
          "Hello I am Albin",
          "Hello I am a Software Engineer",
          "Hello I am a Fullstack Developer",
          "Hello I am a Website Designer",
          "Hello I am Albin",
        ]}
        typeSpeed={75}
        backSpeed={75}
        backDelay={250}
        loop={false}
        smartBackspace
        stopped={null}
        showCursor={false}
        onClick={() =>
          window.open("https://www.linkedin.com/in/albin-shrestha/")
        }
      ></Typed>
    </div>
  );
};

export default Typewriter;
