(this.webpackJsonpreactserver=this.webpackJsonpreactserver||[]).push([[0],{54:function(e,t,a){e.exports=a(85)},59:function(e,t,a){},61:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),c=a(13),i=(a(59),a(30)),u=a(36),s=a(35),h=a(53),m=a(25),p=(a(60),a(61),a(21)),d=a(15),b=a(16),E=a(19),v=a(17),g=a(7),C=a(20),f=a(5),A=a(23),j=a(12),k=a.n(j),y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).onChangeArticleTitle=a.onChangeArticleTitle.bind(Object(g.a)(a)),a.onChangeArticleAuthor=a.onChangeArticleAuthor.bind(Object(g.a)(a)),a.onChangeArticleContent=a.onChangeArticleContent.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={title:"",author:"",content:""},a}return Object(C.a)(t,e),Object(b.a)(t,[{key:"onChangeArticleTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeArticleAuthor",value:function(e){this.setState({author:e.target.value})}},{key:"onChangeArticleContent",value:function(e){this.setState({content:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,author:this.state.author,content:this.state.content};k.a.post("http://localhost:4000/articles/create-article",t).then((function(e){return console.log(e.data)})),this.setState({title:"",author:"",content:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-wrapper"},l.a.createElement(f.a,{onSubmit:this.onSubmit},l.a.createElement(f.a.Group,{controlId:"Title"},l.a.createElement(f.a.Label,null,"Title"),l.a.createElement(f.a.Control,{type:"text",value:this.state.title,onChange:this.onChangeArticleTitle})),l.a.createElement(f.a.Group,{controlId:"Author"},l.a.createElement(f.a.Label,null,"Author"),l.a.createElement(f.a.Control,{type:"text",value:this.state.author,onChange:this.onChangeArticleAuthor})),l.a.createElement(f.a.Group,{controlId:"Content"},l.a.createElement(f.a.Label,null,"Content"),l.a.createElement(f.a.Control,{type:"text",value:this.state.content,onChange:this.onChangeArticleContent})),l.a.createElement(A.a,{variant:"danger",size:"lg",block:"block",type:"submit"},"Create Article")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).onChangeArticleTitle=a.onChangeArticleTitle.bind(Object(g.a)(a)),a.onChangeArticleAuthor=a.onChangeArticleAuthor.bind(Object(g.a)(a)),a.onChangeArticleContent=a.onChangeArticleContent.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={title:"",author:"",content:""},a}return Object(C.a)(t,e),Object(b.a)(t,[{key:"onChangeArticleTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeArticleAuthor",value:function(e){this.setState({author:e.target.value})}},{key:"onChangeArticleContent",value:function(e){this.setState({content:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:4000/articles/edit-article/"+this.props.match.params.id).then((function(t){e.setState({title:t.data.title,author:t.data.author,content:t.data.content})})).catch((function(e){console.log(e)}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,author:this.state.author,content:this.state.content};k.a.put("http://localhost:4000/articles/update-article/"+this.props.match.params.id,t).then((function(e){console.log(e.data),console.log("Updated!")})).catch((function(e){console.log(e)})),this.props.history.push("/article-list")}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-wrapper"},l.a.createElement(f.a,{onSubmit:this.onSubmit},l.a.createElement(f.a.Group,{controlId:"Title"},l.a.createElement(f.a.Label,null,"Title"),l.a.createElement(f.a.Control,{type:"text",value:this.state.title,onChange:this.onChangeArticleTitle})),l.a.createElement(f.a.Group,{controlId:"Author"},l.a.createElement(f.a.Label,null,"Author"),l.a.createElement(f.a.Control,{type:"text",value:this.state.author,onChange:this.onChangeArticleAuthor})),l.a.createElement(f.a.Group,{controlId:"Content"},l.a.createElement(f.a.Label,null,"Content"),l.a.createElement(f.a.Control,{type:"text",value:this.state.content,onChange:this.onChangeArticleContent})),l.a.createElement(A.a,{variant:"danger",size:"lg",block:"block",type:"submit"},"Update Article")))}}]),t}(n.Component),S=a(52),T=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).deleteArticle=a.deleteArticle.bind(Object(g.a)(a)),a}return Object(C.a)(t,e),Object(b.a)(t,[{key:"deleteArticle",value:function(e){e.preventDefault(),k.a.delete("http://localhost:4000/articles/delete-article/"+this.props.obj._id).then((function(e){console.log("Deleted!")})).catch((function(e){console.log(e)})),this.forceUpdate()}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.title),l.a.createElement("td",null,this.props.obj.author),l.a.createElement("td",null,this.props.obj.content),l.a.createElement("td",null,l.a.createElement(c.b,{className:"edit-link",to:"/edit-article/"+this.props.obj._id},"Edit"),l.a.createElement(A.a,{onClick:this.deleteArticle,size:"sm",variant:"danger"},"Delete")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(v.a)(t).call(this,e))).state={articles:[]},a}return Object(C.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://localhost:4000/articles/").then((function(t){e.setState({articles:t.data})})).catch((function(e){console.log(e)}))}},{key:"dataTable",value:function(){return this.state.articles.map((function(e,t){return l.a.createElement(T,{obj:e,key:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"table-wrapper"},l.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Author"),l.a.createElement("th",null,"Content"))),l.a.createElement("tbody",null,this.dataTable())))}}]),t}(n.Component);var N=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(u.a,{bg:"dark",variant:"dark"},l.a.createElement(s.a,null,l.a.createElement(u.a.Brand,null,l.a.createElement(c.b,{to:"/create-article",className:"nav-link"},"React MERN Stack App")),l.a.createElement(i.a,{className:"justify-content-end"},l.a.createElement(i.a,null,l.a.createElement(c.b,{to:"/create-article",className:"nav-link"},"Create Article")),l.a.createElement(i.a,null,l.a.createElement(c.b,{to:"/article-list",className:"nav-link"},"Article list")))))),l.a.createElement(s.a,null,l.a.createElement(h.a,null,l.a.createElement(m.a,{md:12},l.a.createElement("div",{className:"wrapper"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:y}),l.a.createElement(p.a,{path:"/create-article",component:y}),l.a.createElement(p.a,{path:"/edit-article/:id",component:O}),l.a.createElement(p.a,{path:"/article-list",component:w}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.0803ab86.chunk.js.map