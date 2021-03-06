# A log of changes

# [6.6.0](https://github.com/asd-xiv/m/compare/v6.5.0...v6.6.0) (2021-07-02)


### Features

* update packages ([3fb0026](https://github.com/asd-xiv/m/commit/3fb0026178a6d2c9028e3cd5c52f27f5b2ed460a))

## [6.5.0](https://github.com/asd-xiv/m/compare/v6.4.0...v6.5.0) (2021-06-02)

### Features

* update packages ([0578d49](https://github.com/asd-xiv/m/commit/0578d497e7eeb8efc0834acfa0a3387cc4a586e8))

## [6.4.0](https://github.com/asd-xiv/m/compare/v6.3.1...v6.4.0) (2021-06-02)

### Features

* update packages ([4b3286b](https://github.com/asd-xiv/m/commit/4b3286b88a508259285f86b49de56ced9269a425))

## [6.3.1](https://github.com/asd-xiv/m/compare/v6.3.0...v6.3.1) (2021-05-28)

### Bug Fixes

* **sortWith:** add curried version ([20ebc60](https://github.com/asd-xiv/m/commit/20ebc60ea0a7152fdfe79e609543af87bcb144c5))

## [6.3.0](https://github.com/asd-xiv/m/compare/v6.2.0...v6.3.0) (2021-05-23)

### Features

* add `sortBy`, rework `sort` and `sortWith` ([#11](https://github.com/asd-xiv/m/issues/11)) ([2f39124](https://github.com/asd-xiv/m/commit/2f391242516027a8d8c9639666ea83f148004728))
* update packages ([5a6c802](https://github.com/asd-xiv/m/commit/5a6c802c6a3f0e21f711355b359772b9d4652d1a))

## [6.2.0](https://github.com/asd-xiv/m/compare/v6.1.0...v6.2.0) (2021-05-09)

### Features

* add `values` function ([#9](https://github.com/asd-xiv/m/issues/9)) ([0879591](https://github.com/asd-xiv/m/commit/0879591da97348e37f62972d42eff3fa04f1686a))

## [6.1.0](https://github.com/asd-xiv/m/compare/v6.0.0...v6.1.0) (2021-05-08)

### Features

* update packages ([c771ed6](https://github.com/asd-xiv/m/commit/c771ed61489e1ab505e82655e28b86ba96d363c2))

## [6.0.0](https://github.com/asd-xiv/m/compare/v5.4.0...v6.0.0) (2021-04-27)

### Features

* rework `intersect`, add `join` ([#8](https://github.com/asd-xiv/m/issues/8)) ([f80680b](https://github.com/asd-xiv/m/commit/f80680b4610ac58d5bc0b45ac205ec2d7e4fee08))

### BREAKING CHANGES

* `distinct` no longer uses deep equal compare. Use `distinctBy` with custom
compare function to parse object arrays.

```js
// old
distinct([1, {a: 2}, {a: 2}])
// => [1, {a: 2}]

// new
import deepEquals from "fast-deep-equal"

distinctBy(deepEquals, [1, { a: 2 }, { a: 2 }])
// => [1, {a: 2}]
```

* feat: add `overlap` and `overlapBy` functions to combine 2 arrays into a set (array of unique items)

* feat: add `intersect` and `intersectBy` functions to obtain common items in 2 arrays

* feat: rename `join` -> `unit`, `overlap` -> `join`

## [5.4.0](https://github.com/asd-xiv/m/compare/v5.3.0...v5.4.0) (2021-04-11)

### Features

* add git hooks for staged files and commit message linting ([9ad3514](https://github.com/asd-xiv/m/commit/9ad3514a850f80d1cc0d67af538aed8e2f2dd949))
