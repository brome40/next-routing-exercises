import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose color:</p>
      <ul>
        <li><Link href='/exercises/01-screensaver/cyan'>cyan</Link></li>
        <li><Link href='/exercises/01-screensaver/crimson'>crimson</Link></li>
        <li><Link href='/exercises/01-screensaver/deeppink'>deeppink</Link></li>
        <li><Link href='/exercises/01-screensaver/forestgreen'>forestgreen</Link></li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
