<template>
	<div class="app-register">
		<div class="register-top">
			<span><i class="fa fa-hospital-o"></i></span>
			<span>会员注册</span>
			<span @click="toLogin('login')">登录</span>
		</div>
		<div class="register-nav">
			<ul>
				<li>
					<i class="fa fa-user-plus"></i>
					<span>普通注册</span>
				</li>
				<li>
					<i class="fa fa-mobile"></i>
					<span>手机注册</span>
				</li>
			</ul>
		</div>
		<div class="register-box">
			<form action="">
				<div class="form-con">
					<span>用户名</span><input type="text" placeholder="请输入6-20个字符" v-model="useList.userName" @blur="names()"/>
					<b>不符合</b>
				</div>
				<div class="form-con">
					<span>设置密码</span><input type="text" placeholder="请输6-20位密码" v-model="useList.password" @blur="passwords()"/>
					<b>不符合</b>
				</div>
				<div class="form-con">
					<span>确认密码</span><input type="text" placeholder="请再次输入密码" v-model="useList.qpassword" @blur="qpasswords()"/>
					<b>不符合</b>
				</div>
				<div class="form-con">
					<span>邮箱</span><input type="text" placeholder="请输入常用邮箱" v-model="useList.email" @blur="emails()"/>
					<b>不符合</b>
				</div>
			</form>
		</div>
		<div class="register-text">
			<div class="text-content">
				<input type="checkbox" />
				<span>同意</span>
				<span class="third">用户注册协议</span>
			</div>
			
		</div>
		<div class="register-button">
			<button @click="register({username:useList.userName,password:useList.password,qpassword:useList.qpassword,email:useList.email})">注册</button>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'app-register',
		data(){
			return{
				useList:[
					{userName:'',password:'',qpassword:'',email:''}
				]
			}
		},
		methods:{
			toLogin(name){
				this.$router.push({name})
			},
			names(){
				var oB=document.getElementsByTagName("b");
				var re=/^[a-z0-9][0-9a-z]{5,19}$/;
				if(re.test(this.useList.userName)){
					oB[0].style.display="none"
				}else{
					oB[0].style.display="block"
				}
			},
			passwords(){
				var oB=document.getElementsByTagName("b");
				var re=/[0-9a-z]{6,20}$/;
				if(re.test(this.useList.password)){
					oB[1].style.display="none"
				}else{
					oB[1].style.display="block"
				}
			},
			qpasswords(){
				var oB=document.getElementsByTagName("b");
				var re=/[0-9a-z]{6,20}$/;
				if(this.useList.password==this.useList.qpassword){
					oB[2].style.display="none"
				}else{
					oB[2].style.display="block"
				}
			},
			emails(){
				var oB = document.getElementsByTagName("b");
				var re = /^\w+@[a-z0-9]+\.[a-z]{2,3}/g;
				if(re.test(this.useList.email)){
					oB[3].style.display="none"
						
				}else{
					oB[3].style.display="block"
				}
			},
			register(params){
				let that=this
				var oB = document.getElementsByTagName("b");
				if(that.useList.userName!=undefined&&that.useList.password!=undefined&&that.useList.qpassword!=undefined&&that.useList.email!=undefined&&oB[0].style.display!='block'&&oB[1].style.display!='block'&&oB[2].style.display!='block'&&oB[3].style.display!='block')
				{
//					localStorage.useList=JSON.stringify(params)
					this.$store.commit('RegisterUserInfo',params)
					that.$router.replace({name:'login'})
					
				}else{
					alert('登陆失败')
				}
			}
			
		}
	}
</script>

<style lang="scss">
	.app-register{
		.register-top{
			height:0.43rem;

			padding:0 0.2rem;
			display:flex;
			justify-content:space-between;
			align-items: center;
			span:nth-child(1){
				font-size:0.14rem;
				color:#666;
			}
			span:nth-child(2){
				font-size:0.2rem;
			}
			span:nth-child(3){
				font-size:0.14rem;
				color:indianred;
			}
		}
		.register-nav{
			height:0.44rem;
			background:#fff;
			margin-bottom: 0.15rem;
			border-bottom:0.5px solid #ccc;
			ul{
				display:flex;
				justify-content: space-around;
				align-items: center;
				padding:0 0.3rem;
				li{
					width:40%;
					height:0.44rem;
					text-align: center;
					line-height:0.44rem;
					font-size:0.16rem;
					i{
						color:#666;
						font-size:0.18rem;
					}
				}
				
				
			}
		}
		.register-box{
			height:1.75rem;
			background:#fff;
			form{
				.form-con{
				
					width:100%;
					height:0.42rem;
					display:flex;
					border-bottom:1px solid #ccc;
					align-items: center;
					text-align: center;
					line-height:0.42rem;
					font-size:0.14rem;
					span{
						width:30%;
					}
					input{
						width:60%;
						background:none;
						border:0;
						outline:none;
					}
				   b{
					   	 font-size: 0.12rem;
					   	 font-weight: normal;
					   	 display: none;
				    }
			
				}
			}
		}
		.register-text{
			height:0.6rem;
			padding-left:0.4rem;
			font-size:0.16rem;
			line-height: 0.6rem;
			.text-content{
				input{
					width:0.16rem;
					height:0.16rem;
				}
				.third{
					color:dodgerblue;
				}
			}
				
			
		}
		.register-button{
			height:0.4rem;
			text-align: center;
			line-height: 0.4rem;
			padding:0.1rem 0;
			button{
				width:80%;
				height:0.3rem;
				border-radius:5px;
				background:#EEEEEE;
				color:#666;
				font-size:0.2rem;
				border:none;
				outline:none;
			}
		}
	}
</style>