import { Row, Col } from 'antd';
import { Component, CSSProperties } from 'react'; 
import { Image } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Product } from '../Admin/AdminList';
import ErrorPage from '../ErrorPage';
interface State {
    product?: Product;
}
interface Props extends RouteComponentProps {
    id: number
}
class ProductDetails extends Component <Props, State> {
  
    state: State = {
        product: undefined,
    }

    async componentDidMount() {
        const product = await getSpecificProduct(Number((this.props.match.params as any).id));
        this.setState({ product: product });
    }

    render () {
        if (!this.state.product) {
            return <ErrorPage />
        }
       
        return (
            <Row style={detailContainer}>
                <Col lg={{span: 10}} style={columnStyle}>
                    <Image src={this.state.product.imageUrl} />          
                </Col>

                <Col lg={{span: 10}} style={columnStyle}>
                    <h2 style={titleStyle}>{this.state.product.title}</h2>
                    <h4>{this.state.product.description} </h4>
                    <h2 style={price}>{this.state.product.price + ' kr'} </h2>
                </Col>
            </Row>
        ); 
    }    
}

export default withRouter(ProductDetails as any); 

const detailContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
}

const columnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10rem',
    paddingBottom: '5rem',
}

const titleStyle: CSSProperties = {
   fontSize: '2rem'
}

const price: CSSProperties = {
    fontWeight: 'bold'
}

const getSpecificProduct = async (id: number) => {
    try {
        let response = await fetch('http://localhost:3001/products/' + id);
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}