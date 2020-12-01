import React from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap'
import styled from "styled-components";

const UlCategories = styled.ul`{
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    break-inside: avoid;
    padding: 0;
}`

const LiCategories = styled.li`{
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    list-style-type: none;
}`

const CategoriesView = (props: any) => {
    const categories = Array.from(props.categories);
    return (
        <>
            <Container>
                <Row>
                    < div className="container2 pl-5" >
                            <UlCategories>
                                {categories.map((category: any) => <LiCategories>{category}</LiCategories>)}
                            </UlCategories>
                    </div >
                </Row>
            </Container>
        </>

    )
}


const mapStateToProps = (state: any) => {
    return {
        categories: state.categoriesStore.categories
    }
}

export default connect(mapStateToProps)(CategoriesView)