import React from 'react';
import { Button, Result } from 'react-view-design';

export default () => {
  return (
    <Result
      title="Your operation has been executed"
      extra={[<Button type="primary" text="Go Console" />]}
    >
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="warning"
        width="1em"
        height="1em"
        color="#ffc53d"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
      </svg>{' '}
    </Result>
  );
};
