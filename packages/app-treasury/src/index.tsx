// Copyright 2017-2020 @polkadot/app-democracy authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AppProps, BareProps } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Switch } from 'react-router';
import { HelpOverlay, Tabs } from '@polkadot/react-components';

import basicMd from './md/basic.md';
import Overview from './Overview';

import { useTranslation } from './translate';

export { default as useCounter } from './useCounter';

interface Props extends AppProps, BareProps {}

export default function TreasuryApp ({ basePath }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <main className='treasury--App'>
      <HelpOverlay md={basicMd} />
      <header>
        <Tabs
          basePath={basePath}
          items={[
            {
              isRoot: true,
              name: 'overview',
              text: t('Treasury overview')
            }
          ]}
        />
      </header>
      <Switch>
        <Route component={Overview} />
      </Switch>
    </main>
  );
}
