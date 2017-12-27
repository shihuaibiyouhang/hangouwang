<template>
	<div class="myshop-login">
		<div class="login-top">
			<div class="login-header">
				<div class="top-left">
					<i class="fa fa-cog"></i>
				</div>
				<div class="top-right">
					<i class="fa fa-bars"></i>					
				</div>
			</div>
			
			<div class="login-logo">
				<div class="logo">
					<i class="fa fa-user-circle-o"></i>
					
				</div>
				<div class="text">点击登录</div>
			</div>
			
			<div class="login-nav">
				<ul>
					<li>
						<i class="fa fa-heart-o"></i>
						<b>商品收藏</b>
					</li>
					<li>
						<i class="fa fa-shopping-basket"></i>
						<b>店铺收藏</b>
					</li>
					<li>
						<i class="fa fa-eye"></i>
						<b>我的足迹</b>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'myshop-login'
	}
</script>

<style lang="scss">
	.login-top{
		width:100%;
		height:2.42rem;
		background:url(http://img3.imgtn.bdimg.com/it/u=895030949,295914694&fm=200&gp=0.jpg) no-repeat;
		.login-header{
			height:0.43rem;
			/*background:rgba(0,0,0,0.1);*/
			display:flex;
			justify-content: space-between;
			align-items: center;
			padding:0 10px;
			color:#fff;
			font-size:0.22rem;
		}
		.login-logo{
			height:1.32rem;
		/*	background:darkgoldenrod;*/
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.logo{
				font-size:0.88rem;
				color:darkgray;
			}
			.text{
				font-size:0.2rem;
				color:darkgray;
				font-weight: 500;
			}
		}
		.login-nav{
			height:0.66rem;
			background:rgba(0,0,0,0.2);
			ul{
				display:flex;
				justify-content: space-around;
				align-items: center;
				color:#fff;
				
				li{
					height:0.66rem;
					display:flex;
					
					flex-direction: column;
					justify-content: space-around;
					justify-content:center;
					align-items: center;
					font-weight:100;
					i{
						display:inline-block;
						padding-bottom:0.1rem;
						font-size:0.22rem;
					}
					b{
						font-size:0.14rem;
					}
				}
			}
		}
	}
	
</style>