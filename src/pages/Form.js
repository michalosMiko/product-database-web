import "./Form.css"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
    const [productTitle, setProductTitle] = useState("")
    const [productValue, setProductValue] = useState(null)
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState(null)
    const [descriptionHeight, setDescriptionHeight] = useState('auto')

    const handleChange = (event) => {
      setProductDescription(event.target.value)
      setDescriptionHeight(`${event.target.scrollHeight}px`)
    }

    const submitForm = async (event) => {
        event.preventDefault()

        console.log(productTitle, productValue, productDescription, productPrice)

        console.log(typeof(productPrice));
        console.log(typeof(productValue));

        const newProduct = {
          title: productTitle, 
          quantity: parseInt(productValue),
          description: productDescription,
          price: parseInt(productPrice)
        }

        try {
          await projectFirestore.collection("products").add(newProduct)
          setProductTitle("")
          setProductValue("")
          setProductDescription("")
          setProductPrice("")
        } catch (err) {
          console.log(err.message)
        }

        
      
    }

  return <section className="form-section">
    <form onSubmit={submitForm} >
      <h1>Přidání produktů</h1>
        <input 
        className="input"
        type="text"
         placeholder="Název produktu"
         onChange={ (e) => setProductTitle(e.target.value) }
         value={productTitle}
         />

         <input type="number" 
         className="input"
         placeholder="Jednotka"
         min="1"
         onChange={ (e) => setProductValue(e.target.value)}
         value={productValue}
         />
             <textarea 
        className="input-description"
        type="text"
         placeholder="Popis produktu"
        onChange={handleChange} 
        style={{ height: descriptionHeight}}
         value={productDescription}
         />

         <input type="number"
         className="input"
         placeholder="cena"
         min="1"
         onChange={ (e) => setProductPrice(e.target.value)}
         value={productPrice}
          />
          <input type="submit" value="Přidat produkt" />
    </form>
  </section>
}

export default Form