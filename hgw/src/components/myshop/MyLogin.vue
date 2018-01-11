<template>
	<div class="app-login" >
	
		<div class="login-top">
			<span><i class="fa fa-hospital-o"></i></span>
			<span>登录</span>
			<span @click="toRegister('register')">注册</span>
		</div>
		<div class="login-form">
			<form action="">
				<div class="form-con">
					<span>账户</span><input v-model="userz_info.userName" type="text" placeholder="请输入用户名"/>
					
				</div>
				<div class="form-con">
					<span>密码</span><input v-model="userz_info.password" type="text" placeholder="请输入登录密码"/>
					
				</div>
				
			</form>
		</div>
		<div class="login-sure">
			<div class="login-check">
				<input type="checkbox" class="checked" />
				<span>七天自动登录</span>
			</div>
			<div class="mima">
				忘记密码？
			</div>
		</div>
		
		<div class="login-button">
			<button v-on:click="login({userName:userz_info.userName,password:userz_info.password})">登录</button>
		</div>
		<div class="login-ending">
			<div class="ending-title">
				<span>合作账号登录</span>
			</div>
			<div class="qq">
				<i class="fa fa-qq"></i>
			</div>
				
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'app-login',
		
		data(){
			return{
				userz_info:{
					userName:'',
					password:''
				}
				
			}
		},
		methods:{
			toRegister(name){
				this.$router.push({name})
			},
			
			login(params){
				var users_info=JSON.parse(localStorage.user_info)
				this.mine_info =users_info.username
				
//				console.log(params.userName,users_info,7)
				if(users_info.username==params.userName&&users_info.password==params.password){
					this.$router.replace({name:'myshop'})
					
//					alert('登陆成功')
					this.$store.commit('LoginUserInfo',params)
					
				}else{
					alert('登陆失败')
				}
			},
			changeMine(){
//				this.$on('')
			}
			
		}
	}
</script>

<style lang="scss"> 
	.app-login{
		.login-top{
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
		.login-form{
			height:0.87rem;
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
					span{
						width:30%;
					}
					input{
						width:60%;
						background:none;
						border:0;
						outline:none;
					}
				}
			}
		}
		.login-sure{
			height:0.6rem;

			font-size:0.14rem;
			display:flex;
			padding:0 0.2rem;
			justify-content: space-between;
			align-items: center;
			.login-check{
				.checked{
					width:0.16rem;
					height:0.16rem;
					background:limegreen;
					border-radius:50%;
				}
				span{
					color:#666;
				}
			}
			.mima{
				color:dodgerblue;
			}
		}
		.login-button{
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
		.login-ending{
			height:0.97rem;
			
			.ending-title{
				text-align:center;
				color:#A9A9A9;position:relative;
				span{
					
					
				}
				::before{
					content:'';
					display:block;
					
					width:1rem;
					height:0.0185rem;
					background:#A9A9A9;
					position:absolute;
					left:0.3rem;
					top:0.06rem;
				}
				::after{
					content:'';
					display:block;
					
					width:1rem;
					height:0.0185rem;
					background:#A9A9A9;
					position:absolute;
					right:0.3rem;
					top:0.06rem;
				}
				
			}
			.qq{
				border:1px solid deepskyblue;
				border-radius:50%;
				margin:0.1rem auto;
				width:0.6rem;
				height:0.6rem;
				color:deepskyblue;
				text-align: center;
				line-height:0.6rem;
				font-size:0.3rem;
			}
		}
	}
</style>