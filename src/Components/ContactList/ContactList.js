import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ deleteContact, contacts }) => {
  // const removeItem = () => {
  //   deleteContact(id);
  // };

  return (
    <ul className={styles.block}>
      <li className={styles.liCover}>
        {contacts.map((contact) => (
          <ul className={styles.ulBlock}>
            <li className={styles.li}>
              <span className={styles.span}>{contact.name}</span>
              <span className={styles.span}>{contact.number}</span>
            </li>

            <button className={styles.button}>Delete</button>
          </ul>
        ))}
      </li>
    </ul>
  );
};

export default ContactList;

// <button onClick={removeItem} className={styles.button}></button>
