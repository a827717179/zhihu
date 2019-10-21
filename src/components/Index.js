import React from 'react'
import '../assets/css/Index.css'
import axios from 'axios'
import {Carousel, WingBlank} from 'antd-mobile';
import moment from 'moment'
import Me from './Me'

class Index extends React.Component {
    state = {
        data: [1,2,3,4,5],
        imgHeight: 176,
        hotarr:[],
        date:'',
        arr:[],
        top:'首页',
        num1:0,
        num2:0,
    };
    render() {
        return (
            <div className='Index'>
                <Me prop={this.props} />
                <header>
                    <div className="left">
                        <span className="iconfont icon-caidan" onClick={this.open.bind(this)}></span>
                        <h1>{this.state.top}</h1>
                    </div>
                    <div className="right">
                        <span className="iconfont icon-xiaoxi"></span>
                        <span className="iconfont icon-gengduo"></span>
                    </div>
                </header>
                <div className="banner">
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.data.map((val,ind) => (
                                <div key={ind} onClick={this.go.bind(this,val.id)}>
                                    <p className='title'>{val.title}</p>
                                    <img
                                        src={val.image}
                                        alt=""
                                        style={{width: '100%', verticalAlign: 'top'}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({imgHeight: 'auto'});
                                        }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className="content">
                    <h2 className='content_title'>今日热闻</h2>
                    <ul className='hotnews'>
                        {/*<li>*/}
                        {/*    <h3>我是断货的凯撒德哈卡联合大垃圾啊是的啦</h3>*/}
                        {/*    <a href="#"><img src=''/></a>*/}
                        {/*</li>*/}
                        {
                            this.state.hotarr.map((value,index) => {
                                return (<li key={index} onClick={this.go.bind(this,value.id)}>
                                    <h3>{value.title}</h3>
                                    <a href="#"><img src={value.images}/></a>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                {
                    this.state.arr.map((val,ind) => {
                        return <div className="content" key={ind}>
                                    <h2 className='content_title'>{moment(val.date).format('M月D日 dddd')}</h2>
                                    <ul className='hotnews'>
                                        {
                                        val.stories.map((value,index) => {
                                            return (<li key={index}  onClick={this.go.bind(this,value.id)}>
                                                <h3>{value.title}</h3>
                                                <a href="#"><img src={value.images}/></a>
                                            </li>)
                                            })
                                        }
                                    </ul>
                                </div>
                    })
                }
            </div>
        );
    };
    go(id){
        window.removeEventListener("scroll",this.handleScroll,false);
        this.props.history.push({
            pathname:'/Details',
            state:{
                id,
            }
        })
    }
    open(){
        var me = document.getElementById('me');
        me.style.display = 'block';
        document.body.style.overflow = 'hidden'
    }
    componentWillMount() {
        axios.get('/api/4/news/latest').then((res) => {
            this.setState({
                data:res.data.top_stories,
                hotarr:res.data.stories,
                date:res.data.date
            });
            var clientHeight = document.documentElement.clientHeight; //可视区域的高度
            var scrollHeight =document.documentElement.scrollHeight; //滚动内容的高度
            if(scrollHeight<=clientHeight){
                axios.get(
                    '/api/4/news/before/'+this.state.date
                ).then((res) => {
                    this.state.arr.push(res.data);
                    this.setState({
                        date:res.data.date,
                        arr:this.state.arr
                    });
                });
            }
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=()=>{
        let _this=this;
        var clientHeight = document.documentElement.clientHeight; //可视区域的高度
        let scrollTop  = document.documentElement.scrollTop;  //滚动条的滚动高度
        var scrollHeight =document.documentElement.scrollHeight; //滚动内容的高度
        let headerHeight = document.getElementsByTagName('header')[0].scrollHeight;
        if((clientHeight+scrollTop)>=scrollHeight){
            axios.get(
                '/api/4/news/before/'+_this.state.date
            ).then((res) => {

                _this.state.arr.push(res.data);
                _this.setState({
                    date:res.data.date,
                    arr:_this.state.arr
                });
            });
        }
        let h2arr = document.getElementsByClassName('content_title');
        //循环判断
        Array.from(h2arr).map(val => {
            if (val.offsetTop-headerHeight<=scrollTop) {
                _this.setState({
                    top:val.innerHTML
                })
            }
        });
        if(h2arr[0]!==undefined){
            if(h2arr[0].offsetTop-headerHeight>=scrollTop){
                _this.setState({
                    top:'首页'
                });
            }
        }




    }


}

export default Index