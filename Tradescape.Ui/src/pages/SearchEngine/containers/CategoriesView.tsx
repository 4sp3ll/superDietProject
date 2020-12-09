import { push } from 'connected-react-router'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Spinner  } from 'reactstrap'
import styled from 'styled-components'
import ModalUniversal from '../../ui/ModalUniversal'
import allActions from '../../../actions/index'
import CategoriesSpinner from '../components/CategoriesSpinner'
import DropdownUniversal from '../../ui/DropdownUniversal'

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



const categoriesLoading = [
    'looking something to eat',
    'hunting for boat',
    'looking to the fridge ... twice in 20 sek',
    'collecting apples',
    'even more categories'
    ]

interface handlerParameters {
    id: string,
    checked: boolean
}

const CategoriesView = () => {
    const [checkedIds, setCheckedIds] = useState(new Set(["everywhere"]))
    const [searchTerm, setSearchTerm] = useState("")

    const categories = Array.from(useSelector((state: any) => state.categoriesStore.categories))
    const dispatch = useDispatch()

    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSearchTerm(event.target.value);
      };



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

      const initial = {
          id: 'everywhere',
          name: 'Search everywhere'
      }

      useEffect(() => {
        dispatch(allActions.addCategory(initial))
      }, [])



      const otherCategories = categories.splice(19, 180).map((category: any) =>
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
                    if (e.target.checked) {
                        dispatch(allActions.addCategory(e.target))
                    } else {
                        dispatch(allActions.removeCategory(e.target))
                    }
                    }
                }
                />
                <DivTitle>{category.name} {`(${category.products})`}</DivTitle>
                <span className="categories-checkmark"/>
            </CategoryLabel>
        </LiCategories>
    )


    return (
        <>

            <Container style={{height: '100%'}}>
            <DropdownUniversal/>
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
                                                if (e.target.checked) {
                                                    dispatch(allActions.addCategory(e.target))
                                                } else {
                                                    dispatch(allActions.removeCategory(e.target))
                                                }
                                                }
                                            }
                                            />
                                            <DivTitle>Search everywhere</DivTitle>
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
                                                if (e.target.checked) {
                                                    dispatch(allActions.addCategory(e.target))
                                                } else {
                                                    dispatch(allActions.removeCategory(e.target))
                                                }
                                                }
                                            }
                                            />
                                            <DivTitle>{category.name} {`(${category.products})`}</DivTitle>
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