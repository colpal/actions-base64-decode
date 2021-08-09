var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _=d(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.toCommandValue=void 0;function G(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}p.toCommandValue=G});var w=d(u=>{"use strict";var U=u&&u.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),L=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),H=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.hasOwnProperty.call(e,n)&&U(t,e,n);return L(t,e),t};Object.defineProperty(u,"__esModule",{value:!0});u.issue=u.issueCommand=void 0;var N=H(require("os")),O=_();function S(e,t,n){let i=new y(e,t,n);process.stdout.write(i.toString()+N.EOL)}u.issueCommand=S;function R(e,t=""){S(e,{},t)}u.issue=R;var C="::",y=class{constructor(t,n,i){t||(t="missing.command"),this.command=t,this.properties=n,this.message=i}toString(){let t=C+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let n=!0;for(let i in this.properties)if(this.properties.hasOwnProperty(i)){let o=this.properties[i];o&&(n?n=!1:t+=",",t+=`${i}=${W(o)}`)}}return t+=`${C}${J(this.message)}`,t}};function J(e){return O.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function W(e){return O.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var $=d(a=>{"use strict";var Y=a&&a.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),z=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),E=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.hasOwnProperty.call(e,n)&&Y(t,e,n);return z(t,e),t};Object.defineProperty(a,"__esModule",{value:!0});a.issueCommand=void 0;var P=E(require("fs")),K=E(require("os")),Q=_();function X(e,t){let n=process.env[`GITHUB_${e}`];if(!n)throw new Error(`Unable to find environment variable for file command ${e}`);if(!P.existsSync(n))throw new Error(`Missing file at path: ${n}`);P.appendFileSync(n,`${Q.toCommandValue(t)}${K.EOL}`,{encoding:"utf8"})}a.issueCommand=X});var q=d(r=>{"use strict";var Z=r&&r.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),x=r&&r.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),j=r&&r.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.hasOwnProperty.call(e,n)&&Z(t,e,n);return x(t,e),t},k=r&&r.__awaiter||function(e,t,n,i){function o(c){return c instanceof n?c:new n(function(l){l(c)})}return new(n||(n=Promise))(function(c,l){function A(f){try{g(i.next(f))}catch(v){l(v)}}function F(f){try{g(i.throw(f))}catch(v){l(v)}}function g(f){f.done?c(f.value):o(f.value).then(A,F)}g((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0});r.getState=r.saveState=r.group=r.endGroup=r.startGroup=r.info=r.warning=r.error=r.debug=r.isDebug=r.setFailed=r.setCommandEcho=r.setOutput=r.getBooleanInput=r.getMultilineInput=r.getInput=r.addPath=r.setSecret=r.exportVariable=r.ExitCode=void 0;var s=w(),M=$(),ee=_(),m=j(require("os")),te=j(require("path")),I;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(I=r.ExitCode||(r.ExitCode={}));function ne(e,t){let n=ee.toCommandValue(t);if(process.env[e]=n,process.env.GITHUB_ENV||""){let o="_GitHubActionsFileCommandDelimeter_",c=`${e}<<${o}${m.EOL}${n}${m.EOL}${o}`;M.issueCommand("ENV",c)}else s.issueCommand("set-env",{name:e},n)}r.exportVariable=ne;function re(e){s.issueCommand("add-mask",{},e)}r.setSecret=re;function ie(e){process.env.GITHUB_PATH||""?M.issueCommand("PATH",e):s.issueCommand("add-path",{},e),process.env.PATH=`${e}${te.delimiter}${process.env.PATH}`}r.addPath=ie;function b(e,t){let n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n)throw new Error(`Input required and not supplied: ${e}`);return t&&t.trimWhitespace===!1?n:n.trim()}r.getInput=b;function ue(e,t){return b(e,t).split(`
`).filter(i=>i!=="")}r.getMultilineInput=ue;function se(e,t){let n=["true","True","TRUE"],i=["false","False","FALSE"],o=b(e,t);if(n.includes(o))return!0;if(i.includes(o))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}r.getBooleanInput=se;function oe(e,t){process.stdout.write(m.EOL),s.issueCommand("set-output",{name:e},t)}r.setOutput=oe;function ae(e){s.issue("echo",e?"on":"off")}r.setCommandEcho=ae;function ce(e){process.exitCode=I.Failure,T(e)}r.setFailed=ce;function fe(){return process.env.RUNNER_DEBUG==="1"}r.isDebug=fe;function le(e){s.issueCommand("debug",{},e)}r.debug=le;function T(e){s.issue("error",e instanceof Error?e.toString():e)}r.error=T;function de(e){s.issue("warning",e instanceof Error?e.toString():e)}r.warning=de;function pe(e){process.stdout.write(e+m.EOL)}r.info=pe;function V(e){s.issue("group",e)}r.startGroup=V;function D(){s.issue("endgroup")}r.endGroup=D;function _e(e,t){return k(this,void 0,void 0,function*(){V(e);let n;try{n=yield t()}finally{D()}return n})}r.group=_e;function me(e,t){s.issueCommand("save-state",{name:e},t)}r.saveState=me;function he(e){return process.env[`STATE_${e}`]||""}r.getState=he});var h=q(),ge=h.getInput("base64",{required:!0}),ve=h.getInput("mask"),B=Buffer.from(ge,"base64").toString("utf-8");ve&&h.setSecret(B);h.setOutput("decoded",B);
