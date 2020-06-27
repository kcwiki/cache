rm /tmp/MyCache.zip
mkdir -p /tmp/MyCache/KanColle
cp -r gadget_html5/ html/ kcscontents/ /tmp/MyCache/KanColle/
cd /tmp
zip -qr MyCache.zip MyCache/
rm -rf /tmp/MyCache
