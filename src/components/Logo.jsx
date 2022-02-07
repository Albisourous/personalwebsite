import myLogo from "../images/logo.png";

function logoClick(e) {
  window.location = "/";
}

function CornerPiece(props) {
  return <div onClick={logoClick}>{props.value}</div>;
}

const Logo = () => {
  return (
    <div className="alignleft">
      <CornerPiece
        value={<img src={myLogo} alt="AS" width="100vw" height="100vh" />}
      />
    </div>
  );
};

export default Logo;
