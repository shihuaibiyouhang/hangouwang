<template>
	<div class="myshop-center">
		<div class="center-first">
			<div class="first-one">
				<div class="one-left">
					<i class="fa fa-list-alt"></i>
					<span>我的订单</span>
				</div>
				<div class="one-right">
					<span>查看全部订单</span>
					<i class="fa fa-angle-right"></i>
				</div>
			</div>
			<div class="first-two">
				<ul>
					<li>
						<i class="fa fa-shopping-bag"></i>
						<span>待付款</span>
					</li>
					<li>
						<i class="fa fa-calendar-o"></i>
						<span>待收货</span>
					</li>
					<li>
						<i class="fa fa-truck"></i> 
						<span>待自提</span>
					</li>
					<li>
						<i class="fa fa-list"></i>
						<span>待评价</span>
					</li>
					<li>
						<i class="fa fa-credit-card"></i>
						<span>退款/退货</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="center-second">
			    <div class="second-left">
					<i class="fa fa-credit-card-alt"></i>
					<span>我的财产</span>
				</div>
				<div class="second-right">
					<span>查看全部财产</span>
					
				</div>
		</div>
		
		<div class="center-end">
			<ul>
				<li>
					<div class="li-content">
						<i class="fa fa-info-circle circle"></i>
						<span>我的分销管理</span>
					</div>
					<div class="ri">
						<i class="fa fa-angle-right ri"></i>
					</div>
					
				</li>
				<li>
					<div class="li-content">
						<i class="fa fa-map-marker mark"></i>
						<span>收货地址管理</span>
					</div>
					<div class="ri">
						<i class="fa fa-angle-right ri"></i>
					</div>
					
				</li>
				<li>
					<div class="li-content">
						<i class="fa fa-cog cog"></i>
						<span>用户设置</span>
					</div>
					<div class="ri">
						<i class="fa fa-angle-right ri"></i>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'myshop-center'
	}
</script>

<style lang="scss">
	.myshop-center{
		height:3.25rem;
		width:100%;
		margin-top:0.05rem;
		
		.center-first{
			height:1.15rem;
			background:#fff;
			margin-bottom: 0.05rem;
			.first-one{
				width:100%;
				height:0.4rem;
				
				border-bottom:1px solid #ccc;
					
				display:flex;
				justify-content: space-around;
				align-items: center;
				.one-left{
					padding-right:1.4rem;
					i{
						color:cornflowerblue;
						font-size:0.22rem;
						
					}
					span{
						font-size:0.14rem;
					}
				}
				.one-right{
					color:#ccc;
					font-size:0.14rem;
				}
			}
			.first-two{
				ul{
					display:flex;
					justify-content: space-around;
					align-items: center;
					li{
						height:0.7rem;
						display:flex;
					
						flex-direction: column;
						justify-content: space-around;
						justify-content:center;
						align-items: center;
						color:#666;
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
		.center-second{
			display:flex;
			justify-content: space-around;
			background:#fff;
			align-items: center;
			height:0.54rem;
		font-size:0.14rem;
			margin-bottom: 0.05rem;
			.second-left{
				padding-right:1.4rem;
				i{
					color:mediumseagreen;
					
				}
			}
			.second-right{
				color:#ccc;
			}
		}
		.center-end{
			margin-bottom:0.05rem;
			background:#fff;
			box-shadow: rgba(0,0,0,0.1);
			ul{
				li{
					padding-left:0.15rem;
					height:0.44rem;
					display:flex;
					justify-content: space-between;
					align-items: center;
					border-bottom:1px solid #ccc;
					.ri{
						display:inline-block;
						padding-right:0.1rem;
						color:#ccc;
						font-size:0.22rem;
					}
					.li-content{
						.circle{
							color:dodgerblue;
						}
						.mark{
							color:mediumpurple;
						}
						.cog{
							color:hotpink;
						}
						span{
							color:black;
							font-size:0.14rem;
						}
					}
				}
			}
		}
		
	}
</style>