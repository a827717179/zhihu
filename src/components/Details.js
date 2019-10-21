import React from 'react'
import '../assets/css/Details.css'
import axios from 'axios'
import Store from '../store/index'
class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            body:'',
            css:'',
            flag:false,
            zan:0,
            pinglun:0,
            shoucang:false,
            obj:{},
            jian:true
        }
    }
    render() {
        let box = this.state.flag?
            <div className='box' onClick={this.guanbi.bind(this)} style={{height:document.documentElement.clientHeight}}>
                <div className="morecenter">
                    <h2>分享</h2>
                    <ul>
                        <li>
                            <h3><span className="iconfont icon-xinlangweibo"></span></h3>
                            <p>新浪微博</p>
                        </li>
                        <li>
                            <h3><span className="iconfont icon-weixin"></span></h3>
                            <p>微信</p>
                        </li>
                        <li>
                            <h3><span className="iconfont icon-weixinpengyouquan"></span></h3>
                            <p>微信朋友圈</p>
                        </li>
                        <li>
                            <h3 className='biji1'><span className="iconfont icon-yinxiangbiji"></span></h3>
                            <p>印象笔记</p>
                        </li>
                        <li>
                            <h3 className='biji2'><span className="iconfont icon-youdaoyunbiji"></span></h3>
                            <p>有道云笔记</p>
                        </li>
                        <li>
                            <h3><span className="iconfont icon-QQ"></span></h3>
                            <p>QQ</p>
                        </li>
                        <li>
                            <h3><span className="iconfont icon-gengduo1"></span></h3>
                            <p>更多平台</p>
                        </li>
                    </ul>
                </div>
            </div>
            :
            '';
        return (
            <div className='Details'>
                {box}
                <header>
                    <div className="left">
                        <span className="iconfont icon-arror_left_blod" onClick={this.back.bind(this)}></span>
                    </div>
                    <div className="right">
                        <span className="iconfont icon-fenxiang" onClick={this.fenxiang.bind(this)}></span>
                        <span className="iconfont icon-xingzhuang60kaobei2" onClick={this.shoucang.bind(this)} style={{color:this.state.shoucang?'yellow':'white'}}></span>
                        <p><span className="iconfont icon-pinglun1" onClick={this.pinglun.bind(this)}></span> <em>{this.state.pinglun}</em></p>
                        <p><span className="iconfont icon-zan"></span><em>{this.state.zan}</em></p>
                    </div>
                </header>
                <div dangerouslySetInnerHTML={{__html:this.state.body+this.state.css}} />
            </div>
        );
    }
    back(){
        this.props.history.go(-1);
        document.documentElement.scrollTop=0;
    }
    fenxiang(){
        this.setState({
            flag:!this.state.flag
        });
        document.body.style.overflow='hidden'
    }
    guanbi(e){
        if(e.target.className==='box'){
            this.setState({
                flag:!this.state.flag
            });
            document.body.style.overflow=''
        }
    }
    pinglun(){
        this.props.history.push({
            pathname:'/Comments',
            state:{
                id:this.props.location.state.id,
                pinglun:this.state.pinglun
            }
        })
    }
    shoucang(){
        this.setState({
            shoucang:!this.state.shoucang
        });
        if (!this.state.shoucang){
            Store.dispatcher.dispatch({
                actionType:'addnew',
                actionParams:this.state.obj
            });
        }else {
            Store.dispatcher.dispatch({
                actionType:'remnew',
                actionParams:this.state.obj
            });
        }
    }
    componentDidMount(){
        Store.state.on('ting',()=>{
            this.setState({
                shoucang:true,
                jian:false
            });
        })
    }
    componentWillMount() {
        this.setState({
            id:this.props.location.state.id
        });
        axios({
            url:`/api/4/story-extra/${this.props.location.state.id}`
        }).then((res) => {
            this.setState({
                zan:res.data.popularity,
                pinglun:res.data.comments,
            })
        });
        axios({
            url:'/api/4/news/'+this.props.location.state.id
        }).then((res)=>{
            this.setState({
                id:res.data.id,
                body:res.data.body,
                css:`<link rel="stylesheet" href='${res.data.css[0]}'>`,
                obj:{
                    id:res.data.id,
                    title:res.data.title,
                    img:res.data.images[0]
                }
            });
            let imgdiv = document.getElementsByClassName('img-place-holder')[0];
            imgdiv.style.background = `url(${res.data.image}) no-repeat`;
            imgdiv.style.backgroundSize = '100% 100%';
            imgdiv.style.position = 'relative';
            //title
            let imgp = document.createElement('p');
            imgp.id = 'imgp';
            imgp.innerHTML = res.data.title;
            imgdiv.appendChild(imgp);
            //背景阴影
            let imgsmall = document.createElement('div');
            imgsmall.id = 'imgsmall';
            imgdiv.appendChild(imgsmall);
        })
    }
    componentDidUpdate() {
        if(this.state.jian){
            Store.dispatcher.dispatch({
                actionType:'jianting',
                actionParams:this.state.obj
            });
        }
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = () => {
            return
        }
    }
}
export default Details