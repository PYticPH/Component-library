import uploadImg from "../../assets/upload.png"

export default function Card({children}) {

  return (
    <div className="card">
      <img src={uploadImg} alt="upload logo" className="upload-img"/>
      {children}
    </div>
  )
}
