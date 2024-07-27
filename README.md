# Viva Libro PWA v0.5
## WEB 
READY 8/10
all the mobile features except from image recognition uses 
fimg - finds image from the web, instead of serpapi with google lens api 

### TODO 
1) profile fb style 
2) correct bugs 
3) improve UI

### APIs
1) fimg - finds image from the web. 
Uses the https://www.googleapis.com/customsearch
2) 

### DATABASE
MariaDB

### SERVICES
READY 11/12
1) API - To communicate with non-relational databases & mobile app
Build on nodejs
GET
- mylib  with or without q param for search https://vivalibro.com:3002/ma/lib/id/1 {
  params: { q: query },
  }
- book https://vivalibro.com:3002/ma/book/id/[id]
- editor https://vivalibro.com:3002/ma/editor/id/[id]
- writer https://vivalibro.com:3002/ma/writer/id/[id]
POST 
- login https://vivalibro.com:3002/login 
{
  mail:mail,pass:pass
  }
- signup https://vivalibro.com:3002/signup
{
  mail:mail,
  name:name,
  pass:pass
  }
- newbook https://vivalibro.com:3002/newbook 
- bookuser https://vivalibro.com:3002/bookuser {libid:libid,bookid:[id]} 
- book https://vivalibro.com:3002/bookedit 
- {
  key:[key],
  value:[value],
  id:[id]
  }
- editor https://vivalibro.com:3002/editoredit/id/[id]
- writer https://vivalibro.com:3002/writeredit { q: query }

### TODO 
1) authentication 

### MOBILE READY 15/18
[REACT NATIVE]

##FEATURES 
1) Login Page/splash screen      ok 
2) Signup          ok 
3) Google Login    ok?
4) Mylib (LIMIT 10)   ok  eternal scroll ?
5) Mylib Search    ok 
6) Mylib Edit Book Page ok? 
7) Writer's page (linkable from book) ok?
8) Editor's page (linkable from book) ok?
9) NewBook create empty record and edit    ok
10) EditBook Form upload from Photo  ok?
11) EditBook recognize image & embed feature image & details to form ?
12) HomePage auto create library for Signup User (if does not exist) ?
13) Profile (editable) ?
14) settings ? 
15) upload to Google Store ?
16) documentation ok
17) github page ok
18) Home Library page with stats and create new (name) for the SIgnup User ?
