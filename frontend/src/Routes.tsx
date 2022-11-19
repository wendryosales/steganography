import { Route, Routes as Switch } from 'react-router-dom';
import HomePage from './containers/Home';
import UploadPage from './containers/Upload';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />}/>
      <Route path="/upload" element={<UploadPage />}/>
    </Switch>
  );
}

export default Routes;