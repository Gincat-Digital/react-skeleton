import fs from 'fs';
import lodash from 'lodash';
import { type NodePlopAPI } from 'plop';

const createTemplate = (plop: NodePlopAPI): void => {
	const getTypeChoices = (): Array<{ name: string; value: string }> => {
		const directoryConent = fs.readdirSync('src/components', {
			withFileTypes: true,
		});
		const directories = directoryConent.filter((item) => item.isDirectory());
		const names = directories.map((dir) => dir.name);
		const choices = names.map((type) => ({
			name: lodash.startCase(type),
			value: type,
		}));

		return choices;
	};

	plop.setGenerator('template', {
		description: 'Generate easy React component templates',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'Choose template type:',
				choices: [
					{
						name: 'Component',
						value: 'component',
					},
					{
						name: 'Context',
						value: 'context',
					},
					{
						name: 'Page',
						value: 'page',
					},
				],
			},
			{
				when: (answers): boolean => answers.type === 'component',
				type: 'list',
				name: 'category',
				message: 'Choose component category:',
				choices: getTypeChoices(),
			},
			{
				type: 'input',
				name: 'name',
				message: 'Name of the generated template:',
			},
		],
		actions: (answers) => {
			if (answers!.type === 'component') {
				return [
					{
						skipIfExists: true,
						verbose: true,
						type: 'addMany',
						base: '../.templates/{{ type }}/',
						templateFiles: '../.templates/{{ type }}/*.*',
						destination: 'src/{{ type }}s/{{ category }}/{{ kebabCase name }}/',
						stripExtensions: ['txt'],
					},
				];
			} else if (answers!.type === 'page') {
				return [
					{
						skipIfExists: true,
						verbose: true,
						type: 'addMany',
						base: '../.templates/{{ type }}/',
						templateFiles: '../.templates/{{ type }}/*.*',
						destination: 'src/{{ type }}s/',
						stripExtensions: ['txt'],
					},
				];
			} else if (answers!.type === 'context') {
				return [
					{
						skipIfExists: true,
						verbose: true,
						type: 'addMany',
						base: '../.templates/{{ type }}/',
						templateFiles: '../.templates/{{ type }}/*.*',
						destination: 'src/{{ type }}s/{{ category }}/{{ kebabCase name }}/',
						stripExtensions: ['txt'],
					},
				];
			}

			return [];
		},
	});
};

export default createTemplate;
