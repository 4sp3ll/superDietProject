import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';


const TabsElement = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (

    <div>

      <Nav tabs>

        <NavItem style={{cursor: 'pointer'}}>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Ingredients
          </NavLink>
        </NavItem>
        <NavItem style={{cursor: 'pointer'}}>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Technical details
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {props.tabPane1}
        </TabPane>
        <TabPane tabId="2">
          {props.tabPane2}
        </TabPane>
      </TabContent>
    </div>
    );
  }

export default TabsElement;