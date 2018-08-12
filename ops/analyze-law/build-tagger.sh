#!/usr/bin/env sh




sudo cp ~/Desktop/al-tagger/if-sv-clausedetection-0.0.0.1-20180806.162429-122.jar
    /home/intrafind/services/if-sv-tagging/

sudo cp /home/alex/my/project/intrafind/docker-container/tagging-service/intrafind.lic
    /home/intrafind/services/if-sv-tagging/resources/

######

export INTRAFIND_LICENSE=/home/alex/my/project/intrafind/docker-container/tagging-service/intrafind.lic
cd ~/my/project/intrafind/if-sv-clausedetection.svn

sudo cp ~/.m2/repository/com/intrafind/if-sv-clausedetection/0.0.0.1-SNAPSHOT/if-sv-clausedetection-0.0.0.1-SNAPSHOT.jar /home/intrafind/services/if-sv-tagging/
sudo /etc/init.d/if-sv-tagging restart

http://localhost:9603/json/tagger?method=tag&param0=/home/alex/Downloads/20180726184318.docx&param1=[plainTextSwitch,something]
