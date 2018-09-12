# Boilerplate React-Native

This opinionated boilerplate was born because I always need to configure the same libs in order let my app ready-to-production.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

### Enviroment

1. Install the Mac Iphone Simulator
2. Geny motion for Android
3. Node (8+)

### Commands

Run the command bellow:

```bash
npm install
```

```bash
npm start
```

```bash
npm test
```

### Commits

Use only the command bellow to create commit

```bash
npm run commit
```

### Features

- [x] react-navigate - main lib (with create-react-native-app)
- [x] eslint - to standarlize the project
- [x] commitzen - to create nice commits
- [x] prettier - to standarlize the code
- [x] flow-type - to create static types
- [x] husky - for prevent commit with errors (of lint, tests, flow)
- [x] saga - lib to fetch async data
- [x] jestSetup - to configurate react-native with jest
- [x] enzyme - to test components
- [x] jsdom - to simulate window and globals
- [x] I18n - to translate texts
- [x] recompose - to compose HOCs
- [x] apisauce - to fetch external datas
- [x] sentry - to log erros
- [x] file api module (to fetch data) - to configurate apisauce and services
- [x] initial folders (services/ components) - to define the architeture standard
- [x] environment variables - to fetch external datas in diferent enviroments
- [x] icon - to setup home icon
- [x] splashscreen - to setup inital screen before open the app
- [x] remove @FIXME: - to let
- [x] example of unit test - to integrate test since the begin
- [ ] nativeBase - to use standarlized components

### TODO

- [ ] build ci (with fasltlane or expo)
- [ ] try immutable - to let transformation data less verbose
- [ ] example of reselect lib - to optimize data flow
- [ ] example of integration tests - to integrate test since the begin
- [ ] example of e2e detox (choose screenplay or pageObject)- to integrate e2e since the begin
