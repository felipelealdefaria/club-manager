# CONTRIBUTING

## Please follow these notes to help us maintain this project:

- **index file**:
just use index.ts to export something. The business logic must be in another file with a descriptive name.

- **git hooks**:
we use husky to generate our git hooks scripts (`pre-commit` and `pre-push`). So make sure everything is ok before pushing something. Please avoid doing a push using the `--no-verify` flag.

- **automated tests**:
remember to write tests for every new feature or for something you change. And make sure the tests are in the correct folder.

- **naming standards**:
file and folder names must follow the kebab case pattern: `tests-setup/mocks-functions.ts`.

## Versioning standards:

- **commit messages**:
```bash
[<type>]: <short summary>
│         │
│         └─⫸ Summary in present tense. Not capitalized. No period at the end.
│
│
│
└─⫸ Commit type: feat | fix | perf | ref | test | chore
```

An example commit message would look like: `[feat]: add logic for min/max lead days to enquiries`

**Commit types**:
1. `feat`   - introduces or extends a feature
2. `fix`    - fixes an active issue in the codebase
3. `perf`   - addresses a performance issue or otherwise relates to performance of the application
4. `ref`    - refactors part of the codebase
5. `test`   - adds or improves tests in the codebase
6. `chore`  - documentation, dependencies, general cleanup of meta files
