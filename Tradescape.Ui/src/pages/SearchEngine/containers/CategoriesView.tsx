import { push } from 'connected-react-router'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Container, Row } from 'reactstrap'
import styled from 'styled-components'
import MainCategoriesReports from '../../MyMeals/components/MainCategoriesReports'
import ModalUniversal from '../../ui/ModalUniversal'

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

interface getParameters {
    id: string,
    checked: boolean,
    products: number
}

const CategoriesView = () => {
    const [checkedIds, setCheckedIds] = useState(new Set(["everywhere"]));
    const categories = Array.from(useSelector((state: any) => state.categoriesStore.categories))

    const handleCheck = ({ id, checked }: getParameters) => {
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
                onClick={(e: any) => handleCheck(e.target)}
                />
                <DivTitle>{category.name} {`(${category.products})`}</DivTitle>
                <span className="categories-checkmark"/>
            </CategoryLabel>
        </LiCategories>
    )

    return (
        <>
            <Container>
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
                                            onClick={(e: any) => handleCheck(e.target)}
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
                                            onClick={(e: any) => handleCheck(e.target)}
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
            </Container>
        </>
    )
}

export default CategoriesView