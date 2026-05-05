import ReactDOM from "react-dom/client"
import Badge from "./components/badge/index.jsx"

//Badge variant = (square | pill)
//Badge colors = (gray|red|yellow|green|blue|indigo|purple|pink)

function App() {

  return (
    <>
      <Badge>
        <Badge.Shape>
          <Badge.Text>Admin</Badge.Text>
        </Badge.Shape>
      </Badge>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
