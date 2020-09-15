import React from 'react';

function Contacts(props) {
    const contacts=props.contacts
    return (
        <ul className="contacts-list">
            <li><p><span >Nazywam się:</span><span>{contacts.name} {contacts.surname}</span></p></li>   
            <li><p><span >Moje miasto:</span><span>{contacts.city}</span></p></li>  
            <li><p><span >Mój telefon:</span><span>{contacts.number}</span></p></li>  
            <li><p><span >Moja poczta:</span><span>{contacts.mail}</span></p></li>  
            <li><p><span>Github:</span><span><a href={contacts.git} target="_blank" rel="noopener noreferrer"> link</a> </span></p></li>   
        </ul>

    );
}
export default Contacts;