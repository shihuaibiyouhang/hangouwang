<template>
  <div class="main-footer">
    <div class="nav_text">
      <a href="##" class="first_a">登录</a>
      <a href="##">注册</a>
      <a href="##">反馈</a>
      <a href="##" @click="goTop">返回顶部</a>      
    </div>
    <div class="nav_pic">
      <a href="##">
        <span>
          <i class="app"></i>
        </span>
        <p>客户端</p>
      </a>
      <a href="##">
        <span>
          <i class="touch"></i>
        </span>
        <p>触屏版</p>
      </a>
      <a href="##">
        <span>
          <i class="pc"></i>
        </span>
        <p>电脑版</p>
      </a>
    </div>
    <div class="copyright">
      Copyright © 2014-2016 汉购网
      <a href="##">hangowa.com</a>
      版权所有
    </div>
  </div>
</template>

<script>

export default {

  name: 'main-footer',
  data () {
    return {
       
    }
  },
  methods:{
    goTop: function() {             
        clearInterval(timer);  
        let timer = setInterval(function() {   
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  
            var now = curHeight;  
            var speed = (0 - now) / 7;                              
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);  
            if (curHeight === 0) {                         
              clearInterval(timer);                            
            }  
            document.documentElement.scrollTop = curHeight + speed;         
            document.body.scrollTop = curHeight + speed;                
                                   
        
       }, 30);  
      },
  },
  mounted () {
    // window.addEventListener('scroll', this.getTop)
  },
}
</script>


<style lang="scss">
  .main-footer{
    background-color: #FFF;
    border-top: solid 0.01rem #EEE;
    position: relative;
    .nav_text{
      padding: 0.132rem 0;
      text-align: center;
      border-bottom: solid 0.01rem #EEE;
      a{
        display: inline-block;
        width: 24%;
        height: 0.13188rem;
        font-size: 0.13188rem;
        line-height: 0.13188rem;
        color: #555;
        border-left: solid 0.01rem #EEE;
      }
      .first_a{
        border-left: none;
      }
    }
    .nav_pic{
      padding: 0.066rem 0.44rem;
      text-align: center;
      border-bottom: solid 0.01rem #EEE;
      display: flex;
      justify-content: space-around;
      a{
        display: inline-block;
        font-size: 0.09rem;
        color: #999;
        text-align: center;
        span{
          display: inline-block;
          width: 0.26391rem;
          height: 0.26391rem;
          margin: 0 auto;
          padding: 0.033rem;
          border: solid #CCC 1px;
          border-radius: 100%;
          i{
            display: block;
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: 80%;
            opacity: 0.4;
          }
          .app{
            background-image: url('http://www.hangowa.com/wap/images/foot_app.png')
          }
          .touch{
             background-image: url('http://www.hangowa.com/wap/images/foot_touch.png')
          }
          .pc{
             background-image: url('http://www.hangowa.com/wap/images/foot_pc.png')
          }
        }
      }
      
    }
    .copyright {
        height: 0.35188rem;
        font-size: 0.12rem;
        line-height: 0.35188rem;
        color: #555;
        text-align: center;
        text-shadow: 1px 1px 0 rgba(255,255,255,1);
        margin-bottom: 0.52rem;
        a{
          display: inline-block;
          margin: 0 0.01rem;
          font-size: 0.12rem;
          font-weight: 600;
          color: #555;
        }
    }
  }
</style>
