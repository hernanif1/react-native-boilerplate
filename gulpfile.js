const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('sonar', done => {
  sonarqubeScanner({}, done);
});
