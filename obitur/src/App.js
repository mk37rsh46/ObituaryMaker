import { useState } from 'react'
import { create } from 'ipfs-http-client'
import GeneratePDF from './components/GeneratePDF'
const client = create('https://ipfs.infura.io:5001/api/v0')

function App() {
  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.io/ipfs/${added.path}`
      updateFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  return (<div>
<GeneratePDF></GeneratePDF>
  </div>
    // <div className="App">
    //   <h1>IPFS Example</h1>
    //   <input
    //     type="file"
    //     onChange={onChange}
    //   />
    //   {
    //     fileUrl && (
    //       <img src={fileUrl} width="600px" />
    //     )
    //   }
    // </div>
  );
}

export default App;