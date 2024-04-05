import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SideItem extends Component {
  render() {
    const is_section = this.props.lecture.is_section;
    if (is_section) {
      return (
        <li className="site-menu-category">
            <div style={{ textAlign:'left'}}>
            Section {this.props.lecture.number} - {this.props.lecture.s_title}
            </div>
        </li>
      );
    } else {
      return (
        <li className="site-menu-item" title={this.props.lecture.l_title} >
          <div style={{ display: 'inline-block',  fontSize: '12px',lineHeight: '1.5'  }}>
          <NavLink to={base_url + "/" + this.props.lecture.url} >
            <FontAwesomeIcon icon="angle-double-right"  />&nbsp;
            <span> {this.props.lecture.number}: {this.props.lecture.l_title.length > 40 ? this.props.lecture.l_title.substring(0,40) + "..." : this.props.lecture.l_title }</span>
          </NavLink>
          </div>
        </li>
      );
    }
  }
}
