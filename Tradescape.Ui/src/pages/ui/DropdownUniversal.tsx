import React, { ReactElement, useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux'
import allActions from '../../actions/index'

import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
    },
]

// interface Props {
//     id: string,
//     name: string,
//     class: string,
//     dropdowns: [string]
// }

// const DropdownUniversal = (): ReactElement => {
//   const [dropdownOpen, setOpen] = useState(false);
//   const [dropdownState, setDropdownState]: any = useState([])
//   const dispatch = useDispatch()

// //   useEffect(() => {
// //       effect
// //       return () => {
// //           cleanup
// //       }
// //   }, [dropdownState])

//   const toggle = () => setOpen(!dropdownOpen);

//   return (
//     <>
//         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
//         <DropdownToggle caret>
//             {props.name}
//         </DropdownToggle>
//         <DropdownMenu>
//             {props.dropdowns.map((dropdown: string) =>
//                 <DropdownItem
//                 id={props.id}
//                 onClick={() => setDropdownState(props.id)}
//                 >
//                 {dropdown}
//                 </DropdownItem>
//             )}
//         </DropdownMenu>
//         </ButtonDropdown>

//     </>
//   );
// }

const DropdownUniversal = () => (
    <Dropdown
      placeholder='Select Friend'
      selection
      options={friendOptions}
    />
  )

export default DropdownUniversal;