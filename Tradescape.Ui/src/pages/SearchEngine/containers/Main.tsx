import React, { Component } from 'react';
import {connect} from 'react-redux'
import { store } from '../../../index'
import CategoriesView from './CategoriesView'


interface State {
    categories: any,
    chosenCategoryId: string | number,
    chosenCategoryName: string
}

interface Props {
    storeCategories: object
}

class Main extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            categories: '',
            chosenCategoryId: '',
            chosenCategoryName: ''
        }
    };

    // updateCategories(update: object) {
        // if (JSON.stringify(update) != JSON.stringify(this.props.storeCategories)) {

            // tutaj raczej powinna być akcja która wędruje do reducera
                // const action = {
                //     type: 'UPDATE_CATEGORIES',
                //     payload: {
                //         categories: update
                //     }
                // }
                // store.dispatch(action)
            // }
        // }

    downloadAndUpload() { // ŹLE, BRAK OBSŁUGI BŁĘDU
        fetch(`${process.env.REACT_APP_API}/categories.json`)
            .then(results => {
                return results.json();
            })
            .then(cat => {
                let categories = cat.tags.splice(0, 199).map((item: { id: string; name: string; products: number; }) => {
                    return (
                        item.id.toLowerCase().includes("en:") ? item : null
                        // <div key={item.id}>
                        //     <ButtonCategory
                        //         id={item.id}
                        //         name={item.name}
                        //         products={item.products}
                        //         special={false}
                        //     />
                        // </div>

                    )
                })
                // this.updateCategories(categories)
                const action = {
                    type: 'UPDATE_CATEGORIES',
                    payload: {
                        categories
                    }
                }
                store.dispatch(action)
            })
    }

    componentDidMount() {
        this.downloadAndUpload()
    }

    // componentDidUpdate() {
    //     this.downloadAndUpload()
    // }

    render() {
        return (
            <>
                <CategoriesView/>
            </>
        )
    }
}

interface ReduxState {
    state: object,
    categoriesStore: any,
    categories: any
}

const mapStateToProps = (state: ReduxState) => {
    return {
      storeCategories: state.categories

    }
}

export default connect(mapStateToProps)(Main);