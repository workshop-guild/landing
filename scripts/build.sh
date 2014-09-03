#!/bin/sh
# Edit folder paths accordingly
# Run on cron 2 minute interval
CLIENT_SRC=../
DEPLOY_FOLDER=../../landing-svr

cd ${CLIENT_SRC}

echo "---> `date`"

echo "---> Pulling.."
RESULT=$(git pull)


if [ "${RESULT}" = "Already up-to-date." ]; then
	echo $RESULT
else
	echo "---> New Changes Detected. Building..."
	echo $RESULT
	grunt build
	rm -rf ${DEPLOY_FOLDER}/views
	mv dist ${DEPLOY_FOLDER}/views
fi
	
echo "---> Done"