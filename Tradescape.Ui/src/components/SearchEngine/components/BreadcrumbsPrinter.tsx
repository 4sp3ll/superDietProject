import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

interface Props {
    pathArray: string[],
    key: number | string,
    name: string
}

const Breadcrumbs: React.FC<Props> = (props) => {
    const addBreadcrumb = () => {
        const result = props.pathArray.map((name, key) =>
            <BreadcrumbItem active key={key}>{name}</BreadcrumbItem>
        );
        return result
    }

    return (
        <div>
            <Breadcrumb >
                {addBreadcrumb()}
            </Breadcrumb>
        </div>
    );
};

export default Breadcrumbs;


    // po wdrożeniu Reduxa można tutaj zrobić aktywne okruszki, tj. cofanie się po wybraniu konkretnego
    // alternatywny pomysł - do każdego okrucha jest podpięty link który wywołuje zapytanie do api z końcówką id, musiałaby się wywołać funkcja downloadAndUpload z konkretnym id