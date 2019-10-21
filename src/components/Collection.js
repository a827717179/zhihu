import React from 'react'
import '../assets/css/Collection.css'
import userimg from "../assets/images/timg.jpg";
import Me from './Me'
import Store from '../store/index'
class Collection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='Collection'>
                <Me prop={this.props}/>
                <header>
                    <span className="iconfont icon-caidan" onClick={this.open.bind(this)}></span>
                    <h2>{Store.state.data.length} 条收藏</h2>
                </header>
                <ul>
                    {
                        Store.state.data.map(((value,index) => {
                            return <li key={index} onClick={this.go.bind(this,value.id)}>
                                <h3>{value.title}</h3>
                                <span><img src={value.img} alt=""/></span>
                            </li>
                        }))
                    }
                </ul>
            </div>
        );
    }
    open(){
        var me = document.getElementById('me');
        me.style.display = 'block';
        document.body.style.overflow = 'hidden'
    }
    go(id){
        this.props.history.push({
            pathname:'/Details',
            state:{
                id,
            }
        })
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = () => {
            return
        }
    }
}
export default Collection