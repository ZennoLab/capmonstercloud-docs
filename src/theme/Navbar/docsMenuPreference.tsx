import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

function createStrictContext<T>(name: string) {
  const Ctx = createContext<T | undefined>(undefined);
  function useStrictContext(): T {
    const value = useContext(Ctx);
    if (value === undefined) {
      throw new Error(`${name} must be used within its Provider`);
    }
    return value;
  }
  return [Ctx, useStrictContext] as const;
}

export type MenuPreference = 'primary' | 'docs' | null;

export interface DocsMenuPreferenceContextValue {
  preference: MenuPreference;
  setPreference: (next: MenuPreference) => void;
}

const [DocsMenuPreferenceContext, useDocsMenuPreference] =
  createStrictContext<DocsMenuPreferenceContextValue>('DocsMenuPreferenceContext');

const DocsMenuPreferenceProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const mobileSidebar = useNavbarMobileSidebar();
  const [preference, setPreferenceState] = useState<MenuPreference>(null);

  const setPreference = useCallback((next: MenuPreference) => {
    setPreferenceState(next);
  }, []);

  useEffect(() => {
    if (!mobileSidebar.shown) {
      setPreferenceState(null);
    }
  }, [mobileSidebar.shown]);

  const value = useMemo<DocsMenuPreferenceContextValue>(
    () => ({ preference, setPreference }),
    [preference, setPreference],
  );

  return (
    <DocsMenuPreferenceContext.Provider value={value}>
      {children}
    </DocsMenuPreferenceContext.Provider>
  );
};

export { DocsMenuPreferenceProvider, useDocsMenuPreference };

