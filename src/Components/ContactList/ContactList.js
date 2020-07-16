import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ deleteContact, contacts }) => {
  return (
    <ul className={styles.block}>
      <li className={styles.liCover}>
        {contacts.map((contact) => (
          <ul className={styles.ulBlock}>
            <li className={styles.li} key={contact.id}>
              <span className={styles.span}>{contact.name}</span>
              <span className={styles.span}>{contact.number}</span>
            </li>
            <button
              className={styles.button}
              id={contact.id}
              onClick={deleteContact}
            >
              Delete
            </button>
          </ul>
        ))}
      </li>
    </ul>
  );
};

export default ContactList;
// import React, { Component } from "react";

// export class ContactList extends Component {
//   render() {
//     return (
//       <ul className={styles.block}>
//         <li className={styles.liCover}>
//           {this.props.contacts.map((contact) => (
//             <ul className={styles.ulBlock}>
//               <li className={styles.li} key={contact.id}>
//                 <span className={styles.span}>{contact.name}</span>
//                 <span className={styles.span}>{contact.number}</span>
//               </li>
//               <button
//                 className={styles.button}
//                 id={contact.id}
//                 onClick={this.props.deleteContact}
//               >
//                 Delete
//               </button>
//             </ul>
//           ))}
//         </li>
//       </ul>
//     );
//   }
// }

// export default ContactList;
