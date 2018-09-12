import React, { type ComponentType } from 'react';
import type {
  NavigationScreenProp,
  NavigationParams,
  NavigationStackScreenOptions,
} from 'react-navigation';
import { isEqual } from 'lodash';

type PropsType = {
  navigation: NavigationScreenProp<NavigationParams>,
};

type ConfigType = (props: Object) => NavigationStackScreenOptions;

const withHeader = (config: ConfigType) => (
  WrappedComponent: ComponentType<*>
) => {
  class Header extends React.Component<PropsType> {
    componentWillMount() {
      const options = config(this.props);
      this.props.navigation.setParams({ ...options });
    }

    componentDidUpdate() {
      if (this.props.navigation.state.params) {
        const options = config(this.props);
        if (!isEqual(options, this.props.navigation.state.params)) {
          this.props.navigation.setParams({ ...options });
        }
      }
    }

    static navigationOptions = ({ navigation }: PropsType) =>
      navigation.state.params && { ...navigation.state.params };

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }
  return Header;
};

export default withHeader;
