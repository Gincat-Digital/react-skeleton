import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
	.use(initReactI18next)
	.use(HttpApi)
	.init(
		{
			lng: 'en',
			fallbackLng: 'en',
			ns: [],
			interpolation: {
				escapeValue: false,
			},
			backend: {
				loadPath: '/locales/{{lng}}/{{ns}}.json',
			},
		},
		undefined,
	);

export default i18next;
