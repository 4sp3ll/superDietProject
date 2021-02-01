// import 'firebase/firestore';
import { store } from '../index';
import { firestoreStart } from './firestoreConfig'


const addProductToDatabase = () => {

  const { firebase, keepedProducts } = store.getState()
  const uid = firebase.auth.uid
  const productInfo = keepedProducts.product.productInfo
  const quantity = keepedProducts.product.quantity

  const yyyymmdd =() => {
    const x = new Date();
    const y = x.getFullYear().toString();
    let m = (x.getMonth() + 1).toString();
    let d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    const yyyymmdd = y + m + d;
    return yyyymmdd;
  }

  try {
    firestoreStart
    .collection('userProducts')
    .doc(uid)
    .collection(`${yyyymmdd()}`)
    .doc(productInfo.id)
    .set({
        productName: productInfo.product_name,
        id: productInfo.id,
        thumbnail: productInfo.image_thumb_url,
        quantity,
        carbs: productInfo.nutriments.carbohydrates_100g,
        proteins: productInfo.nutriments.proteins_100g,
        fat: productInfo.nutriments.fat_100g,
        salt: productInfo.nutriments.salt_100g,
        stores: productInfo.stores_tags,
        date: yyyymmdd()
    }, { merge: true })

  } catch (err) {console.log(err)}


}

export default addProductToDatabase