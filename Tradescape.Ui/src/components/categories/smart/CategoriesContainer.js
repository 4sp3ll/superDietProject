import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from './CategoryAsync'

const CategoriesContainer = ({ categoriesData, fetchCategories }) => {
    // useEffect to hook, dzięki któremu informujemy reacta, że po każdym renderze chcemy wykonać jakąś czynność
    // Jako pierwszy parametr useeffect oczekuje funkcji którą będzie wywoływał przy każdym renderowaniu komponentu
    // drugim parametrem jest tablica obiektów o których możemy uzależnić renderowanie, jeżeli jest pusta, useefect wykona się tylko tylko podczas pierwszego renderowania
    useEffect(() => {
        fetchCategories()
    }, [])

    return categoriesData.loading ? (
        <h2>Loading text</h2>
    ) : categoriesData.error ? (
        <h2>{categoriesData.error}</h2>
    ) : (
                <>
                    <h2>User list</h2>
                    <div>
                        {categoriesData && categoriesData.categories && categoriesData.categories.map(categories => <p>{categories.name}</p>)}
                    </div>
                </>
            )
}

const mapStateToProps = state => {
    return {
        categoriesData: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)