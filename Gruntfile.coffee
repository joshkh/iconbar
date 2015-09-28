module.exports = ->

	@initConfig

		clean:
			all: ["public/css/style.css"]

		connect:
			all:
				options:
					port: 9000

		watch:
			css:
				files: 'less/**'
				tasks: ['less']

		mochaTest:
			test:
				src: ['test/**/*.coffee']


		less:
			dev:
				files:
					'public/css/style.css': 'less/style.less'



	@loadNpmTasks "grunt-contrib-connect"
	@loadNpmTasks "grunt-contrib-clean"
	@loadNpmTasks "grunt-contrib-watch"
	@loadNpmTasks "grunt-contrib-less"



	@registerTask "build", [



	]



	@registerTask "dev", [
		"build",
		"connect",
		"watch"
	]
