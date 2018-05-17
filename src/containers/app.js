import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon, Card, Avatar, Col, Row} from 'antd';
import {bindActionCreators} from 'redux';
import * as authActions from '../redux/reduces/auth';

const {Meta} = Card;

@connect(
  state => ({auth: state.auth}),
  dispatch => bindActionCreators(authActions, dispatch)
)
class App extends Component {
  state = {
    cardList: [
      {
        img: 'http://p1.music.126.net/cCyPSxi-BE2h-SmpLBztbA==/18635622580993683.jpg?param=400y400',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Card title',
        description: 'This is the description',
        key: '18635622580993683s'
      }, {
        img: 'https://p1.music.126.net/xH2YgphAmpm3MIM2ASwTMg==/109951163104636838.jpg?' +
        'param=400y400',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'These Days',
        description: 'I know you moved ',
        key: '109951163104636838d'
      }, {
        img: 'http://p1.music.126.net/WlbH-A4FdnB6joqQlxAAwg==/109951163213837979.jpg?' +
        'param=400y400',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Call Out My Name',
        description: 'We found each other',
        key: '1099511632138379791'
      }, {
        img: 'http://p1.music.126.net/1gwOMiu3ua63rxtCYUFa_g==/109951163159246435.jpg?' +
        'param=400y400',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Lullaby Days',
        description: 'Make our hearts the only ',
        key: '186356225809936832'
      }, {
        img: 'http://p1.music.126.net/dvk8oNANHr3QO1EGLXeNTA==/18654314278872125.jpg?' +
        'param=400y400',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: 'Meant to Be',
        description: 'Baby lay on back and relax',
        key: '186543142788721253'
      }
    ]
  }
  async componentWillMount() {
    const node = await '212221211';
    const node2 = await '212221211';
    this.setState({node, node2});
  }
  componentDidMount() {
  }
  render() {
    const {cardList = [], node, node2} = this.state;
    const a = [node2].map(item => 1);
    return (
      <div className="node" style={{padding: 20}}>
        <div className="nav">
          asdaslkd啊上课就打瞌睡到家啊钐
        </div>
        <div className="selected">打算离开大陆是肯德基阿拉山口</div>
        <h1 id="header">1212121213</h1>
        <p>1</p>
        <Row gutter={16}>
          {cardList.map((item, index) => (<Col span={8} key={item.key}>
            <Card
              key={item.key}
              style={{width: 300, margin: '0 auto', marginBottom: 30}}
              cover={<img src={item.img} />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.description}
              />
            </Card>
          </Col>))}
        </Row>
      </div>
    );
  }
}


//导出组件
export default App;
