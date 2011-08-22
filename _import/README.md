Two ways to import from WP:

- Using the migrators
  - cd <folder containing _config.yaml; i.e., the project root folder>
  - ruby -r '/usr/lib64/ruby/gems/1.8/gems/jekyll-0.11.0/lib/jekyll/migrators/wordpressdotcom.rb' -e 'Jekyll::WordpressDotCom.process("_import/wordpress.xml")'
  - sudo jekyll /var/www/html/ --permalink '/jekyll/:year/:month/:day/:title/'

- Using a custom script
  - ruby wp_xml.rb wordpress.xml
  - cd .. ; rm -rf _posts/ && mv _import/_posts/ .
  - sudo jekyll /var/www/html/ --permalink '/jekyll/:year/:month/:day/:title/'

_posts.html/ contains the html files generated using migrators while _posts/ contains markup obtained using the scripts in _import/ folder.