import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './css/navmenu.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div class="menutab">
        <Nav tabs>
          <NavItem>
            <NavLink href="#">ทั้งหมด</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              หนังสือเรียนพิเศษ
            </DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem header>เคมีอ.อุ๊</DropdownItem> */}
              <DropdownItem>เคมีอ.อุ๊</DropdownItem>
              {/* <DropdownItem disabled>Action</DropdownItem> */}
              <DropdownItem>ideal physic</DropdownItem>
              <DropdownItem>ondemand</DropdownItem>

              <DropdownItem divider />
              
              <DropdownItem>abc</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">วิทยาศาสตร์</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">คณิตศาสตร์</NavLink>
            {/* <NavLink disabled href="#">Disabled Link</NavLink> */}
          </NavItem>
          <NavItem>
            <NavLink href="#">ภาษาไทย</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">ภาษาอังกฤษ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">สังคมศึกษา</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}