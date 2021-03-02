import React, { Component } from 'react';
import {connect} from 'react-redux'
import { store } from '../../index'
import CategoriesView from './CategoriesView'


interface State {
    categories: any,
    chosenCategoryId: string | number,
    chosenCategoryName: string
}

interface Props {
    storeCategories: object
}

class TakeCategories extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            categories: '',
            chosenCategoryId: '',
            chosenCategoryName: ''
        }
    };

    downloadAndUpload() {
        fetch(`${process.env.REACT_APP_API}/categories.json`)
            .then(results => {
                return results.json();
            })
            .then(cat => {
                let categories = cat.tags.splice(0, 199).map((item: { id: string; name: string; products: number; }) => {
                    return (
                        item.id.toLowerCase().includes("en:") ? item : null
                    )
                })

                const action = {
                    type: 'UPDATE_CATEGORIES',
                    payload: {
                        categories
                    }
                }
                store.dispatch(action)
            })
            .catch(error => console.error('Error: ', error))
    }

    componentDidMount() {
        this.downloadAndUpload()
    }

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

export default connect(mapStateToProps)(TakeCategories);