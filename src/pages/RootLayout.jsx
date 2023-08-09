
import { Outlet} from 'react-router-dom';

import MainNavigation from '../components/UI/MainNavigation';

function RootLayout() {
//   const token = useLoaderData();
//   const submit = useSubmit();
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main style={{marginTop: 0}}>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
