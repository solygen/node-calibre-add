module.exports = {
    options: {
        banner: '/* <%= pkg.name %>.<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) <%= pkg.repository.url %> */'
    },
    dist: {
        files : [{
          expand: true,
          cwd: 'src/',
          src: '**/*.js',
          dest: 'lib/'
      }]
    }
};
