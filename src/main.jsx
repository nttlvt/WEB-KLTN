import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <GoogleOAuthProvider clientId="419679044900-tnquj1guot9fv3mb8rj87b7p778cndpd.apps.googleusercontent.com"> */}
      <App />
    {/* </GoogleOAuthProvider> */}

  </React.StrictMode>,
)
