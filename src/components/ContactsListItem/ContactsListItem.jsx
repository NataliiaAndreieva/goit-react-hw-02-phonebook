// import PropTypes from 'prop-types';
// // import {
// //   ContactItem,
// //   ContactName,
// //   ContactNumber,
// //   Button,
// // } from './ContactsListItem.styled';

// const ContactsListItem = ({ id, name, number, deleteContact }) => {
//   return (
//     <contactItem key={id}>
//       <contactName>
//         {name} :<contactNumber>{number}</contactNumber>
//       </contactName>
//       <button onClick={() => deleteContact(id)}>Delete</button>
//     </contactItem>
//   );
// };

// ContactsListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

import PropTypes from 'prop-types';

const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
