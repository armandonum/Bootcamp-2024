import React, { useEffect, useState } from 'react'


import type { Contact } from './ContactLoader'
import { useLoaderData } from 'react-router-dom'

 const ContactPage = () => {

  const contacts = useLoaderData() as Contact[];
  return (
    <div>
      <h1>contact</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContactPage;

