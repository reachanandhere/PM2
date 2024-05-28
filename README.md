Node PM2

PM2 Commands:
1. pm2 start app.js -- To start a Pm2 instance 
   To give an alias to pm2 -- pm2 start app.js --name myapp
2. pm2 list / pm2 ls  -- To see all running instances
3. pm2 log {id} -- To see specfic logs
4. pm2 log --  To see all logs
5. pm2 stop {id} -- To stop the instance

This instance will not have the changes made. Then the server will need to be restarted
6. pm2 restart app / {id}
7. pm2 delete 0
