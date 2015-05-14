var gulp = require ('gulp'),
	uglify = require ('gulp-uglify'),
	sass = require ('gulp-ruby-sass');
	
// Scripts Task
// Uglifies
	gulp.task ('scripts', function(){
		gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
	});

// Outdated from LevelUpTuts
// Styles Task
// sass
//	gulp.task ('styles', function(){
//		gulp.src('scss/**/*.scss')
//		.pipe(sass())
//		.pipe(gulp.dest('css/'));
//	});

//New from github
	gulp.task('styles', function () {
	    return sass('scss/', { style: 'compressed' })
	        .on('error', function (err) {
	            console.error('Error!', err.message);
	        })
			.pipe(gulp.dest('css/'));
		});
	
// Watch Task
// Watches JS
	gulp.task ('watch', function(){
		gulp.watch('js/*.js', ['scripts']);
		gulp.watch('scss/*.scss', ['styles']);
	});	

	gulp.task ('default', ['scripts', 'styles', 'watch']);