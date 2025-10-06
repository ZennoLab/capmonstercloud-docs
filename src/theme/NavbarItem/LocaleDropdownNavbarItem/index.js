import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';
import LocaleBtn from './LocaleBtn';
export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}) {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();
  const localeItems = locales.map(locale => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}${queryString}`;
    const activeClass =
      // eslint-disable-next-line no-nested-ternary
      locale === currentLocale ? (mobile ? 'menu__link--active' : 'dropdown__link--active') : '';

    const flagClass = `locale-${locale.toLowerCase()}`;

    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      // Keep existing active class behavior, just add flag classes
      className: [activeClass, 'locale-flag', flagClass].filter(Boolean).join(' '),
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale].label;
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          {/* <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel} */}

          {mobile ? localeConfigs[currentLocale].label : <LocaleBtn />}
        </>
      }
      items={items}
    />
  );
}
