<template>
	<div class="myshop-end">
		<div class="end-nav">
			<ul>
				<li @click="toLogin('login')">登录</li>
				<li @click="toRegister('register')">注册</li>
				<li>反馈</li>
				<li v-on:click="toTop">返回顶部</li>
			</ul>
		</div>
		<div class="end-pic">
			<ul>
				<li>
					<i class="fa fa-building-o"></i>
					<span>客户端</span>
				</li>
				<li>
					<i class="fa fa-mobile"></i>
					<span>触屏版</span>
				</li>
				<li>
					<i class="fa fa-television"></i>
					<span>电脑版</span>
				</li>
			</ul>
		</div>
		<div class="end-text">
			<p>Copyright@2014-2016 汉购网hangouwang.com版权所有</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'myshop-end',
		methods:{
			
			toTop(){
				var top=document.body.scrollTop||document.documentElement.scrollTop;
				if(top>20){
				document.documentElement.scrollTop = 0
				}
			},
			toLogin(name){
				this.$router.push({name})
			},
			toRegister(name){
				this.$router.push({name})
			}
		}
		
	}
</script>

<style lang="scss">
	.myshop-end{
		height:1.67rem;
		background:#fff;
		margin-bottom:0.05rem;
		.end-nav{
			height:0.4rem;
			border-bottom:1px solid #ccc;
			ul{
				display:flex;
				justify-content: space-around;
				align-items: center;
				line-height:0.4rem;
			}
		}
		.end-pic{
			height:0.55rem;
			border-bottom:1px solid #ccc;
			ul{
				display:flex;
				justify-content: space-around;
				align-items: center;
				li{
					height:0.53rem;
					display:flex;
					flex-direction: column;
					justify-content: center;
					justify-content: space-around;
					align-items: center;
					i{
						display:inline-block;
						font-size:0.18rem;
						width:0.3rem;
						height:0.3rem;
						text-align: center;
						line-height: 0.3rem;
						border:1px solid #666;
						border-radius:50%;
					}
					span{
						font-size:0.08rem;
					}
				}
			}
		}
		.end-text{
			color:#666;
			text-align:center;
			
		}
	}
</style>