import { HelloWorld } from '@/components/heading/hello-world/HelloWorld';
import { helloWorldDefaultData } from '@/components/heading/hello-world/HelloWorld.data';
import type { ReactElement } from 'react';
import React from 'react';

export const Home = (): ReactElement => {
	return (
		<>
			<header>
				<HelloWorld {...helloWorldDefaultData} />
			</header>
		</>
	);
};
