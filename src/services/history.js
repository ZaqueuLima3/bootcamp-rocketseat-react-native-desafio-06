import { NavigationActions } from 'react-navigation';

let navigator = 'Cart';

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setNavigator,
};
