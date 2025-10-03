import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import DocsMenuToggle from '@theme/Navbar/DocsMenuToggle';
export default function Navbar() {
  return (
    <>
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>

      <DocsMenuToggle />
    </>
  );
}
