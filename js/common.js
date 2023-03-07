const footerContainer = document.querySelector("footer");
const headerContainer = document.querySelector("header");

let currentPage = document.location.pathname.replace(/^.*[\\\/]/, "");
if (currentPage == "") {
    currentPage = "index.html";
}

footerContainer.innerHTML = `
<div>
    <p>Address:</p>
    <p>Henrik Ibsens Gate 148</p>
    <p>1111 Oslo</p>
</div>
<div>
    <p>© Copyright</p>
    <p>2021</p>
    <p>Stian Martinsen</p>
</div>
<div>
    <p>Org.nr: NO98765432MVA</p>
    <p>Phone: +47 987 65 432</p>
    <p>Email: <a href="mailto:post@csm-museum.com" class="textlink" title="Send Email to the museum">post@csm-museum.com</a></p>
</div>`;

headerContainer.innerHTML = `

<div class="topline">
    <a href="index.html" class="logolink" title="Home page">
        <img src="images/logo.png" class="logo" alt="Community Science Museum Logo" aria-label="Community Science Museum Logo"/>
    </a>
    <div class="searchgamecontainer">
        <img src="images/teacher-2816112_small.png" class="ani" alt="Image of Eve" aria-label="Find Eve"/>
        <p class="gametext">
            Can you find Eve on one of our web pages? Find her and claim your reward.
        </p>
        <div class="typer">Where is Eve?</div>
    </div>
    <div class="some">
        <a href="https://www.facebook.com" target="_blank" title="Facebook">
            <img src="images/f_logo_RGB-Blue_58.png" class="somelogos" alt="Facebook" aria-label="FaceBook"/>
        </a>
        <a href="https://www.twitter.com" target="_blank" title="Twitter">
            <img src="images/2021_Twitter_logo-blue_100px.png" class="somelogos" alt="Twitter" aria-label="Twitter"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" title="Instagram">
            <img src="images/Instagram_Glyph_Gradient_RGB_100px.png" class="somelogos" alt="Instagram" aria-label="Instagram"/>
        </a>
    </div>
</div>
<div class="menu">
    <label for="burgermenu">
        <i class="fas fa-bars burgermenu"></i>
    </label>
    <input type="checkbox" id="burgermenu" class="hamburger-menu" name="burgermenu"/>
    <nav>
        <ul>
            <a href="index.html" id="home" title="Go to out Home Page">
                <li>
                    <img src="images/icon_home.svg" class="nav_icon" alt="home" aria-labelledby="home"/>Home
                </li>
            </a>
            <a href="events.html" id="events" title="Check the Events">
                <li>
                    <img src="images/icon_events.svg" class="nav_icon" alt="events" aria-labelledby="events"/>Events
                </li>
            </a>
            <a href="exhibitions.html" id="exhibitions" title="Check out the Exhibitions">
                <li>
                    <img src="images/icon_exhibition.svg" class="nav_icon" alt="exhibitions" aria-labelledby="exhibitions"/>Exhibitions
                </li>
            </a>
            <a href="explore.html" id="explore" title="Explore our museum">
                <li>
                    <img src="images/icon_explore.svg" class="nav_icon" alt="explore" aria-labelledby="explore"/>Explore
                </li>
            </a>
            <a href="visit.html" id="visit" title="Practical info to plan your visit">
                <li>
                    <img src="images/icon_visit.svg" class="nav_icon" alt="visit" aria-labelledby="visit"/>Visit
                </li>
            </a>
            <a href="getinvolved.html" id="getinvolved" title="Get involed with us">
                <li>
                    <img src="images/icon_getinvolved.svg" class="nav_icon" alt="Get involved" aria-labelledby="getinvolved"/>Get involved
                </li>
            </a>
        </ul>
    </nav>
</div>
<div class="bannerimage bannerhome"></div>`;

function setCurrentPage() {
    const currentMenuItems = document.querySelectorAll("nav a");
    for (let i = 0; i < currentMenuItems.length; i++) {
        if (currentMenuItems[i].attributes.href.nodeValue == currentPage) {
            currentMenuItems[i].children[0].classList.add("currentpage");
            break;
        }
    }
}

setCurrentPage();
