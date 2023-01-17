import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/elders" activeStyle>
            Elders
          </NavLink>
          <NavLink to="/fighting" activeStyle>
            Fighting
          </NavLink>
          <NavLink to="/hogs" activeStyle>
            Hogs
          </NavLink>
          <NavLink to="/horses" activeStyle>
            Horses
          </NavLink>
          <NavLink to="/pigfaced" activeStyle>
            Pig-Faced
          </NavLink>
          <NavLink to="/pigman" activeStyle>
            Pigmen
          </NavLink>
          <NavLink to="/sludge" activeStyle>
            Sludge
          </NavLink>
          <NavLink to="/misc" activeStyle>
            Misc
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;