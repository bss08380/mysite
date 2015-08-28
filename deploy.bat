::static pages
"C:\Program Files (x86)\PuTTY\pscp.exe" .\*.html ubuntu@brandonsmithers.com:/var/www/html/
"C:\Program Files (x86)\PuTTY\pscp.exe" .\html\* ubuntu@brandonsmithers.com:/var/www/html/html/
"C:\Program Files (x86)\PuTTY\pscp.exe" .\css\* ubuntu@brandonsmithers.com:/var/www/html/css/
"C:\Program Files (x86)\PuTTY\pscp.exe" .\js\* ubuntu@brandonsmithers.com:/var/www/html/js/
"C:\Program Files (x86)\PuTTY\pscp.exe" .\img\* ubuntu@brandonsmithers.com:/var/www/html/img/
"C:\Program Files (x86)\PuTTY\pscp.exe" .\res\* ubuntu@brandonsmithers.com:/var/www/html/res/
"C:\Program Files (x86)\PuTTY\pscp.exe" .\lib\* ubuntu@brandonsmithers.com:/var/www/html/lib/
::node.js stuff
"C:\Program Files (x86)\PuTTY\pscp.exe" .\api\* ubuntu@brandonsmithers.com:/bin/node/
"C:\Program Files (x86)\PuTTY\putty.exe" -ssh brandonsmithers.com -l ubuntu -m .\deploy_node.bat
pause