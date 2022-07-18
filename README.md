# simple-angular-express-pg-ex
simple angular express postgresql example<br>
angular 使用express 作为web服务，postgresql作为后台数据库<br>
a blog or comitment full stack application<br>
简单博客或评论提交的全栈服务的简单样板<br>
1.install postgresql ,use pgadmin creat a database for name  angulardb<br>
安装postgresql数据库，这里创建本机的名称angulardb的数据库<br>
![alt text](https://user-images.githubusercontent.com/16224957/179452776-2a393a64-2476-4135-8a7e-d4f4e4325122.JPG)<br>
2.creat a table name comer , have 3 column , co001 bigint , co002 varchar 60, co003 text<br>
创建表 comer ,3个列名<br>
![alt text](https://user-images.githubusercontent.com/16224957/179453275-02268428-0454-4843-83f3-889e13e09f0e.JPG)<br>
![alt text](https://user-images.githubusercontent.com/16224957/179453487-74aeade7-3798-44e4-b16b-7aedd9636f51.JPG)
3.git clone and npm install 

4.modify spgdb.ts ,modify database config  host address ,user ,password to yours.
修改spgdb.ts ,修改conig ,数据库ip 地址,账号和密码

5. lunch powershell in this project root directory, tsc server.ts ,ng build ,to complie this project . or use visual studio code open this project ,new terminal ,and run these command
在本项目目录使用windows的powershell运行tsc server.ts ,ng build命令，或用visual studio code 的terminal

6.run node server.js ,use chorme http://localhost:3000.
运行node server.js ,浏览器打开.

MEMO: If u install by urself , 
备注：如果