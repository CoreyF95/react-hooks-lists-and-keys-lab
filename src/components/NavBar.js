import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>{link}</a>
    )
  })

  return renderLinks;
}

export default NavBar;
