import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Test = () => {
    const [data, setData] = useState(0);

    useEffect(async () => {
        const result = await axios(
          // 'https://world.openfoodfacts.org/api/v0/product/737628064502.json',
          'https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=cereals&nutriment_0=fat&nutriment_compare_0=gte&nutriment_value_0=19&json=true',
        );

        setData(result);

    }, [])
    console.log(data)
    return (
        // <ul>
        //   {data.map(item => (
        //     <li key={item}>
        //       <a href={item}></a>
        //     </li>
        //   ))}
        // </ul>
        <p>hello</p>
      );

}

export default Test