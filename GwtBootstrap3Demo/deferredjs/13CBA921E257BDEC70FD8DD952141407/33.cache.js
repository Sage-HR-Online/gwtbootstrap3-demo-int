function e7b(){}
function V6b(a,b,c){hbb.call(this,a,b,c,(jPb(),iPb))}
function n7b(a){var b;if(!a.i){b=new c7b(new e7b);a.i=b}return a.i}
function m7b(a){var b;if(!a.g){b=new V6b(qab(Nbb(a.b)),n7b(a),l7b(a));Iab((Obb(a.b),b),Zbb(Obb(a.b)));a.g=b}return a.g}
function c7b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;Bbb(this,(a=new Evb,Tob(a,(b=new yub,b.b='Project Setup',xub(b),b.c='basic setup and using custom themes',xub(b),b)),Tob(a,(c=new Gub,Tob(c,(d=new Sub,Rub(d,(o=new lsb(3),Nvb(o.d,Vic),o)),d)),Tob(c,(e=new Jub,Tob(e,(p=new $sb,Zsb(p,(q=new Mhb,q.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new ZQ(q.b.b)).b),p)),Tob(e,(r=new vvb,uvb(r,(s=new Mhb,s.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new ZQ(s.b.b)).b),uT(r.ab,Yic,true),uT(r.ab,Zic,true),r)),e)),c)),Tob(a,(f=new Gub,Tob(f,(g=new Sub,Rub(g,(t=new lsb(3),Nvb(t.d,'Bootstrap2 Look-a-like Setup'),t)),g)),Tob(f,(i=new Jub,Tob(i,(u=new $sb,Zsb(u,(v=new Mhb,v.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new ZQ(v.b.b)).b),u)),Tob(i,(w=new vvb,uvb(w,(x=new Mhb,x.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new ZQ(x.b.b)).b),uT(w.ab,Yic,true),uT(w.ab,Zic,true),w)),i)),f)),Tob(a,(j=new Gub,Tob(j,(k=new Sub,Rub(k,(y=new lsb(3),Nvb(y.d,'Custom Theme'),y)),k)),Tob(j,(n=new Jub,Tob(n,(z=new $sb,Zsb(z,(A=new Mhb,A.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new ZQ(A.b.b)).b),z)),Tob(n,(B=new vvb,uvb(B,(C=new Mhb,C.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new ZQ(C.b.b)).b),uT(B.ab,Yic,true),uT(B.ab,Zic,true),B)),n)),j)),a))}
VP(1202,514,Cdc,V6b);VP(1205,519,Ddc,c7b);VP(1206,1,{},e7b);VP(1213,1,Wdc);_.wb=function D7b(){qdb(this.c,m7b(this.b.b))};var OM=igb(pic,'SetupPresenter',1202),QM=igb(pic,'SetupView',1205),PM=igb(pic,'SetupView_BinderImpl',1206);$dc(qi)(33);