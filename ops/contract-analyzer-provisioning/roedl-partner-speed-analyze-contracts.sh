#!/usr/bin/env sh

# do the OCR work on the Windows machine, using ocr.analyzelaw.com
# copy with WinSCP the files to the Linux machine where you do the following

sudo systemctl restart docker
sudo docker restart al-tagger
sleep 60
cd /opt/al-tagger
sudo java -jar if-sv-clausedetection-0.0.0.2-SNAPSHOT-jar-with-dependencies.jar -convert http://localhost:9602/hessian/converter -tag http://localhost:9603/hessian/tagger -mode excel -excelformat multiple -categorize None -input ./input-contracts
sudo java -jar if-sv-clausedetection-0.0.0.2-SNAPSHOT-jar-with-dependencies.jar -convert http://localhost:9602/hessian/converter -tag http://localhost:9603/hessian/tagger -mode excel -excelformat single -categorize None -input ./input-contracts

# copy Excel files to a Windows Report folder