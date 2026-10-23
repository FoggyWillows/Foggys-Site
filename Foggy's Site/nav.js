/* Foggy's Site - shared top bar.
   Add  <script src="nav.js"></script>  right after <body> on any page.
   To add or change a link, edit the LINKS list below (once, for every page). */
(function () {
  var LINKS = [
    { label: "Home",              href: "index.html" },
    { label: "Rental Timers",     href: "FlowerRealmsRentalTimers.html" },
    { label: "Gendrop Calculator", href: "FlowerRealmsGendropCalculator.html" },
    { label: "Pink Checklist",     href:"PinkCheckList.html" }
  ];

  var css =
    ".top-banner{width:100%;height:60px;background:#f472b6;display:flex;align-items:center;justify-content:flex-start;gap:40px;padding:0 15px;font-family:sans-serif;flex-shrink:0;align-self:stretch;box-sizing:border-box}" +
    ".top-banner *{box-sizing:border-box}" +
    ".top-banner .brand-link{display:flex;align-items:center;gap:12px;text-decoration:none}" +
    ".top-banner .brand-logo{height:40px;width:auto;object-fit:contain}" +
    ".top-banner .brand-text{font-size:25px;font-weight:bold;color:#fff}" +
    ".top-banner .nav-menu{display:flex;align-items:center;gap:15px;list-style:none;margin:0;padding:0}" +
    ".top-banner .nav-link{color:#fff;text-decoration:none;font-size:18px;font-weight:500}" +
    ".top-banner .nav-link:hover,.top-banner .nav-link.active{text-decoration:underline}" +
    ".top-banner .divider{color:rgba(255,255,255,.6);font-size:18px;user-select:none}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var here = location.pathname.split("/").pop() || "index.html";
  var items = LINKS.map(function (l) {
    var active = l.href === here ? " active" : "";
    return '<li><a href="' + l.href + '" class="nav-link' + active + '">' + l.label + "</a></li>";
  }).join('<li class="divider">|</li>');

  var nav = document.createElement("nav");
  nav.className = "top-banner";
  nav.innerHTML =
    '<a href="index.html" class="brand-link">' +
    '<img src="FoggyWillowsBodyShot.png" alt="Logo" class="brand-logo">' +
    '<span class="brand-text">Foggy\'s Site</span></a>' +
    '<ul class="nav-menu">' + items + "</ul>";

  // Cancel out any padding the page puts on <body> so the bar spans edge to edge.
  var cs = getComputedStyle(document.body);
  nav.style.margin =
    "-" + cs.paddingTop + " -" + cs.paddingRight + " " + cs.paddingTop + " -" + cs.paddingLeft;
  nav.style.width = "auto";

  document.body.insertBefore(nav, document.body.firstChild);
})();
