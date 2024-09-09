import { styled } from "@mui/material/styles";
import { Button, IconButton } from "@mui/material";

export const HeaderContainer = styled("div")<{ isCollapsed: boolean }>(
  ({ theme, isCollapsed }) => ({
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
  })
);

export const SidebarToggleIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'transparent', // Remove a cor de fundo no hover
      color: theme.palette.primary.main, // Mantém a cor do ícone no hover
    },
  }));
  
  export const ButtonSidebarToggle = styled(Button)<{ isCollapsed: boolean }>(
    ({ theme, isCollapsed }) => ({
      color: theme.palette.primary.main,
      margin: isCollapsed ? "0px" : "20px 0px",
    })
  );
  
  export const StyledListItemIcon = styled("div")<{ isCollapsed: boolean }>(
    ({ isCollapsed }) => ({
      minWidth: isCollapsed ? "0px" : "56px",
      display: "flex",
      justifyContent: "center",
    })
  );
