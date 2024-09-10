import { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { HouseRounded, PermContactCalendarRounded, MenuBookRounded, Menu, CloseRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { SidebarButton, HeaderContainer, StyledListItemIcon } from "./styles";

const menuItems = [
  { name: "Home", path: "/", icon: <HouseRounded /> },
  { name: "Profile", path: "/resume/profile", icon: <PermContactCalendarRounded /> },
  { name: "Portfolio", path: "/resume/portfolio", icon: <MenuBookRounded /> },
];

const SideBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isCollapsed, setIsCollapsed] = useState(isSmallScreen);

  useEffect(() => {
    setIsCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <HeaderContainer isCollapsed={isCollapsed}>
      <SidebarButton isCollapsed={isCollapsed} onClick={toggleSidebar}>
        {isCollapsed ? <Menu /> : <><CloseRounded /><span>Close</span></>}
      </SidebarButton>
      <nav>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index} component={Link} to={item.path}>
              <StyledListItemIcon isCollapsed={isCollapsed}>
                {item.icon}
              </StyledListItemIcon>
              {!isCollapsed && <ListItemText primary={item.name} />}
            </ListItemButton>
          ))}
        </List>
      </nav>
    </HeaderContainer>
  );
};

export default SideBar;
