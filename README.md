### Branch Pattern

Here we will explain how the project branches are divided into core branches(which should not have a branch name change), for example:

- **_Development:_** Regarding the development environment
- **_Homologation:_** Regarding the homologation environment
- **_Production:_** Regarding the production environment

And when creating a branch for a feature development, please follow this name base:\
There will be two types of branch naming

- **_Feature Type:_** When is a feature, you will have to follow the naming parameter :

```
features/####-description
```

- **_Bug Type:_** When is a bug, you will have to follow the naming parameter :

```
fix/####-description
```

- **_####:_** is the task number
- **_description:_** A short description of the functionality

### Commit Pattern

All commits must have the following initials before the description of the change:

- **_Feat:_** To introduce new features

```
feat:description
```

- **_Fix:_** To fix bugs

```
fix:description
```

- **_Chore:_** To make general changes

```
chore:description
```

- **_CI:_** To work on continuous integration/continuous deployment

```
ci:description
```

- **_Refactor:_** To improve existing source code

```
refactor:description
```
