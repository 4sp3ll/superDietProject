import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

interface Props {
  tabPane1: any,
  tabPane2: any
}

const TabsElement = (props: Props) => {

  return (

    <div>
      <Tab.Container defaultActiveKey="1">
        <Nav variant="tabs" >
          <Nav.Item>
            <Nav.Link eventKey="1">Ingredients</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">Technical details</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="1">
            {props.tabPane1}
          </Tab.Pane>
          <Tab.Pane eventKey="2">
            {props.tabPane2}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
    );
  }

export default TabsElement;