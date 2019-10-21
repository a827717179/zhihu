import React from 'react'
import userimg from "../assets/images/timg.jpg";
import '../assets/css/Me.css'
import '../assets/css/animate.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Me extends React.Component{
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render(props) {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={2500}
                    transitionLeaveTimeout={1500}
                    transitionName="animated"
                >
                    <div id='me' onClick={this.close.bind(this)}
                         style={{height:document.documentElement.clientHeight}}
                         key="amache" className="animated bounceInLeft"
                    >
                        <div className="user" style={{height:document.documentElement.clientHeight}}>
                            <div className="user_top">
                                <div className="username">
                                    <img src={userimg} alt=""/>
                                    <h2>郝柳婷</h2>
                                </div>
                                <div className="usersc">
                                    <p onClick={this.tocoll.bind(this)}><span className="iconfont icon-xingzhuang60kaobei2"></span>我的收藏</p>
                                    <p><span className="iconfont icon-xiazai"></span>离线下载</p>
                                </div>
                            </div>
                            <div className="index" onClick={this.index.bind(this)}>
                                <span className="iconfont icon-yemian"></span>
                                <h5>首页</h5>
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
    close(e){
        if(e.target.id==='me'){
            var me = document.getElementById('me');
            me.style.display = 'none';
            document.body.style.overflow = ''
        }
    }
    index(){
        var me = document.getElementById('me');
        me.style.display = 'none';
        this.props.prop.history.push({
            pathname:'/Index'
        });
        document.documentElement.scrollTop = 0;
        document.body.style.overflow = ''
    }
    tocoll(){
        var me = document.getElementById('me');
        me.style.display = 'none';
        this.props.prop.history.push({
            pathname:'/Collection'
        });
        document.documentElement.scrollTop = 0;
        document.body.style.overflow = ''
    }
}
export default Me