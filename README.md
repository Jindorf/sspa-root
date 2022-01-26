# sspa-root
## Project setup
### install packages
<code>
npm install
</code>

### serve application locally
<code>
npm run serve
</code>

### problems with yarn
trying <code> yarn install </code> will throw the following error  


<code>
ERROR in ./root-application.js
Module not found: Error: Can't resolve 'style-loader' in '/home/jannik/program/sspa-root'
 @ ./root-application.js 6:0-46

ERROR in ./root-application.js
Module not found: Error: Can't resolve 'style-loader' in '/home/jannik/program/sspa-root'
 @ ./root-application.js 5:0-42
 </code>
 
- adding the style-loader to dependencies did not change behaviour
- removing style loader results in root-application to not load bootstrap and bootstrap-vue
  

## TODO
### Vuex
App 1 has a Store 1  
App 2 has a Store 2
- User stores data in App1
- User switches to App 2
- User stores data in App 2
- User switches to App 1  
  
Does the data in Store 1 and Store 2 persist?

### App-Standalone
How is the developer-experience working in a standalone-app? (sspa-auth)

### Vue 2 & Vue 3
Is it possible to use different major versions of the same framework with the same css-framework (bootstrap-vue)?

### Css-overwriting
What happens if App 1 has CSS-class "btn" with background-color:"red" and App 2 has CSS-class "btn" with background-color:"blue" ?