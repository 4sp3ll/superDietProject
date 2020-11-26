import React, { Component } from 'react';
import Breadcrumbs from '../dumb/BreadcrumbsPrinter'
import ButtonCategory from '../dumb/ButtonCategory'
import { store } from '../../../index'
import CategoriesView from '../dumb/CategoriesView'

interface FetchState {
    categories: any,
    chosenCategoryId: string | number,
    chosenCategoryName: string,
    pathArray: string[],
    isLeaf: boolean
}

class Main extends Component<{}, FetchState> {
    constructor(props: any) {
        super(props);
        this.setChanged = this.setChanged.bind(this)
        this.state = {
            categories: 'test2',
            chosenCategoryId: '',
            chosenCategoryName: 'test',
            isLeaf: false,
            pathArray: []
        }
    };

    // JESZCZE DO ZROBIENIA:
    // 1. Okruszki
    // 2. Funkcja sterująca girdem i wielkością przycisków
    // 3. Implementacja Reduxa i przycisk wróć
    // 4. CSS i animacje

    // 2. komponent didupdate odpala się teraz 2x
    // naciskam przycisk: zmienia się stan chosenCategory, aktywuje się didupdate, następnie zmieniają się categories, dlatego didupdate wywoływane jest 2x

    // na razie nie wykonuje się setchange i nie dzieje się nic innego
    setChanged(id: string | number, name: string, leaf: boolean) {

        //BREADCRUMBS CONTROLER - for control the last breadcrumb
        // if it's not a leaf, do instruction
        if (!this.state.isLeaf) {
            const newArray: string[] = [...this.state.pathArray]
            newArray.push(name)
            this.setState({ pathArray: newArray })
            // if it is a leaf AND chosen id is different that state, do instruction
        } else if (id != this.state.chosenCategoryId) {
            const newArray: string[] = [...this.state.pathArray]
            newArray.pop()
            newArray.push(name)
            this.setState({ pathArray: newArray })
        }
        // if it is a leaf AND id is the same that state, do nothing
    }


    updateCategories(update: any) {
        const mainStore = store.getState()
        if (JSON.stringify(update) != JSON.stringify(mainStore.categoriesStore.categories)) {
            if (!mainStore.categoriesStore.isLeaf) {
                const action = {
                    type: 'UPDATE_CATEGORIES',
                    payload: {
                        categories: update
                    }
                }
                store.dispatch(action)
            }
        }
    };

    downloadAndUpload() {
        fetch(`${process.env.REACT_APP_API}/api/categories/${this.state.chosenCategoryId}`)
            .then(results => {
                return results.json();
            }).then(data => {
                let categories = data.categories.items.map((item: { id: any; name: string; leaf: boolean; }) => {
                    return (
                        <div key={item.id}>
                            <ButtonCategory
                                id={item.id}
                                name={item.name}
                                leaf={item.leaf}
                                setChanged={this.setChanged}
                                pathArray={this.state.pathArray}
                            >
                            </ButtonCategory>
                        </div>
                    )
                })
                this.updateCategories(categories)
            })
    }

    componentDidMount() {
        this.downloadAndUpload()
        console.log('didMount')
    }

    componentDidUpdate() {
        this.downloadAndUpload()
        console.log('didUpdate')
    }

    render() {
        const mainStore = store.getState()
        return (
            <>
                <CategoriesView/>
            </>
        )
    }
}

export default Main;