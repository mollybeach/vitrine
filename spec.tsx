import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Components from './components/Components';
import LoginView from './views/authentication/LoginView';
import MusicalsAll from './views/musicals/MusicalsAll';
import MusicalsIndividual from './views/musicals/MusicalsIndividual';
import MusicalsProductions from './views/musicals/MusicalsProductions';
import MusicalsArtists from './views/musicals/MusicalsArtists';
import MusicalsDetails from './views/musicals/MusicalsDetails';
import MusicalsRoles from './views/musicals/MusicalsRoles';
import InstitutionsAll from './views/institutions/InstitutionsAll';
import InstitutionsIndividual from './views/institutions/InstitutionsIndividual';
import InstitutionsProductions from './views/institutions/InstitutionsProductions';
import InstitutionsArtists from './views/institutions/InstitutionsArtists';
import InstitutionsProfile from './views/institutions/InstitutionsProfile';
import InstitutionsAdmin from './views/institutions/InstitutionsAdmin';
import InstitutionsBanking from './views/institutions/InstitutionsBanking';
import ProductionsAll from './views/productions/ProductionsAll';
import ProductionsIndividual from './views/productions/ProductionsIndividual';
import UsersAll from './views/users/UsersAll';
import UsersView from './views/users/UsersView';
import ProductionsDrawer from './views/productions/ProductionsDrawer';
import CreateMusicals from './views/musicals/CreateMusicals/CreateMusicals';
import CreateInstitution from './views/institutions/CreateInstitutions/CreateInstitution';
import CreateVenue from './views/venues/CreateVenues/CreateVenues';
import CreateUsers from './views/users/CreateUsers/CreateUsers';
import CreateProductions from './views/productions/CreateProductions/CreateProductions';
import VenuesAll from './views/venues/VenuesAll';
import Plays from './views/plays/Plays';
import PlaysView from './views/plays/PlaysView';

export interface AppProps {
  usersData: Array<any>;
  productionsData: Array<any>;
  musicalsData: Array<any>;
  institutionsData: Array<any>;
}
export default function App({
  usersData,
  productionsData,
  musicalsData,
  institutionsData,
}: AppProps) {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Components />} />
        <Route path="/login" element={<LoginView />} />
        <Route path={'/components'}>
          <Route index element={<Components />} />
        </Route>
                <Route path={'/plays'}>
          <Route index element={<PlaysView />} />
        </Route>
        <Route path={'/create-plays'}>
          <Route index element={<Plays />} />
        </Route>
        <Route path={'/create-musicals'}>
          <Route index element={<CreateMusicals />} />
        </Route>
        <Route path={'/create-institutions'}>
          <Route index element={<CreateInstitution />} />
        </Route>
        <Route path={'/create-venues'}>
          <Route index element={<CreateVenue />} />
        </Route>
        <Route path={'/create-users'}>
          <Route index element={<CreateUsers />} />
        </Route>
        <Route path={'/create-productions'}>
          <Route
            index
            element={<CreateProductions productionsData={productionsData} />}
          />
        </Route>
        <Route path="/musicals">
          <Route index element={<MusicalsAll musicalsData={musicalsData} />} />
          <Route
            path=":id"
            element={<MusicalsIndividual musicalsData={musicalsData} />}
          >
            <Route path="productions" element={<MusicalsProductions />} />
            <Route path="details" element={<MusicalsDetails />} />
            <Route path="artists" element={<MusicalsArtists />} />
            <Route path="roles" element={<MusicalsRoles />} />
          </Route>
        </Route>
        <Route path="/institutions">
          <Route index element={<InstitutionsAll />} />
          <Route
            path=":id"
            element={
              <InstitutionsIndividual institutionsData={institutionsData} />
            }
          >
            <Route path="productions" element={<InstitutionsProductions />} />
            <Route path="artists" element={<InstitutionsArtists />} />
            <Route path="profile" element={<InstitutionsProfile />} />
            <Route path="admin" element={<InstitutionsAdmin />} />
            <Route path="banking" element={<InstitutionsBanking />} />
          </Route>
        </Route>
        <Route path="/users">
          <Route index element={<UsersAll usersData={usersData} />} />
          <Route path=":id" element={<UsersView />} />
        </Route>
        <Route path="/productions">
          <Route
            index
            element={<ProductionsAll productionsData={productionsData} />}
          />
          <Route
            path=":id"
            element={
              <ProductionsIndividual productionsData={productionsData} />
            }
          >
            <Route path="drawer" element={<ProductionsDrawer />} />
          </Route>
        </Route>
        <Route path="/venues">
          <Route index element={<VenuesAll />} />
        </Route>
      </Routes>
    </>
  );
}