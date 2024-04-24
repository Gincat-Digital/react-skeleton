import type { ReactElement } from 'react';
import type { HelloWorldProps } from './HelloWorld.types';
import React from 'react';
import { BEM } from '@/utils/bem/BEM';
import { getAbstractProps } from '@/utils/component/getAbstractProps';
import { className } from '@/utils/component/className';
import { useTranslation } from 'react-i18next';
import { globalLocales } from '@/data/locales/global';
import { LocalesNS } from '@/data/locales/locales-ns';

import './HelloWorld.scss';

export const HelloWorld = (props: HelloWorldProps): ReactElement => {
	const CMP = new BEM('cmp-hello-world');

	const { t } = useTranslation(LocalesNS.Global);

	return (
		<h1 {...getAbstractProps(props)} {...className(CMP.root(), props.className)}>
			{t(globalLocales.helloWorld, { name: props.name })}
		</h1>
	);
};
