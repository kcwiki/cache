fetch() {
  path=$(echo $1 | grep -Po "https?://.+?/\K(.+)")
  dir=$(dirname $path)
  mkdir -p $dir
  curl -sfLo $path $1
  echo $1
}

if [ "$1" = "-" ] ; then
  fetch http://203.104.209.7/gadget_html5/js/kcs_const.js
else
  cat urls | while read url ; do
    fetch $url
  done
fi

sed -i -e s/http:/https:/g kcscontents/news/index.html
