import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home ()  {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const lastProducts = products.slice(0, 8)
    useEffect(() => {
        axios.get('/products').then(({ data }) => dispatch(updateProducts(data)) );

    }, []);
  return (

    <div>
    <img src="https://www.telegraph.co.uk/content/dam/news/2022/04/29/0422_DOGS_LEAD_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=960" className="home-banner img-fluid"/>
    <div className="featured-products-container container mt-4 ">
    <h2>Latest products</h2>
    <div className="d-flex justify-content-center flex-wrap">
    {/* latest products here */}
    {lastProducts.map((product) => (
        <ProductPreview {...product} />
    ))}
    </div>
    <div>
        <Link to="/category/all" 
        style={{ 
            textAlign: 'right', 
            display: "block", 
            textDecoration: "none"}}>
                See more {">>"}
        </Link>
       </div>
    </div>
    {/*  banner */}
    <div className="sale_banner--container mt-4">
        <img src=""/>
    </div>
    <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
            {categories.map ((category) => (
                <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                <Col md={4}>
                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                    {category.name}
                </div>
 
          
                </Col>
                </LinkContainer>
            ))}
        </Row>
    </div> 
</div> 
    
  );
}

export default Home