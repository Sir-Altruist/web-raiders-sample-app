import styled from 'styled-components'

const spinner = () => {
  return (
    <App>
        <Loader />
    </App>
  )
}


const App = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 15rem auto;
background-color: rgb(0, 0, 0);
left: 0;
top: 0;
height: 100%;
position: fixed;
`
const Loader = styled.div`
  border: 2px solid #0FCC7C;
  border-radius: 50%;
  border-top: 2px solid transparent;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
export default spinner