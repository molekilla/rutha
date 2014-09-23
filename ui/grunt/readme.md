Note: To use inline grunt task files with rutha, copy grunt tasks from rutha-grunt-tasks-service to this folder and change in Gruntfile.js
from

`configPath: path.join(process.cwd(), 'node_modules/rutha-grunt-tasks-ui/grunt')`

to

`configPath: path.join(process.cwd(), 'grunt')`
