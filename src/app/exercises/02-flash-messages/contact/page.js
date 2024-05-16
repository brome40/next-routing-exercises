'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter();
  const { createToast } = useContext(ToastContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    router.push('/exercises/02-flash-messages');

    createToast(
      'Thanks for your message!',
      'success'
    );
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
