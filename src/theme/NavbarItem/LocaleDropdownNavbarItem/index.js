import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';
import LocaleBtn from './LocaleBtn';
import ChangeLocaleIcon from '@site/static/img/changeLocale.svg';

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
    const to = `${baseTo}${search}${hash}${queryString}`;
    let activeClass = '';
    if (locale === currentLocale) {
      activeClass = mobile ? 'menu__link--active' : 'dropdown__link--active';
    }

    const flagClass = `locale-${locale.toLowerCase()}`;

    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className: [activeClass, 'locale-flag', flagClass].filter(Boolean).join(' '),
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

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
          {mobile ? (
            <div className="mobile-flags-wrap">
              <ChangeLocaleIcon width={20} height={20} />
              <span>{localeConfigs[currentLocale].label}</span>
            </div>
          ) : (
            <LocaleBtn />
          )}
        </>
      }
      items={items}
    />
  );
}
