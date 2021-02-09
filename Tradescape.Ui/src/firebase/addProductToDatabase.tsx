// import 'firebase/firestore';
import { store } from '../index';
import { firestoreStart } from './firestoreConfig'


const addProductToDatabase = () => {

  const { firebase, keepedProducts } = store.getState()
  const uid = firebase.auth.uid
  const productInfo = keepedProducts.product.productInfo
  const quantity = keepedProducts.product.quantity

  const yyyymmdd = () => {
    const x = new Date();
    const y = x.getFullYear().toString();
    let m = (x.getMonth() + 1).toString();
    let d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    const yyyymmdd = y + m + d;
    return yyyymmdd;
  }

  (console.log('quantity type: ' , typeof quantity))
  console.log('Number: ', (Number(productInfo.nutriments['energy-kcal_100g'])))

  const date = yyyymmdd()
  const product = productInfo.id

  try {
    firestoreStart
    .collection('userProducts')
    .doc(uid)
    .set({
      [date]: {
        [product]: {
        productName: productInfo.product_name,
        id: productInfo.id,
        thumbnail: productInfo.image_thumb_url,
        quantity,
        carbs: parseFloat(((parseFloat(productInfo.nutriments.carbohydrates_100g) * quantity) / 100).toFixed(1)),
        proteins: parseFloat(((parseFloat(productInfo.nutriments.proteins_100g) * quantity) / 100).toFixed(1)),
        fat: parseFloat(((parseFloat(productInfo.nutriments.fat_100g) * quantity) / 100).toFixed(1)),
        kcal: ((parseFloat(productInfo.nutriments['energy-kcal_100g']) * quantity) / 100),
        salt: parseFloat(((parseFloat(productInfo.nutriments.salt_100g) * quantity) / 100).toFixed(1)),
        stores: productInfo.stores_tags,
        date: yyyymmdd()
        }
      }
    }, { merge: true })


  } catch (err) {console.log(err)}


}

export default addProductToDatabase