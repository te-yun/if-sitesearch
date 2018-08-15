#!/usr/bin/env sh

export INTRAFIND_LICENSE=/srv/al-contract-analyzer.lic
echo 'export INTRAFIND_LICENSE=/srv/al-contract-analyzer.lic' >> .bashrc
apt-get update && apt-get install python -y
chmod +x /root/*.bin
./if-meta-jdk-installer-*.bin -s
./if-sv-base-installer-*.bin -l /dev/null -s
./if-sv-converter-installer-*.bin -l /dev/null -s
#tar xfz if-sv-tagging-resources.tgz; mv if-sv-tagging-resources resources
tar xfz if-sv-tagging-resources.tgz
./if-sv-tagging-installer-*.bin -l $INTRAFIND_LICENSE -r /root/if-sv-tagging-resources -s
cp -r /root/resources /home/intrafind/services/if-sv-tagging/
cp if-sv-clausedetection-*-SNAPSHOT.jar /home/intrafind/services/if-sv-tagging/
cp $INTRAFIND_LICENSE /home/intrafind/services/if-sv-tagging/resources/intrafind.lic
mv if-converter-config.cfg /home/intrafind/services/if-sv-converter/config.cfg
echo 'common.config-store: com.intrafind.common.config.configstore.ConfigStores.locationExt("configstore/config-ext.cfg");' \
    >> /home/intrafind/services/if-sv-tagging/resources/config.cfg
/etc/init.d/if-sv-tagging restart; sleep 15;
/etc/init.d/if-sv-base restart; sleep 15
/etc/init.d/if-sv-converter restart
/etc/init.d/if-sv-tagging restart; sleep 15;
#/etc/init.d/if-sv-base restart; sleep 15;
#/etc/init.d/if-sv-converter restart; sleep 15
#/etc/init.d/if-sv-tagging restart; sleep 15;
#/etc/init.d/if-sv-base restart; sleep 15;
#/etc/init.d/if-sv-converter restart; sleep 15;
cat /home/intrafind/services/if-sv-tagging/logs/2018-*.log
#curl 'http://localhost:9603/json/tagger?method=tag&param0=/root/20180726152906.docx'
#ls /home/intrafind/

# sleep 15; export INTRAFIND_LICENSE=/root/al-contract-analyzer.lic && /etc/init.d/if-sv-tagging restart
# export INTRAFIND_LICENSE=/root/al-contract-analyzer.lic; export INTRAFIND_LICENSE=/root/al-contract-analyzer.lic && /etc/init.d/if-sv-tagging restart
# TODO install ZIP IF Installer