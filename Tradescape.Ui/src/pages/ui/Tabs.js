import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';
import classnames from 'classnames';
// import TooltipWorkInProgress from './TooltipWorkInProgress'
import Tooltips from './Tooltips'

// komponent wyższego rzędu przyjmuję tablicę komponentów które ma wyrenderować i na tej podstawie wylicza również ilość zakładek
// do tablicy można przekazać komponenty - sprawdzałem

const TabsElement = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  console.log(props.tabPane1)
  return (

    <div>

      <Nav tabs>

        <NavItem style={{cursor: 'pointer'}}>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Przegląd
          </NavLink>
        </NavItem>
        <NavItem style={{cursor: 'pointer'}}>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Koszty
          </NavLink>
        </NavItem>
        {/* style={{pointerEvents: 'none', color: 'silver'}} */}
        <NavItem >
          <NavLink
            className={classnames({ active: activeTab === '3' }), 'disabled'}
            onClick={() => { toggle('3'); }}
          >
            Sezonowość
          </NavLink>

        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' }), 'disabled'}
            onClick={() => { toggle('4'); }}
          >
            Historia zmian cen
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' }), 'disabled'}
            onClick={() => { toggle('5'); }}
            style={{display: 'inline-block', padding: '7px 0 7px 14px'}}
          >
            Wpływ promocji i zmian cen na sprzedaż
          </NavLink>
          <Tooltips style={{display: 'inline-block'}}/>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {props.tabPane1}
        </TabPane>
        <TabPane tabId="2">
          {props.tabPane2}
        </TabPane>
        <TabPane tabId="3">
          {props.tabPane3}
        </TabPane>
        <TabPane tabId="4">
          {props.tabPane4}
        </TabPane>
        <TabPane tabId="5">
          {props.tabPane5}
        </TabPane>
      </TabContent>
    </div>
    );
  }

export default TabsElement;