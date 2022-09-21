import './App.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GitHubCard from './GithubCard/GithubCard'

function App() {
  return (
    <div className="App pt-5" >
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  )
}

export default App
