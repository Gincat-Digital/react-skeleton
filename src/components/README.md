# Components Documentation

## Introduction

The `components` folder in this React project houses all the components utilized across the pages. It follows a specific organization pattern where the subfolder names are in kebab-case, and the file names are in PascalCase. Each component is categorized by type and further structured within its respective folder.

## Folder Structure

```
components/
├─── buttons/
│    ├─── button/
│    │    ├─── Button.config.ts
│    │    ├─── Button.data.ts
│    │    ├─── Button.mocks.tsx
│    │    ├─── Button.scss
│    │    ├─── Button.stories.ts
│    │    ├─── Button.tsx
│    │    ├─── Button.types.ts
│    │    └─── Button.utils.ts
│    └─── toggle-button/
│         └─── ...
└─── forms/
     ├─── input/
     │    └─── ...
     └─── select/
          └─── ...
```

## Files

- **Button.config.ts**: Configuration file containing constants and specific parameter values.
- **Button.data.ts**: Data file containing the production data to be used in the component.
- **Button.mocks.tsx**: Mock file for testing the component, contains pure mock data.
- **Button.scss**: SCSS file for styling the component, providing styles specific to its appearance and behavior.
- **Button.stories.ts**: Stories file for documenting the Button component with Storybook, showcasing its usage and variations.
- **Button.tsx**: React component file containing its logic.
- **Button.types.ts**: TypeScript file defining the types used within the component, ensuring type safety and clarity in usage.
- **Button.utils.ts**: Utils file for very specific utility functions to be used within the component.

## Usage

To use any of the components mentioned above, import them into your desired file and integrate them into your React application as needed using the global alias `@`.

```typescript
import { type ButtonProps } from '@/components/buttons/button/Button.types.ts';
import { Button } from '@/components/buttons/button/Button.tsx';
```
