import { Route, Routes as Switch } from 'react-router-dom';
import Encode from './containers/Encode';
import HomePage from './containers/Home';
import SaveList from './containers/SaveList';
import UploadPage from './containers/Upload';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />}/>
      <Route path="/upload" element={<UploadPage />}/>
      <Route path='/save' element={<SaveList />} />
      <Route path='/encode' element={<Encode />} />
    </Switch>
  );
}

export default Routes;