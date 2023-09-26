// Styles
import "./DropdownMenu.scss";

// MUI
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
// import { styled } from '@mui/system';

// Icons
import { ReactComponent as Dots } from "../../assets/images/dots.svg";

function DropdownMenu() {

  return (
    <Dropdown sx={{
      padding: "0.25rem"
    }}>
      <MenuButton>
        <Dots className="dropdown__icon" />
      </MenuButton>
      <Menu>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Report</MenuItem>
      </Menu>
    </Dropdown>
  );
}

export default DropdownMenu;