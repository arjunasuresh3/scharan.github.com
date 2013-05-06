JEKYLL_CMD = /usr/local/bin/jekyll
REPO_DIR = ~/scharan.github.com
GH_SITE = ~/scharan.github.com
AWS_SITE = /var/www/html
CSE_SITE = /var/www/html
GH_DOMAIN = blog.saicharan.in
AWS_S3_PATH = s3://www.saicharan.in
#AWS_S3_PATH = s3://saicharan.in
#AWS_S3_PATH = s3://s3.saicharan.in
#AWS_S3_PATH = s3://static.saicharan.in
SYNC_CMD = s3cmd sync --exclude=Makefile --exclude=CNAME --exclude=README.textile --delete-removed _site/ $(AWS_S3_PATH) #--reduced-redundancy

all:
	cd $(REPO_DIR) && jekyll

cse:
	sudo $(JEKYLL_CMD) build --destination $(CSE_SITE) && sudo rm -f $(CSE_SITE)/makefile

s3:
	cd $(REPO_DIR) && $(JEKYLL_CMD) build --destination _site/ && $(SYNC_CMD) 

aws:
	sudo $(JEKYLL_CMD) --destination $(AWS_SITE) && sudo rm -f $(AWS_SITE)/makefile

gae:
	cd ${REPO_DIR} && $(JEKYLL_CMD) build --destination _site/ && ${HOME}/google_appengine/appcfg.py --oauth2 update _site/

