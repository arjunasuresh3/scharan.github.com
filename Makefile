JEKYLL_CMD = /var/lib/gems/1.8/bin/jekyll
REPO_DIR = ~/scharan.github.com
GH_SITE = ~/scharan.github.com
AWS_SITE = /var/www/html
CSE_SITE = /var/www/html
GH_DOMAIN = blog.saicharan.in
AWS_S3_PATH = s3://www.saicharan.in
#AWS_S3_PATH = s3://saicharan.in
#AWS_S3_PATH = s3://s3.saicharan.in
#AWS_S3_PATH = s3://static.saicharan.in
SYNC_CMD = s3cmd sync --exclude=Makefile CNAME --delete-removed _site/ $(AWS_S3_PATH) #--reduced-redundancy

all:
	cd $(REPO_DIR) && jekyll

cse:
	sudo $(JEKYLL_CMD) $(CSE_SITE) && sudo rm -f $(CSE_SITE)/makefile

s3:
	cd $(REPO_DIR) && jekyll _site/ && $(SYNC_CMD) 

aws:
	sudo jekyll $(AWS_SITE) && sudo rm -f $(AWS_SITE)/makefile

