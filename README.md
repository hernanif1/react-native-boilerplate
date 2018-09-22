# Boilerplate React-Native

This opinionated boilerplate was born because I always need to configure the same generic libs in order let my app ready-to-production.

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

### Sonnar

1. Start the docker container in your machine with the following command
`docker run -d --name sonarqubeLocal -p 9001:9000 -p 9092:9092 arturbdr/sonarqube-pluggins:6.7.1.1-lts`
This command will download the image and start a docker container in your machine and bind the host ports: 9001 and 9092 to the container port 9000 and 9092 respectively.
2. After the container is started, you can access it in the browser in [local sonar docker](http://localhost:9001/)
3. Publish the project to this container with the command `gulp sonar`
4. Check the results in [local sonar docker](http://localhost:9001/)

All the sonar configuration are in the file `sonar-project.properties`

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
- [x] splashscreen - to setup inaital screen before open the app
- [x] remove @FIXME: - to let
- [x] example of unit test - to integrate test since the begin
- [x] Header example - to let easier to implement header throught props
- [x] Styled components with jest - to let easier to implement nested css
- [ ] nativeBase - to use standarlized components

### TODO

- [ ] build ci (with fasltlane or expo)
- [ ] try immutable - to let transformation data less verbose
- [ ] example of reselect lib - to optimize data flow
- [ ] example of integration tests - to integrate test since the begin
- [ ] example of e2e detox (choose screenplay or pageObject)- to integrate e2e since the begin
