import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row  } from 'react-bootstrap'
import styled from 'styled-components'
import ModalUniversal from '../../ui/ModalUniversal'
import allActions from '../../actions/index'
import CategoriesSpinner from './CategoriesSpinner'

const UlCategories = styled.ul`{
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    break-inside: avoid;
    padding: 0;
}`
const UlOtherCategories = styled.ul`{
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
    break-inside: avoid;
    padding: 0;
}`

const LiCategories = styled.li`{
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    list-style-type: none;
    height: 40px;
}`

const CategoryLabel = styled.label`{
    margin: 0;
    padding: 5px 0 0 35px;
}`

const DivTitle = styled.div`{
    display: inline-block;
    margin: auto;
}`

interface handlerParameters {
    id: string,
    checked: boolean
}

const CategoriesView = () => {
    const [checkedIds, setCheckedIds] = useState(new Set(["everywhere"]))
    const [mobileState, setMobileState] = useState(false)

    const categories = Array.from(useSelector((state: any) => state.categoriesSearchEngine.categories))
    const dispatch = useDispatch()

    const handleCheck = ({ id, checked }: handlerParameters) => {
        if (checked) {
          if (id === "everywhere") {
                checkedIds.clear()
          } else {
                checkedIds.delete("everywhere")
          }
            checkedIds.add(id)
        } else {
            checkedIds.delete(id)
        }
            setCheckedIds(new Set(checkedIds))
    }

    if (window.innerWidth < 600 && mobileState !== true) {
        setMobileState(true)
    } else if (window.innerWidth >= 600 && mobileState !== false)  {
        setMobileState(false)
    }

      const otherCategories = categories.splice(19, 150).map((category: any) =>
        <LiCategories key={category.id}>
            <CategoryLabel className="categories-container" htmlFor={category.id} >
                <input
                type="checkbox"
                id={category.id}
                name={category.name}
                data-products={category.products}
                data-special={false}
                checked={checkedIds.has(category.id)}
                onChange={(e: any) => {
                        handleCheck(e.target);
                        dispatch(allActions.chosenCategories(checkedIds))
                    }
                }
                />
                <DivTitle style={{fontSize: mobileState ? '.8rem' : ''}}>
                    {category.name} {`(${category.products})`}
                </DivTitle>
                <span className="categories-checkmark"/>
            </CategoryLabel>
        </LiCategories>
    )

    return (
        <>
            <Container style={{height: '100%'}}>
            {categories.length > 1 ?
            <>
                <Row>
                    <div className="container2 pl-5" >
                            <UlCategories>
                                <LiCategories key="everywhere">
                                        <CategoryLabel className="categories-container" htmlFor="everywhere">
                                            <input
                                            type="checkbox"
                                            id="everywhere"
                                            name="Search everywhere"
                                            data-special={true}
                                            checked={checkedIds.has("everywhere")}
                                            onChange={(e: any) => {
                                                handleCheck(e.target);
                                                dispatch(allActions.chosenCategories(checkedIds))
                                                }
                                            }
                                            />
                                            <DivTitle style={{fontSize: mobileState ? '.8rem' : ''}}>
                                                Search everywhere
                                            </DivTitle>
                                            <span className="categories-checkmark"/>
                                        </CategoryLabel>
                                </LiCategories>
                                {categories.splice(0, 19).map((category: any) =>
                                    <LiCategories key={category.id}>
                                        <CategoryLabel className="categories-container" htmlFor={category.id}>
                                            <input
                                            type="checkbox"
                                            id={category.id}
                                            name={category.name}
                                            data-products={category.products}
                                            data-special={false}
                                            checked={checkedIds.has(category.id)}
                                            onChange={(e: any) => {
                                                    handleCheck(e.target);
                                                    dispatch(allActions.chosenCategories(checkedIds))
                                                }
                                            }
                                            />
                                            <DivTitle style={{fontSize: mobileState ? '.8rem' : ''}}>
                                                {category.name} {`(${category.products})`}
                                            </DivTitle>
                                            <span className="categories-checkmark"/>
                                        </CategoryLabel>
                                    </LiCategories>)
                                }
                            </UlCategories>

                    </div>
                </Row>
                <ModalUniversal
                className="other-categories"
                name="More categories ..."
                icon={false}
                scrollable={true}
                content={<UlOtherCategories>{otherCategories}</UlOtherCategories>}
                />
            </>
            :

           <CategoriesSpinner/>
            }
            </Container>
        </>
    )
}

export default CategoriesView