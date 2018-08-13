#!/usr/bin/env sh

apt-get update && apt-get install python -y
chmod +x /root/*.bin
export INTRAFIND_LICENSE=/root/default.lic
echo 'export INTRAFIND_LICENSE=/root/default.lic' >> .bashrc
./if-meta-jdk-installer-*.bin -s
./if-sv-base-installer-*.bin -l default.lic -s
./if-sv-converter-installer-*.bin -l default.lic -s
tar xfz if-sv-tagging-resources.tgz; mv if-sv-tagging-resources resources
./if-sv-tagging-installer-*.bin -l default.lic -r /root/resources -s
cp -r /root/resources /home/intrafind/services/if-sv-tagging/
cp if-sv-clausedetection-*-SNAPSHOT.jar /home/intrafind/services/if-sv-tagging/
mv if-converter-config.cfg /home/intrafind/services/if-sv-converter/config.cfg
echo 'common.config-store: com.intrafind.common.config.configstore.ConfigStores.locationExt("configstore/config-ext.cfg");' \
    >> /home/intrafind/services/if-sv-tagging/resources/config.cfg
/etc/init.d/if-sv-tagging restart; sleep 15;
/etc/init.d/if-sv-base restart; sleep 15
/etc/init.d/if-sv-converter restart
/etc/init.d/if-sv-tagging restart; sleep 15;
/etc/init.d/if-sv-base restart; sleep 15;
/etc/init.d/if-sv-converter restart; sleep 15
curl http://localhost:9603/json/tagger?method=tag&param0=/root/20180726152906.docx&param1=[plainTextSwitch,something]

# sleep 15; export INTRAFIND_LICENSE=/root/default.lic && /etc/init.d/if-sv-tagging restart
# export INTRAFIND_LICENSE=/root/default.lic; export INTRAFIND_LICENSE=/root/default.lic && /etc/init.d/if-sv-tagging restart
# TODO install ZIP IF Installer