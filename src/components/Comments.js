import React from 'react'
import '../assets/css/Comments.css'
import axios from 'axios'
import moment from 'moment'
import kongtu from '../assets/images/kong.png'
class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            num:0,
            longarr:[],
            shortarr:[],
            shortflag:false
        }
    }

    render() {
        let sanjiao = !this.state.shortflag?<span onClick={this.change.bind(this)} className="iconfont icon-zhankai"></span>:<span className="iconfont icon-shouqi" onClick={this.change.bind(this)} ></span>;
        var clientHeight = document.documentElement.clientHeight; //可视区域的高度
        var one = document.getElementById('one');
        var two = document.getElementById('two');
        var kong = document.getElementById('kong');
        if(one!==null){
            kong.style.height = clientHeight-one.clientHeight-two.clientHeight+'px'
        }
        return (
            <div className='Comments'>
                <header id='one'>
                    <div className="left">
                        <span className="iconfont icon-arror_left_blod" onClick={this.back.bind(this)}></span>
                        <h2>{this.state.num} 条点评</h2>
                    </div>
                    <div className="right">
                        <span className="iconfont icon-fabiao"></span>
                    </div>
                </header>
                <div className="long">
                    <div className='top'>
                        <h3 id='two'>{this.state.longarr.length} 条长评</h3>
                    </div>
                    <div id='kong' style={{height:document.documentElement.clientHeight-100}}>
                        <img src={kongtu} alt=""/>
                    </div>
                    <ul id='longping'>
                        {
                            this.state.longarr.map((val,ind) => {
                                return <li key={ind}>
                                    <img src={val.avatar} alt=""/>
                                    <div className="content">
                                        <div className='name'><h4>{val.author}</h4><p><span className="iconfont icon-zan"></span> {val.likes}</p></div>
                                        <p className='pinglun'>{val.content}</p>
                                        <p className="time">{moment(val.time).format("MM-DD HH:mm")}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="short">
                    <div className='top'>
                        <h3>{this.state.shortarr.length} 条短评</h3>
                        {/*<span className="iconfont icon-zhankai" onClick={this.change.bind(this)} ></span>*/}
                        {sanjiao}
                    </div>
                    <ul id='shortping'>
                        {
                            this.state.shortarr.map((val,ind) => {
                                return <li key={ind}>
                                    <img src={val.avatar} alt=""/>
                                    <div className="content">
                                        <div className='name'><h4>{val.author}</h4><p><span className="iconfont icon-zan"></span> {val.likes}</p></div>
                                        <p className='pinglun'>{val.content}</p>
                                        <p className="time">{moment(val.time).format("MM-DD HH:mm")}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    change(){
        this.setState({
            shortflag:!this.state.shortflag
        });
        let ping = document.getElementById('shortping');
        var short = document.getElementsByClassName('short')[0];
        var one = document.getElementById('one');
        if(!this.state.shortflag){
            ping.style.display = 'block';
            short.style.position = '';
            short.style.bottom = '';
            document.documentElement.scrollTop = short.offsetTop-one.clientHeight;
        }else{
            ping.style.display = 'none';
            if (this.state.longarr.length === 0){
                short.style.position = 'fixed';
                short.style.bottom = 0;
                short.style.top = '';
            } else{
                short.style.position = '';
                short.style.top = '';
            }
        }
    }
    back(){
        this.props.history.go(-1);
        document.documentElement.scrollTop=0;
    }
    componentWillMount() {
        this.setState({
            num:this.props.location.state.pinglun
        });
        axios({
            url:`/api/4/story/${this.props.location.state.id}/long-comments`,
        }).then((res)=>{
            this.setState({
                longarr:res.data.comments
            });
            var long = document.getElementById('longping');
            var kong = document.getElementById('kong');
            var short = document.getElementsByClassName('short')[0];
            if(this.state.longarr.length ===0){
                long.style.display = 'none';
                kong.style.display = 'block';
                short.style.position = 'fixed';
                short.style.bottom = 0;
            }else {
                long.style.display = 'block';
                kong.style.display = 'none';
            }
        });
        axios({
            url:`/api/4/story/${this.props.location.state.id}/short-comments`,
        }).then((res)=>{
            this.setState({
                shortarr:res.data.comments
            })
        })
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = () => {
            return
        }
    }
}
export default Comments