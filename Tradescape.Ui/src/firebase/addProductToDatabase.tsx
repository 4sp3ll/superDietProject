import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './firestoreConfig'


const addProductToDatabase = () => {

  const {
    uid,
    productToSet,
    quantity
  } = useSelector((state: any) => {
    return {
        uid: state.firebase.auth.uid,
        productToSet: state.keepedProducts.product.productInfo,
        quantity: state.keepedProducts.product.quantity
    }
  })

  const { product_name, image_thumb_url, nutriments, stores_tags } = productToSet
  const db = firebase.firestore()

  try {
  db
  .collection('userProducts', )
  .doc(uid)
  .set({
      productName: product_name,
      thumbnail: image_thumb_url,
      quantity,
      carbs: nutriments.carbohydrates_100g,
      proteins: nutriments.proteins_100g,
      fat: nutriments.fat_100g,
      salt: nutriments.salt_100g,
      stores: stores_tags,
      date: Date.now()
  })
  } catch (err) {console.log(err)}

     return (
         <>

         </>
     )

}

export default addProductToDatabase