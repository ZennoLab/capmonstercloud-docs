import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';

const DocsMenuPreferenceContext = React.createContext(undefined);

export function DocsMenuPreferenceProvider({children}) {
  const mobileSidebar = useNavbarMobileSidebar();
  const [preference, setPreferenceState] = React.useState(null);

  const setPreference = React.useCallback((nextPreference) => {
    setPreferenceState(nextPreference);
  }, []);

  React.useEffect(() => {
    if (!mobileSidebar.shown) {
      setPreferenceState(null);
    }
  }, [mobileSidebar.shown]);

  const value = React.useMemo(
    () => ({preference, setPreference}),
    [preference, setPreference],
  );

  return (
    <DocsMenuPreferenceContext.Provider value={value}>
      {children}
    </DocsMenuPreferenceContext.Provider>
  );
}

export function useDocsMenuPreference() {
  const context = React.useContext(DocsMenuPreferenceContext);
  if (!context) {
    throw new Error('useDocsMenuPreference must be used within DocsMenuPreferenceProvider');
  }
  return context;
}

