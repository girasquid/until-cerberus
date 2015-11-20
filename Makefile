all: 
	cordova run

lint:
	jshint www/js/*.js

logs:
	adb logcat | grep "Web Console"

clean:
	cordova clean