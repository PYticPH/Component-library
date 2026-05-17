import ReactDOM from "react-dom/client"
import Badge from "./components/badge/index.jsx"
import Banner from "./components/banner/index.jsx"

//Badge variant = (square | pill)
//Badge colors = (gray|red|yellow|green|blue|indigo|purple|pink)

function App() {

  return (
    <div className="components">
      <Badge>
        <Badge.Shape>
          <Badge.Text>Admin</Badge.Text>
        </Badge.Shape>
      </Badge>
      <Banner variant='success'>
        <Banner.BannerTitle>Congratulation!</Banner.BannerTitle>
        <Banner.BannerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.BannerText>
      </Banner>
      <Banner variant='warning'>
        <Banner.BannerTitle>Attention!</Banner.BannerTitle>
        <Banner.BannerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.BannerText>
      </Banner>
      <Banner variant='error'>
        <Banner.BannerTitle>There is a problem with your application</Banner.BannerTitle>
        <Banner.BannerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.BannerText>
      </Banner>
      <Banner variant='info'>
        <Banner.BannerTitle>Upadate availabe</Banner.BannerTitle>
        <Banner.BannerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.BannerText>
      </Banner>
    </div>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
