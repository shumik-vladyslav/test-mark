module.exports= function (grunt) {
    grunt.initConfig(
    {
        // Task configuration.
        jshint:
        {
            gruntfile:
            {
                src: 'Gruntfile.js'
            }
        },
        connect:
        {
            server:
            {
                options:
                {
                    hostname: 'localhost',
                    port: 8080,
                    base: 'client',
                    keepalive: true,
                    livereload: true
                }
            }
        },

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['connect', 'watch','uglify']);

}
