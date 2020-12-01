import React from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap'
import styled from "styled-components";
import ButtonCategory from './ButtonCategory'

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
    // https://stackoverflow.com/questions/52303565/how-to-uncheck-a-checkbox-when-another-one-is-checked-in-react
    return (
        <>
            <Container>
                <Row>
                    < div className="container2 pl-5" >
                            <UlCategories>
                                <ButtonCategory
                                id="specialTNO"
                                name="Search everywhere"
                                special={true}

                                />
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