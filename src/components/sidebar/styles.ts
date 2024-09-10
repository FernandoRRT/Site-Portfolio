import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

interface SidebarButtonProps extends ButtonProps {
  isCollapsed: boolean;
}

export const HeaderContainer = styled("div")<{ isCollapsed: boolean }>(({ theme, isCollapsed }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: isCollapsed ? "10px" : "10px 20px",
  height: "100%",
  transition: "width 0.3s",
  width: isCollapsed ? "80px" : "120px",
  overflow: "hidden",
}));

export const SidebarButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isCollapsed',
})<SidebarButtonProps>(({ theme, isCollapsed }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  borderRadius: "8px",
  margin: "10px 0px",
  display: "flex",
  flexDirection: isCollapsed ? "column" : "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& span': {
    display: isCollapsed ? "none" : "inline",
  },
}));

export const StyledListItemIcon = styled("div")<{ isCollapsed: boolean }>(({ isCollapsed }) => ({
  minWidth: isCollapsed ? "0px" : "56px",
  display: "flex",
  justifyContent: "center",
}));
