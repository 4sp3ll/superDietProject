// import 'firebase/firestore';
import { store } from '../index';
import { firestoreStart } from './firestoreConfig'


const addProductToDatabase = () => {

  const { firebase, keepedProducts } = store.getState()
  const uid = firebase.auth.uid
  const productInfo = keepedProducts.product.productInfo
  const quantity = keepedProducts.product.quantity

  try {
    firestoreStart
    .collection('userProducts', )
    .doc(uid)
    .set({
        productName: productInfo.product_name,
        thumbnail: productInfo.image_thumb_url,
        quantity,
        carbs: productInfo.nutriments.carbohydrates_100g,
        proteins: productInfo.nutriments.proteins_100g,
        fat: productInfo.nutriments.fat_100g,
        salt: productInfo.nutriments.salt_100g,
        stores: productInfo.stores_tags,
        date: Date.now()
  })
  } catch (err) {console.log(err)}


}

export default addProductToDatabase