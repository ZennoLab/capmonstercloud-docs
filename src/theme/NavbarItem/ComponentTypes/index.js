// Extend the default NavbarItem component types with a custom 'component' type
import OriginalComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import ComponentNavbarItem from '@theme/NavbarItem/ComponentNavbarItem';

export default {
  ...OriginalComponentTypes,
  component: ComponentNavbarItem,
};

