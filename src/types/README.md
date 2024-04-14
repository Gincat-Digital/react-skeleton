# Types Folder Documentation

Welcome to the `types` folder! This folder is dedicated to storing generic and global types for your frontend web project.

## Folder Structure

The `types` folder follows a simple structure:

```
types/
│
├─── component/
│    ├─── GenericComponentType.ts
│    └─── ...
│
├─── AnyGenericType.ts
├─── ...
│
└─── README.md
```

- **`component/`**: Contains generic types related to components that can be reused across different components within your project, you can create multiple folders like this to add more specifity to your types.

**NOTE:** Folder should be named in singular and kebab-case formatted. Files should be in PascalCase.

## Usage

To use the types defined in this folder:

1. **Import the types**: Import the necessary types from the `types` folder into your TypeScript files using aliased paths. For example:

   ```typescript
   import { UserType } from '@/types/UserType';
   ```

2. **Utilize the types**: Use the imported types to define interfaces, function parameters, return types, and other TypeScript constructs within your codebase. For example:

   ```typescript
   interface UserData {
       id: string;
       name: string;
       age: number;
   } & UserType;

   function updateUser(data: UserData): void {
       // Function implementation
   }
   ```