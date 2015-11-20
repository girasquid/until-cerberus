all: 
	cordova run

lint:
	jshint www/js/*.js

logs:
	adb logcat
	# for only JS console logs, pipe to `grep "Web Console"`

clean:
	cordova clean