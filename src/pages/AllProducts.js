import "./AllProducts.css"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const AllProducts = () => {
  const [data, setData ] = useState([])
  const [error, setError] = useState("")

  useEffect( () => {
     const unsubscribe = projectFirestore.collection("products").onSnapshot( (snapshot) => {
        console.log(snapshot.docs);

        if (snapshot.empty) {
          setError("žádné produkty k vypsání")
        } else {
          let result = [] 
          snapshot.docs.forEach( (oneProduct) => {
            result.push( {id: oneProduct.id, ...oneProduct.data()} )
          } )
          setData(result)
        }
      }, (err) => setError(err.message))

      return () => unsubscribe()
      
  }, [])



  const deleteProduct = (id) => {
    projectFirestore.collection("products").doc(id).delete()

  }

  return <section>
    {error && <p>{error}</p>}
    {data.map( (oneProduct) => {
      const {id, title, price} = oneProduct

      return <div key={id} className="one-product">
        <p>{title}</p>
        <p>{price}   KČ</p>
        <Link to={`/one-product/${id}`}>Víve informací</Link>
        <button type="button" onClick={ () => deleteProduct(id)}>Smazat produkt</button>
      </div>
    } )}
  </section>
  
}

export default AllProducts