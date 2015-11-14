# rutha
## an hapi/angular frontend and service stack

### Grunt Help (Frontend) ###

* `grunt serve`: Serves frontend service with no auto reload
* `grunt spec`: Runs jshint and server side / UI specs
* `grunt test`: Runs E2E/Functional tests (Angular)
* `grunt build`: Prepares UI assets
* `grunt jshinting`: Verifies javascript using jshint
* `grunt auditpkg`: Verifies modules that contained security issues

###  About Angular Tests
`ui/src/test/lib` contains libs require for testing. Scope.SafeApply can be added as optional (see yearofmoo blog post)

### Nginx routes (Optional) ###

```
server { 
# simple reverse-proxy for Rutha (Very useful!)
    listen       80;
    server_name  localhost;
    access_log   dev.log;
    #error_page   http://here;

  location /api {
    proxy_pass      http://127.0.0.1:3002;
    proxy_redirect  default;
    proxy_set_header Host $host;
  }

  location / {
    proxy_pass      http://127.0.0.1:3005;
    proxy_redirect  default;
    proxy_set_header Host $host;
  }
}

```

### Maintainers, notes ###
Maintain by Rogelio Morrell C. 
Pull Request are welcome but I might not turn around those quickly. 

### Disclaimer ###
Feel free to fork.