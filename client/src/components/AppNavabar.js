import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class AppNavbar extends Component{
	state = {
		// estado atual dos items como por exemplo dropdown
		isOpen: false
	}

	// controla o estado do isOpen
	toogle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
}

export default AppNavbar;