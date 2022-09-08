## Improvements :rocket: {#improvements}

### Reviewpad

- Allow number sign in label color hex values.

### Aladino Language

- Restrict typed expressions to lambda parameters.

**Example:**

```yaml
($dev: String => $isElementOf($dev, $team("security"))))
```

### Aladino Built-ins

### Functions

- Add excluded patterns to [`size`](/guides/built-ins#size) built-in.

**Example:**

```yaml
rules:
  - name: size-without-lock-files
    spec: $size(["*.lock"]) < 50
```

### Actions

- [`close`](/guides/built-ins#close) issue/pull request with comment.
