import "./OneProduct.css"
import { projectFirestore } from "../firebase/config";
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

const OneProduct = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { productId } = useParams()
  console.log(productId);

  useEffect( () => {
    projectFirestore.collection("products").doc(productId).get().then( (document) => {
      console.log(document);

      if (document.exists) {
              setData(document.data())
      } else {
        setError("Nenašli jsme tento produkt")
      }
    }).catch( (err) => {
      setError(err.message)
    })
  }, [productId])

  return <section className="one-product-section">
    {error && <p>{error}</p>}
    <h1>{data.title}</h1>
    <p>{data.quantity} kusů</p>
    <p>{data.description}</p>
    <p>{data.price} KČ</p>
    <Link exact to="/all-products">Zpět na seznam produktů</Link>

  </section>
}

export default OneProduct