import { Route, Routes as Switch } from 'react-router-dom';
import HomePage from './containers/Home';
import SaveList from './containers/SaveList';
import UploadPage from './containers/Upload';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />}/>
      <Route path="/upload" element={<UploadPage />}/>
      <Route path='/save' element={<SaveList />} />
    </Switch>
  );
}

export default Routes;