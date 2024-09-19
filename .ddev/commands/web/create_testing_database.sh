echo "Create testing mysql database and grant all permissions to db user"

mysql -hdb -uroot -proot -e "CREATE DATABASE IF NOT EXISTS testing;"
mysql -hdb -uroot -proot -e "GRANT ALL ON *.* TO 'db'@'%';"
