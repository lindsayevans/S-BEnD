import React, { useState } from 'react';
import cx from 'clsx';

import { libClasses } from '../../style/lib';

import classes from './MyFoo.module.css';

export type MyFooProps = {
  active?: boolean;
  disabled?: boolean;
  theme?: 'light' | 'dark';
};

export const MyFoo: React.FC<MyFooProps> = (props) => {
  const [active, setActive] = useState(props.active);
  const [disabled, setDisabled] = useState(props.disabled);
  const [theme, setTheme] = useState<MyFooProps['theme']>(
    props.theme || 'light'
  );

  const toggleActive = () => {
    setActive(!active);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className={classes.myFoo}
      data-theme={theme}
      data-state={cx(active && 'active', disabled && 'disabled')}
    >
      <h3 className={classes.myFoo_title}>
        Hello from My Foo!
        <i
          className={cx(libClasses.icon, classes.myFoo_titleIcon)}
          data-shape="rounded"
        >
          🚽
        </i>
        <i
          className={cx(libClasses.icon, classes.myFoo_titleIcon)}
          data-shape="circle"
        >
          🚰
        </i>
      </h3>

      <pre>classes: {JSON.stringify(classes, null, 2)}</pre>

      <button type="button" onClick={() => toggleActive()}>
        Toggle active
      </button>
      <button type="button" onClick={() => toggleDisabled()}>
        Toggle disabled
      </button>
      <button type="button" onClick={() => toggleTheme()}>
        Toggle theme
      </button>
    </div>
  );
};
