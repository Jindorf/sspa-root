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