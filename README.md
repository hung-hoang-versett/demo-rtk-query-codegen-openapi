Demo code-gen from openAPI 

Why we need this ?: stay sync with BE changes by auto gen-code from openAPI schema.

Trigger gen code by:

`yarn generate-rtk`

Generated code on this file: src/app/services/api.generated.ts

We can use hook method from the generated code to perform api request which can be intergration with redux as well 

Example of using api hooks : src/features/projects/ProjectsManager.tsx

Check doc for more detail: https://redux-toolkit.js.org/rtk-query/usage/code-generation
