import Lines from "../images/sidebar.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="menu-wrap">
      <input type="checkbox" class="toggler"></input>
      <div class="hamburger">
        <img src={Lines} alt="menu" />
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/albin-shrestha/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Albisourous">Github</a>
              </li>
              <li>
                <a href="https://www.instagram.com/albisourous/">Instagram</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
