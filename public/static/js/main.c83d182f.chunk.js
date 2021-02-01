(this["webpackJsonpinstagram-clone-frontend"]=this["webpackJsonpinstagram-clone-frontend"]||[]).push([[0],{113:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),o=s.n(r),c=s(21),a=s.n(c),i=(s(77),s(78),s(8)),l=s(48),u=s(17),h=s(18),d=s(20),j=s(19),p=s(11),b=s(115),m=s(116),f=s(117),O=s(65),x=s(64),g=Object(x.a)(),v=s(12),y=s(10),N=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"handleLogin",value:function(){this.props.loginUser({username:this.username.value,password:this.password.value}).then((function(e){console.log(e.type),"LOGIN_SUCCESS"===e.type?(v.NotificationManager.success("Logged In Successfully!"),g.push("/home")):"LOGIN_FAILED"===e.type&&v.NotificationManager.error("Error : Wrong Password or Username")}))}},{key:"render",value:function(){var e=this;return console.log(this.props),Object(n.jsxs)("div",{className:"container loginContainer d-flex justify-content-center align-items-center",children:[Object(n.jsxs)("div",{className:"row login d-flex justify-content-center",children:[Object(n.jsx)("div",{className:"col-12 title",children:"Instagram"}),Object(n.jsx)("div",{className:"col-10",children:Object(n.jsxs)(b.a,{onSubmit:this.handleLogin,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"text",id:"username",name:"username",placeholder:"username",innerRef:function(t){return e.username=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"password",id:"password",name:"password",placeholder:"password",innerRef:function(t){return e.password=t}})}),Object(n.jsx)(O.a,{className:"col-12",type:"submit",value:"submit",color:"primary",children:"Login"})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(y.a,{to:"/changePassword",children:"Forgot Password?"})}),Object(n.jsxs)("div",{className:"col-12",children:["Don't have an account ? ",Object(n.jsx)(y.a,{to:"/signup",children:"Sign up"})]})]}),Object(n.jsx)(v.NotificationContainer,{})]})}}]),s}(o.a.Component),S=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).handleSignup=n.handleSignup.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"handleSignup",value:function(e){this.props.signupUser({username:this.username.value,firstname:this.firstname.value,lastname:this.lastname.value,email:this.email.value,password:this.password.value}).then((function(e){e.success?v.NotificationManager.success("Account Created Successfully!"):v.NotificationManager.error("Username already exist!")})),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container loginContainer d-flex justify-content-center align-items-center",children:[Object(n.jsxs)("div",{className:"row signup d-flex justify-content-center",children:[Object(n.jsx)("div",{className:"col-12 title",children:"Instagram"}),Object(n.jsx)("div",{className:"col-10",children:Object(n.jsxs)(b.a,{onSubmit:this.handleSignup,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"text",id:"firstname",name:"firstname",placeholder:"firstname",innerRef:function(t){return e.firstname=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"text",id:"lastname",name:"lastname",placeholder:"lastname",innerRef:function(t){return e.lastname=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"email",id:"email",name:"email",placeholder:"email",innerRef:function(t){return e.email=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"text",id:"username",name:"username",placeholder:"username",innerRef:function(t){return e.username=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"password",id:"password",name:"password",placeholder:"password",innerRef:function(t){return e.password=t}})}),Object(n.jsx)(O.a,{className:"col-12",type:"submit",value:"submit",color:"primary",children:"Sign up"}),Object(n.jsx)("div",{style:{fontSize:"12px"},children:"By signing up, you agree to our Terms , Data Policy and Cookies Policy ."})]})}),Object(n.jsxs)("div",{className:"col-12",children:["Have an account ? ",Object(n.jsx)(y.a,{to:"/",children:"Log in"})]})]}),Object(n.jsx)(v.NotificationContainer,{})]})}}]),s}(o.a.Component),w=s(118),k=s(119),C=s(120),P=s(121),I=s(122),E=s(123),F=s(124),_=s(131),U=s(132),T=s(133),M=s(125),L=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(u.a)(this,s),(r=t.call(this,e)).fetchSearchResults=function(e){if(e){var t="Bearer "+localStorage.getItem("token");fetch("/profile/search/".concat(e),{method:"GET",headers:{Authorization:t}}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){r.setState({result:e,errMess:""})})).catch((function(e){r.setState({errMess:e,result:[],query:""})})),console.log(r.state.result)}else r.setState({result:[],errMess:""})},r.showSearchResult=function(e){if(null!=e)return Object(n.jsx)("div",{children:e.map((function(e){return Object(n.jsx)(w.a,{children:Object(n.jsx)(k.a,{children:Object(n.jsxs)(C.a,{children:[Object(n.jsx)("img",{src:"/images/"+e.photo,alt:e.photo,width:"30px",height:"30px",style:{margin:"5px"}}),e._id===localStorage.getItem("userId")?Object(n.jsx)(y.a,{to:"/user",onClick:r.handleClick,children:e.username}):Object(n.jsx)(y.a,{to:"/user/".concat(e._id),onClick:r.handleClick,children:e.username})]})})},e._id)}))})},r.state={result:[],query:"",errMess:""},r.fetchSearchResults=r.fetchSearchResults.bind(Object(p.a)(r)),r.handleChange=r.handleChange.bind(Object(p.a)(r)),r.showSearchResult=r.showSearchResult.bind(Object(p.a)(r)),r.handleLogout=r.handleLogout.bind(Object(p.a)(r)),r.handleClick=r.handleClick.bind(Object(p.a)(r)),r}return Object(h.a)(s,[{key:"handleClick",value:function(){this.setState({errMess:"",result:[],query:""})}},{key:"handleChange",value:function(e){var t=this,s=e.target.value;this.setState({query:s},(function(){t.fetchSearchResults(s)})),console.log(e.target.value)}},{key:"handleLogout",value:function(){this.props.logout(),g.push("/")}},{key:"render",value:function(){var e=this;return Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)(P.a,{fixed:"top",dark:!0,expand:!0,color:"white",className:"navbar p-1",children:Object(n.jsxs)("div",{className:"container Pagecontainer",children:[Object(n.jsx)(I.a,{className:"p-0 m-0",href:"/home",children:Object(n.jsx)("div",{style:{color:"black",fontFamily:"Norican, cursive",fontSize:"30px"},children:"Instagram"})}),Object(n.jsxs)(E.a,{navbar:!0,children:[Object(n.jsxs)(F.a,{children:[Object(n.jsx)(f.a,{type:"text",name:"search",id:"search",placeholder:"search",value:this.state.query,onChange:this.handleChange}),Object(n.jsx)("div",{className:"res",children:this.showSearchResult(this.state.result)})]}),Object(n.jsx)(F.a,{children:Object(n.jsx)(y.b,{className:"nav-link",to:"/home",onClick:function(){return e.props.renderHome()},children:Object(n.jsx)("span",{className:"fa fa-home fa-lg"})})}),Object(n.jsx)(F.a,{children:Object(n.jsx)(y.b,{className:"nav-link",to:"/explore",children:Object(n.jsx)("span",{className:"fa fa-compass fa-lg"})})}),Object(n.jsx)(F.a,{children:Object(n.jsxs)(_.a,{children:[Object(n.jsx)(U.a,{nav:!0,caret:!0,children:Object(n.jsx)("span",{className:"fa fa-user-circle-o fa-lg"})}),Object(n.jsxs)(T.a,{children:[Object(n.jsx)(M.a,{children:Object(n.jsx)(y.b,{to:"/user",children:"Profile"})}),Object(n.jsx)(M.a,{divider:!0}),Object(n.jsx)(M.a,{children:Object(n.jsx)("div",{onClick:this.handleLogout,children:"Log Out"})})]})]})})]})]})})})}}]),s}(o.a.Component),R=s(126);function A(e){var t=e.post,s=e.fetchPost,r=function(e){console.log(e),fetch("/posts/".concat(e,"/likeAndUnlike"),{method:"PUT",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({id:e})}).then((function(){return s()}))};return Object(n.jsxs)(w.a,{children:[Object(n.jsx)(k.a,{children:Object(n.jsxs)("div",{className:"row d-flex",children:[Object(n.jsx)("div",{className:"col-4 col-md-2",children:Object(n.jsx)("img",{src:"/images/"+t.user.photo,alt:t.user.photo,width:"60px",height:"60px",style:{borderRadius:"50%",border:"1px solid grey"}})}),Object(n.jsx)("div",{className:"col-6 col-md-8",style:{alignSelf:"center",fontFamily:"Georgia",fontSize:"20px"},children:Object(n.jsx)(y.a,{to:"user/".concat(t.user._id),children:Object(n.jsx)(C.a,{style:{color:"black"},children:t.user.username})})})]})}),Object(n.jsx)(R.a,{top:!0,src:"/images/"+t.image,alt:t.image,width:"200px",height:"600px"}),Object(n.jsxs)(k.a,{children:[t.likes.includes(localStorage.getItem("userId"))?Object(n.jsx)("span",{className:"fa fa-heart",style:{color:"red",marginRight:"10px"},onClick:function(){return r(t._id)}}):Object(n.jsx)("span",{className:"fa fa-heart-o",style:{marginRight:"10px"},onClick:function(){return r(t._id)}}),Object(n.jsx)(y.a,{to:"/explore/".concat(t._id),children:Object(n.jsx)("span",{className:"fa fa-comment-o"})}),Object(n.jsxs)(C.a,{children:[t.likes.length," likes"]}),Object(n.jsx)(C.a,{children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{style:{marginLeft:"10px",fontWeight:"bold"},children:t.user.username}),Object(n.jsx)("div",{className:"col-0"}),Object(n.jsx)("div",{className:"col-6 mr-auto",children:t.caption})]})})]})]})}var B=function(e){var t=e.posts.posts.map((function(t){return Object(n.jsx)("div",{className:"col-12 post",children:Object(n.jsx)(A,{post:t,fetchPost:e.fetchPost})},t._id)}));return e.posts.posts?Object(n.jsx)("div",{className:"container Pagecontainer box",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-md-8",children:t}),Object(n.jsx)("div",{className:"col-12 side col-md-4",children:Object(n.jsxs)("div",{className:"col-12 smImg img",children:[console.log(e.user),e.user?Object(n.jsx)("img",{src:"/images/".concat(e.user.photo),alt:e.user.photo}):Object(n.jsx)("div",{}),Object(n.jsx)(y.a,{to:"/user",children:Object(n.jsx)("div",{className:"name",style:{float:"right",paddingTop:"9px",color:"black"},children:e.user?e.user.username:null})})]})})]})}):Object(n.jsx)("div",{})};function z(e){var t=e.post,s=e.fetchPost,r=function(e){console.log(e),fetch("/posts/".concat(e,"/likeAndUnlike"),{method:"PUT",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({id:e})}).then((function(){return s()}))};return Object(n.jsxs)(w.a,{children:[Object(n.jsx)(k.a,{children:Object(n.jsxs)("div",{className:"row d-flex",children:[Object(n.jsx)("div",{className:"col-4 col-md-2",children:Object(n.jsx)("img",{src:"/images/"+t.user.photo,alt:t.user.photo,width:"60px",height:"60px",style:{borderRadius:"50%",border:"1px solid grey"}})}),Object(n.jsx)("div",{className:"col-6 col-md-8",style:{alignSelf:"center",fontFamily:"Georgia",fontSize:"20px"},children:t.user._id===localStorage.getItem("userId")?Object(n.jsx)(y.a,{to:"/user",children:Object(n.jsx)(C.a,{style:{color:"black"},children:t.user.username})}):Object(n.jsx)(y.a,{to:"user/".concat(t.user._id),children:Object(n.jsx)(C.a,{style:{color:"black"},children:t.user.username})})}),t.user._id===localStorage.getItem("userId")?Object(n.jsxs)("div",{className:"col-2",style:{alignSelf:"center"},children:[Object(n.jsx)("span",{className:"fa fa-pencil mr-4"}),Object(n.jsx)("span",{className:"fa fa-trash",onClick:function(){return e=t._id,void fetch("/posts/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(){return v.NotificationManager.success("Post Deleted Successfully!")})).then((function(){return s()}));var e}})]}):Object(n.jsx)("span",{})]})}),Object(n.jsx)(R.a,{top:!0,src:"/images/"+t.image,alt:t.image,width:"200px",height:"600px"}),Object(n.jsxs)(k.a,{children:[t.likes.includes(localStorage.getItem("userId"))?Object(n.jsx)("span",{className:"fa fa-heart",style:{color:"red",marginRight:"10px"},onClick:function(){return r(t._id)}}):Object(n.jsx)("span",{className:"fa fa-heart-o",style:{marginRight:"10px"},onClick:function(){return r(t._id)}}),Object(n.jsx)(y.a,{to:"/explore/".concat(t._id),children:Object(n.jsx)("span",{className:"fa fa-comment-o"})}),Object(n.jsxs)(C.a,{children:[t.likes.length," likes"]}),Object(n.jsx)(C.a,{children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{style:{marginLeft:"10px",fontWeight:"bold"},children:t.user.username}),Object(n.jsx)("div",{className:"col-0"}),Object(n.jsx)("div",{className:"col-6 mr-auto",children:t.caption})]})})]})]})}var D=function(e){console.log(e);var t=e.explore.allPosts.map((function(t){return Object(n.jsx)("div",{className:"col-12 post",children:Object(n.jsx)(z,{post:t,fetchPost:e.fetchPost})},t._id)}));return e.explore?Object(n.jsxs)("div",{className:"container Pagecontainer box",children:[Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"col-12 col-md-8",children:t}),Object(n.jsx)("div",{className:"col-12 side",children:Object(n.jsxs)("div",{className:"col-12 smImg img",children:[e.user?Object(n.jsx)("img",{src:"/images/".concat(e.user.photo),alt:e.user.photo}):Object(n.jsx)("div",{}),Object(n.jsx)(y.a,{to:"/user",children:Object(n.jsx)("div",{className:"name",style:{float:"right",paddingTop:"9px",color:"black"},children:e.user?e.user.username:null})})]})})]}),Object(n.jsx)(v.NotificationContainer,{})]}):Object(n.jsx)("div",{children:"home"})},G=s(130),J=s(127),W=s(128);function q(e){return Object(n.jsx)(y.a,{to:"/explore/".concat(e.post._id),children:Object(n.jsx)("img",{src:"/images/".concat(e.post.image),alt:e.post.image})})}var H=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={file:null,isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(p.a)(n)),n.handleEdit=n.handleEdit.bind(Object(p.a)(n)),n.handleFileChange=n.handleFileChange.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleEdit",value:function(){var e=this,t=new FormData;t.append("imageFile",this.state.file,this.state.file.name),this.toggleModal(),console.log(this.state.file),fetch("/profile/changeDp",{method:"PUT",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:t}).then((function(e){return e.json()})).then((function(){return v.NotificationManager.success("Updated Profile Photo")})).then((function(){return e.props.fetchProfile()}))}},{key:"render",value:function(){var e=this.props.posts.map((function(e){return Object(n.jsx)("div",{className:"col-12 col-md-4 img1",children:Object(n.jsx)(q,{post:e})},e._id)}));return this.props.user?Object(n.jsxs)("div",{className:"container Pagecontainer box",children:[Object(n.jsxs)("div",{className:"row profileBio pb-5",style:{borderBottom:"1px solid gray"},children:[Object(n.jsx)("div",{className:"col-12 col-md-3 img",children:Object(n.jsx)("img",{src:"/images/".concat(this.props.user.photo),alt:this.props.user.photo})}),Object(n.jsxs)("div",{className:"col-12 col-md-8 mt-3",style:{fontFamily:"Zilla Slab, serif",fontSize:"20px"},children:[Object(n.jsx)("h2",{className:"mb-2",children:this.props.user.username}),Object(n.jsx)("div",{className:"mb-2",children:this.props.user.firstname+" "+this.props.user.lastname}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3",children:this.props.posts.length+" Posts"}),Object(n.jsx)("div",{className:"col-4 col-md-4",children:this.props.user.followers.length+" Followers"}),Object(n.jsx)("div",{className:"col-5 col-md-4",children:this.props.user.following.length+" Following"})]}),Object(n.jsx)("div",{className:"mt-3",children:Object(n.jsx)("span",{className:"fa fa-pencil",onClick:this.toggleModal})}),Object(n.jsx)(G.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(W.a,{className:"inputField",children:Object(n.jsx)(f.a,{type:"file",name:"imageFile",onChange:this.handleFileChange})}),Object(n.jsx)(W.a,{className:"inputField",children:Object(n.jsx)(O.a,{color:"primary",onClick:this.handleEdit,children:"Change"})})]})})]})]}),Object(n.jsx)("div",{className:"row mt-5",children:e}),Object(n.jsx)(v.NotificationContainer,{})]}):Object(n.jsx)("div",{children:"null"})}}]),s}(o.a.Component),X=s(15),Z=s(38),Q="LOGIN_REQUEST",Y="LOGIN_FAILED",K="LOGIN_SUCCESS",V="LOGOUT_SUCCESS",$="SIGNUP_FAILED",ee="SIGNUP_SUCCESS",te="POSTS_FAILED",se="POSTS_SUCCESS",ne="EXPLORE_POSTS_SUCCESS",re="EXPLORE_POSTS_FAILED",oe="FETCH_PROFILE_SUCCESS",ce="FETCH_PROFILE_FAILED",ae="USER_PROFILE_SUCCESS",ie="USER_PROFILE_FAILED",le=function(e){return function(t){return t(function(e){return{type:Q,creds:e}}(e)),fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(s){if(s.success)return localStorage.setItem("token",s.token),localStorage.setItem("creds",JSON.stringify(e)),localStorage.setItem("userId",s.userId),t(de()),t(je()),t(pe()),t(fe()),t(function(e){return console.log(e),{type:K,token:e.token,userId:e.userId}}(s)),s;var n=new Error("Error "+s.status+" : "+s.statusText);throw n.response=s,n})).catch((function(e){return t((s=e.message,console.log(s),{type:Y,message:s}));var s}))}},ue=function(){return function(e){localStorage.removeItem("token"),localStorage.removeItem("creds"),e({type:V})}},he=function(e){return function(t){return fetch("/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+" : "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){if(e.success)return console.log("Signup Successfull!"),t(function(e){return{type:ee,payload:e}}(e)),e;var s=new Error("Error "+e.status+" : "+e.statusText);throw s.response=e,s})).catch((function(e){return t((s=e.message,console.log(s),{type:$,message:s}));var s}))}},de=function(){return function(e){return fetch("/posts/myNewsFeed",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){var s;e((s=t.posts.reverse(),{type:se,payload:s}))})).catch((function(t){console.log(t),e(function(e){return{type:te,payload:e}}(t))}))}},je=function(){return function(e){return fetch("/profile",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){var s,n;e((s=t.profile,n=t.posts,{type:oe,profile:s,posts:n}))})).catch((function(t){return e(function(e){return{type:ce,payload:e}}(t))}))}},pe=function(){return function(e){return fetch("/posts/explore",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){e(be(t.reverse()))})).catch((function(t){return e(me(t))}))}},be=function(e){return{type:ne,payload:e}},me=function(e){return{type:re,payload:e}},fe=function(){return function(e){return fetch("/profile/users",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){return e(Oe(t))})).catch((function(t){return e(xe(t))}))}},Oe=function(e){return{type:ae,payload:e}},xe=function(e){return{type:ie,payload:e}};function ge(e){return Object(n.jsx)(y.a,{to:"../explore/".concat(e.post._id),children:Object(n.jsx)("img",{src:"/images/".concat(e.post.image),alt:e.post.image})})}var ve=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).followAndUnfollow=function(e){return fetch("/profile/".concat(e,"/followAndUnfollow"),{method:"PUT",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){console.log(e)}))},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"handleClick",value:function(e){var t=this;this.followAndUnfollow(e).then((function(){return t.props.fetchUser()})).catch((function(e){return alert(e)}))}},{key:"render",value:function(){var e=this,t=this.props.posts.map((function(e){return Object(n.jsx)("div",{className:"col-12 col-md-4 img1",children:Object(n.jsx)(ge,{post:e})},e._id)}));return this.props.user?Object(n.jsxs)("div",{className:"container Pagecontainer box",children:[Object(n.jsxs)("div",{className:"row profileBio pb-5",style:{borderBottom:"1px solid gray"},children:[Object(n.jsx)("div",{className:"col-12 col-md-3 img",children:Object(n.jsx)("img",{src:"/images/".concat(this.props.user.photo),alt:this.props.user.photo})}),Object(n.jsxs)("div",{className:"col-12 col-md-8 mt-3",style:{fontFamily:"Zilla Slab, serif",fontSize:"20px"},children:[Object(n.jsx)("h2",{className:"mb-2",children:this.props.user.username}),Object(n.jsx)("div",{className:"mb-2",children:this.props.user.firstname+" "+this.props.user.lastname}),Object(n.jsxs)("div",{className:"row mb-3",children:[Object(n.jsx)("div",{className:"col-3",children:this.props.posts.length+" Posts"}),Object(n.jsx)("div",{className:"col-4 col-md-4",children:this.props.user.followers.length+" Followers"}),Object(n.jsx)("div",{className:"col-5 col-md-4",children:this.props.user.following.length+" Following"})]}),Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{onClick:function(){return e.handleClick(e.props.user._id)},style:{backgroundColor:"#0099ff",border:"none"},children:this.props.user.followers.includes(localStorage.getItem("userId"))?Object(n.jsx)("div",{children:"Unfollow"}):Object(n.jsx)("div",{children:"Follow"})})})]})]}),Object(n.jsx)("div",{className:"row mt-5",children:t})]}):Object(n.jsx)("div",{})}}]),s}(o.a.Component),ye=s(129),Ne=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).fetchPost=function(e){fetch("/posts/".concat(e),{method:"GET",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).then((function(){return console.log(n.state)})).catch((function(e){return console.log(e)}))},n.handleSubmit=function(e,t){var s={comment:t};console.log(t),fetch("/posts/".concat(e,"/comments"),{method:"POST",body:JSON.stringify(s),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).then((function(){return console.log("done")}))},n.state={post:null,comment:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"handleChange",value:function(e){this.setState({comment:e.target.value})}},{key:"render",value:function(){var e=this;return console.log(this.props.post),this.props.post?Object(n.jsx)("div",{className:"container d-flex align-items-center Pagecontainer",style:{marginTop:"10vh"},children:Object(n.jsxs)("div",{className:"row",style:{backgroundColor:"#f2f2f2"},children:[Object(n.jsx)("div",{className:"col-12 col-md-7",children:Object(n.jsxs)(w.a,{style:{fontWeight:"bold",fontFamily:"Georgia",fontSize:"20px"},children:[Object(n.jsx)(R.a,{top:!0,src:"/images/"+this.props.post.image,alt:this.props.post.image,width:"200px",height:"700px",style:{borderBottom:"1px solid black"}}),Object(n.jsx)(k.a,{children:Object(n.jsx)(C.a,{children:this.props.post.caption})})]})}),Object(n.jsx)("div",{className:"col-12 col-md-5",children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(k.a,{className:"commentBox",style:{padding:"8px",borderBottom:"1px solid grey"},children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3 col-md-3",children:Object(n.jsx)("img",{src:"/images/"+this.props.post.user.photo,alt:this.props.post.user.photo,width:"60px",height:"60px",style:{border:"1px solid black",borderRadius:"50%"}})}),Object(n.jsx)("div",{className:"col-6 col-md-9",style:{alignSelf:"center",fontFamily:"Georgia",fontSize:"20px"},children:this.props.post.user._id===localStorage.getItem("userId")?Object(n.jsx)(y.a,{to:"../user",children:Object(n.jsx)(C.a,{style:{color:"black"},children:this.props.post.user.username})}):Object(n.jsx)(y.a,{to:"../user/".concat(this.props.post.user._id),children:Object(n.jsx)(C.a,{style:{color:"black"},children:this.props.post.user.username})})})]})}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:"list-unstyled",style:{overflowY:"scroll",height:"590px",marginTop:"20px",borderBottom:"1px solid grey"},children:this.props.post.comments.map((function(e){return Object(n.jsx)("li",{className:"comment",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{style:{fontWeight:"bold",marginRight:"10px"},children:e.author.username}),e.comment]})},e._id)}))})}),Object(n.jsx)(k.a,{style:{bottom:"10px",padding:"15px",right:"10px",width:"inherit"},children:Object(n.jsx)(b.a,{className:"commentForm",onSubmit:function(){return e.handleSubmit(e.props.post._id,e.state.comment)},children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(ye.a,{className:"col-9",children:Object(n.jsx)(f.a,{type:"text",placeholder:"Enter comment",name:"comment",value:this.state.comment,onChange:this.handleChange})}),Object(n.jsx)(ye.a,{className:"col-3",children:Object(n.jsx)(O.a,{type:"submit",color:"primary",children:Object(n.jsx)("i",{className:"fa fa-send-o"})})})]})})})]})})]})}):Object(n.jsxs)("div",{children:[console.log("nothing"),"null"]})}}]),s}(o.a.Component),Se=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={file:null,caption:"",isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(p.a)(n)),n.handleFileChange=n.handleFileChange.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleChange",value:function(e){this.setState({caption:e.target.value})}},{key:"handleSubmit",value:function(){var e=this,t=new FormData;t.append("imageFile",this.state.file,this.state.file.name),t.append("caption",this.state.caption),this.toggleModal(),console.log(this.state.file),fetch("/posts/explore",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:t}).then((function(e){return e.json()})).then((function(e){e._id?v.NotificationManager.success("Post Created"):v.NotificationManager.error("Could not Create your Post")})).then((function(){return e.props.explore()})).then((function(){return e.props.userProfile()})).catch((function(e){console.log(e),v.NotificationManager.error("Only Images can be Posted")}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row addPost",children:Object(n.jsx)(O.a,{onClick:this.toggleModal,color:"none",style:{border:"none"},children:Object(n.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true",style:{color:"#6699ff",fontSize:"60px"}})})}),Object(n.jsx)(G.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(W.a,{className:"inputField",children:Object(n.jsx)(f.a,{type:"file",name:"imageFile",onChange:this.handleFileChange})}),Object(n.jsx)(W.a,{className:"inputField",children:Object(n.jsx)(f.a,{type:"text",placeholder:"Enter the Caption...",onChange:this.handleChange,style:{border:"none",borderBottom:"1px solid grey"}})}),Object(n.jsx)(W.a,{className:"inputField",children:Object(n.jsx)(O.a,{color:"primary",onClick:this.handleSubmit,children:"Upload"})})]})}),Object(n.jsx)(v.NotificationContainer,{})]})}}]),s}(o.a.Component),we=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).handlePasswordChange=n.handlePasswordChange.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"handlePasswordChange",value:function(e){var t={username:this.username.value,email:this.email.value,password:this.newPassword.value};fetch("/users/changePassword",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return e.success?v.NotificationManager.success("Password Changed Successfully!"):v.NotificationManager.error("Something Went Wrong!","",1e4),e})).then((function(e){e.success?setTimeout((function(){g.push("/")}),2e3):setTimeout((function(){g.push("/changePassword")}),2e3)})),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container loginContainer d-flex justify-content-center align-items-center",children:[Object(n.jsxs)("div",{className:"row login d-flex justify-content-center",children:[Object(n.jsx)("div",{className:"col-12 title",children:"Instagram"}),Object(n.jsx)("div",{className:"col-10",children:Object(n.jsxs)(b.a,{onSubmit:this.handlePasswordChange,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"text",id:"username",name:"username",placeholder:"username",innerRef:function(t){return e.username=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"email",id:"email",name:"email",placeholder:"Email",innerRef:function(t){return e.email=t}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{type:"password",id:"newPassword",name:"newPassword",placeholder:"New Password",innerRef:function(t){return e.newPassword=t}})}),Object(n.jsx)(O.a,{className:"col-12",type:"submit",value:"submit",color:"primary",children:"Change Password"})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(y.a,{to:"/signup",children:"Create New Account"})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(y.a,{to:"/",children:"Back To Login"})})]}),Object(n.jsx)(v.NotificationContainer,{})]})}}]),s}(o.a.Component),ke=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),this.props.fetchProfile(),this.props.fetchExplorePosts(),this.props.fetchUserProfile()}},{key:"render",value:function(){var e=this,t=function(t){var s=t.component,r=Object(l.a)(t,["component"]);return console.log(e.props.auth.isAuthenticated),Object(n.jsx)(X.b,Object(i.a)(Object(i.a)({},r),{},{render:function(t){return e.props.auth.isAuthenticated?Object(n.jsx)(s,Object(i.a)({},t)):Object(n.jsx)(X.a,{to:{pathname:"/"}})}}))},s=function(t){var s=t.component,r=Object(l.a)(t,["component"]);return console.log(e.props.signIn.ok),Object(n.jsx)(X.b,Object(i.a)(Object(i.a)({},r),{},{render:function(t){return e.props.signIn.ok?Object(n.jsx)(X.a,{to:"/"}):Object(n.jsx)(s,Object(i.a)({},t))}}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)(L,{logout:this.props.logoutUser,renderHome:this.props.fetchPosts}),Object(n.jsxs)(X.d,{children:[console.log(this.props),Object(n.jsx)(t,{exact:!0,path:"/home",component:function(){return Object(n.jsx)(B,{posts:e.props.posts,fetchPost:e.props.fetchPosts,user:e.props.profile.user})}}),Object(n.jsx)(X.b,{exact:!0,path:"/",component:function(){return Object(n.jsx)(N,{auth:e.props.auth,loginUser:e.props.loginUser,home:e.props.fetchPosts})}}),Object(n.jsx)(t,{path:"/user/:id",component:function(t){var s=t.match;return e.props.user.user?Object(n.jsx)(ve,{user:e.props.user.user.filter((function(e){return e._id===s.params.id}))[0],posts:e.props.explore.allPosts.filter((function(e){return e.user._id===s.params.id})),fetchUser:e.props.fetchUserProfile}):Object(n.jsx)(ve,{user:e.props.user.user,posts:e.props.explore.allPosts})}}),Object(n.jsx)(t,{exact:!0,path:"/explore",component:function(){return Object(n.jsx)(D,{explore:e.props.explore,fetchPost:e.props.fetchExplorePosts,user:e.props.profile.user})}}),Object(n.jsx)(t,{exact:!0,path:"/user",component:function(){return Object(n.jsx)(H,{user:e.props.profile.user,posts:e.props.profile.posts,fetchProfile:e.props.fetchProfile})}}),Object(n.jsx)(t,{path:"/explore/:id",component:function(t){var s=t.match;return console.log(e.props.explore.allPosts),e.props.explore.allPosts?Object(n.jsx)(Ne,{post:e.props.explore.allPosts.filter((function(e){return e._id===s.params.id}))[0]}):Object(n.jsx)(Ne,{post:e.props.explore.allPosts})}}),Object(n.jsx)(s,{path:"/signup",component:function(){return Object(n.jsx)(S,{signIn:e.props.signIn,signupUser:e.props.signupUser})}}),Object(n.jsx)(X.b,{path:"/changePassword",component:we}),Object(n.jsx)(X.a,{to:"/home"})]}),Object(n.jsx)(Se,{userProfile:this.props.fetchProfile,posts:this.props.fetchPosts,explore:this.props.fetchExplorePosts})]})}}]),s}(o.a.Component),Ce=Object(X.g)(Object(Z.b)((function(e){return{user:e.user,explore:e.explore,profile:e.profile,posts:e.posts,auth:e.auth,signIn:e.signIn}}),(function(e){return{fetchUserProfile:function(){return e(fe())},fetchProfile:function(){return e(je())},loginUser:function(t){return e(le(t))},logoutUser:function(){return e(ue())},signupUser:function(t){return e(he(t))},fetchPosts:function(){return e(de())},fetchExplorePosts:function(){return e(pe())}}}))(ke)),Pe=s(31),Ie=s(69),Ee=s(70),Fe=s.n(Ee),_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isAuthenticated:!!localStorage.getItem("token"),token:localStorage.getItem("token"),user:localStorage.getItem("creds")?JSON.parse(localStorage.getItem("creds")):null,errmess:null,userId:localStorage.getItem("userId")},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(i.a)(Object(i.a)({},e),{},{errmess:t.message,isAuthenticated:!1});case Q:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,user:t.creds});case K:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,errmess:"",token:t.token,userId:t.userId});case V:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,token:"",user:null});default:return e}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[],errMess:null,ok:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(i.a)(Object(i.a)({},e),{},{user:t.payload,errMess:null,ok:!0});case $:return Object(i.a)(Object(i.a)({},e),{},{user:[],errMess:t.message,ok:!1});default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{err:"",posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(i.a)(Object(i.a)({},e),{},{err:t.payload,posts:[]});case se:return Object(i.a)(Object(i.a)({},e),{},{err:"",posts:t.payload});default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{err:"",user:null,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(i.a)(Object(i.a)({},e),{},{err:t.payload,user:null,posts:[]});case oe:return Object(i.a)(Object(i.a)({},e),{},{err:"",user:t.profile,posts:t.posts});default:return e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{err:"",allPosts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(i.a)(Object(i.a)({},e),{},{err:t.payload,allPosts:[]});case ne:return Object(i.a)(Object(i.a)({},e),{},{err:"",allPosts:t.payload});default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{err:"",user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(i.a)(Object(i.a)({},e),{},{err:t.payload,user:null});case ae:return Object(i.a)(Object(i.a)({},e),{},{err:"",user:t.payload});default:return e}},Ae=Object(Pe.d)(Object(Pe.c)({user:Re,explore:Le,profile:Me,posts:Te,auth:_e,signIn:Ue}),Object(Pe.a)(Ie.a,Fe.a));var Be=function(){return Object(n.jsx)(Z.a,{store:Ae,children:Object(n.jsx)(X.c,{history:g,children:Object(n.jsx)(Ce,{})})})},ze=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,134)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),o(e),c(e)}))};s(110),s(111),s(112);a.a.render(Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)(Be,{})}),document.getElementById("root")),ze()},77:function(e,t,s){},78:function(e,t,s){}},[[113,1,2]]]);
//# sourceMappingURL=main.c83d182f.chunk.js.map