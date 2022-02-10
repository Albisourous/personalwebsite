import myLogo from "../images/sidebar.png";
function sidebarClick(e) {
  window.location = "/";
}

function CornerPiece(props) {
  return <div onClick={sidebarClick}>{props.value}</div>;
}

const Sidebar = () => {
  return (
    <div className="alignright">
      <CornerPiece
        value={<img src={myLogo} alt="menu" width="100vw" height="100vh" />}
      />
    </div>
  );
};

export default Sidebar;
