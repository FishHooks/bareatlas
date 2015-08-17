module.exports = function (grunt) {
    "use strict";

    var pkg = grunt.file.readJSON("package.json"),
        banner = "/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today('isoDateTime') %> */\n";

    Object.keys(pkg.devDependencies).forEach(
        function (dep) {
            if (dep.substring(0, 6) === "grunt-") {
                grunt.loadNpmTasks(dep);
            }
        }
    );

    grunt.initConfig(
        {
            pkg: pkg,

            watch: {
                scripts: {
                    files: [
                        "src/js/**/*.js",
                        "src/styles/**/*.css",
                        "src/templates/**/*.html",
                        "src/index.html.template",
                        "!**/build",
                        "!**/build/**"
                    ],
                    tasks: ["build"],
                    options: {
                        interrupt: true
                    }
                }
            },

            clean: {
                dist: [
                    "src/index.html",
                    "src/dist",
                    "src/js/build"
                ]
            },

            jshint: {
                options: {
                    jshintrc: ".jshintrc"
                },
                dist: [
                    "Gruntfile.js",
                    "src/js/**/*.js"
                ]
            },

            copy: {
                dist: {
                    files: [
                        {
                            src: "src/index.html.template",
                            dest: "src/index.html"
                        },
                        {
                            src: "src/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2",
                            dest: "src/dist/fonts/glyphicons-halflings-regular.woff2"
                        }
                    ]
                }
            },

            ngtemplates: {
                dist: {
                    src: "src/templates/**/*.html",
                    dest: "src/js/build/templates.js",
                    options: {
                        module: "bareatlas",
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true
                    }
                }
            },

            uglify: {
                options: {
                    banner: banner,
                    sourceMap: true
                },
                dist: {
                    files: {
                        "src/dist/js/optimized.js": [

                            // Dependencies
                            "src/vendor/angular/angular.js",
                            "src/vendor/angular-route/angular-route.js",
                            "src/vendor/angular-resource/angular-resource.js",
                            "src/vendor/moment/moment.js",
                            "src/vendor/angular-moment/angular-moment.js",
                            "src/vendor/tincanjs/build/tincan.js",
                            "src/vendor/angular-base64/angular-base64.js",
                            "src/vendor/angular-cookies/angular-cookies.js",
                            "src/vendor/angular-ui-bootstrap/ui-bootstrap.js",
                            "src/vendor/angular-ui-bootstrap/ui-bootstrap-tpls.js",
                            "src/vendor/tv4/tv4.js",

                            // Our source
                            "src/js/app.js",
                            "src/js/controllers/main.js",
                            "src/js/services/currentUser.js",
                            "src/js/services/utils.js",
                            "src/js/controllers/dashboard.js",
                            "src/js/controllers/localLrs.js",
                            "src/js/controllers/remoteLrs.js",
                            "src/js/controllers/statementTools.js",
                            "src/js/controllers/profile.js",
                            "src/js/controllers/registration.js",
                            "src/js/controllers/localLrsDetail.js",
                            "src/js/controllers/remoteLrsDetail.js",
                            "src/js/controllers/welcome.js",
                            "src/js/controllers/credentials.js",
                            "src/js/controllers/statementAnalyzer.js",
                            "src/js/controllers/localDocumentViewer.js",
                            "src/js/controllers/remoteDocumentViewer.js",
                            "src/js/controllers/regSplash.js",
                            "src/js/controllers/forgotPassword.js",
                            "src/js/controllers/changePassword.js",
                            "src/js/controllers/passwordSplash.js",
                            "src/js/controllers/verify.js",
                            "src/js/controllers/proxy.js",

                            // Other buildables
                            "src/js/build/templates.js"
                        ]
                    }
                }
            },

            filerev: {
                js: {
                    src: [
                        "src/dist/js/optimized.js"
                    ]
                },
                css: {
                    src: [
                        "src/dist/css/optimized.css"
                    ]
                }
            },

            userev: {
                src: "src/index.html",
                options: {
                    patterns: {
                        "Updating JS links": /optimized.js/,
                        "Updating CSS links": /optimized.css/
                    }
                }
            }
        }
    );

    grunt.registerTask(
        "build",
        [
            "jshint",
            "copy",
            "ngtemplates",
            "uglify",
            "filerev",
            "userev"
        ]
    );
    grunt.registerTask("default", "build");
};
